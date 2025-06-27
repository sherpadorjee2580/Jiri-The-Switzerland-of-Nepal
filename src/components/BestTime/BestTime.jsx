import React, { forwardRef } from "react";
import "../BestTime/style/BestTime.css";
import { FaLeaf } from "react-icons/fa";

import { IoSunny } from "react-icons/io5";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { MdOutlineAcUnit } from "react-icons/md";

const BestTime = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="bestTime">
      <div className="wrapper">
        <div className="bestTime__header">
          <p className="title">Jiri Through the Seasons</p>
          <p className="desc">
            Each season in Jiri provides distinct experiences, from spring's
            rhododendron spectacle to autumn's perfect trekking conditions,
            winter's serene beauty, and monsoon's cultural richness.
          </p>
        </div>
        <div className="bestTime__seasonRow">
          <div id="spring" className="bestTime__seasonCol">
            <img
              loading="lazy"
              src="gurasPark.webp"
              alt="Guras Park"
              className="img-fluid"
            />
            <div className="txt">
              <div className="season">
                <FaLeaf className="icon" />
                <p>Spring</p>
              </div>
              <span>
                Witness rhododendrons blooming in pink, red and white from end
                of March to April with pleasant temperatures between 10°C and
                20°c.
              </span>
            </div>
          </div>
          <div id="summer" className="bestTime__seasonCol">
            <img
              loading="lazy"
              src="jiri4.webp"
              alt="Guras Park"
              className="img-fluid"
            />
            <div className="txt">
              <div className="season">
                <FaLeaf className="icon" />
                <p>Monsoon</p>
              </div>
              <span>
                Enjoy lush green landscapes and forests, cultural site
                exploration, traditional cheese making experiences, and
                authentic village life immersion.
              </span>
            </div>
          </div>
          <div id="autumn" className="bestTime__seasonCol">
            <img
              loading="lazy"
              src="jiri3.webp"
              alt="Guras Park"
              className="img-fluid"
            />
            <div className="txt">
              <div className="season">
                <FaLeaf className="icon" />
                <p>Autumn</p>
              </div>
              <span>
                Peak trekking season with clear, dry weather and temperatures
                ranging from 10 to 25 degrees Celsius, providing excellent
                mountain visibility view
              </span>
            </div>
          </div>
          <div id="winter" className="bestTime__seasonCol">
            <img
              loading="lazy"
              src="snowfall.webp"
              alt="Guras Park"
              className="img-fluid"
            />
            <div className="txt">
              <div className="season">
                <FaLeaf className="icon" />
                <p>Winter</p>
              </div>
              <span>
                Experience crisp mountain views, peaceful temple visits, and
                cozy lodge stays with spectacular snow-capped peak scenery.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default BestTime;
