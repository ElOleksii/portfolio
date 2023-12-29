import FullScreenHeader from "../FullScreenHeader.jsx";
import Navbar from "../Navbar.jsx";
import AboutMe from "../sub/AboutMe";
import Projects from "../sub/Projects.jsx";
import Skills from "../sub/Skills.jsx";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <FullScreenHeader />
      <AboutMe />
      <Skills />
      <Projects />
    </>
  );
}
