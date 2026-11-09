import { useState } from "react";
import { services } from "../data/services";
import Mock from "./Mock";

export default function Services() {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <section id="services" className="section section-white">
      <div className="container">
        <div className="section-head">
          <h2 className="display">Design first. Then everything it runs on.</h2>
          <p className="section-sub">
            Use one service or combine them. Everything fits together because
            the same team plans and builds it.
          </p>
        </div>

        <div className="svc-grid">
          <ul className="svc-list">
            {services.map((x, i) => (
              <li key={x.id}>
                <button
                  type="button"
                  className={`svc-btn${i === active ? " on" : ""}`}
                  aria-pressed={i === active}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                >
                  {x.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="svc-panel" aria-live="polite">
            <div className={`stage stage-${s.tone}`}>
              <Mock kind={s.mock} />
            </div>
            <p className="svc-summary">{s.summary}</p>
            <ul className="chips">
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}