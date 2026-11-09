import { useEffect, useState } from "react";
import Mock from "./Mock";
import type { MockKind } from "./Mock";

type Slide = {
  kind: MockKind;
  stage: "blue" | "soft" | "light" | "ink";
  tag: string;
  title: string;
  text: string;
};

const slides: Slide[] = [
  {
    kind: "app",
    stage: "blue",
    tag: "UI/UX design",
    title: "App interfaces people understand",
    text: "Research, flows and screens tested with real users before development starts.",
  },
  {
    kind: "site",
    stage: "soft",
    tag: "Web design",
    title: "Websites that explain and convert",
    text: "Responsive sites designed around what your visitors need to find.",
  },
  {
    kind: "dash",
    stage: "light",
    tag: "Data and reporting",
    title: "Dashboards you can read at a glance",
    text: "Clean data and clear charts that show what to do next.",
  },
  {
    kind: "net",
    stage: "ink",
    tag: "Network and security",
    title: "Networks built with security in",
    text: "Firewalls, VPNs and hardening, tested before you rely on them.",
  },
];

const DURATION = 5500;

export default function Showreel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = setTimeout(() => setIndex((n) => (n + 1) % slides.length), DURATION);
    return () => clearTimeout(id);
  }, [index, paused, reduceMotion]);

  const slide = slides[index];

  return (
    <div
      className="reel"
      role="group"
      aria-roledescription="carousel"
      aria-label="Featured design work"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className={`stage stage-${slide.stage}`}>
        <Mock kind={slide.kind} />
      </div>

      <div className="reel-tabs">
        {slides.map((s, i) => (
          <button
            key={s.tag}
            type="button"
            className={i === index ? "on" : ""}
            aria-label={`Show ${s.tag}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
          >
            <span
              key={i === index ? `a${index}` : `b${i}`}
              className={paused || reduceMotion ? "static" : ""}
              style={{ animationDuration: `${DURATION}ms` }}
            />
          </button>
        ))}
      </div>

      <div className="reel-cap" aria-live="polite">
        <p className="reel-tag">{slide.tag}</p>
        <h3>{slide.title}</h3>
        <p>{slide.text}</p>
        <a className="text-link" href="#services">
          See our services
        </a>
      </div>
    </div>
  );
}