import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "1. On-boarding & Discovery",
    description: "We start by understanding your vision, requirements, and constraints. We define the scope and establish clear communication channels.",
  },
  {
    title: "2. Architecture & Design",
    description: "Creating the blueprint. We select the right tech stack, design the database schema, and create UI/UX wireframes.",
  },
  {
    title: "3. Development Sprints",
    description: "Agile development with regular updates. You get to see the progress and provide feedback early and often.",
  },
  {
    title: "4. Testing & QA",
    description: "Rigorous testing including unit, integration, and end-to-end tests to ensure everything works flawlessly.",
  },
  {
    title: "5. Deployment & Final Product",
    description: "Smooth launch to production. We handle the CI/CD, server setup, and monitor the application post-launch.",
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary">The Roadmap</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From Idea to Final Product
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/30 before:to-transparent">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-secondary text-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm transition-colors group-hover:bg-primary group-hover:text-white group-hover:border-primary/20 z-10">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-3xl border-2 border-primary/10 bg-background shadow-sm transition-all hover:shadow-md hover:border-primary/30">
                  <h3 className="font-bold text-foreground text-lg mb-2">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
