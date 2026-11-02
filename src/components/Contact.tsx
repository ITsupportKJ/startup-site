import { useState } from "react";
import type { FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
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

  return (
    <section id="contact">
      <div className="container">
        <h2>Let's talk</h2>
        <p className="section-sub">
          Tell us about your project and we'll get back to you within one
          business day.
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Your name" required />
          <input name="email" type="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows={5}
            placeholder="How can we help?"
            required
          />
          <button
            className="btn btn-primary"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
          {status === "sent" && (
            <p className="form-msg">Thanks! We'll be in touch soon.</p>
          )}
          {status === "error" && (
            <p className="form-msg">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
