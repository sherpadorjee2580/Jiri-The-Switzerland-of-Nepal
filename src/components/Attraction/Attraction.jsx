import React, { forwardRef } from "react";
import "../Attraction/style/Attraction.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Attraction = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="attraction">
      <div className="wrapper">
        <motion.p
          className="attraction__title"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Must Visit Attraction
        </motion.p>
        <motion.p
          className="attraction__desc"
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Explore these iconic landmarks that showcase Jiri's rich cultural
          heritage and natural beauty.
        </motion.p>
        <motion.div
          className="attraction__row"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="attraction__col">
            <img
              loading="lazy"
              src="buddhaPark.webp"
              alt="buddhaPark-img"
              className="img-fluid"
            />
            <div className="txt">
              <p className="name">Buddha Park</p>
              <p className="desc">
                Buddha Park one of the populat toursit place in jiri located at
                the top of jiri
              </p>
              <div className="location">
                <FaMapMarkerAlt className="icon" />
                <p className="place">Jiri, Buldanda</p>
              </div>
            </div>
          </div>

          <div className="attraction__col">
            <img
              loading="lazy"
              src="cherdung.webp"
              alt="cherdung-img"
              className="img-fluid"
            />
            <div className="txt">
              <p className="name">Cherdung</p>
              <p className="desc">
                A hidden gem with breathtaking viewpoints and cultural
                significance.
              </p>
              <div className="location">
                <FaMapMarkerAlt className="icon" />
                <p className="place">Jiri</p>
              </div>
            </div>
          </div>

          <div className="attraction__col">
            <img
              loading="lazy"
              src="dhungey.webp"
              alt="dhungey-img"
              className="img-fluid"
            />
            <div className="txt">
              <p className="name">Jirel Village</p>
              <p className="desc">
                A small village near Jiri just 3 KM away from jiri bazaar
                inhabited by Jirel caste
              </p>
              <div className="location">
                <FaMapMarkerAlt className="icon" />
                <p className="place">Jiri, Dhungey</p>
              </div>
            </div>
          </div>

          <div className="attraction__col">
            <img
              loading="lazy"
              src="stonepark.webp"
              alt="stonepark-img"
              className="img-fluid"
            />
            <div className="txt">
              <p className="name">Stone Park</p>
              <p className="desc">
                A small park with a beautiful view full of greenary with a
                cultural significance
              </p>
              <div className="location">
                <FaMapMarkerAlt className="icon" />
                <p className="place">Jiri, Pumpa</p>
              </div>
            </div>
          </div>

          <div className="attraction__col">
            <img
              loading="lazy"
              src="airport.webp"
              alt="airport-img"
              className="img-fluid"
            />
            <div className="txt">
              <p className="name">Airport</p>
              <p className="desc">
                Small flat land near Jiri Bazaar used to function as an airport
                long ago.
              </p>
              <div className="location">
                <FaMapMarkerAlt className="icon" />
                <p className="place">Jiri Airport</p>
              </div>
            </div>
          </div>

          <div className="attraction__col">
            <img
              loading="lazy"
              src="Jireshwor-5.webp"
              alt="jireshwori-img"
              className="img-fluid"
            />
            <div className="txt">
              <p className="name">Jireshwori Temple</p>
              <p className="desc">
                Temple located near Jiri with a religious significance.
              </p>
              <div className="location">
                <FaMapMarkerAlt className="icon" />
                <p className="place">Jiri, ward-o5</p>
              </div>
            </div>
          </div>

          <div className="attraction__col">
            <img
              loading="lazy"
              src="jiriLake.webp"
              alt="jiriLake-img"
              className="img-fluid"
            />
            <div className="txt">
              <p className="name">Jireshwori Temple</p>
              <p className="desc">
                Temple located near Jiri with a religious significance.
              </p>
              <div className="location">
                <FaMapMarkerAlt className="icon" />
                <p className="place">Jiri, ward-o5</p>
              </div>
            </div>
          </div>

          <div className="attraction__col">
            <img
              loading="lazy"
              src="gurasPark.webp"
              alt="gurasPark-img"
              className="img-fluid"
            />
            <div className="txt">
              <p className="name">Jireshwori Temple</p>
              <p className="desc">
                Temple located near Jiri with a religious significance.
              </p>
              <div className="location">
                <FaMapMarkerAlt className="icon" />
                <p className="place">Jiri, ward-o5</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
});

export default Attraction;
