import Link from "next/link";
import { Code2 } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-black/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <Code2 className="h-6 w-6 text-black dark:text-white" />
          <span className="text-lg font-bold tracking-tight text-black dark:text-white">
            Software Bakery
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm font-medium text-gray-600 transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white">
            Services
          </Link>
          <Link href="#roadmap" className="text-sm font-medium text-gray-600 transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white">
            Roadmap
          </Link>
          <Link href="#reviews" className="text-sm font-medium text-gray-600 transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white">
            Reviews
          </Link>
          <Link href="#blogs" className="text-sm font-medium text-gray-600 transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white">
            Blogs
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95 dark:bg-white dark:text-black"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
