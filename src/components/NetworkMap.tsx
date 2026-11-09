import { useState } from "react";
import { services } from "../data/services";
import type { ServiceId } from "../data/services";
import { Icon } from "./Icons";

type Point = { x: number; y: number };

// Positions are percentages of the map area.
const pos: Record<ServiceId | "internet", Point> = {
  internet: { x: 50, y: 7 },
  security: { x: 50, y: 30 },
  infra: { x: 20, y: 58 },
  web: { x: 80, y: 58 },
  data: { x: 50, y: 86 },
  support: { x: 14, y: 18 },
};

type Edge = { from: ServiceId | "internet"; to: ServiceId; soft?: boolean };

const edges: Edge[] = [
  { from: "internet", to: "security" },
  { from: "security", to: "infra" },
  { from: "security", to: "web" },
  { from: "infra", to: "data" },
  { from: "web", to: "data" },
  { from: "support", to: "security", soft: true },
  { from: "support", to: "infra", soft: true },
];

export default function NetworkMap() {
  const [active, setActive] = useState<ServiceId>("security");
  const current = services.find((s) => s.id === active) ?? services[0];

  return (
    <div className="map">
      <p className="map-hint">
        A typical business network. Select a point to see what we do there.
      </p>

      <div className="map-stage">
        <svg
          className="map-lines"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {edges.map((e) => {
            const a = pos[e.from];
            const b = pos[e.to];
            const on = e.from === active || e.to === active;
            return (
              <line
                key={`${e.from}-${e.to}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                vectorEffect="non-scaling-stroke"
                className={`map-line${e.soft ? " soft" : ""}${on ? " on" : ""}`}
              />
            );
          })}
        </svg>

        <div
          className="node-static"
          style={{ left: `${pos.internet.x}%`, top: `${pos.internet.y}%` }}
        >
          Internet
        </div>

        {services.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`node${active === s.id ? " is-active" : ""}`}
            style={{
              left: `${pos[s.id].x}%`,
              top: `${pos[s.id].y}%`,
              ["--i" as string]: i,
            }}
            aria-pressed={active === s.id}
            onClick={() => setActive(s.id)}
            onMouseEnter={() => setActive(s.id)}
            onFocus={() => setActive(s.id)}
          >
            <span className="node-icon">
              <Icon name={s.icon} size={26} />
            </span>
            <span className="node-label">{s.short}</span>
          </button>
        ))}
      </div>

      <div className="map-info" aria-live="polite">
        <h3>{current.name}</h3>
        <p>{current.summary}</p>
        <ul className="chips">
          {current.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a className="text-link" href={`#svc-${current.id}`}>
          Read more about this service
        </a>
      </div>
    </div>
  );
}