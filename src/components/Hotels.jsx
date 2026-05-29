import { useNavigate } from "react-router-dom";

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

const Hotels = () => {
  const navigate = useNavigate();

  const hotels = [
    {
      name: "Redstone Resort",
      img: redstoneImages[0],
      slug: "redstone-resort",
      desc: "Luxury beachfront resort with sunset views",
    },
    {
      name: "Shreyas Palace",
      img: shreyasImages[0],
      slug: "shreyas-palace",
      desc: "Hill-side retreat surrounded by nature",
    },
    {
      name: "Matoshree Cottage",
      img: matoshreeImages[0],
      slug: "matoshree-cottage",
      desc: "Cozy cottage stay near Nagaon Beach",
    },
  ];

  return (
    <section className="hotels reveal-on-scroll" id="hotels">
      <h2 className="reveal-on-scroll">Our Hotels</h2>

      <div className="hotel-grid">
        {hotels.map((hotel, index) => (
          <div
            key={hotel.slug}
            className={`hotel-card reveal-on-scroll reveal-delay-${index + 1}`}
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
