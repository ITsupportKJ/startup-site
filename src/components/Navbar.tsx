import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "./Icons";
import { site } from "../config";
import { services } from "../data/services";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  const close = () => {
    setOpen(false);
    setSub(false);
  };

  useEffect(() => {
    if (!open && !sub) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setSub(false);
      }
    };
    const onDown = (e: MouseEvent) => {
      if (sub && dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setSub(false);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onDown);
    };
  }, [open, sub]);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="logo" aria-label={`${site.name} home`} onClick={close}>
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
        </Link>

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
          <div className="nav-drop" ref={dropRef}>
            <button
              type="button"
              className="nav-drop-btn"
              aria-expanded={sub}
              aria-controls="svc-menu"
              onClick={() => setSub(!sub)}
            >
              Services
              <span className="caret" aria-hidden="true" />
            </button>
            <ul id="svc-menu" className={sub ? "nav-menu show" : "nav-menu"}>
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={`/services/${s.slug}`} onClick={close}>
                    {s.name}
                  </Link>
                </li>
              ))}
              <li className="all">
                <Link to="/#services" onClick={close}>
                  Overview of all services
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/#work" onClick={close}>
            Work
          </Link>
          <Link to="/#approach" onClick={close}>
            Approach
          </Link>
          <a href="#contact" className="btn btn-dark btn-sm" onClick={close}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}