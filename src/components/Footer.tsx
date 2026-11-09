import { services } from "../data/services";
import { site } from "../config";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-cta">
        <h2 className="display">Have a project in mind?</h2>
        <a href="#contact" className="btn btn-light">
          Request a quote
        </a>
      </div>
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">{site.name}</p>
          <p className="footer-tag">{site.tagline}</p>
        </div>
        <div>
          <p className="footer-head">Services</p>
          <ul>
            {services.map((s) => (
              <li key={s.id}>
                <a href="#services">{s.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-head">Contact</p>
          <ul>
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            )}
            <li>
              <a href="#contact">Send us a message</a>
            </li>
            {site.location && <li>{site.location}</li>}
          </ul>
        </div>
      </div>
      <div className="container footer-base">
        © {year} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}