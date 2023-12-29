import ProjectCard from "../ProjectCard";
import currency from "../../public/currency.png";
export default function Projects() {
  return (
    <section>
      <h2 id="projects" className="text-center mt-[50px] text-5xl">
        Projects
      </h2>
      <div className="flex flex-col itmes-center justify-center py-20">
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
          <ProjectCard img={currency} title={"Crypto currency"} />
          <ProjectCard img={currency} />
          <ProjectCard img={currency} />
        </div>
      </div>
    </section>
  );
}
