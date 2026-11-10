import Mock from "./Mock";
import type { MockKind } from "./Mock";

// These are example engagements. Replace them with real case studies
// (a real screenshot, client name and results) as you complete projects.
type Item = {
  kind: MockKind;
  tone: "blue" | "soft" | "light" | "ink";
  service: string;
  title: string;
  before: string;
  after: string;
};

const items: Item[] = [
  {
    kind: "rack",
    tone: "light",
    service: "Servers and Active Directory",
    title: "Domain and user-account setup",
    before: "Shared logins and files kept on individual computers, with no control over who could open what.",
    after: "A Windows Server domain with an account for each person, security groups for access and Group Policy for the rules.",
  },
  {
    kind: "site",
    tone: "soft",
    service: "Web design",
    title: "Organisation website redesign",
    before: "An outdated site that loaded slowly and was hard to use on a phone.",
    after: "A responsive site built around what visitors need to find, with a simple enquiry form.",
  },
  {
    kind: "dash",
    tone: "light",
    service: "Data and reporting",
    title: "Weekly sales reporting",
    before: "Sales data spread across spreadsheets, with reports assembled by hand.",
    after: "Cleaned data and one dashboard that refreshes from the same source each week.",
  },
  {
    kind: "net",
    tone: "ink",
    service: "Network and security",
    title: "Office network and firewall rebuild",
    before: "Every device could reach every other, and nobody knew who had access to what.",
    after: "Separated networks, a configured firewall and a VPN for remote staff.",
  },
];

export default function Work() {
  return (
    <section id="work" className="section section-mist">
      <div className="container">
        <div className="section-head">
          <h2 className="display">The kind of work we take on</h2>
          <p className="section-sub">
            Typical problems we are brought in to solve, and what changes
            afterwards.
          </p>
        </div>
        <div className="work-grid">
          {items.map((it) => (
            <article className="work-card" key={it.title}>
              <div className={`stage stage-${it.tone}`}>
                <Mock kind={it.kind} />
              </div>
              <p className="work-tag">{it.service}</p>
              <h3>{it.title}</h3>
              <p className="work-before">{it.before}</p>
              <p className="work-after">{it.after}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}