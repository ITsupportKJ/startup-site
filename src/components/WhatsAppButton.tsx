import { site } from "../config";
import { Icon } from "./Icons";

export default function WhatsAppButton() {
  // Hidden until a valid number (digits only, with country code) is set.
  if (!/^\d{8,15}$/.test(site.whatsapp)) return null;

  const message = encodeURIComponent("Hi, I'd like to know more about your services.");

  return (
    <a
      className="whatsapp"
      href={`https://wa.me/${site.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <Icon name="message" size={20} />
      Chat with us
    </a>
  );
}