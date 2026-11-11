import { useState } from "react";
import { Icon } from "./Icons";
import type { IconName } from "./Icons";

type NodeId = "firewall" | "vpn" | "switch" | "wifi" | "servers" | "pcs";
type Point = { x: number; y: number };

type NetNode = {
  id: NodeId;
  label: string;
  icon: IconName;
  x: number;
  y: number;
  title: string;
  text: string;
  blocks: string;
  items: string[];
};

// Edit this to match exactly what you configure for clients.
const nodes: NetNode[] = [
  {
    id: "firewall",
    label: "Firewall",
    icon: "shield",
    x: 50,
    y: 27,
    title: "Firewall",
    text: "Sits between your network and the internet and decides what is allowed in and out. We design the rules for your business instead of just plugging it in.",
    blocks: "Unwanted inbound traffic and many automated attacks.",
    items: [
      "Rule design and clean-up",
      "Port and service restrictions",
      "Logging and alerts",
      "Updates and configuration backups",
    ],
  },
  {
    id: "vpn",
    label: "VPN",
    icon: "lock",
    x: 16,
    y: 27,
    title: "VPN",
    text: "Lets staff work from home or from another branch through an encrypted connection, so company systems are never exposed directly to the internet.",
    blocks: "Eavesdropping on remote connections and exposed remote-desktop ports.",
    items: [
      "Remote access VPN",
      "Site-to-site VPN between branches",
      "User access and authentication",
      "Testing and documentation",
    ],
  },
  {
    id: "switch",
    label: "Switch & VLANs",
    icon: "switch",
    x: 50,
    y: 50,
    title: "Switches and VLANs",
    text: "We split the network into separate segments, such as staff, guests and servers, so a problem in one area cannot spread everywhere.",
    blocks: "Malware or an intruder moving freely across the whole network.",
    items: [
      "VLAN design",
      "Guest network separation",
      "Port security",
      "Network documentation",
    ],
  },
  {
    id: "wifi",
    label: "Wi-Fi",
    icon: "wifi",
    x: 18,
    y: 74,
    title: "Wi-Fi",
    text: "Secure wireless for staff, with a separate guest network that has no access to company systems.",
    blocks: "Strangers and unmanaged devices joining your internal network.",
    items: [
      "Strong encryption settings",
      "Separate guest network",
      "Coverage planning",
      "Access control",
    ],
  },
  {
    id: "pcs",
    label: "Computers",
    icon: "monitor",
    x: 82,
    y: 74,
    title: "Staff computers",
    text: "Security settings applied consistently to every machine, so one weak laptop does not become the way in.",
    blocks: "Malware and weak settings on individual devices.",
    items: [
      "Security baselines",
      "Endpoint protection setup",
      "Update settings",
      "Admin rights review",
    ],
  },
  {
    id: "servers",
    label: "Servers",
    icon: "server",
    x: 50,
    y: 90,
    title: "Servers",
    text: "Hardened so only the services you need are running, with patching, access control and backups in place.",
    blocks: "Known vulnerabilities and unauthorised access to your data.",
    items: [
      "Security hardening",
      "Patch and update plan",
      "Least-privilege access",
      "Backup and recovery checks",
    ],
  },
];

type Edge = { from: NodeId | "internet"; to: NodeId | "internet"; soft?: boolean };

const edges: Edge[] = [
  { from: "internet", to: "firewall" },
  { from: "vpn", to: "firewall", soft: true },
  { from: "firewall", to: "switch" },
  { from: "switch", to: "wifi" },
  { from: "switch", to: "pcs" },
  { from: "switch", to: "servers" },
];

const pos: Record<string, Point> = {
  internet: { x: 50, y: 6 },
  ...Object.fromEntries(nodes.map((n) => [n.id, { x: n.x, y: n.y }])),
};

export default function Security() {
  const [active, setActive] = useState<NodeId>("firewall");
  const current = nodes.find((n) => n.id === active) ?? nodes[0];

  return (
    <section id="security" className="section section-mist">
      <div className="container">
        {/* <div className="section-head">
          <h2 className="display">Network and cybersecurity, designed in and tested</h2>
          <p className="section-sub">
            We design your network with security built in, then test it so you
            know where the gaps are. Explore a typical office network below.
          </p>
        </div> */}

        <div className="ad-grid">
          <div className="sm">
            <div className="ad-tree-head">
              <span>A typical office network</span>
              <span className="ad-chip">Example</span>
            </div>
            <div className="sm-stage">
              <svg
                className="sm-lines"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {edges.map((e) => {
                  const a = pos[e.from];
                  const b = pos[e.to];
                  const on = e.from === active || e.to === active;
                  return (
                    <line
                      key={`${e.from}-${e.to}`}
                      x1={a.x}
                      y1={a.y}
                      x2={b.x}
                      y2={b.y}
                      vectorEffect="non-scaling-stroke"
                      className={`sm-line${e.soft ? " soft" : ""}${on ? " on" : ""}`}
                    />
                  );
                })}
              </svg>

              <div
                className="sm-net"
                style={{ left: `${pos.internet.x}%`, top: `${pos.internet.y}%` }}
              >
                Internet
              </div>

              {nodes.map((n) => (
                <button
                  key={n.id}
                  type="button"
                  className={`sm-node${active === n.id ? " on" : ""}`}
                  style={{ left: `${n.x}%`, top: `${n.y}%` }}
                  aria-pressed={active === n.id}
                  onClick={() => setActive(n.id)}
                  onMouseEnter={() => setActive(n.id)}
                  onFocus={() => setActive(n.id)}
                >
                  <span className="sm-icon">
                    <Icon name={n.icon} size={24} />
                  </span>
                  <span className="sm-label">{n.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="ad-panel" aria-live="polite">
            <span className="ad-badge k-domain">{current.label}</span>
            <h3>{current.title}</h3>
            <p>{current.text}</p>
            <div className="sm-threat">
              <small>What it protects against</small>
              {current.blocks}
            </div>
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
      </div>
    </section>
  );
}