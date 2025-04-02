import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 px-[5%] ">
      <div className="">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-5/12">
            <h2 className="text-4xl font-bold text-gray-700 dark:text-white mb-6">
              Crafting Digital Experiences That Matter
            </h2>

            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                I&apos;m a full-stack developer specializing in building modern
                web applications with a focus on performance, accessibility, and
                clean code. With a passion for problem-solving and user-centric
                design, I bridge the gap between functionality and aesthetic
                appeal.
              </p>

              <p className="text-lg leading-relaxed">
                My approach combines technical expertise with creative thinking
                to deliver solutions that not only meet business requirements
                but also provide exceptional user experiences. I believe in
                continuous learning and staying at the forefront of web
                technologies.
              </p>

              <p className="text-lg leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me contributing to
                open-source projects, exploring new frameworks, or mentoring
                aspiring developers. Every line of code I write is an
                opportunity to create something meaningful and impactful.
              </p>
            </div>
          </div>

          <div className="lg:w-7/12 grid grid-cols-1 ">
            <div className="rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-white mb-3">
                I Develop Systems That Work
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                I build robust, scalable systems that perform flawlessly.
                Focusing on clean architecture and maintainable code, I craft
                solutions that deliver both technical excellence and seamless
                user experiences. Every component is optimized for reliability
                and future growth. My goal: systems that simply{" "}
                <span className="font-medium italic">work</span> - solving real
                problems efficiently.
              </p>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mt-6 border-l-4 border-orange-500 pl-4 italic">
                
                — not just in ideal conditions, but under load, at scale, and
                for the long haul. Every solution is built with{" "}
                <span className="font-semibold">precision</span>,
                <span className="font-semibold"> maintainability</span>, and
                <span className="font-semibold"> user needs</span> at its core.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 px-4 ">
              <div className="mb-2">
                <div className="grid grid-cols-2 mb-2 text-gray-600 dark:text-gray-300">
                  <p>Name</p>
                  <p>Monirul Hassan</p>
                </div>
                <div className="grid grid-cols-2 text-gray-600 dark:text-gray-300">
                  <p>Occupation</p>
                  <p>MERN stack developer</p>
                </div>
              </div>

              <div className="w-[95%] ">
                <div className="grid grid-cols-2 mb-2 text-gray-600 dark:text-gray-300">
                  <p>Phone</p>
                  <p>+8801711591602</p>
                </div>
                <div className="grid grid-cols-2 justify-center text-gray-600 dark:text-gray-300">
                  <p>Email</p>
                  <p>hassan.monirul@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
