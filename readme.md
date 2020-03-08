<p align="center">
    <img src="sample.jpg" width="500">
</p>

# cosha

[![latest version on npm](https://img.shields.io/npm/v/cosha)](https://www.npmjs.com/package/cosha) [![npm downloads a month](https://img.shields.io/npm/dm/cosha)](https://www.npmjs.com/package/cosha) [![required node version](https://img.shields.io/node/v/cosha)](https://github.com/nodejs/Release) [![dependency status](https://img.shields.io/david/robinloeffel/cosha)](https://david-dm.org/robinloeffel/cosha) [![package license](https://img.shields.io/npm/l/cosha)](license)

> Colorful shadows for your images. 🎨

[cosha](https://npm.robinloeffel.ch/cosha) lets you add **co**lorful **sha**dows to your images. Try it out and look for yourself—the bundle is only less than 1kb small and it couldn't be easier to set up!

```sh
yarn add cosha
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

Everything of the config is optional. You can also initialize it by just calling `cosha()`. The default values are:

-   `className: 'cosha'`
-   `blur: '5px'`
-   `brightness: '100%'`
-   `saturation: '100%'`
-   `x: 0`
-   `y: 0`

It runs on every browser except Internet Explorer. This is because of missing support for CSS `filter` properties.
