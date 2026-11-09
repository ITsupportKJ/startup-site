const items = [
  {
    title: "Start with the people who will use it",
    text: "We talk to your customers and staff first, so the interface solves their problems, not just the ones in the brief.",
  },
  {
    title: "Design before we build",
    text: "You see and click through prototypes early, which is the cheapest time to change your mind.",
  },
  {
    title: "Build it secure and reliable",
    text: "The team that designs the interface also sets up the servers, network and security behind it.",
  },
  {
    title: "Stay after launch",
    text: "Maintenance, troubleshooting and reporting are part of the service, so the work keeps paying off.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="section section-mist">
      <div className="container approach-grid">
        <div className="section-head">
          <h2 className="display">How we work</h2>
          <p className="section-sub">
            The same approach whether it is an app, a website, a server or a
            report.
          </p>
        </div>
        <div className="acc">
          {items.map((it, i) => (
            <details key={it.title} name="approach" open={i === 0}>
              <summary>{it.title}</summary>
              <p>{it.text}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}