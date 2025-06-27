import React, { useEffect, useRef } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Attraction from "./components/Attraction/Attraction";
import { useState } from "react";
import GetThere from "./components/GetThere/GetThere";
import BestTime from "./components/BestTime/BestTime";
import Guru from "./components/guruRimpoche/Guru";
import Gallery from "./components/Gallery/Gallery";
import Opinion from "./components/Opinion/Opinion";
import Choose from "./components/Choose/Choose";
import Book from "./components/Book/Book";
import Contact from "./components/Contact/Contact";
import { FaAngleUp } from "react-icons/fa6";
import Activities from "./components/Activities/Activities";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  const [navWidth, setNavWidth] = useState("100");
  const [navBgColor, SetNavBgColor] = useState("transparent");
  const [navDisplay, setNavDisplay] = useState("flex");
  const [toggleDisplay, setToggleDisplay] = useState("none");
  const [isOpen, setIsOpen] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState("-100");
  const [sidebarRadius, setSidebarRadius] = useState("25");
  // const [screenSize,setScreenSize] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResizeOrScroll = () => {
      const scrollY = window.scrollY;

      if (window.innerWidth < 768 || scrollY > 100) {
        SetNavBgColor("#2f855a");
        setNavWidth("15");
        setNavDisplay("none");
        setToggleDisplay("flex");
        setIsOpen(false);
      } else {
        SetNavBgColor("transparent");
        setNavWidth("100");
        setNavDisplay("flex");
        setToggleDisplay("none");
        setIsOpen(true);
      }
    };

    window.addEventListener("scroll", handleResizeOrScroll);
    window.addEventListener("resize", handleResizeOrScroll);

    handleResizeOrScroll();

    return () => {
      window.removeEventListener("scroll", handleResizeOrScroll);
      window.removeEventListener("resize", handleResizeOrScroll);
    };
  }, []);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
    if (isOpen == false) {
      setSidebarOpen("0");
      setSidebarRadius("0");
    } else {
      setSidebarOpen("-100");
      setSidebarRadius("50");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scroll) {
        setSidebarOpen("-100");
      }
    });
  });

  const aboutUsRef = useRef(null);
  const attractionRef = useRef(null);
  const galleryRef = useRef(null);
  const activitiesRef = useRef(null);
  const contactRef = useRef(null);
  const seasonRef = useRef(null);

  const scrollToAboutUs = () => {
    aboutUsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAttraction = () => {
    attractionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToActivities = () => {
    activitiesRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    console.log("Clicked Contact");
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSeason = () => {
    seasonRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  // useEffect(() => {
  //   let isScrolling = false;
  //   const handleScroll = (e) => {
  //     e.preventDefault();
  //     if (isScrolling) return;
  //     isScrolling = true;

  //     setTimeout(() => {
  //       window.scrollBy({
  //         top: e.deltaY * 2.5,
  //         behavior: "smooth",
  //       });
  //       isScrolling = false;
  //     }, 10);
  //   };
  //   window.addEventListener("wheel", handleScroll, { passive: false });
  //   return () => window.removeEventListener("wheel", handleScroll);
  // }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div onClick={handleScrollTop} className="up-icon">
        <FaAngleUp className="angle-up" />
      </div>
      <Sidebar
        sidebarOpen={sidebarOpen}
        handleScrollTop={handleScrollTop}
        sidebarRadius={sidebarRadius}
        scroll={{
          scrollToAboutUs,
          scrollToAttraction,
          scrollToGallery,
          scrollToActivities,
          scrollToContact,
          scrollToSeason,
        }}
      />
      <Nav
        isOpen={isOpen}
        navBgColor={navBgColor}
        scroll={{
          scrollToAboutUs,
          scrollToAttraction,
          scrollToGallery,
          scrollToActivities,
          scrollToContact,
          scrollToSeason,
        }}
        toggleOpen={toggleOpen}
        navWidth={navWidth}
        navDisplay={navDisplay}
        toggleDisplay={toggleDisplay}
      />
      <Home scroll={scrollToAboutUs} />
      <About ref={aboutUsRef} />
      <Attraction ref={attractionRef} />

      <Activities ref={activitiesRef} />
      <BestTime ref={seasonRef} />
      <Gallery ref={galleryRef} />
      <Guru />
      <GetThere />
      <Opinion />
      <Choose />
      <Book scroll={scrollToContact} />
      <Contact ref={contactRef} />
    </>
  );
};

export default App;
