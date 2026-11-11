import { Link } from "react-router-dom";
import Showreel from "./Showreel";
import { services } from "../data/services";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-photo" aria-hidden="true" />
      <div className="container hero-inner">
        <h1>Websites, servers, networks and data, built and run by one team.</h1>
        <div className="hero-row">
          <p className="hero-sub">
            AERO is a technology partner for growing businesses. We design
            websites, set up servers and Active Directory, secure networks and
            turn data into reports.
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

        <p className="hero-links-label">Explore a service</p>
        <ul className="hero-links">
          {services.map((s) => (
            <li key={s.id}>
              <Link to={`/services/${s.slug}`}>{s.name}</Link>
            </li>
          ))}
        </ul>

        <Showreel />
      </div>
    </section>
  );
}