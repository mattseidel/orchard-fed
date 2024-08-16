import { images } from "./ImagesList";
import ProgressiveImage from "../common/Image";

export const ImagesBody = () => (
  <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 col-span-2 order-last xl:-order-last">
    <div className="h-[550px] xl:h-full">
      <ProgressiveImage
        fallbackSrc={images[0].lowRes}
        src={images[0].highRes}
        alt={images[0].alt}
        className="h-full w-full"
      />
    </div>
    <div className="flex xl:flex-col justify-between lg:flex-row flex-col gap-3 w-full">
      {images.slice(1, 3).map((image, index) => (
        <ProgressiveImage
          key={index}
          fallbackSrc={image.lowRes}
          src={image.highRes}
          alt={image.alt}
          className="w-full"
        />
      ))}
    </div>
  </section>
);