import Showreel from "./Showreel";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <h1>We design interfaces people understand, and the technology behind them.</h1>
        <div className="hero-row">
          <p className="hero-sub">
            AERO is a UI/UX and web studio that also builds the networks,
            servers and reports your business runs on.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Book a free consultation
            </a>
            <a href="#services" className="btn btn-ghost">
              See our services
            </a>
          </div>
        </div>
        <Showreel />
      </div>
    </section>
  );
}