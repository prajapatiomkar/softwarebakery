export default function Objective() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Core Objective</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Engineering for Scale & Simplicity
          </p>
          <p className="mt-6 text-lg leading-8 text-muted">
            Our mission is to bridge the gap between complex business requirements and elegant technical solutions. We believe in writing code that is not just functional, but maintainable, performant, and beautifully crafted.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            <div className="flex flex-col gap-y-3 border-l-4 border-primary/20 pl-6 rounded-r-2xl bg-primary/5 p-6 shadow-sm">
              <dt className="text-sm leading-6 text-muted font-medium">Projects Completed</dt>
              <dd className="order-first text-4xl font-extrabold tracking-tight text-primary">50+</dd>
            </div>
            <div className="flex flex-col gap-y-3 border-l-4 border-accent/30 pl-6 rounded-r-2xl bg-accent/5 p-6 shadow-sm">
              <dt className="text-sm leading-6 text-muted font-medium">Lines of Code Baked</dt>
              <dd className="order-first text-4xl font-extrabold tracking-tight text-accent">1M+</dd>
            </div>
            <div className="flex flex-col gap-y-3 border-l-4 border-primary/20 pl-6 rounded-r-2xl bg-primary/5 p-6 shadow-sm">
              <dt className="text-sm leading-6 text-muted font-medium">Client Satisfaction</dt>
              <dd className="order-first text-4xl font-extrabold tracking-tight text-primary">100%</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
