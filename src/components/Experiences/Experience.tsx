"use client";
import { Fade } from "react-awesome-reveal";

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
    <div className="w-[90%] mx-auto ">
      <h2 className="text-3xl md:text-4xl  lg:text-4xl font-bold text-slate-600 dark:text-white  text-center uppercase mt-8">
        my <span className="text-orange-600">experiences</span>
      </h2>
      <div>
        <div className="grid grid-cols-2 gap-10">
          <Fade>
            {experiences?.map((experience: TExperience, index:number) => (
              <ExperienceCard key={experience._id} experience={experience} index={index} />
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Experience;
