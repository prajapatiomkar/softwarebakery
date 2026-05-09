import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Objective from "./components/Objective";
import Services from "./components/Services";
import Roadmap from "./components/Roadmap";
import About from "./components/About";
import Trust from "./components/Trust";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Objective />
        <Services />
        <Roadmap />
        <About />
        <Trust />
        <Blogs />
      </main>
      <Footer />
    </div>
  );
}
