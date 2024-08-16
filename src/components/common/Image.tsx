import { useEffect, useState } from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * The source URL for the fallback image, typically a low-resolution version.
   * If provided, this will be used as the initial image until the high-resolution
   * image is fully loaded.
   */
  fallbackSrc?: string;
}

/**
 * `ProgressiveImage` is a React functional component that renders an image with an optional fallback source.
 * It initially displays the fallback image (if provided) and then switches to the high-resolution image
 * once it has fully loaded.
 *
 * @param fallbackSrc - The URL of the fallback image (optional).
 * @param rest - Other props inherited from the standard HTMLImageElement.
 *
 * @returns A picture element containing the image with the appropriate source.
 */
const ProgressiveImage = ({ fallbackSrc, ...rest }: ImageProps) => {
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

  return (
    <picture>
      <source srcSet={highResSrc} key={highResSrc} />
      <source srcSet={fallbackSrc} media="(max-width: 600px)" />
      <img
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
