import { useState } from "react";
import type { FormEvent } from "react";
import { services } from "../data/services";
import { site } from "../config";
import { Icon } from "./Icons";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!site.formspreeId) {
      console.warn("Contact form: set formspreeId in src/config.ts");
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const whatsappHref = site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
        "Hi, I'd like to know more about your services.",
      )}`
    : "";

  return (
    <section id="contact" className="section section-white">
      <div className="container contact-grid">
        <div>
          <div className="section-head">
            <h2>Tell us what you need</h2>
            <p className="section-sub">
              Describe your project or problem. We will reply within one
              business day with next steps.
            </p>
          </div>
          <ul className="contact-list">
            {site.email && (
              <li>
                <Icon name="mail" size={20} />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            )}
            {whatsappHref && (
              <li>
                <Icon name="message" size={20} />
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  Message us on WhatsApp
                </a>
              </li>
            )}
            {site.location && (
              <li>
                <Icon name="pin" size={20} />
                <span>{site.location}</span>
              </li>
            )}
          </ul>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="c-name">Your name</label>
            <input id="c-name" name="name" type="text" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="c-email">Email</label>
            <input id="c-email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="field">
            <label htmlFor="c-service">What do you need help with?</label>
            <select id="c-service" name="service" defaultValue="Not sure yet">
              {services.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="c-message">Project details</label>
            <textarea id="c-message" name="message" rows={5} required />
          </div>
          {/* Spam trap for Formspree: real people leave this empty */}
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />

          <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          <div aria-live="polite">
            {status === "sent" && (
              <p className="form-msg ok">
                Message sent. We will reply within one business day.
              </p>
            )}
            {status === "error" && (
              <p className="form-msg bad">
                Your message was not sent. Check your connection and try again
                {site.whatsapp ? ", or message us on WhatsApp." : "."}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}