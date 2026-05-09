import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-32 text-center md:py-48">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-white to-white dark:from-gray-900 dark:via-black dark:to-black"></div>

      <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 mb-8">
        <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
        Available for new projects
      </div>

      <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-black sm:text-6xl md:text-7xl dark:text-white">
        Freshly Baked <br className="hidden sm:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-black dark:from-gray-400 dark:to-white">
          Software Solutions
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400 sm:text-xl">
        We craft clean, reliable, and scalable digital experiences. 
        From initial concept to final deployment, we build software that works as good as it looks.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
        <Link
          href="#services"
          className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-black px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          Explore Services
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <Link
          href="#contact"
          className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-3.5 text-sm font-medium text-black transition-all hover:bg-gray-50 dark:border-gray-800 dark:bg-black dark:text-white dark:hover:bg-gray-900"
        >
          <Mail className="h-4 w-4" />
          Book a Meeting
        </Link>
      </div>
    </section>
  );
}
