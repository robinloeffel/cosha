
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var cosha = (function () {
  'use strict';

  var index = (className = 'cosha', { blur = '5px', brightness = 1, saturation = 1, x = 0, y = 0 } = {}) => {
      const images = document.querySelectorAll(`.${className}`);
      const styles = document.createElement('style');
      styles.textContent = `
    .${className}-wrapper {
      position: relative;
      display: grid;
      place-content: center;
    }

    .${className}-clone {
      position: absolute;
      z-index: -1;
      translate: ${x} ${y} 0;
      filter: blur(${blur}) brightness(${brightness}) saturate(${saturation});
    }
  `;
      document.head.append(styles);
      images.forEach(original => {
          const cloned = original.cloneNode(true);
          const wrapper = document.createElement('div');
          cloned.classList.remove(className);
          cloned.classList.add(`${className}-clone`);
          wrapper.classList.add(`${className}-wrapper`);
          wrapper.append(original.cloneNode(true), cloned);
          wrapper.querySelectorAll('img')[1].alt = '';
          original.replaceWith(wrapper);
      });
  };

  return index;

})();
//# sourceMappingURL=cosha.js.map
