<p align="center">
    <img src="sample.jpg" width="450">
</p>

# cosha

[![latest version on npm](https://img.shields.io/npm/v/cosha)](https://www.npmjs.com/package/cosha) [![npm downloads a month](https://img.shields.io/npm/dm/cosha)](https://www.npmjs.com/package/cosha) [![required node version](https://img.shields.io/node/v/cosha)](https://github.com/nodejs/Release) [![dependency status](https://img.shields.io/david/robinloeffel/cosha)](https://david-dm.org/robinloeffel/cosha) [![package license](https://img.shields.io/npm/l/cosha)](license)

> Colorful shadows for your images. 🎨

[cosha](https://npm.robinloeffel.ch/cosha) lets you add **co**lorful **sha**dows to your images. Try it out and look for yourself—the bundle is only less than 1kb small and it couldn't be easier to set up!

## How

```sh
yarn add cosha
```

```html
<img src="my-dope-pic.jpg" alt="mmmhm" class="colorful-shadow"/>
```

```js
import cosha from 'cosha';
```

```js
cosha({
    className: 'colorful-shadow',
    blur: '10px',
    brightness: '125%',
    saturation: '110%',
    x: '2px',
    y: '6px'
});
```

Alternatively, if that module-bundler stuff isn't for you, you can get it directly from [`https://unpkg.com/cosha`](https://unpkg.com/cosha).

```html
<script src="https://unpkg.com/cosha"></script>
```

## Config

Everything in the config is optional. You can also use it by just calling `cosha()`. The default values are:

```js
cosha({
    className: 'cosha',
    blur: '5px',
    brightness: 1,
    saturation: 1,
    x: 0,
    y: 0
});
```

## Gotcha

It runs in every browser except Internet Explorer. This is because of missing support for [CSS `filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter#Browser_compatibility) properties. In case cosha detects it's running in a browser that doesn't have [`NodeList.prototype.forEach`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Browser_Compatibility) available, which at this point is only IE <= 11, it simply doesn't do anything.

## License

MIT
