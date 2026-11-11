import { useState } from "react";
import { Icon } from "./Icons";

type Kind = "forest" | "domain" | "dc" | "ou" | "user" | "group" | "gpo";

type TreeNode = {
  id: string;
  kind: Kind;
  label: string;
  sample?: string;
  depth: number;
  badge: string;
  title: string;
  text: string;
  items: string[];
};

// Edit this to match exactly what you configure for clients.
const tree: TreeNode[] = [
  {
    id: "forest",
    kind: "forest",
    label: "Forest",
    sample: "company.local",
    depth: 0,
    badge: "F",
    title: "Forest design",
    text: "The top level of your directory. We plan how many domains you need, how they trust each other and how the whole structure will grow with your business.",
    items: [
      "Forest and domain planning",
      "Trust relationships",
      "Functional levels",
      "Global catalog and schema",
    ],
  },
  {
    id: "domain",
    kind: "domain",
    label: "Domain",
    sample: "company.local",
    depth: 1,
    badge: "D",
    title: "Domains",
    text: "One domain is enough for most small and mid-sized businesses. For larger companies we add child domains and keep everything organised and documented.",
    items: [
      "New domain setup",
      "DNS for the domain",
      "Child domains",
      "Migrations and upgrades",
    ],
  },
  {
    id: "dc",
    kind: "dc",
    label: "Domain controllers",
    depth: 2,
    badge: "DC",
    title: "Domain controllers",
    text: "The servers that run your directory. We deploy them on physical or virtual servers, add a second one so a single failure does not stop your office, and set up replication.",
    items: [
      "Windows Server installation",
      "Promotion to domain controller",
      "Replication and backup",
      "Virtualization",
    ],
  },
  {
    id: "ou",
    kind: "ou",
    label: "Organizational units",
    depth: 2,
    badge: "OU",
    title: "Organizational units",
    text: "A clear folder structure for your directory, such as one unit per department or site, so permissions and policies are simple to manage.",
    items: [
      "OU structure by team or site",
      "Delegated administration",
      "Naming standards",
    ],
  },
  {
    id: "users",
    kind: "user",
    label: "Users",
    depth: 3,
    badge: "U",
    title: "User accounts",
    text: "One account for every person, with the right access from the first day, and a clean process for new starters and people who leave.",
    items: [
      "Create and import accounts",
      "Password and lockout policies",
      "Onboarding and offboarding",
      "Bulk changes",
    ],
  },
  {
    id: "groups",
    kind: "group",
    label: "Security groups",
    depth: 3,
    badge: "G",
    title: "Security groups",
    text: "Access is given to groups instead of individuals, so adding someone to a team gives them everything they need in one step.",
    items: [
      "Role-based groups",
      "Shared folder permissions",
      "Application access",
    ],
  },
  {
    id: "gpo",
    kind: "gpo",
    label: "Group Policy",
    depth: 3,
    badge: "GP",
    title: "Group Policy",
    text: "Settings applied to every computer and user automatically, such as password rules, drive mappings and security baselines.",
    items: [
      "Security baselines",
      "Drive and printer mapping",
      "Update and software settings",
      "Login restrictions",
    ],
  },
  {
    id: "child",
    kind: "domain",
    label: "Child domain",
    sample: "branch.company.local",
    depth: 1,
    badge: "D",
    title: "Branches and child domains",
    text: "For companies with several locations or separate business units, we design sites and child domains so each location works well on its own and stays connected.",
    items: [
      "Sites and subnets",
      "Child domain setup",
      "Cross-site replication",
      "Trust setup",
    ],
  },
];

const steps = [
  {
    title: "Plan",
    text: "We map your people, locations and needs, then design the forest, domains and structure on paper first.",
  },
  {
    title: "Deploy",
    text: "We install Windows Server, build the domain controllers and set up DNS and replication.",
  },
  {
    title: "Configure",
    text: "We create users and groups, apply Group Policy and set file and application permissions.",
  },
  {
    title: "Hand over",
    text: "Documentation, a security check, backups and training, so your team can run it day to day.",
  },
];

const reasons = [
  "Setting up a new office or domain",
  "Moving from a workgroup to a managed domain",
  "Upgrading ageing servers",
  "Cleaning up a messy directory",
  "Connecting a branch office",
];

export default function Infrastructure() {
  const [active, setActive] = useState("domain");
  const current = tree.find((n) => n.id === active) ?? tree[0];

  return (
    <section id="servers" className="section section-mist">
      <div className="container">
        {/* <div className="section-head">
          <h2 className="display">Servers and Active Directory, set up properly</h2>
          <p className="section-sub">
            We plan, build and secure the Windows Server and Active Directory
            environment your team signs in to every day: forests, domains,
            users, groups and policies.
          </p>
        </div>  */}

        <div className="ad-grid">
          <div className="ad-tree">
            <div className="ad-tree-head">
              <span>Directory structure</span>
              <span className="ad-chip">Example</span>
            </div>
            <ul className="ad-rows">
              {tree.map((n) => (
                <li key={n.id} style={{ ["--d" as string]: n.depth }}>
                  <button
                    type="button"
                    className={`ad-btn${n.id === active ? " on" : ""}`}
                    aria-pressed={n.id === active}
                    onClick={() => setActive(n.id)}
                    onMouseEnter={() => setActive(n.id)}
                    onFocus={() => setActive(n.id)}
                  >
                    <span className={`ad-badge k-${n.kind}`}>{n.badge}</span>
                    <span className="ad-name">{n.label}</span>
                    {n.sample && <code>{n.sample}</code>}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="ad-panel" aria-live="polite">
            <span className={`ad-badge k-${current.kind}`}>{current.badge}</span>
            <h3>{current.title}</h3>
            <p>{current.text}</p>
            <p className="ad-list-title">What we set up</p>
            <ul className="ad-list">
              {current.items.map((item) => (
                <li key={item}>
                  <Icon name="check" size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ol className="ad-steps">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="ad-num">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="ad-cta">
          <div>
            <h3>Setting up a new domain, or fixing an existing one?</h3>
            <p>
              Book a free infrastructure consultation. Tell us about your
              servers and users, and we will explain what we would change and
              in what order.
            </p>
            <a href="#contact" className="btn btn-light">
              Book an infrastructure consultation
            </a>
          </div>
          <ul className="ad-reasons">
            {reasons.map((r) => (
              <li key={r}>
                <Icon name="check" size={16} />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}