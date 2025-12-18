import { useContext, useEffect, useState, useRef } from "react";
import { LangContext } from "../context/LangContext";
import "../styles/Navbar.css";
import logo from "/images/logo.jpg";
import { FiGlobe } from "react-icons/fi";

export default function Navbar() {
  const { translations, lang, setLang } = useContext(LangContext);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang && savedLang !== lang) {
      setLang(savedLang);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleLang = () => {
    const newLang = lang === "ar" ? "en" : "ar";
    setLang(newLang);
    localStorage.setItem("lang", newLang);

    window.location.reload();
  };

  const navLinks = [
    { id: "home", href: "#home" },
    { id: "about", href: "#about" },
    { id: "services", href: "#services" },
    { id: "farms", href: "#farms" },
    { id: "partners", href: "#partners" },
    { id: "location", href: "#location" },
    { id: "contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : "transparent"}`}>
      <div className="nav-container" ref={menuRef}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="menu-icon" onClick={() => setOpen(!open)}>
          ☰
        </div>

        <ul
          className={`nav-links ${open ? "open" : ""}`}
          style={{
            right: lang === "ar" ? "auto" : "0",
            left: lang === "ar" ? "0" : "auto",
          }}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={active === link.id ? "active" : ""}
                onClick={() => setActive(link.id)}>
                {translations.nav[link.id]}
              </a>
            </li>
          ))}

          <button className="lang-btn" onClick={toggleLang}>
            <FiGlobe /> {lang === "ar" ? "EN" : "AR"}
          </button>
        </ul>
      </div>
    </nav>
  );
}
