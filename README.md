<p align="center"><img width="240" alt="image" src="https://github.com/sun0day/svg-sketchy/assets/102238922/fabd88bb-478e-475b-bdb6-976b4ddc5d22"></p>

<p align="center"> A Node.js CLI to sketch svg.</p>

## Features [WIP]

- :pencil2: Converting svgs to [hand-drawn](https://roughjs.com/) style.
- :four_leaf_clover: Compatible with [.dot](https://graphviz.org/doc/info/lang.html) and [.mmd](https://mermaid.js.org/ecosystem/integrations-create.html#file-extension) formats.

:point_right: Try it [online](https://fskpf.github.io/)

## Install

```shell
$ npm i -g svg-sketchy
```

## Usage

### Used as CLI

#### sketch `.svg`

```shell
$ sket hello_world.svg # sketch single svg and override it
$ sket hello_world.svg -r /home  # sketch svg in another directory
$ sket hello_*.svg # sketch multiple svgs which paths start with "hello_" and override them
$ sket world.svg -o /home/hello_[name].svg # sketch svg and output it to a new directory with a new name "hello_world.svg"
```

#### sketch `.dot`

Sketching `.dot` files is not much different than sketching `.svg`. Suppose we have a file named `hello_world.dot`:

```shell
digraph G {Hello->World}
```

After `sket hello_world.dot`, there would be a new svg `hello_world.svg` like:

![image](https://github.com/sun0day/svg-sketchy/assets/102238922/acf78da2-3ac8-485d-8fcd-bb3fabe9b09f)

#### customize sketch style

Try it [online](https://fskpf.github.io/) to see how different sketch configs affect the final svg output.

#### CLI options

|option|default|description|
|----|----|----|
-r, --root <svg_root_dir> | cwd |Svg files root directory, ignored when [svg_files] is absolute.
-o, --output <svg_out_file> |"{cwd}/[name].svg"| Svg files output directory and filename, use **"[name]"** to keep the original svg filename.
-f, --font <font_family>    |"Comic Sans MS, cursive"| Font with which text elements should be drawn, setting to **"null"** will use the text element's original font family.
--rough <roughjs_config>    |-| Rough.js config, see [roughjs options](https://github.com/rough-stuff/rough/wiki#options). e.g: "roughness=0.5,bowing=5".
--no-rand                   |false| Whether to disable randomize Rough.js' **fillWeight**, **hachureAngle** and **hachureGap**.
--no-fill                   |false|Whether to disable sketch pattern **fills/strokes** or just copy them to the output.
--pencil                    |false|Whether to apply a **pencil effect** on the SVG rendering.

### Used as API

You can also use `svg-sketchy` in Node.js env.

```js
import { SVGSketcher } from 'svg-sketchy'

// create a SVGSketcher instance
const sketcher = new SVGSketcher({
  target: 'world.svg',
  root: './', // <--> -r, --root
  output: '/home/hello_[name].svg', // <--> -o, --output
  fontFamily: 'arial', // <--> -f, --font
  roughConfig: { // <--> --rough
    roughness: 0.5,
    bowing: 5
  },
  randomize: false, // <--> --no-rand
  sketchPatterns: false, // <--> --no-fill
  pencilFilter: true, // <--> --pencil
})

// start transforming
sketcher.run()
```
