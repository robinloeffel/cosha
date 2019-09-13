# cosha
[cosha](https://cosha.surge.sh) lets you add **co**lorful **sha**dows to your images. Try it out and look for yourself—the bundle is only 1kb small and it couldn't be easier to set up!

![](sample.jpg)

```bash
yarn add cosha
```

```js
import Cosha from 'cosha';

const cosha = new Cosha({
    className: 'colorful-shadow',
    blur: '10px',
    brightness: '125%',
    saturation: '110%',
    offsetX: '2px',
    offsetY: '6px'
});

cosha.init();
```

Everything of the config is optional. You can also initialize it by just writing `const shadows = new Cosha();`. The default values are:
* `className: 'cosha'`
* `blur: '5px'`
* `brightness: '100%'`
* `saturation: '100%'`
* `offsetX: '0px'`
* `offsetY: '0px'`

It runs on every browser except Internet Explorer. This is because of missing support for CSS `filter` properties.
