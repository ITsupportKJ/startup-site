type Project = {
  title: string;
  problem: string;
  result: string;
  tags: string[];
  image?: string;
};

// Replace these samples with your real projects
const projects: Project[] = [
  {
    title: "Company Website Redesign",
    problem: "An outdated site that was slow and not mobile-friendly.",
    result: "A fast, responsive site with an online enquiry form.",
    tags: ["React", "Web Development"],
    // image: '/projects/project1.png',
  },
  {
    title: "Sales Analytics Dashboard",
    problem: "Sales data scattered across spreadsheets.",
    result: "One dashboard showing revenue, trends and top products.",
    tags: ["Data Analysis", "Dashboard"],
  },
  {
    title: "Booking & Reporting Tool",
    problem: "Manual bookings and weekly reports done by hand.",
    result: "Automated bookings and reports that save hours each week.",
    tags: ["Automation", "Custom Software"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container">
        <h2>Our work</h2>
        <p className="section-sub">A few examples of the problems we solve.</p>
        <div className="grid">
          {projects.map((p) => (
            <div className="card" key={p.title}>
              {p.image ? (
                <img src={p.image} alt={p.title} />
              ) : (
                <div className="thumb" />
              )}
              <h3>{p.title}</h3>
              <p>
                <strong>Problem:</strong> {p.problem}
              </p>
              <p className="result">
                <strong>Result:</strong> {p.result}
              </p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
