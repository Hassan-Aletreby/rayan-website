import { useContext } from "react";
import { LangContext } from "../context/LangContext";
import "../styles/Service.css";

export default function Services() {
  const { translations } = useContext(LangContext);

  const services = translations?.services_list || [];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="services-title">{translations?.services_title}</h2>
        <p className="services-intro">{translations?.services_intro}</p>

        <div className="services-grid">
          {services.map((srv, i) => (
            <div className="service-card" key={i}>
              <div className="img-wrapper">
                <img src={srv.img} alt={srv.title} className="service-img" />
              </div>

              <div className="service-content">
                <h3>{srv.title}</h3>

                <ul className="service-list">
                  {srv.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
