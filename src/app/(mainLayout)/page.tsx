import AboutMe from "@/components/About/AboutMe";
import Blogs from "@/components/Blogs/Blogs";
import Contacts from "@/components/Contacts/Contacts";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experiences/Experience";
import HeroSection from "@/components/HeroSection/HeroSection";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <div className="min-h-screen mb-12">
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
      <Contacts />
      <Blogs />
      <Education />
      <Experience />
    </div>
  );
}
