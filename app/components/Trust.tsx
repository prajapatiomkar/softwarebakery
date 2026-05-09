import { Star } from "lucide-react";

const reviews = [
  {
    content: "Software Bakery completely transformed how we handle our internal data. The new dashboard is fast, intuitive, and bug-free.",
    author: "Jane Doe",
    role: "CTO at TechFlow",
  },
  {
    content: "Working with Omkar was a breeze. He understood our requirements immediately and delivered ahead of schedule.",
    author: "John Smith",
    role: "Founder at StartupX",
  },
  {
    content: "The code quality is exceptional. It's rare to find an agency that cares as much about the architecture as the UI.",
    author: "Emily Chen",
    role: "Lead Engineer at ScaleCorp",
  },
];

export default function Trust() {
  return (
    <section id="reviews" className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-gray-500 dark:text-gray-400">Trusted By Many</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
            Don&apos;t just take our word for it
          </p>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            &quot;Quality is not an act, it is a habit.&quot; We strive to deliver excellence in every commit.
          </p>
        </div>

        {/* Client Logos Placeholder */}
        <div className="mb-20 grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12 opacity-50 grayscale">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex justify-center items-center h-12 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Partner Logo</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="flex flex-col justify-between bg-white dark:bg-black p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-black text-black dark:fill-white dark:text-white" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic mb-6">
                  &quot;{review.content}&quot;
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{review.author}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
