import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "Why Next.js is the future of web development",
    excerpt: "Exploring the benefits of server-side rendering, static site generation, and the new App Router.",
    date: "May 1, 2026",
    readTime: "5 min read",
  },
  {
    title: "Building scalable architectures in AWS",
    excerpt: "A deep dive into microservices, serverless functions, and database choices for high-traffic apps.",
    date: "April 15, 2026",
    readTime: "8 min read",
  },
  {
    title: "The importance of UI/UX in Enterprise Software",
    excerpt: "How good design can reduce training time, lower error rates, and improve employee satisfaction.",
    date: "March 22, 2026",
    readTime: "4 min read",
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-base font-semibold leading-7 text-primary">Our Thoughts</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Latest from the Blog
            </p>
          </div>
          <Link href="#blogs" className="hidden sm:flex items-center gap-1 text-sm font-bold text-primary hover:text-primary-hover transition-colors">
            View all posts <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="group relative flex flex-col items-start justify-between rounded-3xl border-2 border-primary/10 p-8 transition-all hover:bg-secondary hover:border-primary/30 hover:-translate-y-1">
              <div className="flex items-center gap-x-4 text-xs mb-4">
                <time dateTime={post.date} className="text-muted font-medium">{post.date}</time>
                <span className="text-muted font-medium">{post.readTime}</span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-xl font-bold leading-7 text-foreground group-hover:text-primary transition-colors">
                  <Link href="#blogs">
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted font-medium">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-10 sm:hidden">
           <Link href="#blogs" className="flex items-center gap-1 text-sm font-bold text-primary hover:text-primary-hover transition-colors">
            View all posts <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
