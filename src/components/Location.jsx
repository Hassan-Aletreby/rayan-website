import { useContext, useRef, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { LangContext } from "../context/LangContext";
import "leaflet/dist/leaflet.css";

const LocationMap = () => {
  const { translations } = useContext(LangContext);
  const [position] = useState([31.45746, 31.71221]);
  const markerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (markerRef.current) markerRef.current.openPopup();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const getDirections = () => {
    window.open("https://maps.app.goo.gl/SKSKYUPWDUo1aj6c8?g_st=iwb", "_blank");
  };

  return (
    <section
      id="location"
      style={{
        color: "var( --bg-color)",
        height: "100vh",
        paddingTop: "70px",
      }}>
      <h2>{translations.location_section_title}</h2>
      <div
        style={{
          width: "100%",
          margin: "0 auto",
          height: "500px",
          overflow: "hidden",
        }}>
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker
            position={position}
            icon={
              new Icon({
                iconUrl:
                  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
                iconSize: [32, 32],
                iconAnchor: [16, 32],
                popupAnchor: [0, -32],
              })
            }
            ref={markerRef}>
            <Popup>
              {translations.location_popup_text}
              <br />
              <button
                onClick={getDirections}
                style={{
                  marginTop: "10px",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  border: "none",
                  background: "var( --text-color)",
                  color: "#fff",
                  cursor: "pointer",
                }}>
                {translations.get_directions_button}
              </button>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default LocationMap;
