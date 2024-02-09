import { color, motion } from "framer-motion";

import { staggerContainer } from "../../utils/motion.js";
import { projects } from "../../constants/projects.js";
import { fadeIn, textVariant } from "../../utils/motion";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectCard = ({
  index,
  title,
  description,
  tags,
  img,
  githubLink,
  demoLink,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="bg-tertiary 2md:hover:scale-100  hover:scale-105 transition-all p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img
            src={img}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <FaGithub
                fill="black"
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </a>
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <FiArrowUpRight style={{ color: "black" }} size={25} />
            </a>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{title}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${title}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        {/* <div className="flex justify-around 2md:hover:flex  2md:flex-col 2md:gap-2  2md:items-center relative top-[20px]  ">
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <button className=" bg-purple-500 flex flex-row-reverse items-center justify-center hover:shadow-btn hover:shadow-purple-500 hover:bg-purple-400   border-none p-3 w-[200px] cursor-pointer ">
              <FiArrowUpRight className="w-[20px] h-[20px]" /> <span>Demo</span>
            </button>
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-orange-500 hover:shadow-btn hover:shadow-orange-500 flex gap-2 flex-row-reverse items-center justify-center hover:bg-orange-400 border-none p-3 w-[200px] cursor-pointer ">
              <FaGithub className="w-[20px] h-[20px]" /> <span>GitHub</span>
            </button>
          </a>
        </div> */}
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.section
        id="projects"
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto top-[150px] relative z-0`}
      >
        <div className="relative top-[20px]">
          <motion.div variants={textVariant()}>
            <h2
              className={`text-white  font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}
            >
              Projects
            </h2>
          </motion.div>

          <div className="w-full flex">
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
              Following projects showcases my skills and experience through
              real-world examples of my work. Each project is briefly described
              with links to code repositories and live demos in it. It reflects
              my ability to solve complex problems, work with different
              technologies, and manage projects effectively.
            </motion.p>
          </div>
        </div>
        <section className="mt-20 justify-evenly flex flex-wrap gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </section>
      </motion.section>
    </>
  );
};

export default Works;
