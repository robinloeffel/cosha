const cosha = ({
    className = 'cosha',
    blur = '5px',
    brightness = 1,
    saturation = 1,
    y = 0,
    x = 0
} = {}) => {
    const images = document.getElementsByClassName(className);

    if (!HTMLCollection.prototype.forEach) {
        HTMLCollection.prototype.forEach = Array.prototype.forEach;
    }

    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .${className}-wrapper {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .${className}-clone {
                filter: blur(${blur}) brightness(${brightness}) saturate(${saturation});
                position: absolute;
                z-index: -1;
                transform: translate3d(${x}, ${y}, 0);
            }
        </style>
    `);

    images.forEach(image => {
        const clone = image.cloneNode();
        const wrapper = document.createElement('div');

        wrapper.classList.add(`${className}-wrapper`);
        clone.classList.add(`${className}-clone`);
        clone.classList.remove(className);

        image.parentNode.insertBefore(wrapper, image);
        wrapper.appendChild(image);
        wrapper.appendChild(clone);
    });
};

export default cosha;
