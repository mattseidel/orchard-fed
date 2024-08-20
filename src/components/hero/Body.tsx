export const Body = () => {
  return (
    <section className="flex flex-col mb-12">
      <article className="lg:mb-10">
        <header>
          <h1 className="text-lg text-gray-100 lg:text-2xl mb-4 font-open-sans-condensed font-light text-center lg:text-left">
            ANSWER YOUR BODY'S NEEDS
          </h1>
          <hr className="text-gray-100" />
        </header>
        <br />
        <p className="text-gray-400 text-sm lg:text-lg text-justify lg:text-left">
          The way ingredients are sourced affects how we nourish our bodies.
          Author Mark Schatzker believes that our bodies naturally develop an
          appetite for the foods and nutrients needed to stay healthy. However,
          artificial flavors can interfere with this process. By focusing on
          high-quality ingredients and being mindful, you can let your appetite
          guide you to consume according to your body's needs.
        </p>
      </article>
      <br />

      <aside className="space-y-1">
        <h2 className="text-lg text-red-700 lg:text-lg font-open-sans-semi-condensed">BE MINDFUL</h2>
        <p className="text-gray-200 lg:text-lg">
          Sourcing local or organic food is a good way to start being more
          mindful about what you're cooking and eating
        </p>
      </aside>
    </section>
  );
};
