import EventEmitter from 'node:events';
import {vi, describe, it, expect, afterEach, beforeEach} from 'vitest';

// avoid "Possible EventEmitter memory leak detected. [num] beforeExit listeners added to [process]"
EventEmitter.setMaxListeners(50);

describe('test cmd', () => {
  console.log = vi.fn();
  const cmdFile = '../src/cmd';
  let mockAction: (target?: string, options?: any) => Promise<void>;
  const mockSpinner = {
    stopAndPersist: vi.fn(),
    stop: vi.fn(),
    start: vi.fn(),
  };
  const mockOra = vi.fn().mockReturnValue({
    start: () => mockSpinner
  });

  async function testSketch(num: number) {
    for(const type of Object.keys(global.EXT)){
      await global.reset();
      await global.initTmp();
      const readSvgs =  await global.createSvgs(num, type);
      await import(cmdFile);
      await mockAction(`*${global.EXT[type]}`, {root: global.TMP});
      await vi.waitFor(async () => {
        const svgs = await readSvgs();
        expect(mockSpinner.stopAndPersist).toHaveBeenCalled();
        expect(mockSpinner.stop).toHaveBeenCalled();
        svgs.forEach(svg => {
          expect(svg).not.toBe(global.SVG);
          expect(svg).toContain('<svg');
        });
        expect(svgs.length).toBe(num);
      }, {timeout: 5000});
    }
  }

  beforeEach(async () => {
    await globalThis.initTmp();

    vi.doMock('commander', async (importOriginal) => {
      const mod:any = await importOriginal();
      return {
        Command: class extends mod.Command {
          constructor() {
            super();
          }
          
          action(cb: typeof mockAction) {
            mockAction = cb;
          }

          parseAsync() {}
        }
      };
    });

    vi.doMock('ora', () => {
      return {
        __esModule: true,
        default: mockOra
      };
    });
  });

  afterEach(() => {
    global.reset();
  });

  it('handle target files not found', async () => {
    const notFound = 'No .svg, .dot files found'; 
    // root not exists
    await import(cmdFile);
   
    await expect(() => mockAction(undefined, {root: 'x'})).rejects.toThrowError(notFound);

    // file not exists
    global.reset();
    await expect(() => mockAction('x.svg', {})).rejects.toThrowError(notFound);

    // invalid file ext
    global.reset();
    await expect(() => mockAction('x.txt', {})).rejects.toThrowError(notFound);
  });

  it('sketch single svg, dot', {retry: 2}, async () => {
    await testSketch(1); 
  });

  it('sketch multiple svg, dot', {retry: 2}, async () => {
    await testSketch(30);
  });

  it('customize sketch config', async () => {
    const mockConstructor = vi.fn();
    vi.doMock("../src/sketcher", async (importOriginal) => ({
      ...(await importOriginal()),
      SVGSketcher: class extends EventEmitter {
        constructor({root,target, output, ...config}: any) {
          super();
          mockConstructor(`window.SKETCH_CONFIG=${JSON.stringify(config)}`);
        }

        run() {}
      }}));

    await global.createSvgs(1);
    await import(cmdFile);
    await mockAction(`*${global.EXT.svg}`, {root: global.TMP});
    expect(mockConstructor).toHaveBeenCalledWith(expect.stringContaining("window.SKETCH_CONFIG={}"));

    mockConstructor.mockClear();

    await global.createSvgs(1);
    await import(cmdFile);
    await mockAction(`*${global.EXT.svg}`, {root: global.TMP, font: "null"});

    expect(mockConstructor).toHaveBeenCalledWith(expect.stringContaining(`window.SKETCH_CONFIG={"fontFamily":null}`));

    mockConstructor.mockClear();

    await global.createSvgs(1);
    await import(cmdFile);
    await mockAction(`*${global.EXT.svg}`, {root: global.TMP, font: "arial"});

    expect(mockConstructor).toHaveBeenCalledWith(expect.stringContaining(`window.SKETCH_CONFIG={"fontFamily":"arial"}`));

    mockConstructor.mockClear();

    await global.createSvgs(1);
    await import(cmdFile);
    await mockAction(`*${global.EXT.svg}`, {root: global.TMP, rand: false});

    expect(mockConstructor).toHaveBeenCalledWith(expect.stringContaining(`window.SKETCH_CONFIG={"randomize":false}`));

    mockConstructor.mockClear();

    await global.createSvgs(1);
    await import(cmdFile);
    await mockAction(`*${global.EXT.svg}`, {root: global.TMP, rand: true});

    expect(mockConstructor).toHaveBeenCalledWith(expect.stringContaining(`window.SKETCH_CONFIG={}`));

    mockConstructor.mockClear();

    await global.createSvgs(1);
    await import(cmdFile);
    await mockAction(`*${global.EXT.svg}`, {root: global.TMP, fill: false});

    expect(mockConstructor).toHaveBeenCalledWith(expect.stringContaining(`window.SKETCH_CONFIG={"sketchPatterns":false}`));

    mockConstructor.mockClear();

    await global.createSvgs(1);
    await import(cmdFile);
    await mockAction(`*${global.EXT.svg}`, {root: global.TMP, fill: true});

    expect(mockConstructor).toHaveBeenCalledWith(expect.stringContaining(`window.SKETCH_CONFIG={}`));

    mockConstructor.mockClear();

    await global.createSvgs(1);
    await import(cmdFile);
    await mockAction(`*${global.EXT.svg}`, {root: global.TMP, pencil: true});

    expect(mockConstructor).toHaveBeenCalledWith(expect.stringContaining(`window.SKETCH_CONFIG={"pencilFilter":true}`));

    mockConstructor.mockClear();

    await global.createSvgs(1);
    await import(cmdFile);
    await mockAction(`*${global.EXT.svg}`, {root: global.TMP, pencil: false});

    expect(mockConstructor).toHaveBeenCalledWith(expect.stringContaining(`window.SKETCH_CONFIG={}`));

    mockConstructor.mockClear();

    await global.createSvgs(1);
    await import(cmdFile);
    await mockAction(`*${global.EXT.svg}`, {root: global.TMP, rough: "roughness=0.5,bowing=5,fill=#fff"});

    expect(mockConstructor).toHaveBeenCalledWith(expect.stringContaining(`window.SKETCH_CONFIG={"roughConfig":{"roughness":0.5,"bowing":5,"fill":"#fff"}}`));
  });
});
