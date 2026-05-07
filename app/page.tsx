export default function Home() {
  return (
    <div className="flex h-lvh flex-col items-center justify-center bg-white px-6 text-center">
      <h1 className="text-4xl font-semibold tracking-tight text-black md:text-6xl capitalize">
        software bakery
      </h1>

      <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-500 md:text-base">
        We craft clean, reliable, and fully baked software experiences. Built
        with care by{" "}
        <a
          href="https://omkarprajapati.work"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gray-300 transition hover:text-black"
        >
          Omkar Prajapati
        </a>
        .
      </p>
    </div>
  );
}
