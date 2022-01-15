interface CoshaOptions {
  /**
   * @description The amount of blur to apply to the image. See the CSS `blur` function docs on MDN for more details.
   * @default '5px'
   */
  blur?: number | string,

  /**
   * @description The amount of brightness to apply to the image. See the CSS `brightness` function docs on MDN for more details.
   * @default 1
   */
  brightness?: number | string,

  /**
   * @description The amount of saturation to apply to the image. See the CSS `saturation` function docs on MDN for more details.
   * @default 1
   */
  saturation?: number | string,

  /**
   * @description The amount of horizontal translation to apply to the image. See the CSS `translate` function docs on MDN for more details.
   * @default 0
   */
  x?: number | string,

  /**
   * @description The amount of vertical translation to apply to the image. See the CSS `translate` function docs on MDN for more details.
   * @default 0
   */
  y?: number | string
}

export default function cosha(className?: string, options?: CoshaOptions): undefined;
