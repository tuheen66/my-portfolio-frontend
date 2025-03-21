import { TProject } from "@/utils/Types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import * as motion from "motion/react-client";

const ProjectCard = ({ project }: { project: TProject }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="border-2 border-gray-300 bg-slate-400 dark:bg-slate-900  shadow-xl shadow-slate-600 p-4 rounded-xl mb-12"
    >
      <h2 className="mb-4 text-center text-2xl text-slate-700 dark:text-white  ">
        {project.title}
      </h2>
      <div className="">
        <Image
          className="rounded-xl  "
          src={project.image}
          alt="image"
          width={400}
          height={400}
        />
      </div>
      <div className="mt-4 flex justify-center">
        <Link href={`/projects/${project._id}`}>
          <button className="bg-orange-600 px-4 py-2  flex items-center gap-4 rounded-lg ">
            View Details <FaArrowRight />
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
