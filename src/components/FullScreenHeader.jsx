import BlackHoleAnimation from "./BlackHoleAnimation";
import StarsCanvas from "./StarBackground";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "../utils/motion";
export default function FullScreenHeader() {
  return (
    <>
      <div className="container bg-black  min-w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          className=" pl-24 w-[550px]   min-h-screen text-white  "
        >
          <motion.div
            variants={slideInFromTop}
            className="flex flex-col min-h-[100vh] justify-center text-2xl z-10  relative"
          >
            <p className="mt-14">Oleksii Telecnhak</p>
            <h1 className="font-medium text-5xl my-10">Front End Developer</h1>
            <div>
              <p>Click for more</p>
              <div className="mx-auto mt-5 inline-block">
                <button className="cursor-pointer mx-12  flex items-center justify-center w-12 h-12 border-2 border-white rounded-full transition-all hover:scale-110 hover:opacity-80">
                  <FaArrowDown />
                </button>
              </div>
            </div>
          </motion.div>

          <StarsCanvas className=" z-[-100]" />
          <BlackHoleAnimation />
        </motion.div>
      </div>
      <div className="h-[100vh]"></div>
    </>
  );
}
