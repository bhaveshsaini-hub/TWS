import homeBackground from "../assets/background/home-bg.jpg";

const Hero = () => {
  return (
<section className="hero" id="home" style={{ "--hero-bg": `url(${homeBackground})` }}>

      <div className="hero-overlay"></div>

<div className="hero-content">
  <h1>Alibaug</h1>
  <h2>Luxury Redefined</h2>
  <p>
    Experience world-class comfort surrounded by nature and elegance
  </p>
</div>

    </section>
  );
};

export default Hero;
