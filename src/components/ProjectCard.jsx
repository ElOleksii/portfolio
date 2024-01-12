import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { slideInFromLeft, slideInFromTop } from "../utils/motion";

export default function ProjectCard({
  title,
  description,
  img,
  demoLink,
  githubLink,
  stack,
}) {
  const ref = useRef();
  console.log(img);

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-250, 30]);
  return (
    <section className="flex  project-card items-center justify-center w-full h-full overflow-hidden">
      <div className="max max-w-[1366px] 2md:h-[30px] h-full m-auto flex 2md:flex-col items-center gap-[50px] justify-center">
        <div
          className=" flex-[1]  md:w-full md:p-5  md:max-h-[300px]  h-[50%]"
          ref={ref}
        >
          <img src={img} className=" md:object-contain" alt="" />
          <div className="hidden 2md:block z-[125] md:w-full md:h-full 2md:hover:bg-slate-500"></div>
        </div>
        <motion.div
          style={{ y }}
          className="flex-[1]    2md:hover: md:transform-none md:p-12 md:items-center md:text-center flex flex-col gap-8"
        >
          <h4 className="text-[48px] relative 2md:top-[-45px] leading-10 2md:text-[36px] md:text-[24px]">
            {title}
          </h4>
          <p className="text-[18px] 2md:hover:block  2md:hidden">
            {description}
          </p>
          <p className="text-[20px]">Stack: {stack}</p>
          <div className="flex justify-around 2md:hover:flex  2md:hidden relative top-[100px]  ">
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              <button className=" bg-purple-500 flex flex-row-reverse items-center justify-center hover:shadow-btn hover:shadow-purple-500 hover:bg-purple-400   border-none p-3 w-[200px] cursor-pointer ">
                <FiArrowUpRight className="w-[20px] h-[20px]" />{" "}
                <span>Demo</span>
              </button>
            </a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <button className="bg-orange-500 hover:shadow-btn hover:shadow-orange-500 flex gap-2 flex-row-reverse items-center justify-center hover:bg-orange-400 border-none p-3 w-[200px] cursor-pointer ">
                <FaGithub className="w-[20px] h-[20px]" /> <span>GitHub</span>
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// <div
// className=" h-52 z-[110] bg-cover"
// style={{ background: `url(${img})` }}
// >
// <div className="text-white">
//   <h5>{title}</h5>
//   <p>{description}</p>
// </div>
// </div>
