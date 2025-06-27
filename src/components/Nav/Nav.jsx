import React, { useRef } from "react";
import "../Nav/style/Nav.css";
import { motion } from "framer-motion";

const Nav = ({
  navBgColor,
  scroll,
  navWidth,
  navDisplay,
  toggleDisplay,
  isOpen,
  toggleOpen,
}) => {
  const navOpt = [
    "About",
    "Attractions",
    "Activities",
    "Seasons",
    "Gallery",
    "Contact",
  ];

  const line1Ref = useRef();
  const line2Ref = useRef();

  return (
    <motion.nav
      style={{ backgroundColor: navBgColor, width: `${navWidth}vw` }}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <div style={{ display: navDisplay }} className="navbar">
        <div className="navbar__left">
          <div className="logo">
            <img src="Logo.webp" alt="" className="img-fluid" width={90} />
            <span>jiri</span>
          </div>
        </div>
        <div className="navbar__right">
          <ul>
            {navOpt.map((item, idx) => (
              <li
                id={idx}
                onClick={() => {
                  if (item === "About") scroll.scrollToAboutUs();
                  else if (item === "Gallery") scroll.scrollToGallery();
                  else if (item === "Attractions") scroll.scrollToAttraction();
                  else if (item === "Activities") scroll.scrollToActivities();
                  else if (item === "Contact") scroll.scrollToContact();
                  else if (item === "Seasons") scroll.scrollToSeason();
                }}
              >
                <a> {item} </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        onClick={toggleOpen}
        style={{ display: toggleDisplay }}
        className="toggle"
      >
        <div ref={line1Ref} className={`line1 ${isOpen ? "open" : ""}`}></div>
        <div ref={line2Ref} className={`line2 ${isOpen ? "open" : ""}`}></div>
      </div>
    </motion.nav>
  );
};

export default Nav;
