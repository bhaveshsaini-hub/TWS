import { useParams } from "react-router-dom";
import { useEffect, useLayoutEffect, useState } from "react";

/* ================= SHARED CUISINE IMAGE ================= */
import menuImage from "../assets/cuisine/menu.jpeg";

const sortImages = (modules) =>
  Object.entries(modules)
    .sort(([a], [b]) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
    )
    .map(([, src]) => src);

const redstoneImages = sortImages(
  import.meta.glob("../assets/hotels/redstone/*.{jpg,jpeg,png}", {
    eager: true,
    import: "default",
  })
);

const shreyasImages = sortImages(
  import.meta.glob("../assets/hotels/shreyas/*.{jpg,jpeg,png}", {
    eager: true,
    import: "default",
  })
);

const matoshreeImages = sortImages(
  import.meta.glob("../assets/hotels/matoshree/*.{jpg,jpeg,png}", {
    eager: true,
    import: "default",
  })
);

/* ================= HOTEL DATA ================= */
const hotelsData = {
  "redstone-resort": {
    name: "Redstone Resort",
    desc: "Luxury beachfront resort with breathtaking sunset views and premium comfort.",
    location: "Nagaon, Alibaug",
    rating: "4.8",
    price: "Call for the best price",
    phone: "+91 86522 28686",
    images: redstoneImages,
    food: menuImage,
    mapLink: "https://www.google.com/maps/search/?api=1&query=Redstone%20Resort%20Nagaon%20Alibaug",
    amenities: ["Beach access", "Family rooms", "Restaurant", "Free parking", "Room service", "Wi-Fi"],
    highlights: [
      "Nagaon beach walking distance 4-5 mins",
      "Sunset-facing spaces for relaxed evenings",
      "Comfortable rooms suited for couples and families",
      "Easy access to local beaches and weekend attractions",
    ],
    rooms: [
      { title: "Deluxe Stay", detail: "Spacious room with modern comfort and private bath." },
      { title: "Family Suite", detail: "Extra room for families, group stays, and longer trips." },
      { title: "Premium View", detail: "Best suited for guests who want a more scenic stay." },
    ],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.135858934158!2d72.8962357746543!3d18.61295806634667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8712cf94b0a35%3A0x4bc52556df83d26d!2sRedstone%20Resort-Nagaon%20Alibaug!5e0!3m2!1sen!2sin!4v1771848644793!5m2!1sen!2sin",
  },

  "shreyas-palace": {
    name: "Shreyas Palace",
    desc: "A peaceful hill-side retreat surrounded by greenery, designed for relaxation.",
    location: "Alibaug, Maharashtra",
    rating: "4.7",
    price: "Call for the best price",
    phone: "+91 86522 28686",
    images: shreyasImages,
    food: menuImage,
    mapLink: "https://www.google.com/maps/search/?api=1&query=Shreyas%20Palace%20Alibaug",
    amenities: ["Garden view", "Family rooms", "Fresh meals", "Free parking", "Room service", "Wi-Fi"],
    highlights: [
      "Quiet surroundings for a slow, restful break",
      "Warm rooms with convenient guest services",
      "Good choice for families, friends, and weekend plans",
    ],
    rooms: [
      { title: "Comfort Room", detail: "Simple, calm, and well suited for short getaways." },
      { title: "Family Stay", detail: "More space for shared trips and easy luggage storage." },
      { title: "Garden Side", detail: "A softer stay experience with greenery nearby." },
    ],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.2764118906857!2d72.89674197465418!3d18.606633166540785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be87101a66cd255%3A0x10b47988d9b40d84!2sShreyas%20Palace!5e0!3m2!1sen!2sin!4v1771849020319!5m2!1sen!2sin",
  },

  "matoshree-cottage": {
    name: "Matoshree Cottage",
    desc: "A cozy cottage stay near Nagaon Beach with simple comfort, relaxed service, and a homely coastal feel.",
    location: "Nagaon Beach, Alibaug",
    rating: "4.6",
    price: "Call for the best price",
    phone: "+91 86522 28686",
    images: matoshreeImages,
    food: menuImage,
    mapLink: "https://www.google.com/maps/search/?api=1&query=Matoshree%20Cottage%20Nagaon%20Beach%20Alibaug",
    amenities: ["Near beach", "Family rooms", "Homely meals", "Free parking", "Room service", "Wi-Fi"],
    highlights: [
      "Nagaon beach walking distance 4-5 mins",
      "Comfortable cottage-style stay for families",
      "Peaceful location for weekend trips",
      "Easy access to local food, beach walks, and water activities",
    ],
    rooms: [
      { title: "Cottage Room", detail: "Simple and comfortable room for couples or solo stays." },
      { title: "Family Cottage", detail: "Practical space for families and small groups near the beach." },
      { title: "Weekend Stay", detail: "A relaxed option for short coastal breaks and quick getaways." },
    ],
    map: "https://www.google.com/maps?q=Matoshree%20Cottage%20Nagaon%20Beach%20Alibaug&output=embed",
  },
};

