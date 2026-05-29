import logo from "../assets/logo/twc-logo.jpeg";

const About = () => {
  return (
    <section id="about" className="about reveal-on-scroll">

      {/* TITLE — always first */}
      <h2 className="about-title reveal-on-scroll">About Us</h2>

      {/* CONTENT CONTAINER */}
      <div className="about-container">

        {/* TEXT */}
        <div className="about-text reveal-on-scroll reveal-delay-1">
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
        <div className="about-logo reveal-on-scroll reveal-delay-2">
          <img src={logo} alt="TWC Logo" />
        </div>

      </div>
    </section>
  );
};

export default About;
