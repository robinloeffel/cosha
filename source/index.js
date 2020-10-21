const cosha = ({
  className = 'cosha',
  blur = '5px',
  brightness = 1,
  saturation = 1,
  x = 0,
  y = 0
} = {}) => {
  if (NodeList.prototype.forEach) {
    const images = document.querySelectorAll(`.${className}`);
    const styles = document.createElement('style');

    styles.textContent = `
      .${className}-wrapper {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .${className}-clone {
        filter: blur(${blur}) brightness(${brightness}) saturate(${saturation});
        position: absolute;
        width: 100%;
        z-index: -1;
        transform: translate3d(${x}, ${y}, 0);
      }
    `;
    document.head.append(styles);

    images.forEach(image => {
      const clone = image.cloneNode(true);
      const wrapper = document.createElement('div');

      wrapper.classList.add(`${className}-wrapper`);
      clone.classList.add(`${className}-clone`);
      clone.classList.remove(className);

      image.replaceWith(wrapper);
      wrapper.append(image, clone);
      wrapper.querySelectorAll('img')[1].alt = '';
    });
  }
};

export default cosha;
