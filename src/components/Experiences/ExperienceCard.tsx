import { TExperience } from "@/utils/Types";

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: TExperience;
  index: number;
}) => {
  // Create a unique modal ID for each card
  const modalId = `experience_modal_${index}`;

  return (
    <div className="border-l-8 dark:border-orange-500 border-slate-600 rounded-xl p-6 my-6 shadow-sm hover:shadow-md transition-all duration-200 bg-gray-200 dark:bg-slate-800 h-full flex flex-col">
      <p className="text-orange-500 text-xs bg-orange-200 py-1 px-2 rounded-full w-fit">
        # 0{index + 1}
      </p>

      <div className="flex flex-col gap-1 mb-3 mt-3">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">
          {experience.position}
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium px-2 py-1 rounded-full text-orange-600 bg-orange-200">
            {new Date(experience.startDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
            })}{" "}
            -{" "}
            {experience.endDate
              ? new Date(experience.endDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                })
              : "Present"}
          </span>
        </div>
      </div>

      {/* Company Info */}
      <div className="mb-4 flex-grow">
        <p className="text-slate-700 dark:text-slate-300">
          <span className="font-semibold text-slate-900 dark:text-white">
            Company:{" "}
          </span>
          <span className="text-slate-800 dark:text-slate-200">
            {experience.company}
          </span>
          {experience.companyDescription && (
            <span className="text-slate-600 dark:text-slate-400">
              {" "}
              — {experience.companyDescription.slice(0, 50)}...
            </span>
          )}
        </p>
      </div>

      {/* Button to open the modal */}
      <button
        className="bg-orange-600 px-2 py-1 rounded-lg"
        onClick={() =>
          (document.getElementById(modalId) as HTMLDialogElement)?.showModal()
        }
      >
        View details
      </button>

      {/* Modal - now unique for each card */}
      <dialog id={modalId} className="modal ">
        <div className="modal-box max-w-2xl bg-gray-200 dark:bg-slate-800 text-slate-800 dark:text-white">
          <h3 className="font-bold text-lg">Experience Details</h3>

          <p className="text-orange-500 text-xs bg-orange-200 py-1 px-2 rounded-full inline">
            # 0{index + 1}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3 mt-3">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              {experience.position}
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium px-2 py-1 rounded-full text-orange-600 bg-orange-200">
                {new Date(experience.startDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                })}{" "}
                -{" "}
                {experience.endDate
                  ? new Date(experience.endDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                    })
                  : "Present"}
              </span>
            </div>
          </div>

          {/* Company Info */}
          <div className="mb-4">
            <p className="text-slate-700 dark:text-slate-300">
              <span className="font-semibold text-slate-900 dark:text-white">
                Company:{" "}
              </span>
              <span className="text-slate-800 dark:text-slate-200">
                {experience.company}
              </span>
              {experience.companyDescription && (
                <span className="text-slate-600 dark:text-slate-400">
                  {" "}
                  — {experience.companyDescription}
                </span>
              )}
            </p>
          </div>

          {/* Duties Section */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Duties & Responsibilities
            </h3>
            <ul className="space-y-2.5">
              {experience.duties.map((duty, idx) => (
                <li key={idx} className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-4 h-4 mt-1 mr-2 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700 dark:text-slate-300">
                    {duty}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="bg-orange-600 px-2 py-1 rounded-lg">Close</button>
            </form>
          </div>
        </div>

        {/* Click outside to close */}
        <form method="dialog" className="modal-backdrop ">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ExperienceCard;
