// Edit this list to match the sectors you actually serve.
const sectors = [
  {
    name: "Education",
    text: "School and college websites, portals and secure campus networks.",
  },
  {
    name: "Security services",
    text: "Business websites, reporting and the IT systems that keep operations running.",
  },
  {
    name: "Retail and e-commerce",
    text: "Storefront interfaces and sales dashboards that show what is selling.",
  },
  {
    name: "Offices and SMEs",
    text: "Servers, user accounts, networks and day-to-day IT support.",
  },
  {
    name: "Healthcare and clinics",
    text: "Simple booking interfaces and secured systems for sensitive records.",
  },
  {
    name: "Hospitality",
    text: "Booking flows and websites that work well on any phone.",
  },
];

export default function Sectors() {
  return (
    <section id="sectors" className="section section-white">
      <div className="container">
        <div className="section-head">
          <h2 className="display">Who we build for</h2>
          <p className="section-sub">
            From schools to security firms, we work with organisations that
            need technology people can actually use.
          </p>
        </div>
        <ul className="sector-list">
          {sectors.map((s) => (
            <li key={s.name}>
              <h3>{s.name}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}