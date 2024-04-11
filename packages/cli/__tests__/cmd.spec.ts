import {vi, describe, it, expect, afterEach, beforeEach} from 'vitest';

describe('test cmd', () => {
  const cmdFile = '../src/cmd';
  let mockAction: (target?: string, options?: any) => Promise<void>;
  const mockSpinner = {
    info: vi.fn(),
    fail: vi.fn(),
    succeed: vi.fn(),
    stop: vi.fn(),
  };
  const mockOra = vi.fn().mockReturnValue({
    start: () => mockSpinner
  });

  async function testCreating(num: number) {
    await Promise.all(Object.keys(global.EXT).map(async type => {
      await global.initTmp();
      const readSvgs =  await global.createSvgs(num, type);
      await import(cmdFile);
      mockAction(`*${global.EXT[type]}`, {root: global.TMP});
      await vi.waitFor(async () => {
        const svgs = await readSvgs(num);
        expect(svgs.length).toBe(num);
        expect(svgs[0]).not.toBe(global.SVG);
      }, {timeout: 5000});
    }));
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

  it('sketch single svg, dot', async () => {
    await testCreating(1); 
  });

  it('sketch multiple svg, dot', async () => {
    await testCreating(20);
  });
});
