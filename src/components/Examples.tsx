// These are example engagements. Replace them with real case studies
// (add a screenshot, a client name and real results) as you complete projects.
type Example = {
  service: string;
  title: string;
  before: string;
  after: string;
};

const examples: Example[] = [
  {
    service: "Network & Cybersecurity",
    title: "Office network and firewall rebuild",
    before:
      "Every device could reach every other device, and nobody knew who had access to what.",
    after:
      "Separated networks, a configured firewall and a VPN for remote staff, plus a short report on what was fixed.",
  },
  {
    service: "IT Infrastructure & Hardware",
    title: "Server and user-account setup",
    before: "Shared logins and files kept on individual computers.",
    after:
      "A Windows Server with Active Directory, so everyone has their own account and files live in one place.",
  },
  {
    service: "Data Analytics & Reporting",
    title: "Weekly sales reporting",
    before:
      "Sales data spread across several spreadsheets, with reports put together by hand every week.",
    after:
      "Cleaned data and one dashboard that refreshes from the same source each week.",
  },
  {
    service: "UI/UX & Web Solutions",
    title: "Organisation website redesign",
    before: "An outdated site that loaded slowly and was hard to use on a phone.",
    after:
      "A responsive site designed around what visitors need to find, with a simple enquiry form.",
  },
];

export default function Examples() {
  return (
    <section id="examples" className="section section-white">
      <div className="container">
        <div className="section-head">
          <h2>Examples of the work we take on</h2>
          <p className="section-sub">
            Typical problems we are brought in to solve, and what changes
            afterwards.
          </p>
        </div>
        <div className="example-grid">
          {examples.map((e) => (
            <article className="example" key={e.title}>
              <p className="example-service">{e.service}</p>
              <h3>{e.title}</h3>
              <div className="ba before">
                <strong>Before</strong>
                <p>{e.before}</p>
              </div>
              <div className="ba after">
                <strong>After</strong>
                <p>{e.after}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}