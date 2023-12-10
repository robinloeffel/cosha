type Image = HTMLImageElement | HTMLPictureElement;

interface Options {
	className?: string;
	blur?: string | number;
	brightness?: string | number;
	saturation?: string | number;
	x?: string | number;
	y?: string | number;
}

export default ({
	className = "cosha",
	blur = "5px",
	brightness = 1,
	saturation = 1,
	x = 0,
	y = 0
}: Options = {}) => {
	const images = document.querySelectorAll<Image>(`.${className}`);
	const styles = document.createElement("style");

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
	document.body.append(styles);

	for (const original of images) {
		const cloned = original.cloneNode(true) as typeof original;
		const wrapper = document.createElement("div");

		cloned.classList.remove(className);
		cloned.classList.add(`${className}-clone`);

		wrapper.classList.add(`${className}-wrapper`);
		wrapper.append(original.cloneNode(true), cloned);
		wrapper.querySelectorAll("img").item(1).alt = "";

		original.replaceWith(wrapper);
	}
};
