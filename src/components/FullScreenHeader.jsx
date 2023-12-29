import BlackHoleAnimation from "./BlackHoleAnimation";
import StarsCanvas from "./StarBackground";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { slideInFromTop } from "../utils/motion";
export default function FullScreenHeader() {
  function scroll() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }
  return (
    <>
      <section id="fullscreen" className="container bg-black  min-w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          className=" px-12  2md:mx-auto  min-h-screen text-white  "
        >
          <motion.div
            variants={slideInFromTop}
            className="flex flex-col min-h-[100vh] 2md:text-center 2md:top-[230px] justify-center z-[100]   text-3xl z-10  relative md:text-xl"
          >
            <p className="mt-14 md:text-2xl">I am Oleksii Telenchak</p>
            <h1 className="font-medium text-[3rem] md:text-3xl my-10">
              Front End Developer
            </h1>
            <div>
              <p>Click for more</p>
              <div className="mx-auto mt-5 inline-block">
                <button
                  onClick={scroll}
                  className="cursor-pointer mx-12  flex items-center justify-center w-12 h-12 border-2 border-white rounded-full transition-all hover:scale-110 hover:opacity-80"
                >
                  <FaArrowDown />
                </button>
              </div>
            </div>
          </motion.div>

          <StarsCanvas className=" z-[-100]" />

          <BlackHoleAnimation />
        </motion.div>
        <div className="w-full h-[65px] z-[101] relative bottom-[35px] shadow-lg  backdrop-blur-md z-[105] px-10"></div>
      </section>
    </>
  );
}
