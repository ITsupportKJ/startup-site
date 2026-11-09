const steps = [
  {
    title: "Talk",
    text: "A free consultation to understand your business, your current setup and what is not working.",
  },
  {
    title: "Plan",
    text: "A written scope with deliverables and a price, so you know exactly what you are agreeing to.",
  },
  {
    title: "Deliver",
    text: "We design, build or install, then test it with your team before it goes live.",
  },
  {
    title: "Support",
    text: "Handover, training and ongoing maintenance whenever you need it.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section section-chalk">
      <div className="container">
        <div className="section-head">
          <h2>How a project runs</h2>
          <p className="section-sub">
            The same four steps whether it is a website, a server or a report.
          </p>
        </div>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="step-num">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}