import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectsNavbar from "@/components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { fadeInUp, routeFade, stagger } from "@/utils/animations";
import { motion } from "framer-motion";

export default function projects() {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");
  const [showDetail, setShowDetail] = useState(null);

  const handlerFilterCategory = (category) => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };
  return (
    <motion.div
      className="px-5 py-2 overflow-y-scroll"
      style={{ height: "65vh" }}
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative grid grid-cols-12 gap-4 my-3"
      >
        {projects.map((project) => (
          <motion.div
            variants={fadeInUp}
            key={project.id}
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
          >
            <ProjectCard
              project={project}
              setShowDetail={setShowDetail}
              showDetail={showDetail}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
