import FullScreenHeader from "../FullScreenHeader";
import Navbar from "../Navbar";
import AboutMe from "../sub/AboutMe";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <FullScreenHeader />
      <AboutMe />
      <div className="h-[100vh]"></div>
    </>
  );
}
