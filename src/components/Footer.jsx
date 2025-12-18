import { useContext } from "react";
import { LangContext } from "../context/LangContext";
import {
  FaFacebookF,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  const { translations } = useContext(LangContext);
  return (
    <footer className="footer-section">
      <div className="footer-grid">
        <div className="footer-logo">
          <img src="/images/logo.jpg" alt="Rayan Logo" />
          <h2>{translations.hero_welcome}</h2>
        </div>

        <div className="footer-contact">
          <p>
            <a href="mailto:info@rayan.com">
              <FaEnvelope />
              <span>r45191246@gmail@gmail.com</span>
            </a>
          </p>
          <p>
            <a href="tel:+201020453469">
              <FaPhone />
              <span>+20 102 045 3469</span>
            </a>
          </p>
          <p>
            <a href="tel:+201063254311">
              <FaPhone />
              <span>+20 106 325 4311</span>
            </a>
          </p>
        </div>

        <div className="footer-social">
          <a
            href="https://wa.me/201090681472"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp">
            <FaWhatsapp />
            {translations.watsapp}
          </a>
          <a
            href="https://www.facebook.com/share/14VG3JjocEt/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook">
            <FaFacebookF />
            {translations.facebook}
          </a>
          <a
            href="https://www.instagram.com/rayan445551?igsh=MTNvazRxNzJsOXJ5bQ=="
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram">
            <FaInstagram />
            {translations.instagram}
          </a>
          <a
            href="https://www.linkedin.com/company/rayan%D9%80agri/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn">
            <FaLinkedin />
            {translations.linkedin}
          </a>
        </div>
      </div>
    </footer>
  );
}