const HotelDetails = () => {
  const { slug } = useParams();
  const hotel = hotelsData[slug];

  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [slug]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setCurrent(0);
      setAutoPlay(true);
    });

    return () => cancelAnimationFrame(frame);
  }, [slug]);

  const showImage = (nextIndex) => {
    setCurrent((nextIndex + hotel.images.length) % hotel.images.length);
    setAutoPlay(false);
  };

  /* ===== STABLE AUTO IMAGE SLIDER ===== */
  useEffect(() => {
    if (!autoPlay || !hotel || hotel.images.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % hotel.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [autoPlay, hotel]);

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
        <div className="hotel-hero-panel reveal-on-scroll">
          <div className="hotel-copy reveal-on-scroll">
            <span className="hotel-kicker">{hotel.location}</span>
            <h1>{hotel.name}</h1>
            <p className="hotel-desc">{hotel.desc}</p>

            <div className="hotel-actions">
              <a className="primary-btn" href={`tel:${hotel.phone.replace(/\s/g, "")}`}>
                Book Now
              </a>
              <a
                className="secondary-btn"
                href={hotel.mapLink}
                target="_blank"
                rel="noreferrer"
              >
                View Map
              </a>
            </div>
          </div>

          <aside className="booking-card reveal-on-scroll reveal-delay-1" aria-label="Quick hotel information">
            <div>
              <span>Rating</span>
              <strong>{hotel.rating}/5</strong>
            </div>
            <div>
              <span>Best Price</span>
              <strong>{hotel.price}</strong>
            </div>
            <div>
              <span>Call</span>
              <strong>{hotel.phone}</strong>
            </div>
          </aside>
        </div>

        <div className="gallery-shell reveal-on-scroll">
          <button
            className="gallery-control prev"
            type="button"
            onClick={() => showImage(current - 1)}
            aria-label="Previous image"
          >
            &lt;
          </button>
          <div className="slider-frame">
            <img src={hotel.images[current]} alt={`${hotel.name} view ${current + 1}`} />
          </div>
          <button
            className="gallery-control next"
            type="button"
            onClick={() => showImage(current + 1)}
            aria-label="Next image"
          >
            &gt;
          </button>
        </div>

        <div className="thumbnail-row reveal-on-scroll reveal-delay-1">
          {hotel.images.map((img, index) => (
            <button
              key={img}
              type="button"
              className={current === index ? "active" : ""}
              onClick={() => showImage(index)}
              aria-label={`Show image ${index + 1}`}
            >
              <img src={img} alt={`${hotel.name} thumbnail ${index + 1}`} />
            </button>
          ))}
        </div>

        <div className="hotel-info-grid">
          <section className="info-panel reveal-on-scroll">
            <h2>Why Guests Like It</h2>
            <ul>
              {hotel.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="info-panel reveal-on-scroll reveal-delay-1">
            <h2>Amenities</h2>
            <div className="amenity-list">
              {hotel.amenities.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>
        </div>

        <section className="hotel-section rooms-section reveal-on-scroll">
          <div className="section-heading">
            <span>Stay Options</span>
            <h2>Rooms For Every Trip</h2>
          </div>
          <div className="room-grid">
            {hotel.rooms.map((room, index) => (
              <article className={`room-card reveal-on-scroll reveal-delay-${index + 1}`} key={room.title}>
                <h3>{room.title}</h3>
                <p>{room.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="hotel-section hotel-menu reveal-on-scroll">
          <div className="section-heading">
            <span>Dining</span>
            <h2>Our Cuisine</h2>
          </div>
          <div className="cuisine-card">
            <img src={hotel.food} alt={`${hotel.name} cuisine`} />
            <p>
              Enjoy authentic local and continental dishes curated by expert chefs,
              with fresh meals available for relaxed family dining.
            </p>
          </div>
        </section>

        <section className="hotel-section hotel-map reveal-on-scroll">
          <div className="section-heading">
            <span>Find Us</span>
            <h2>Location</h2>
          </div>
          <iframe
            src={hotel.map}
            loading="lazy"
            allowFullScreen
            title={`${hotel.name} Location`}
          />
        </section>
      </div>
    </section>
  );
};

export default HotelDetails;
