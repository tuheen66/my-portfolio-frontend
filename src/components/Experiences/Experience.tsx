"use client";

import { getAllExperiences } from "@/utils/actions/ExperienceService";
import { TExperience } from "@/utils/Types";
import { useEffect, useState } from "react";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const [experiences, setExperiences] = useState<TExperience[]>([]);

  useEffect(() => {
    const fetchExperience = async () => {
      const result = await getAllExperiences();
      setExperiences(result);
    };
    fetchExperience();
  }, []);

  return (
    <div>
      <h2 className="text-3xl md:text-4xl  lg:text-4xl font-bold text-slate-600 dark:text-white  text-center uppercase mt-8">
          my <span className="text-orange-600">experiences</span>
        </h2>
      <div className="grid grid-cols-1 gap-4">

      {experiences.map((experience: TExperience) => (
        <ExperienceCard key={experience._id} experience={experience} />
      ))}
      </div>
    </div>
  );
};

export default Experience;
