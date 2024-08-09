import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h2>
      <div className="flex flex-wrap justify-center ">
        {/* <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center"></div>
        </div> */}
        <motion.div
          whileInView={{ opacity: 1, scaleZ: 0.5 }}
          initial={{ opacity: 0, scaleZ: 1 }}
          transition={{ duration: 2.5 }}
          className="w-full lg:w-3/4 p-6"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="leading-relaxed">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
