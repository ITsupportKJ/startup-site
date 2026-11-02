// Number format: country code + number, digits only (e.g. 15551234567)
const NUMBER = 'YOUR_NUMBER_WITH_COUNTRY_CODE'
const MESSAGE = encodeURIComponent("Hi! I'd like to know more about your services.")

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp"
      href={`https://wa.me/${NUMBER}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      💬 Chat with us
    </a>
  )
}