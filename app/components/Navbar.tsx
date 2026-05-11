import Link from "next/link";
import { Code2 } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="bg-primary/20 p-2 rounded-xl text-primary">
            <Code2 className="h-6 w-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Software Bakery
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm font-medium text-muted transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="#roadmap" className="text-sm font-medium text-muted transition-colors hover:text-primary">
            Roadmap
          </Link>
          <Link href="#reviews" className="text-sm font-medium text-muted transition-colors hover:text-primary">
            Reviews
          </Link>
          <Link href="#blogs" className="text-sm font-medium text-muted transition-colors hover:text-primary">
            Blogs
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary/30 transition-transform hover:scale-105 active:scale-95 hover:bg-primary-hover"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
