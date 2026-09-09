import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import LoadingScreen from "../components/LoadingScreen";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </main>
  );
}
