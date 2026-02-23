import { useNavigate } from "react-router-dom";

import h1 from "../assets/hotels/redstone/2.png";
import h2 from "../assets/hotels/redstone/3.jpg"; // ✅ FIXED


const Hotels = () => {
  const navigate = useNavigate();

  const hotels = [
    {
      name: "Redstone Resort",
      img: h1,
      slug: "redstone-resort",
      desc: "Luxury beachfront resort with sunset views",
    },
    {
      name: "Shreyas Palace",
      img: h2,
      slug: "shreyas-palace",
      desc: "Hill-side retreat surrounded by nature",
    },

  ];

  return (
    <section className="hotels" id="hotels">
      <h2>Our Hotels</h2>

      <div className="hotel-grid">
        {hotels.map((hotel) => (
          <div
            key={hotel.slug}
            className="hotel-card"
            onClick={() => navigate(`/hotels/${hotel.slug}`)}
          >
            <img src={hotel.img} alt={hotel.name} />
            <h3>{hotel.name}</h3>
            <p>{hotel.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hotels;
