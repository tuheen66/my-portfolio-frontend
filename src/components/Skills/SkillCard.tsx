import { TSkill } from "@/utils/Types/types";
import Image from "next/image";
import * as motion from "motion/react-client";


const ball = {
  width: 128,
  height: 128,
  borderRadius: "50%",
  background: "var(--accent)",
};

const SkillCard = ({ skill }: { skill: TSkill }) => {
  return (
    <motion.div 
    style={ball}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
    className="flex flex-col items-center bg-gray-300 text-slate-800 dark:text-white dark:bg-slate-900 text-xl border-2 border-orange-600 w-32 h-32 justify-center rounded-full ">
      <Image src={skill.logo} width={50} height={50} alt="logo" />
      <p>{skill.name}</p>
    </motion.div>
  );
};

export default SkillCard;
