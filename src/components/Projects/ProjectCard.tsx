import { TProject } from "@/utils/Types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import * as motion from "motion/react-client";

const ProjectCard = ({ project }: { project: TProject }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="border-2 border-gray-300 bg-slate-200 dark:bg-slate-900 shadow-xl shadow-slate-600 rounded-2xl mb-12 flex flex-col h-full"
    >
      <div className="flex-grow flex flex-col">
        <div className="flex justify-center">
          <Image
            className="rounded-t-xl"
            src={project.image}
            alt="image"
            width={400}
            height={250}
          />
        </div>

        <div className="flex  flex-col justify-between flex-grow mt-8">
          <div className="text-center px-2">
            <h2 className="mb-4 text-2xl text-slate-700 dark:text-white">
              {project.title}
            </h2>
            <p className="text-slate-700 dark:text-white">{project.sub_title}</p>
          </div>

          <div className="">
            <Link href={`/projects/${project._id}`}>
              <button className="bg-orange-600 px-4 py-2 flex justify-center items-center gap-4 rounded-b-xl w-full">
                View Details <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
