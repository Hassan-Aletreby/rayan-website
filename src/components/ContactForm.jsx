import { useContext, useState } from "react";
import { LangContext } from "../context/LangContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/ContactForm.css";

export default function ContactForm() {
  const { lang, translations } = useContext(LangContext);
  const t = translations.contact;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const services = [
    { key: "supply", value: t.services.supply },
    { key: "consulting", value: t.services.consulting },
    { key: "palm", value: t.services.palm },
    { key: "management", value: t.services.management },
    { key: "visit", value: t.services.visit },
    { key: "daily", value: t.services.daily },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errs = {};

    if (!form.name) errs.name = t.required;
    if (!form.phone) errs.phone = t.required;
    if (!form.whatsapp) errs.whatsapp = t.required;
    if (!form.service) errs.service = t.required;

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error(t.error);
      return;
    }

    try {
      const response = await fetch(
        "https://oxyhdbfswnrwshggjdsf.supabase.co/rest/v1/requests",
        {
          method: "POST",
          headers: {
            apikey: "sb_publishable_bwsuXSYeTFkxZDbxLqlbFQ_2eUkTCvo",
            Authorization:
              "Bearer sb_publishable_bwsuXSYeTFkxZDbxLqlbFQ_2eUkTCvo",
            "Content-Type": "application/json",
            Prefer: "return=representation",
          },
          body: JSON.stringify({
            user_name: form.name,
            phone_number: form.phone,
            whatsapp_number: form.whatsapp,
            service: form.service,
            message: form.message,
          }),
        }
      );

      if (!response.ok) {
        // const errText = await response.text();
        // console.error(errText);
        throw new Error("Failed to send");
      }

      toast.success(t.success);

      setForm({
        name: "",
        phone: "",
        whatsapp: "",
        service: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error(error);
      toast.error(t.error);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="contact-title">{t.title}</h2>
        <div className="contact__sub">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={t.name}
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder={t.phone}
                value={form.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="whatsapp"
                placeholder={t.whatsapp}
                value={form.whatsapp}
                onChange={handleChange}
              />
              {errors.whatsapp && (
                <span className="error">{errors.whatsapp}</span>
              )}
            </div>

            <div className="form-group">
              <select
                name="service"
                value={form.service}
                onChange={handleChange}>
                <option value="">{t.service}</option>
                {services.map((s) => (
                  <option key={s.key} value={s.key}>
                    {s.value}
                  </option>
                ))}
              </select>
              {errors.service && (
                <span className="error">{errors.service}</span>
              )}
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder={t.message}
                value={form.message}
                onChange={handleChange}
                rows="4"
              />
            </div>

            <button type="submit" className="submit-btn">
              {t.send}
            </button>
          </form>
          <div className="contact__img">
            {/* <img src="/public/images/contact.jpeg" alt="Contact Us" /> */}
          </div>
        </div>
      </div>

      <ToastContainer
        position={lang === "ar" ? "top-left" : "top-right"}
        autoClose={3000}
        rtl={lang === "ar"}
        theme="colored"
        toastStyle={{
          marginTop: "50px",
        }}
      />
    </section>
  );
}
