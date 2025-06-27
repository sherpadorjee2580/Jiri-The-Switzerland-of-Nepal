import React, { forwardRef } from "react";
import "../About/style/About.css";
import { motion } from "framer-motion";

const About = forwardRef((prop, ref) => {
  return (
    <div ref={ref} className="about">
      <div className="wrapper">
        <motion.div
          className="about__left"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <p className="heading">About Jiri</p>
          <div className="desc">
            <strong className="discover" style={{marginBottom:10}}>
              Discover the Switzerland of Nepal
            </strong>
            <p>
              Welcome to Jiri – the original gateway to Everest and Nepal's
              hidden gem! Nestled at 1,905 meters in Dolakha district, this
              charming town offers authentic Himalayan experiences just 184
              kilometers from Kathmandu.
            </p>
            <p>
              Known as the starting point of the classic Everest Base Camp trek,
              Jiri captivates visitors with pristine natural beauty, terraced
              hillsides, and spectacular mountain views. Home to Jirel and
              Sherpa communities, explore ancient monasteries, sacred temples,
              and taste local specialties like churpi cheese and fresh kiwi.
            </p>
            <p>
              Whether seeking adventure, cultural discovery, or peaceful
              retreats, Jiri welcomes you with breathtaking vistas and warm
              hospitality year-round.
            </p>
            <strong className="come" style={{marginTop:10}}>
              Come experience Nepal's best-kept secret!
            </strong>
          </div>
        </motion.div>
        <motion.div
          className="about__right"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="wrapper">
            <div className="image-container" style={{ display: "flex" }}>
              <img
                src="buddhaPark.webp"
                alt="image-1"
                className="img-fluid"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
});

export default About;
