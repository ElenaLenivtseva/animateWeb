import React, { useRef } from "react";
import "./Services.scss";
import { motion, useInView } from "framer-motion";
import Box from "./Box";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transitin: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // whileInView='animate'
      ref={ref}
      animate={isInView && 'animate'}
    >
      <motion.div className="textContainer">
        <motion.p>
          I focus on helping your brand grow <br /> and move forwardly
        </motion.p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color: 'orange'}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color: 'orange'}}>For Your</motion.b> Business
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <Box />
        <Box />
        <Box />
        <Box />
      </motion.div>
    </motion.div>
  );
};

export default Services;
