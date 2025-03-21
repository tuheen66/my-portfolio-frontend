"use client";

import { TProject } from "@/utils/Types/types";

import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { getAllProjects } from "@/utils/actions/ProjectService";

const Projects = () => {
  const [projects, setProjects] = useState<TProject[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const result = await getAllProjects();
      setProjects(result);
    };
    fetchProjects();
  }, []);

  return (
    <div className=" mx-auto mb-12">
      <div>
        <h2 className="text-3xl md:text-4xl  lg:text-4xl font-bold text-slate-600 dark:text-white  text-center uppercase my-12">
          my <span className="text-orange-600">projects</span>
        </h2>
      </div>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects?.slice(0, 6).map((project: TProject) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
