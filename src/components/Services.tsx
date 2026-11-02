const services = [
  {
    icon: "💻",
    title: "Web Development",
    text: "Responsive, fast websites and web apps built with modern tools like React.",
  },
  {
    icon: "📊",
    title: "Data Analysis",
    text: "We clean, analyse and interpret your data to uncover patterns and opportunities.",
  },
  {
    icon: "📈",
    title: "Dashboards & Reporting",
    text: "Interactive dashboards that give you a live view of what matters in your business.",
  },
  {
    icon: "⚙️",
    title: "Automation & Custom Software",
    text: "Tools that remove repetitive work and connect the systems you already use.",
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <h2>What we do</h2>
        <p className="section-sub">
          Practical technology services tailored to your business.
        </p>
        <div className="grid">
          {services.map((s) => (
            <div className="card" key={s.title}>
              <div className="icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
