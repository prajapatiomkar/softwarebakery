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
    <section id="services" className="py-24 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-gray-500 dark:text-gray-400">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need to build great software
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 transition-all hover:shadow-lg dark:hover:border-gray-700"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white transition-colors group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
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
