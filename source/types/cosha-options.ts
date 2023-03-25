export default interface CoshaOptions {
  /**
   * the class name of the image cosha will look for
   */
  className?: string,

  /**
   * argument to forward to the css blur filter function
   *
   * https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur
   */
  blur?: string | number,

  /**
   * argument to forward to the css brightness filter function
   *
   * https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness
   */
  brightness?: string | number,

  /**
   * argument to forward to the css saturation filter function
   *
   * https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/saturation
   */
  saturation?: string | number,

  /**
   * argument to forward to the css translate property, on the x position
   *
   * https://developer.mozilla.org/en-US/docs/Web/CSS/translate
   */
  x?: string | number,

  /**
   * argument to forward to the css translate property, on the y position
   *
   * https://developer.mozilla.org/en-US/docs/Web/CSS/translate
   */
  y?: string | number
}
