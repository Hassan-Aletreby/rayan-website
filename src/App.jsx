import { useState, useEffect, useContext } from "react";
import Navbar from "./components/Navbar";
import SidebarLinks from "./components/Sidebar";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import About from "./components/About";
import Services from "./components/Services";
import Farms from "./components/Farms";
import Partners from "./components/Partners";
import Location from "./components/Location";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { LangContext } from "./context/LangContext";

export default function App() {
  const [loading, setLoading] = useState(true);
  const { lang } = useContext(LangContext);

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="App">
      <Navbar />
      <SidebarLinks />
      <Hero />
      <Slider />
      <About />
      <Services />
      <Farms />
      <Partners />
      <Location />
      <ContactForm />
      <Footer />
    </div>
  );
}
