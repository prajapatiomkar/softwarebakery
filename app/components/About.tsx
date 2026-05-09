import { Layers, Globe, Code2 } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-500 dark:text-gray-400">About the Founder</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6">
              Hi, I&apos;m Omkar Prajapati
            </p>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-8">
              With years of experience in full-stack development, I founded Software Bakery to help businesses build scalable, resilient, and beautiful software. I believe in a pragmatic approach to engineering—focusing on what works best for the user and the business.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 bg-gray-100 dark:bg-gray-800 p-2 rounded-lg text-black dark:text-white h-fit">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Tech Stacks</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    TypeScript, React, Next.js, Node.js, Python, PostgreSQL, AWS, Docker.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-gray-100 dark:bg-gray-800 p-2 rounded-lg text-black dark:text-white h-fit">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Industries</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Fintech, Healthcare, E-commerce, SaaS, and Education.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gray-100 dark:bg-gray-900 overflow-hidden border border-gray-200 dark:border-gray-800 flex items-center justify-center">
              {/* Placeholder for Founder Image */}
              <Code2 className="w-32 h-32 text-gray-300 dark:text-gray-700" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-black p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl hidden md:block">
              <p className="text-4xl font-bold text-black dark:text-white mb-1">5+</p>
              <p className="text-sm text-gray-500 font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
