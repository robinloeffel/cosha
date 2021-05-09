<p align="center">
  <img src="sample.webp" width="600">
</p>

# cosha

[![latest version on npm](https://img.shields.io/npm/v/cosha)](https://www.npmjs.com/package/cosha)
[![npm downloads a month](https://img.shields.io/npm/dm/cosha)](https://www.npmjs.com/package/cosha)
[![dependency status](https://img.shields.io/david/robinloeffel/cosha)](https://david-dm.org/robinloeffel/cosha)
[![package license](https://img.shields.io/npm/l/cosha)](license)

> Colorful shadows for your images. 🎨

[`cosha`](https://npm.robinloeffel.ch/cosha) lets you add **co**lorful **sha**dows to your images. Try it out and look for yourself—the bundle is less than 1kb heavy and it really couldn't be easier to set up!

## How

```bash
yarn add cosha
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
import cosha from 'cosha';

cosha({
  className: 'colorful-shadow',
  blur: '10px',
  brightness: '125%',
  saturation: '110%',
  x: '2px',
  y: '6px'
});
```

Alternatively, if that module bundler stuff isn't for you, you can get it directly from [`https://unpkg.com/cosha`](https://unpkg.com/cosha).

```html
<script src="https://unpkg.com/cosha"></script>
<script>
  cosha({ className: 'colorful-shadow' });
</script>
```

## Config

Everything in the config is optional. You can also use it by just calling `cosha()`.

### `className`

Type: `string`<br>
Default: `'cosha'`

The class the plugin looks for. This should be on the original `img` or `picture` node(s).

### `blur`

Type: `number` or `string`<br>
Default: `'5px'`

The amount of blur to apply to the image. See the [CSS `blur` function docs](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur) on MDN for more details.

### `brightness`

Type: `number` or `string`<br>
Default: `1`

The amount of brightness to apply to the image. See the [CSS `brightness` function docs](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness) on MDN for more details.

### `saturation`

Type: `number` or `string`<br>
Default: `1`

The amount of saturation to apply to the image. See the [CSS `saturation` function docs](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/saturation) on MDN for more details.

### `x`

Type: `number` or `string`<br>
Default: `0`

The amount of horizontal translation to apply to the image. See the [CSS `translate` function docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate) on MDN for more details.

### `y`

Type: `number` or `string`<br>
Default: `0`

The amount of vertical translation to apply to the image. See the [CSS `translate` function docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate) on MDN for more details.

## Gotcha

It runs in every browser except Internet Explorer. This is because of missing support for [CSS `filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter#Browser_compatibility) properties. In case cosha detects it's running in a browser that doesn't have [`NodeList.prototype.forEach`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Browser_Compatibility) available, which at this point is only IE &lt;= 11, it simply doesn't do anything.

## License

MIT
