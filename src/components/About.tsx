const points = [
  {
    title: "Clear communication",
    text: "No jargon. You always know where your project stands.",
  },
  {
    title: "Built to last",
    text: "Clean, maintainable work that grows with your business.",
  },
  {
    title: "Results-focused",
    text: "Everything we build is tied to a measurable business goal.",
  },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>Why work with us</h2>
        <p className="section-sub">
          We're a small, focused team that combines software development with
          data skills, so one partner can cover both your website and your
          analytics.
        </p>
        <div className="grid">
          {points.map((p) => (
            <div className="card" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
