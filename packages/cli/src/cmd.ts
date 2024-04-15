import {Command} from 'commander';
import ora, {Ora} from 'ora';
import chalk from 'chalk';
import pkgJson from '../package.json';
import {SVGSketcher, SVGSketcherEventName, SVGSketcherEventParams} from './sketcher';

const program = new Command();

function formatMessage({svg, out}:SVGSketcherEventParams, failed: boolean = false) {
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

program
  .name(pkgJson.name)
  .description(pkgJson.description)
  .version(pkgJson.version)
  .argument('[svg_files]', 'svg file paths', "*.svg")
  .option('-r, --root <svg_root_dir>', 'svg files root directory, ignored when [svg_files] is absolute (default: cwd)')
  .option('-o, --output <svg_out_file>', 'svg files output directory and filename (default: "{cwd}/[name].svg"),\nuse "[name]" to keep the original svg filename')
  .action(async (target, options) => {
    options.target = target;
    const runner = new SVGSketcher(options);

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
