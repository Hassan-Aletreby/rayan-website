import { useContext } from "react";
import { LangContext } from "../context/LangContext";
import "../styles/Hero.css";

export default function Hero() {
  const { translations } = useContext(LangContext);

  return (
    <section id="home" className="hero">
      <div className="hero-box">
        <h1 className="hero-title">{translations.hero_welcome}</h1>
        <p className="hero-content">{translations.hero_subtitle}</p>
        <a href="#contact" className="hero-btn">
          {translations.hero_contact}
        </a>
      </div>
    </section>
  );
}
