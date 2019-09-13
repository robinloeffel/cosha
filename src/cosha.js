export default class Cosha {
  constructor({
    className = 'cosha',
    blur = '5px',
    brightness = '100%',
    saturate = '100%',
    offsetX = '0px',
    offsetY = '0px'
  } = {}) {
    this.className = className;
    this.blur = blur;
    this.brightness = brightness;
    this.saturate = saturate;
    this.offsetX = offsetX;
    this.offsetY = offsetY
    this.nodes;
  }

  init() {
    this.nodes = document.getElementsByClassName(this.className);

    this.addStyle();
    this.addClone();
  }

  addStyle() {
    document.head.insertAdjacentHTML('beforeend', `
      <style>
        .${this.className}__wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .${this.className}__clone {
          filter: blur(${this.blur}) brightness(${this.brightness}) saturate(${this.saturate});
          position: absolute;
          z-index: -1;
          transform: translate3d(${this.offsetX}, ${this.offsetY}, 0);
        }
      </style>
    `);
  }

  addClone() {
    for (let i = 0; i < this.nodes.length; i++) {
      const image = this.nodes[i];
      const clone = image.cloneNode();
      const wrapper = document.createElement('div');

      wrapper.classList.add(this.className + '__wrapper');
      clone.classList.add(this.className + '__clone');
      clone.classList.remove(this.className);

      image.parentNode.insertBefore(wrapper, image);
      wrapper.appendChild(image);
      wrapper.appendChild(clone);
    }
  }
};
