import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Intro } from "@/components/Intro";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Intro />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}
