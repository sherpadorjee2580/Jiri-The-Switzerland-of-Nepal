import React, { forwardRef } from "react";
import "../Gallery/scss/Gallery.css";

const Gallery = forwardRef((props, ref) => {
  // const opt = ["All", "nature", "art", "events"];
  return (
    <div ref={ref} className="gallery">
      <div className="wrapper">
        <p className="gallery__title">Gallery</p>
        <p className="gallery__desc">
          Take a glimpse into the heart of Jiri — where every photo tells a
          story of nature, culture, and unforgettable adventure.
        </p>
        {/* <p className="gallery__opt">
          {opt.map((btn, id) => (
            <button className="btn" id={id}>
              {btn}
            </button>
          ))}
        </p> */}
        <div className="gallery__row">
          <div className="gallery__col">
            <img
              loading="lazy"
              src="jiri4.webp"
              alt="img"
              className="img-fluid"
              width={380}
            />
            <div className="txt">
              <p>Beautiful Steet View</p>
              <span>Beautiful Steet View of the jiri </span>
            </div>
          </div>
          <div className="gallery__col">
            <img
              loading="lazy"
              src="gurasPark.webp"
              alt="img"
              className="img-fluid"
              width={380}
            />
            <div className="txt">
              <p>Beautiful Steet View</p>
              <span>Beautiful Steet View of the jiri </span>
            </div>
          </div>
          <div className="gallery__col">
            <img
              loading="lazy"
              src="jiriLake.webp"
              alt="img"
              className="img-fluid"
              width={380}
            />
            <div className="txt">
              <p>Beautiful Steet View</p>
              <span>Beautiful Steet View of the jiri </span>
            </div>
          </div>
          <div className="gallery__col">
            <img
              loading="lazy"
              src="stonepark.webp"
              alt="img"
              className="img-fluid"
              width={380}
            />
            <div className="txt">
              <p>Beautiful Steet View</p>
              <span>Beautiful Steet View of the jiri </span>
            </div>
          </div>
          <div className="gallery__col">
            <img
              loading="lazy"
              src="hero.webp"
              alt="img"
              className="img-fluid"
              width={380}
            />
            <div className="txt">
              <p>Beautiful Steet View</p>
              <span>Beautiful Steet View of the jiri </span>
            </div>
          </div>
          <div className="gallery__col">
            <img
              loading="lazy"
              src="buddhaPark.webp"
              alt="img"
              className="img-fluid"
              width={380}
            />
            <div className="txt">
              <p>Beautiful Steet View</p>
              <span>Beautiful Steet View of the jiri </span>
            </div>
          </div>
        </div>
        <button className="gallery__more">Load More</button>
      </div>
    </div>
  );
});

export default Gallery;
