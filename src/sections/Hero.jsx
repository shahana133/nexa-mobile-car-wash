import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <div className="hero-label">
          NEXA AUTOCARE
        </div>

        <h1>
          PREMIUM CAR CARE.
          <br />
          AT YOUR DOORSTEP.
        </h1>

        <p className="hero-description">
           Mobile car wash and detailing.
          <br />
          We come to you. You enjoy the shine.
        </p>

        <div className="hero-buttons">

          <a
            href="tel:+919999999999"
            className="btn-call"
          >
            <span className="btn-icon">☎</span>
            <span>
              <small>CALL US</small>
              <strong>Book a Service</strong>
            </span>
          </a>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <span className="btn-icon">◉</span>
            <span>
              <small>WHATSAPP</small>
              <strong>Chat With Us</strong>
            </span>
          </a>

        </div>

        <div className="hero-location">
          <span>●</span> MOBILE SERVICE &nbsp; / &nbsp; INDIA
        </div>

      </div>
    </section>
  );
}

export default Hero;