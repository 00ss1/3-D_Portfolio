import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* Download CV Section */}
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Download CV</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 flex justify-start"
      >
        <a
          href="/cv.pdf"
          download
          className="bg-[#915EFF] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#7c49e5] transition duration-300"
        >
          Download My CV
        </a>
      </motion.div>

      {/* About Section */}
      <motion.div variants={textVariant()} className="mt-16">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a skilled Software Developer with a strong foundation in
        TypeScript, JavaScript, and proficiency in modern frameworks like React,
        Node.js, Bootstrap, and Three.js. I specialize in end-to-end application
        development, from designing robust backend systems to building
        responsive front-end interfaces. In addition to full-stack web
        development, I possess knowledge in Artificial Intelligence development
        and a wide range of computer programming languages, enabling me to adapt
        to diverse technical challenges. I'm a quick learner who thrives in
        collaborative environments and works closely with clients to deliver
        efficient, scalable, and user-centric solutions that solve real-world
        problems.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
