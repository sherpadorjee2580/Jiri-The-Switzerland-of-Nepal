import React, { forwardRef } from "react";
import "../Activities/style/Activities.css";

const Activities = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="activities">
      <div className="container">
        <div className="wrapper">
          <div className="activities__title">
            <p className="title">Activities</p>
            <p className="desc">
              Whether you're seeking mountain trails, cultural exploration, or
              peaceful retreats, Jiri offers unforgettable experiences for every
              kind of traveler.
            </p>
          </div>
          <div className="activities__row">
            <div className="activities__col">
              <img
                src="cherdung.webp"
                alt="cherdung-img"
                loading="lazy"
                className="img-fluid"
              />
              <div className="txt">
                <p>Trekking & Hiking</p>
                <span>
                  Jiri offers an unparalleled trekking experience that combines
                  challenge, authenticity, and natural beauty. As the original
                  gateway to Everest, it provides spectacular mountain
                  views and cultural immersion through traditional Sherpa and
                  Jirel villages.
                </span>
              </div>
            </div>
            <div className="activities__col">
              <img
                src="jiri4.webp"
                alt="jiri-img"
                loading="lazy"
                className="img-fluid"
              />
              <div className="txt">
                <p>Nature & Scenery</p>
                <span>
                  The natural beauty of Jiri combines pristine mountain
                  landscapes, terraced farmlands, lush forests, and
                  crystal-clear rivers and lakes, creating a serene environment that truly
                  justifies its nickname as Switzerland of Nepal. Experience the greenary here at Jiri.
                </span>
              </div>
            </div>
            <div className="activities__col">
              <img
                src="guruRimpoche.webp"
                alt="guruRimpoche-img"
                loading="lazy"
                className="img-fluid"
              />
              <div className="txt">
                <p>Cultural & Religious Sites</p>
                <span>
                  Jiri is a place home to people of different ethinicity and
                  rich in Sherpa and Tibetan culture, and tourists can get a
                  sense of this distinctive culture by touring nearby towns and
                  villages, going to monasteries and temples, and discovering
                  local customs and practices
                </span>
              </div>
            </div>
            <div className="activities__col">
              <img
                src="Rildok.webp"
                alt="Rildok-img"
                loading="lazy"
                className="img-fluid"
              />
              <div className="txt">
                <p>Try Local Foods</p>
                <span>
                  The food in Jiri offers a unique combination of traditional
                  Nepali cuisine enhanced by local Sherpa and Jirel culinary
                  traditions, with distinctive local products like churpi cheese
                  and fresh kiwi that you won't find everywhere in Nepal.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Activities;
