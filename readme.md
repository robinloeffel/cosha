# cosha
[cosha](https://cosha.surge.sh) lets you add **co**lorful **sha**dows to your images. Try it out and look for yourself—the bundle is only 1.2kb small and it couldn't be easier to set up!

```bash
yarn add cosha
```

```js
import Cosha from 'cosha';

const cosha = new Cosha({
    className: 'colorful-shadow',
    blur: '10px',
    brightness: '125%'
});

cosha.init();
```
