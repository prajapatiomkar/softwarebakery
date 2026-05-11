import { Code, Layout, Server, Smartphone, Database, Cloud } from "lucide-react";

const services = [
  {
    title: "Web App Development",
    description: "Responsive, dynamic, and fast web applications built with modern frameworks like React and Next.js.",
    icon: Layout,
  },
  {
    title: "Backend Engineering",
    description: "Robust and scalable server-side architectures, API design, and microservices.",
    icon: Server,
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile applications that deliver native-like experiences.",
    icon: Smartphone,
  },
  {
    title: "Database Design",
    description: "Optimized database schemas, data modeling, and performance tuning for high-traffic apps.",
    icon: Database,
  },
  {
    title: "Cloud Infrastructure",
    description: "Deployment, CI/CD pipelines, and cloud architecture on AWS, Vercel, or GCP.",
    icon: Cloud,
  },
  {
    title: "Technical Consulting",
    description: "Code audits, architecture reviews, and technical guidance for your engineering teams.",
    icon: Code,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to build great software
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative rounded-3xl border-2 border-primary/10 bg-secondary/30 p-8 transition-all hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/30"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted font-medium">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
