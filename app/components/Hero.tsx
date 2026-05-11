import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-32 text-center md:py-48 bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--color-secondary),_var(--color-background))]"></div>

      <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-8 shadow-sm">
        <span className="flex h-2 w-2 rounded-full bg-accent mr-2 animate-pulse"></span>
        Available for new projects
      </div>

      <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl">
        Freshly Baked <br className="hidden sm:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">
          Software Solutions
        </span>
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
        We craft clean, reliable, and scalable digital experiences. 
        From initial concept to final deployment, we build software that works as good as it looks.
      </p>

      <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
        <Link
          href="#services"
          className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary-hover hover:-translate-y-1"
        >
          Explore Services
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <Link
          href="#contact"
          className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border-2 border-primary/20 bg-background px-8 py-4 text-sm font-bold text-foreground transition-all hover:border-primary/50 hover:bg-secondary"
        >
          <Mail className="h-4 w-4 text-primary" />
          Book a Meeting
        </Link>
      </div>
    </section>
  );
}
