import { Layers, Globe, Code2 } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-base font-semibold leading-7 text-primary">About the Founder</h2>
            <p className="mt-2 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-6">
              Hi, I&apos;m Omkar Prajapati
            </p>
            <p className="text-lg leading-relaxed text-muted mb-8">
              With years of experience in full-stack development, I founded Software Bakery to help businesses build scalable, resilient, and beautiful software. I believe in a pragmatic approach to engineering—focusing on what works best for the user and the business.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 bg-secondary p-3 rounded-2xl text-primary h-fit shadow-sm">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Tech Stacks</h4>
                  <p className="text-muted text-sm mt-1 font-medium leading-relaxed">
                    TypeScript, React, Next.js, Node.js, Python, PostgreSQL, AWS, Docker.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-secondary p-3 rounded-2xl text-primary h-fit shadow-sm">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Industries</h4>
                  <p className="text-muted text-sm mt-1 font-medium leading-relaxed">
                    Fintech, Healthcare, E-commerce, SaaS, and Education.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-[3rem] bg-secondary/50 overflow-hidden border-4 border-white shadow-xl flex items-center justify-center">
              {/* Placeholder for Founder Image */}
              <Code2 className="w-32 h-32 text-primary/30" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-3xl border-2 border-primary/10 shadow-xl hidden md:block">
              <p className="text-5xl font-black text-primary mb-1">5+</p>
              <p className="text-sm text-muted font-bold tracking-wide uppercase">Years Exp.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
