const Hotels = () => {
  return (
<section className="hotels" id="hotels">

      <h2>Our Hotels</h2>

      <div className="hotel-grid">
        <div className="hotel-card">
          <img src="/src/assets/images/2.png" alt="Hotel 1" />
          <h3>Redstone Resort</h3>
          <p>Luxury beachfront resort with sunset views.</p>
        </div>

        <div className="hotel-card">
          <img src="/src/assets/images/3.jpg" alt="Hotel 2" />
          <h3>Shreyas Palace</h3>
          <p>Hill-side retreat surrounded by nature.</p>
        </div>

        <div className="hotel-card">
          <img src="/src/assets/images/4.png" alt="Hotel 3" />
          <h3>Western Grace</h3>
          <p>Peaceful resort with valley views.</p>
        </div>

        <div className="hotel-card">
          <img src="/src/assets/images/5.png" alt="Hotel 4" />
          <h3>Smita Villa</h3>
          <p>Premium stay near pristine beaches.</p>
        </div>
      </div>
    </section>
  );
};

export default Hotels;
