import classNames from "classnames";
import { useEffect, useState } from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * The source URL for the fallback image, typically a low-resolution version.
   * If provided, this will be used as the initial image until the high-resolution
   * image is fully loaded.
   */
  fallbackSrc?: string;
  /**
   * Indicates if the image should have a hover effect.
   * @default false
   */
  hasHover?: boolean;
}

/**
 * @function ProgressiveImage
 * @name ProgressiveImage
 * @description React functional component that renders an image with an optional fallback source. It initially displays the fallback image (if provided) and then switches to the high-resolution image once it has fully loaded. An optional hover effect can also be applied.
 * @param {string} [fallbackSrc] - The URL of the fallback image (optional).
 * @param {boolean} [hasHover] - Indicates if the image should have a hover effect (optional).
 * @param {React.ImgHTMLAttributes<HTMLImageElement>} rest - Other props inherited from the standard HTMLImageElement.
 * @returns {JSX.Element} A picture element containing the image with the appropriate source.
 */
const ProgressiveImage = ({ fallbackSrc, hasHover, className, ...rest }: ImageProps) => {
  /**
   * `highResSrc` holds the source of the currently displayed image.
   * It initially takes the value of `fallbackSrc` if provided, otherwise it defaults to `rest.src`.
   */
  const [highResSrc, setHighResSrc] = useState(fallbackSrc ?? rest.src);

  useEffect(() => {
    if (fallbackSrc) {
      const highResImage = new Image();
      highResImage.src = rest.src as string;

      /**
       * Once the high-resolution image is loaded, update `highResSrc`
       * to display the high-resolution image.
       */

      highResImage.onload = () => {
        setHighResSrc(rest.src as string);
      };

      return () => {
        highResImage.onload = null;
      };
    }
  }, [fallbackSrc, rest.src]);

  const cn = classNames(className, {
    "transition duration-300 lg:hover:scale-105 hover:shadow-xl hover:shadow-gray-800 ": hasHover,
  })

  return (
    <picture>
      <source srcSet={highResSrc} key={highResSrc}  className=""/>
      <source srcSet={fallbackSrc} media="(max-width: 600px)" className="scale-" />
      <img
        className={cn}
        {...rest}
        src={highResSrc}
        alt={rest.alt ?? "Image description"}
        loading="lazy"
        width={rest.width || "auto"}
        height={rest.height || "auto"}
      />
    </picture>
  );
};

export default ProgressiveImage;
