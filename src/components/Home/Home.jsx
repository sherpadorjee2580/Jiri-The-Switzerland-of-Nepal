import React from "react";
import "../Home/style/Home.css";
import { motion } from "framer-motion";

const Home = ({scroll}) => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="container"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <p className="welcome"> Welcome to jiri </p>
        <p className="txt">Gateway to the Everest Region</p>
        <button onClick={scroll} className="discover">Discover More</button>
      </motion.div>
    </motion.div>
  );
};

export default Home;
