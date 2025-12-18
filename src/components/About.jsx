import { useContext } from "react";
import { LangContext } from "../context/LangContext";
import "../styles/About.css";

export default function About() {
  const { translations } = useContext(LangContext);

  const items = translations?.about_items || [];

  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <h2 className="about-title">{translations?.about_title}</h2>
        <p className="about-desc">{translations?.about_intro}</p>
      </div>

      <div className="container">
        <div className="about-items">
          {items.map((item, i) => (
            <div key={i} className="about-item fade-in">
              <h3>{item.title}</h3>

              {Array.isArray(item.text) ? (
                <ul className="about-list">
                  {item.text.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p>{item.text}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
