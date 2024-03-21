import {Command} from 'commander';
import ora from 'ora';
import pkgJson from '../package.json';
import {Runner, RunnerEventName} from './runner';

const program = new Command();

program
  .name(pkgJson.name)
  .description(pkgJson.description)
  .version(pkgJson.version)
  .argument('[svg_files]', 'svg file paths', "*.svg")
  .option('-r, --root <svg_root_dir>', 'svg files root directory, ignored when [svg_files] is absolute (default: cwd)')
  .option('-o, --output <svg_out_dir>', 'svg files output directory (default: cwd)')
  .action((target, options) => {
    options.target = target;
    const runner = new Runner(options);
    (async () => {
      let svgCount = 0;
      const start = performance.now();
      const spinner = ora('generating svg sketch...').start();

      runner.on(RunnerEventName.DOWNLOAD_COMPLETED, ({svg, out}) => {
        svgCount++;
        spinner.info(`${svg}  -> ${out}`);
      });

      runner.on(RunnerEventName.DOWNLOAD_FAIL, svg => {
        spinner.fail(`${svg} fail to sketch`);
      });  

      await  runner.run();
      
      console.log('\n');
      spinner.succeed(`total ${svgCount} svgs sketched in ${Math.floor(performance.now() - start)}ms!`);
      spinner.stop();
    })();
  });

program.parse();

