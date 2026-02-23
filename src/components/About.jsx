import logo from "../assets/hotels/redstone/3.jpeg";

const About = () => {
  return (
    <section id="about" className="about">

      {/* TITLE — always first */}
      <h2 className="about-title">About Us</h2>

      {/* CONTENT CONTAINER */}
      <div className="about-container">

        {/* TEXT */}
        <div className="about-text">
          <p>
            Nestled along the serene coastline of Alibaug, TWC Resorts is a
            collection of thoughtfully designed luxury retreats that bring
            you closer to nature without compromising on comfort.
          </p>

          <p>
            Each of our properties reflects a perfect blend of modern
            elegance and coastal charm, offering peaceful escapes,
            breathtaking views, and warm hospitality.
          </p>
        </div>

        {/* LOGO */}
        <div className="about-logo">
          <img src={logo} alt="TWC Logo" />
        </div>

      </div>
    </section>
  );
};

export default About;
