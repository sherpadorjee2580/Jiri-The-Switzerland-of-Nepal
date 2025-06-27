import React from "react";
import "../Choose/style/Choose.css";
import { MdLandscape } from "react-icons/md";

const Choose = () => {
  return (
    <div className="choose">
      <div className="wrapper">
        <div className="choose__title">
          <p className="title">Why Choose Jiri</p>
          <p className="desc">
            Discover what makes Jiri a unique destination for nature lovers, art
            enthusiasts, and community seekers.{" "}
          </p>
        </div>
        <div className="choose__row">
          <div className="choose__col">
            <div className="choose__col-icon">
              <MdLandscape className="icon" />
            </div>
            <p className="choose__col-title">Breathtaking Landscapes</p>
            <p className="choose__col-desc">
              Explore stunning mountain views, lush forests, and serene rivers
              that showcase nature's beauty in its purest form.
            </p>
          </div>
          <div className="choose__col">
            <div className="choose__col-icon">
              <MdLandscape className="icon" />
            </div>
            <p className="choose__col-title">Cultureal Richness</p>
            <p className="choose__col-desc">
              Discover the vibrant Sherpa and Tamang cultures, traditional
              villages, and local hospitality that offer an authentic and
              heartwarming experience.
            </p>
          </div>
          <div className="choose__col">
            <div className="choose__col-icon">
              <MdLandscape className="icon" />
            </div>
            <p className="choose__col-title">Gateway Everest</p>
            <p className="choose__col-desc">
              Begin your adventure where history did — Jiri was the original
              route to Everest, offering a scenic and peaceful alternative to
              modern air routes.
            </p>
          </div>
          <div className="choose__col">
            <div className="choose__col-icon">
              <MdLandscape className="icon" />
            </div>
            <p className="choose__col-title">Peaceful Escape</p>
            <p className="choose__col-desc">
              Unwind in a calm, less-crowded destination surrounded by nature —
              perfect for those seeking serenity and off-the-beaten-path
              experiences.
            </p>
          </div>
          <div className="choose__col">
            <div className="choose__col-icon">
              <MdLandscape className="icon" />
            </div>
            <p className="choose__col-title">Trekking & Adventure</p>
            <p className="choose__col-desc">
              Enjoy trekking routes, forest walks, and mountain trails suitable
              for beginners and pros alike, with nature always close at hand.
            </p>
          </div>
          <div className="choose__col">
            <div className="choose__col-icon">
              <MdLandscape className="icon" />
            </div>
            <p className="choose__col-title">Local Organic Cusines</p>
            <p className="choose__col-desc">
              Taste delicious homemade meals prepared with fresh, organic
              ingredients from local farms — a true farm-to-table experience in
              the hills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
