import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaArrowUp,
  FaPhone,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import "../styles/SidebarLinks.css";
export default function SidebarLinks() {
  const [showButtons, setShowButtons] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      if (
        scrollPosition > 100 &&
        scrollPosition + windowHeight < documentHeight - 120
      ) {
        setShowButtons(true);
      } else {
        setShowButtons(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showButtons) return null;

  return (
    <>
      <div className="sidebar-desktop">
        <button onClick={scrollToTop} title="Go to Top">
          <FaArrowUp />
        </button>
        <a
          href="https://www.facebook.com/share/14VG3JjocEt/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook">
          <FaFacebookF />
        </a>
        <a
          href="https://wa.me/201090681472"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp">
          <FaWhatsapp />
        </a>
        <a
          href="https://www.instagram.com/rayan445551?igsh=MTNvazRxNzJsOXJ5bQ=="
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram">
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/rayan%D9%80agri/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="tel:+201020453469" title="Call Us">
          <FaPhone />
        </a>
      </div>

      <div className="sidebar-mobile">
        <button onClick={scrollToTop}>
          <FaArrowUp />
        </button>
        <a
          href="https://www.facebook.com/share/14VG3JjocEt/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a
          href="https://wa.me/201090681472"
          target="_blank"
          rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a
          href="https://www.instagram.com/rayan445551?igsh=MTNvazRxNzJsOXJ5bQ=="
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram">
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/rayan%D9%80agri/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="tel:+201020453469">
          <FaPhone />
        </a>
      </div>
    </>
  );
}
