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
    <section className="my-12 pb-8">
      <h2 className="text-3xl md:text-4xl font-bold uppercase text-slate-600 dark:text-white text-center mb-12">
        My <span className="text-orange-600">Skills</span>
      </h2>
      <div className=" flex flex-wrap gap-8 lg:gap-20 justify-center mb-12">
        {skills?.map((skill: TSkill) => (
          <SkillCard key={skill._id} skill={skill} />
        ))}

       
      </div>
    </section>
  );
};

export default Skills;
