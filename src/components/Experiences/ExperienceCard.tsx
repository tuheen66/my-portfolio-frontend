import { TExperience } from "@/utils/Types";

const ExperienceCard = ({ experience }: { experience: TExperience }) => {
  return (
    <div className="border border-slate-300 dark:border-slate-500 rounded-xl p-4 my-4 shadow-lg shadow-slate-500 bg-slate-300 dark:bg-slate-900 dark:text-white text-slate-900">
      <h2 className="text-slate-800 dark:text-gray-400">
        <span className="text-lg font-semibold">{experience.position}</span> : ({experience.startDate} - 
        {experience.endDate})
      </h2>
      <p className="text-slate-800 dark:text-gray-400">
        Company: <span className="font-semibold">{experience.company}</span> -
        {experience.companyDescription}
      </p>
      <p className="text-slate-800 dark:text-gray-400">Duties & Responsibilities:</p>
      <ul className="list-disc pl-6 space-y-2 text-slate-800 dark:text-gray-400">
        {experience.duties.map((duty, index) => (
          <li key={index}>{duty}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
