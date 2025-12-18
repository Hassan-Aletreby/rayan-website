import { useContext } from "react";
import { LangContext } from "../context/LangContext";
import "../styles/Partners.css";

export default function Partners() {
  const { translations } = useContext(LangContext);

  const partners = [
    {
      img: "/images/partners/nakheel.jpg",
      link: "https://www.facebook.com/profile.php?id=100067947497944&mibextid=wwXIfr&rdid=Qrn2zAR8U3qTC8EW&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17avo6Pu1w%2F%3Fmibextid%3DwwXIfr#",
      name: " نخيل مصر",
    },
    {
      img: "/images/partners/fayed.jpg",
      link: "https://www.facebook.com/Egyptpalms?mibextid=wwXIfr&rdid=KgluqRDS7WKvNlBo&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ZuPQ576Zz%2F%3Fmibextid%3DwwXIfr#",
      name: "الفايد للنخيل",
    },
    {
      img: "/images/partners/ashgarna.jpg",
      link: "https://www.facebook.com/OurTrees05?mibextid=wwXIfr&rdid=kULLSEFzS2aBXUDh&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1HsKvNg7Dy%2F%3Fmibextid%3DwwXIfr#",
      name: "أشجارنا",
    },
    {
      img: "/images/partners/amoon.jpg",
      link: "https://www.facebook.com/profile.php?id=100064170001042&mibextid=wwXIfr&rdid=QuaczlM2mCPpCBVq&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16pS5zGbWr%2F%3Fmibextid%3DwwXIfr#",
      name: "امون الزراعية",
    },
    {
      img: "/images/partners/noor.jpeg",
      link: "https://www.noornation.com/?fbclid=IwRlRTSAOvVJ5leHRuA2FlbQIxMABzcnRjBmFwcF9pZAo2NjI4NTY4Mzc5AAEe-muTA0zGqZXgimomFARksy4nvYB8z8Un0nMOCfsMW7awLxDLpYTJbCQuK0o_aem_oLupT49VibTxdqDHyNRHCw",
      name: "نور ناشن",
    },
  ];

  return (
    <section id="partners" className="partners-section">
      <div className="container">
        <h2 className="partners-title">{translations.partners.title}</h2>
        <p className="partners-desc">{translations.partners.desc}</p>

        <div className="partners-grid">
          {partners.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-card">
              <img src={p.img} alt={p.name} />
              {/* <span>{p.name}</span> */}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
