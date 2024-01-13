import { useRef } from "react";
import { motion, useSpring, useScroll } from "framer-motion";
import ProjectCard from "../ProjectCard";
import { slideInFromTop } from "../../utils/motion.js";
import { projects } from "../../constants/projects.js";

export default function Projects() {
  return (
    <section className="relative no-scroll">
      <div className=" relative top-[270px] top-0 left-0 pt-[50px] text-center text-4xl md:text-2xl">
        <h2
          id="projects"
          className="text-center -translate-y-[50px] mb-[100px] pt-[70px] text-5xl"
        >
          Projects
        </h2>
      </div>

      {projects.map((project) => (
        
      ))}
    </section>
  );
}
