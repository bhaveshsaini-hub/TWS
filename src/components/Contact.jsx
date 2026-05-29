const Contact = () => {
  return (
    <section className="contact reveal-on-scroll" id="contact">
      <h2 className="reveal-on-scroll">Contact Us</h2>

      <p className="reveal-on-scroll reveal-delay-1">
        We’d love to hear from you. Reach out to us for any queries or
        information.
      </p>

      <div className="contact-details reveal-on-scroll reveal-delay-2">
        <div className="contact-phone">
          <h4>📞 Phone</h4>

          <div className="phone-row">
            <a href="tel:+918652228686">+91 86522 28686</a>
            <span className="divider">|</span>
            <a href="tel:+919833991326">+91 98339 91326</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
