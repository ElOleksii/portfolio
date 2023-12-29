import FullScreenHeader from "../FullScreenHeader";
import Navbar from "../Navbar";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <FullScreenHeader />
      <div className="h-[100vh]"></div>
    </>
  );
}
