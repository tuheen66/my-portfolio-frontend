"use client";

import Link from "next/link";

import Image from "next/image";
import { TProject } from "@/utils/Types/types";
import { useParams } from "next/navigation";
import { getSingleProject } from "@/utils/actions/ProjectService";
import { useEffect, useState } from "react";

const DetailProject = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState<TProject | null>(null);

  useEffect(() => {
    async function getProject() {
      const projectData = await getSingleProject(projectId as string);
      setProject(projectData);
    }
    getProject();
  }, [projectId]);

  console.log(project);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  {/* Header Section */}
  <div className="text-center mb-16">
    <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
      {project?.title}
    </h1>
    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
      {project?.sub_title}
    </p>
  </div>

  {/* Content Layout */}
  <div className="flex flex-col lg:flex-row gap-12 items-start">
    {/* Left Column - Text Content */}
    <div className="lg:w-2/3 w-full">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        {/* Technologies Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
            Technologies Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project?.technologies?.map((technology: string, index: number) => (
              <span 
                key={index}
                className="px-4 py-2 bg-orange-100  text-orange-500  rounded-full text-sm font-medium"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
            Key Features
          </h2>
          <ul className="space-y-4">
            {project?.features?.map((feature: string, index: number) => (
              <li key={index} className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-gray-700 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/">
            <button className="px-6 py-2 bg-orange-500 hover:bg-orange-800 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              ← Back to Home
            </button>
          </Link>
          <Link href={project?.live_link || "#"} target="_blank">
            <button className="px-6 py-2 bg-orange-500 hover:bg-orange-800 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center">
              Visit Live Site
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>

    {/* Right Column - Image */}
    <div className="lg:w-1/3 w-full sticky top-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <Image
          src={project?.full_image || "https://i.ibb.co.com/WNbVGhL4/how-to-set-default-blog-page.jpg"}
          width={600}
          height={600}
          alt="Project screenshot"
          className="w-full h-auto object-cover rounded-t-xl"
        />
        {/* <div className="p-6 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Project Highlights</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Modern, responsive design with intuitive user experience and robust functionality.
          </p>
        </div> */}
      </div>
    </div>
  </div>
</div>
  );
};

export default DetailProject;
