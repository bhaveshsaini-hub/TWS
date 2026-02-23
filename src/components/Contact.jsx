const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>

      <p>
        We’d love to hear from you. Reach out to us for any queries or
        information.
      </p>

      <div className="contact-details">
        <div className="contact-phone">
          <h4>📞 Phone</h4>

          <div className="phone-row">
            <a href="tel:+919820970885">+91 9820970885</a>
            <span className="divider">|</span>
            <a href="tel:+918652228686">+91 8652228686</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;