<p align="center">
  <img src="sample.webp" width="600">
</p>

# cosha

[![version on npm](https://badgen.net/npm/v/cosha)](https://www.npmjs.com/package/cosha)
[![weekly downloads on npm](https://badgen.net/npm/dw/cosha)](https://www.npmjs.com/package/cosha)
[![types](https://badgen.net/npm/types/cosha)](https://www.npmjs.com/package/cosha)
[![minified size](https://badgen.net/bundlephobia/minzip/cosha)](https://bundlephobia.com/package/cosha)
[![license](https://badgen.net/npm/license/cosha)](https://github.com/robinloeffel/cosha/blob/main/license.txt)

> Colorful shadows for your images. 🎨

[`cosha`](https://npm.robinloeffel.ch/cosha) lets you add **co**lorful **sha**dows to your images. Try it out and look for yourself—it really couldn't be easier to set up!

## How

```bash
npm i cosha
```

```html
<!-- on an img tag -->
<img src="palm-tree.jpg" alt="nice vibes" class="colorful-shadow"/>

<!-- on a picture tag -->
<picture class="colorful-shadow">
  <source srcset="palm-tree-1200.jpg 1200w, palm-tree-800.jpg 800w, palm-tree-400.jpg 400w" type="image/jpeg">
  <source srcset="palm-tree-1200.webp 1200w, palm-tree-800.webp 800w, palm-tree-400.webp 400w" type="image/webp">
  <img src="palm-tree-400.jpg" alt="nice vibes"/>
</picture>
```

```js
import cosha from "cosha";

cosha({
  className: "colorful-shadow",
  blur: "10px",
  brightness: "125%",
  saturation: "110%",
  x: "2px",
  y: "6px"
});
```

Alternatively, if that module bundler stuff isn't for you, you can get it directly from [`https://unpkg.com/cosha`](https://unpkg.com/cosha).

```html
<script type="module">
  import cosha from "https://unpkg.com/cosha";

  cosha();
</script>
```

## Config

Everything in the config is optional. You can also use it by just calling `cosha()`.

```js
cosha(options);
```

### `options.className`

Type: `string`<br>
Default: `"cosha"`

The class the plugin looks for. This should be on the original `img` or `picture` node(s).

### `options.blur`

Type: `number | string`<br>
Default: `"5px"`

The amount of blur to apply to the image. See the [CSS `blur` function docs](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur) on MDN for more details.

### `options.brightness`

Type: `number | string`<br>
Default: `1`

The amount of brightness to apply to the image. See the [CSS `brightness` function docs](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness) on MDN for more details.

### `options.saturation`

Type: `number | string`<br>
Default: `1`

The amount of saturation to apply to the image. See the [CSS `saturation` function docs](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/saturation) on MDN for more details.

### `options.x`

Type: `number | string`<br>
Default: `0`

The amount of horizontal translation to apply to the image. See the [CSS `translate` function docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate) on MDN for more details.

### `options.y`

Type: `number | string`<br>
Default: `0`

The amount of vertical translation to apply to the image. See the [CSS `translate` function docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate) on MDN for more details.

## Gotcha

It runs in every browser except Internet Explorer. This is because of missing support for standard [CSS `filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter#Browser_compatibility) functions.

## License

MIT
