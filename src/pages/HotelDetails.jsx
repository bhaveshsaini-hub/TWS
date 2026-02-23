import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

/* ================= REDSTONE RESORT IMAGES ================= */
import r1 from "../assets/hotels/redstone/1.png";
import r2 from "../assets/hotels/redstone/2.png";
import r3 from "../assets/hotels/redstone/3.jpg";
import rFood from "../assets/hotels/redstone/5.png";

/* ================= SHREYAS PALACE IMAGES ================= */
import s1 from "../assets/hotels/shreyas/1.png";
import s2 from "../assets/hotels/shreyas/2.png";
import s3 from "../assets/hotels/shreyas/3.jpg";
import sFood from "../assets/hotels/shreyas/5.png";

/* ================= HOTEL DATA ================= */
const hotelsData = {
  "redstone-resort": {
    name: "Redstone Resort",
    desc: "Luxury beachfront resort with breathtaking sunset views and premium comfort.",
    images: [r1, r2, r3],
    food: rFood,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.135858934158!2d72.8962357746543!3d18.61295806634667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8712cf94b0a35%3A0x4bc52556df83d26d!2sRedstone%20Resort-Nagaon%20Alibaug!5e0!3m2!1sen!2sin!4v1771848644793!5m2!1sen!2sin",
  },

  "shreyas-palace": {
    name: "Shreyas Palace",
    desc: "A peaceful hill-side retreat surrounded by greenery, designed for relaxation.",
    images: [s1, s2, s3],
    food: sFood,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.2764118906857!2d72.89674197465418!3d18.606633166540785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be87101a66cd255%3A0x10b47988d9b40d84!2sShreyas%20Palace!5e0!3m2!1sen!2sin!4v1771849020319!5m2!1sen!2sin",
  },
};

const HotelDetails = () => {
  const { slug } = useParams();
  const hotel = hotelsData[slug];

  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  /* ===== STABLE AUTO IMAGE SLIDER ===== */
  useEffect(() => {
    if (!autoPlay || !hotel || hotel.images.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % hotel.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [autoPlay, hotel?.images?.length]);

  if (!hotel) {
    return (
      <h2 style={{ textAlign: "center", padding: "100px" }}>
        Hotel not found
      </h2>
    );
  }

  return (
<section className="hotel-details">
  <div className="hotel-center">

    <h1>{hotel.name}</h1>
    <p className="hotel-desc">{hotel.desc}</p>

    <div className="slider-frame">
      <img src={hotel.images[current]} alt={hotel.name} />
    </div>

    <div className="thumbnail-row">
      {hotel.images.map((img, index) => (
        <img
          key={index}
          src={img}
          className={current === index ? "active" : ""}
          onClick={() => {
            setCurrent(index);
            setAutoPlay(false);
          }}
        />
      ))}
    </div>

  


    <div className="section-divider"></div>

    <div className="hotel-section hotel-menu">
      <h2>Our Cuisine</h2>
      <img src={hotel.food} alt="Hotel Food" />
      <p>
        Enjoy authentic local and continental dishes curated by expert chefs.
      </p>
    </div>

    <div className="section-divider"></div>

    <div className="hotel-section hotel-map">
      <h2>Location</h2>
      <iframe
        src={hotel.map}
        loading="lazy"
        allowFullScreen
        title={`${hotel.name} Location`}
      />
    </div>

  </div>
</section>
  );
};

export default HotelDetails;