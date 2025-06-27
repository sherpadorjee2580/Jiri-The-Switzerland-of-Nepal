import React from "react";
import "../guruRimpoche/style/Guru.css";

const Guru = () => {
  return (
    <div className="guru">
      <div className="wrapper">
        <div className="guru__left">
          <video width={300} controls>
            <source src="Rincpoche.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="guru__right">
          <p className="title">
            Guru Rinpoche Statue: A Spiritual Landmark in Jiri
          </p>
          <div className="desc">
            <div className="intro">
              <p>Introduction</p>
              <span>
                Guru Rinpoche, also known as Padmasambhava, played a vital role
                in spreading Buddhism throughout the Himalayas. The statue being
                built in Jiri is set to become the tallest of its kind,
                symbolizing peace and spiritual enlightenment.
              </span>
            </div>
            <div className="location">
              <p>Location</p>
              <span>
                Nestled in the serene hills of Jiri, this monumental statue of
                Guru Rinpoche, the founder of Tibetan Buddhism, is set to be the
                tallest of its kind.
              </span>
            </div>
            <div className="construction">
              <p>Construction Progress</p>
              <span>
                -> The structural framework is nearing completion, with
                intricate details being added to enhance its artistic and
                spiritual presence.
              </span>
              <span>
                -> Local artisans and monks are actively involved in ensuring
                authenticity and reverence in the design.
              </span>
              <span>
                -> The project aims to attract pilgrims, tourists, and cultural
                enthusiasts from around the world.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guru;
