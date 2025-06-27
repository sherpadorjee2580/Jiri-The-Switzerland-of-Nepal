import { GiBus } from "react-icons/gi";
import Map from "../Map/Map";
import "../GetThere/style/GetThere.css";

const GetThere = () => {
  return (
    <div className="gettingThere">
      <div className="wrapper">
        <div className="gettingThere__left">
          <p className="title">How to Get There</p>
          <div className="desc">
            <div className="how">
              <div className="how__icon">
                <GiBus className="icon" />
                <p>By Bus</p>
              </div>
              <p className="how__desc">
                Direct Buses to Jiri are available from the Jadibuti, Araniko
                Buss park in Kathmandu
              </p>
            </div>
            <div className="how">
              <div className="how__icon">
                <GiBus className="icon" />
                <p>By Bus</p>
              </div>
              <p className="how__desc">
                Direct Buses to Jiri are available from the Jadibuti, Araniko
                Buss park in Kathmandu
              </p>
            </div>
            <div className="how">
              <div className="how__icon">
                <GiBus className="icon" />
                <p>By Bus</p>
              </div>
              <p className="how__desc">
                Direct Buses to Jiri are available from the Jadibuti, Araniko
                Buss park in Kathmandu
              </p>
            </div>
          </div>
        </div>
        <div
          className="gettingThere__right">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default GetThere;
