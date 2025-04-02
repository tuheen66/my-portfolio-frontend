"use client";
import React, { useEffect, useState } from "react";

import { TSkill } from "@/utils/Types/types";
import { getAllSkills } from "@/utils/actions/SkillService";
import SkillCard from "./SkillCard";

const Skills = () => {
  const [skills, setSkills] = useState<TSkill[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const result = await getAllSkills();
      setSkills(result);
    };
    fetchSkills();
  }, []);

  return (
    <section className="bg-gray-100 dark:bg-slate-900  ">
      <h2 className="text-3xl md:text-4xl font-bold uppercase text-slate-600 dark:text-white text-center mb-8">
        My <span className="text-orange-600">Skills</span>
      </h2>

      <div className="my-4 pb-8 flex flex-col lg:flex-row gap-10 px-[5%] items-center justify-between ">
        <h2 className="lg:w-5/12 border-l-4 border-orange-500 pl-6 text-lg italic text-slate-700 dark:text-white">
        I specialize in modern web development, combining clean code with intuitive design. With expertise in React, Next.js, and TypeScript, I build fast, scalable applications optimized for performance. My backend proficiency includes Node.js, Express, and databases like MongoDB. I focus on responsive, accessible UIs using Tailwind CSS and Framer Motion for fluid interactions. Continuously learning, I stay ahead with emerging tech like AI integration and edge computing. Whether crafting pixel-perfect interfaces or architecting robust systems, I prioritize efficiency, maintainability, and user experience—turning ideas into high-quality digital solutions.
        </h2>

        <div className="lg:w-7/12">
          <div className=" flex flex-wrap gap-4 lg:gap-14 justify-center mb-4">
            {skills?.map((skill: TSkill) => (
              <SkillCard key={skill._id} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
