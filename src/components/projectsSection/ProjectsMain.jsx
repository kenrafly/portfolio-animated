import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import VacationOfAfrica from "../../../public/images/website-img-1.jpg";
import MoolaApp from "../../../public/images/website-img-2.webp";
import Tourzania from "../../../public/images/website-img-3.jpg";
import BankOfLuck from "../../../public/images/website-img-4.jpg";
import { PiHexagonThin } from "react-icons/pi";

const projects = [
  {
    name: "Vacation of Africa",
    year: "Mar2022",
    align: "right",
    image: VacationOfAfrica,
    link: "#",
  },
  {
    name: "Moola App",
    year: "Sept2022",
    align: "left",
    image: MoolaApp,
    link: "#",
  },
  {
    name: "Tourzania",
    year: "Jan2023",
    align: "right",
    image: Tourzania,
    link: "#",
  },
  {
    name: "Bank of Luck",
    year: "May2024",
    align: "left",
    image: BankOfLuck,
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
