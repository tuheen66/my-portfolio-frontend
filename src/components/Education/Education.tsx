const Education = () => {
  return (
    <div>
        <h2 className="text-3xl md:text-4xl  lg:text-4xl font-bold text-slate-600 dark:text-white  text-center uppercase mb-4">
          my <span className="text-orange-600">education</span>
        </h2>
      <div className="overflow-x-auto rounded-xl  bg-slate-300 dark:bg-slate-900 dark:text-white text-slate-900 shadow-lg shadow-slate-500">
        <table className="table">
          {/* head */}
          <thead className="text-slate-900 font-bold text-lg dark:text-white border-b border-slate-500">
            <tr className="bg-slate-300 dark:bg-slate-800 border-b border-slate-500">
              <th>Exam Title</th>
              <th>Concentration/Major</th>
              <th>Institute</th>
              <th>Pass Year</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="bg-slate-300 dark:bg-slate-800 border-b border-slate-500">
              <td>Master of Commerce (M. Com)</td>
              <td>Accounting</td>
              <td>University of Dhaka</td>
              <td>1989</td>
            </tr>
            {/* row 2 */}
            <tr className="bg-slate-300 dark:bg-slate-800 border-b border-slate-500">
              <td>Bachelor of Commerce (B.Com)</td>
              <td>Accounting</td>
              <td>University of Dhaka</td>
              <td>1988</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Education;
