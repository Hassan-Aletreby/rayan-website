import { useContext, useState, useEffect } from "react";
import { LangContext } from "../context/LangContext";
import "../styles/Slider.css";

export default function Slider() {
  const { translations } = useContext(LangContext);

  const images = [
    "/images/slider1.jpg",
    "/images/slider2.jpg",
    "/images/slider3.jpg",
    "/images/slider4.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="split-section">
      <div className="container">
        <div className="slider_content">
          <div className="slider-box">
            <img src={images[index]} alt="farm" className="slide-img" />
            <div className="dots">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === index ? "active" : ""}`}
                  onClick={() => setIndex(i)}></span>
              ))}
            </div>
          </div>
          <div className="text-box">
            <h2>{translations?.section_title || ""}</h2>
            <p>{translations?.section_text || ""}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
