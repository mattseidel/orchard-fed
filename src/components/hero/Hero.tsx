import { Body } from "./Body";
import { ImagesBody } from "./Images";

export const Hero = () => {
  return (
    <section className="grid grid-cols-1  xl:grid-cols-3 xl:space-x-5 space-y-5 xl:space-y-0 ">
      <ImagesBody />
      <Body />
    </section>
  );
};
