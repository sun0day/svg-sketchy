<p align="center"><img width="214" alt="image" src="https://github.com/sun0day/svg-sketchy/assets/102238922/fabd88bb-478e-475b-bdb6-976b4ddc5d22"></p>

<p align="center"> A Node.js CLI to sketch svg.</p>

## Features

- Converting svgs to [hand-drawn](https://roughjs.com/) style.
- Compatible with [.dot](https://graphviz.org/doc/info/lang.html) and [.mmd](https://mermaid.js.org/ecosystem/integrations-create.html#file-extension) formats.

## Usage

Try it [online](https://fskpf.github.io/)

### Used as CLI

```shell
Usage: svg-sketchy [options] [svg_files]

CLI to sketch svg

Arguments:
  svg_files                   svg file paths (default: "*.svg")

Options:
  -V, --version               output the version number
  -r, --root <svg_root_dir>   svg files root directory, ignored when [svg_files] is absolute (default: cwd)
  -o, --output <svg_out_dir>  svg files output directory (default: cwd)
  -h, --help                  display help for command
```

### Used as API

