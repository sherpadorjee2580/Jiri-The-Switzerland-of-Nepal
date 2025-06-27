import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaMapMarkedAlt } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { FaHiking } from "react-icons/fa";

import "../Sidebar/style/Sidebar.css";

const Sidebar = ({ sidebarOpen, sidebarRadius, scroll, handleScrollTop }) => {
  const socialMedia = [
    <FaFacebook className="mediaIcon" />,
    <FaInstagram className="mediaIcon" />,
    <FaTiktok className="mediaIcon" />,
    <FaTwitter className="mediaIcon" />,
  ];

  const section = [
    { name: "Home", icon: <FaHome className="icon" /> },
    { name: "About", icon: <IoIosInformationCircleOutline className="icon" /> },
    { name: "Attraction", icon: <FaMapMarkedAlt className="icon" /> },
    { name: "Activities", icon: <FaHiking className="icon" /> },
    { name: "Seasons", icon: <CiGlobe className="icon" /> },
    { name: "Gallery", icon: <GrGallery className="icon" /> },
  ];
  return (
    <div
      className="sidebar"
      style={{
        right: `${sidebarOpen}vw`,
        borderTopLeftRadius: `${sidebarRadius}%`,
        borderBottomLeftRadius: `${sidebarRadius}%`,
      }}
    >
      <div className="container">
        <p className="sidebar__title">Explore Jiri</p>
        <div className="sidebar__section">
          {section.map((item, idx) => (
            <li
              style={{ color: "white" }}
              key={idx}
              onClick={() => {
                if (item.name == "Home") handleScrollTop();
                else if (item.name == "About") scroll.scrollToAboutUs();
                else if (item.name == "Attraction") scroll.scrollToAttraction();
                else if (item.name == "Activities") scroll.scrollToActivities();
                else if (item.name == "Seasons") scroll.scrollToSeason();
                else if (item.name == "Gallery") scroll.scrollToGallery();
              }}
            >
              {item.icon} {item.name}
            </li>
          ))}
        </div>
        <div className="sidebar__socialMedia">
          {socialMedia.map((item, idx) => (
            <li key={idx}> {item} </li>
          ))}
        </div>
        <button
          onClick={() => {
            scroll.scrollToContact();
          }}
          className="sidebar__contact"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
