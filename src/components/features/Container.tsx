import { CardElement } from "./Card";
import { features } from "./featuresList";

export const Container = () => {
  return (
    <section className="mt-44 space-y-5">
      <h1 className="text-center text-xl text-gray-100 font-open-sans-condensed uppercase xl:text-4xl">
        all the latest from aeg
      </h1>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-full">
        {features.map((feature, index) => (
          <CardElement key={index} {...feature} />
        ))}
        
      </div>
    </section>
  );
};
