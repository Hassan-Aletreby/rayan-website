import "../styles/Loader.css";
import loaderImg from "/images/logo.jpg";

export default function Loader() {
  return (
    <div className="loader-wrapper">
      <img src={loaderImg} alt="Loading..." className="loader-image" />
    </div>
  );
}
