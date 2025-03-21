import Blogs from "@/components/Blogs/Blogs";
import Contacts from "@/components/Contacts/Contacts";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experiences/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";


export default function Home() {
  return (
    <div className="w-[90%] mx-auto  min-h-screen mb-12">
      <Intro />
      <Skills />
      <Projects />
      <Contacts />
      <Blogs />
      <Education />
      <Experience/>
     
    </div>
  );
}
