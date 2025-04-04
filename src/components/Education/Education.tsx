import { Fade } from "react-awesome-reveal";

const Education = () => {
  return (
    <div className="w-[90%] mx-auto  py-12">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 uppercase">
      My <span className="text-orange-500 ">Education</span>
    </h2>
    <div className="w-24 h-1.5 bg-gradient-to-r from-orange-400 to-amber-500 mx-auto rounded-full"></div>
  </div>

  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
    <Fade>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Exam Title
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Concentration/Major
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Institute
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Year
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900 dark:text-white">Master of Business Administration</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-700 dark:text-gray-300">Finance</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-700 dark:text-gray-300">IBA - University of Dhaka</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-200 text-orange-600">
                  1989
                </span>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900 dark:text-white">Master of Commerce (M.Com)</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-700 dark:text-gray-300">Accounting</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-700 dark:text-gray-300">University of Dhaka</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-200 text-orange-600">
                  1989
                </span>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900 dark:text-white">Bachelor of Commerce (B.Com)</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-700 dark:text-gray-300">Accounting</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-700 dark:text-gray-300">University of Dhaka</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-200 text-orange-600">
                  1988
                </span>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </Fade>
  </div>
</div>
  );
};

export default Education;
