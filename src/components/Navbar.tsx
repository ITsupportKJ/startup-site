import { useEffect, useState } from "react";
import { Icon } from "./Icons";
import { site } from "../config";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#sectors", label: "Who we build for" },
  { href: "#approach", label: "Approach" },
  { href: "#demo", label: "Dashboard demo" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#top" className="logo" aria-label={`${site.name} home`}>
          <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
            <rect width="32" height="32" rx="8" fill="currentColor" />
            <path
              d="M8 23 16 8l8 15M11.5 18h9"
              stroke="#fff"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
          {site.name}
        </a>

        <button
          type="button"
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="main-nav"
        >
          <Icon name={open ? "close" : "menu"} />
        </button>

        <nav id="main-nav" className={open ? "nav-links open" : "nav-links"}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-dark btn-sm"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}