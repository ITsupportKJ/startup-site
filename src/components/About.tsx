const points = [
  {
    title: "One team, the whole picture",
    text: "Your website, servers, network and reports are connected. One team means fewer hand-offs and nobody passing the blame between vendors.",
  },
  {
    title: "Security from the start",
    text: "We design networks and systems with security in place, instead of adding it after something goes wrong.",
  },
  {
    title: "Plain-language advice",
    text: "You get clear recommendations and honest costs, including when the cheaper option is the right one.",
  },
  {
    title: "Help after launch",
    text: "Maintenance and troubleshooting are part of what we offer, so you are not left on your own after handover.",
  },
];

export default function About() {
  return (
    <section id="why" className="section section-chalk">
      <div className="container why-grid">
        <div className="section-head">
          <h2>Why businesses choose AERO</h2>
          <p className="section-sub">
            We are a small, focused team that covers design, infrastructure,
            security and data, so you deal with one partner.
          </p>
        </div>
        <ul className="why-list">
          {points.map((p) => (
            <li key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}