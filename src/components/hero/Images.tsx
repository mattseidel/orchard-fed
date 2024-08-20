import { images } from "./ImagesList";
import ProgressiveImage from "../common/Image";

export const ImagesBody = () => (
  <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 col-span-2 order-last xl:-order-last px-6 lg:px-10 xl:px-14">
    <div className=" xl:h-full">
      <ProgressiveImage
        hasHover
        fallbackSrc={images[0].lowRes}
        src={images[0].highRes}
        alt={images[0].alt}
        className="h-full w-full object-cover aspect-[4/5] xl:aspect-auto"
      />
    </div>
    <div className="flex xl:flex-col justify-between lg:flex-row flex-col gap-8 w-full">
      {images.slice(1, 3).map((image, index) => (
        <ProgressiveImage
          hasHover
          key={index}
          fallbackSrc={image.lowRes}
          src={image.highRes}
          alt={image.alt}
          className="w-full aspect-w-1 aspect-h-1 object-cover"
        />
      ))}
    </div>
  </section>
);
