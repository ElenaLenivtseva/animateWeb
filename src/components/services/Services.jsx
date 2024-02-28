import React from "react";
import "./Services.scss";
import { motion } from "framer-motion";
import Box from "./Box";

const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <motion.p>
          I focus on helping your brand grow <br /> and move forwardly
        </motion.p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your</b> Business
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <Box />
        <Box />
        <Box />
        <Box />
      </motion.div>
    </motion.div>
  );
};

export default Services;
