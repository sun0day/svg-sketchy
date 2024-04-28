import {Command} from 'commander';
import ora, {Ora} from 'ora';
import chalk from 'chalk';
import pkgJson from '../package.json';
import {SVGSketcher, SVGSketcherEventName, SVGSketcherEventData, SVGSketcherConfig} from './sketcher';

interface Args {
  target?: string
  root?: string,
  output?: string
  font?: string
  rough?: string
  pencil?: boolean
  rand?: boolean
  fill?: boolean
}

const program = new Command();

function formatMessage({svg, out}:SVGSketcherEventData, failed: boolean = false) {
  return `${svg} ${chalk[failed ? 'redBright' : 'greenBright']('➜')} ${out}`;  
}

class InnerSpinner {
  spinner: Ora;
  constructor(spinner: Ora) {
    this.spinner = spinner;
  }

  info(text: string)  {
    this.spinner.stopAndPersist(
      {
        symbol: chalk.cyanBright('ℹ'),
        text
      }
    );
  }

  succeed(text: string)  {
    this.spinner.stopAndPersist(
      {
        symbol: chalk.greenBright('✔'),
        text
      }
    );
  }

  fail(text: string)  {
    this.spinner.stopAndPersist(
      {
        symbol: chalk.redBright('✖'),
        text
      }
    );
  }

  stop() {
    this.spinner.stop();
  }
}

function args2SketchConfig(args:Args) {
  const {font, rough, pencil, rand, fill, ...rest } = args;
  const sketcherConfig = rest as SVGSketcherConfig ;


  if(font) {
    sketcherConfig.fontFamily = font === 'null' ? null : font;
  }

  if(pencil) {
    sketcherConfig.pencilFilter = true;
  }

  if(rand === false) {
    sketcherConfig.randomize = false;
  }

  if(fill === false) {
    sketcherConfig.sketchPatterns = false;
  }

  if(rough) {
    sketcherConfig.roughConfig = rough.split(",").reduce((rc, kv) => {
      const [key, value] = kv.split("=");
      const num = Number(value); 
      return {
        ...rc,
        [key]: isNaN(num) ? value : num 
      };
    }, {});
  }

  return sketcherConfig;
}

program
  .name(pkgJson.name)
  .description(pkgJson.description)
  .version(pkgJson.version)
  .argument('[svg_files]', 'svg file paths.', "*.svg")
  .option('-r, --root <svg_root_dir>', 'svg files root directory, ignored when [svg_files] is absolute (default: cwd).')
  .option('-o, --output <svg_out_file>', 'svg files output directory and filename (default: "{cwd}/[name].svg"),\nuse "[name]" to keep the original svg filename.')
  .option('-f, --font <font_family>', `Font with which text elements should be drawn. Default "Comic Sans MS, cursive".\nSetting to "null" will use the text element's original font-family.`)
  .option('--rough <roughjs_config>', `Rough.js config, see https://github.com/rough-stuff/rough/wiki#options.\ne.g: "roughness=0.5,bowing=5".`)
  .option('--no-rand', `Whether to disable randomize Rough.js' fillWeight, hachureAngle and hachureGap.`)
  .option('--no-fill', `Whether to disable sketch pattern fills/strokes or just copy them to the output.`)
  .option('--pencil', `Whether to apply a pencil effect on the SVG rendering.`)
  .action(async (target, options) => {
    options.target = target;
    const runner = new SVGSketcher(args2SketchConfig(options));

    let svgCount = 0;
    let hasFailedSvg = false;
    const start = performance.now();

    const spinner = new InnerSpinner(ora('generating svg sketch...').start());

    runner.on(SVGSketcherEventName.DOWNLOAD_COMPLETED, (e) => {
      svgCount++;
      spinner.info(formatMessage(e));
    });

    runner.on(SVGSketcherEventName.DOWNLOAD_FAIL, (e) => {
      hasFailedSvg = true;
      spinner.fail(formatMessage(e, true));
    });  

    await runner.run();

    console.log('\n');
    if(hasFailedSvg) {
      spinner.fail(`please make sure that failed files have correct format and then retry sketching`);
    }
    spinner.succeed(`total ${svgCount} svgs sketched in ${Math.floor(performance.now() - start)}ms!`);
    spinner.stop();
  });

program.parseAsync();
