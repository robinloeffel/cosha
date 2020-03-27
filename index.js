const cosha = ({
    className = 'cosha',
    blur = '5px',
    brightness = 1,
    saturation = 1,
    y = 0,
    x = 0
} = {}) => {
    if (NodeList.prototype.forEach) {
        const images = document.querySelectorAll(`.${className}`);
        const styles = document.createElement('style');

        styles.textContent = `
            .${className}-wrapper {
                position: relative;
                display: flex;
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
        document.head.appendChild(styles);

        images.forEach(image => {
            const isImg = image.localName === 'img';
            const clone = image.cloneNode(!isImg);
            const wrapper = document.createElement('div');

            wrapper.classList.add(`${className}-wrapper`);
            clone.classList.add(`${className}-clone`);
            clone.classList.remove(className);
            isImg ? clone.alt = '' : clone.querySelector('img').alt = '';

            image.parentNode.insertBefore(wrapper, image);
            wrapper.appendChild(image);
            wrapper.appendChild(clone);
        });
    }
};

export default cosha;
