import { useContext } from "react";
import { LangContext } from "../context/LangContext";
import "../styles/Farms.css";

export default function Farms() {
  const { translations } = useContext(LangContext);

  const { title, labels, list } = translations.farms;

  return (
    <section id="farms" className="farms-section">
      <div className="container">
        <h2 className="farms-title">{title}</h2>

        <div className="farms-grid">
          {list.map((farm, i) => (
            <div className="farm-card" key={i}>
              <div className="farm-img">
                <img src={farm.img} alt={farm.name} />
              </div>

              <div className="farm-overlay"></div>

              <div className="farm-info">
                <h3 className="farm-name">{farm.name}</h3>
              </div>

              <div className="farm-details">
                <p className="farm-text">
                  <strong>{labels.location}</strong> {farm.location}
                </p>

                <p className="farm-text">
                  <strong>{labels.area}</strong> {farm.area}
                </p>

                <p className="farm-text">
                  <strong>{labels.crops}</strong> {farm.crops}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
