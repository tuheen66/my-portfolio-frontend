import { TSkill } from "@/utils/Types/types";
import Image from "next/image";
import * as motion from "motion/react-client";

const SkillCard = ({ skill }: { skill: TSkill }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-3 p-6 w-28 h-28 rounded-2xl backdrop-blur-sm bg-gray-100 dark:bg-slate-700 shadow-lg hover:shadow-xl transition-all border border-orange-500 hover:scale-[1.03]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <div className="relative w-14 h-14 flex items-center justify-center">
        <Image 
          src={skill.logo} 
          alt={skill.name}
          width={56} 
          height={56}
          className="object-contain w-full h-full"
        />
      </div>
      <p className="font-medium text-sm text-slate-700 dark:text-slate-200 text-center">
        {skill.name}
      </p>
    </motion.div>
  );
};

export default SkillCard;