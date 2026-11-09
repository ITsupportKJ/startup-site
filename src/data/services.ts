import type { MockKind } from "../components/Mock";

export type ServiceId = "web" | "infra" | "security" | "data" | "support";
export type Tone = "blue" | "soft" | "light" | "ink";

export type Service = {
  id: ServiceId;
  name: string;
  mock: MockKind;
  tone: Tone;
  summary: string;
  items: string[];
};

export const services: Service[] = [
  {
    id: "web",
    name: "UI/UX & Web Solutions",
    mock: "site",
    tone: "soft",
    summary:
      "Websites and business interfaces that customers and staff find easy to use. We research, prototype and test the design first, then build it to work on every screen.",
    items: [
      "Website design",
      "UI/UX design",
      "Responsive websites",
      "Prototypes",
      "Business web interfaces",
    ],
  },
  {
    id: "infra",
    name: "IT Infrastructure & Hardware",
    mock: "rack",
    tone: "light",
    summary:
      "Servers, hardware and user accounts set up properly, so your office runs without surprises.",
    items: [
      "Hardware consultation",
      "Server deployment",
      "Virtualization",
      "Windows Server",
      "Active Directory",
    ],
  },
  {
    id: "security",
    name: "Network & Cybersecurity",
    mock: "net",
    tone: "ink",
    summary:
      "Networks designed with security built in, then tested so you know where the gaps are.",
    items: [
      "Network design",
      "Firewall configuration",
      "VPN",
      "Security hardening",
      "Security assessments",
    ],
  },
  {
    id: "data",
    name: "Data Analytics & Reporting",
    mock: "dash",
    tone: "light",
    summary:
      "Messy spreadsheets turned into clean data and reports you can read at a glance.",
    items: [
      "Excel analytics",
      "Data cleaning",
      "R analysis",
      "Dashboards",
      "Business reporting",
    ],
  },
  {
    id: "support",
    name: "IT Consulting & Support",
    mock: "tickets",
    tone: "blue",
    summary:
      "Straight advice on what to buy and how to fix it, and someone to call when things break.",
    items: [
      "Technology consultation",
      "Hardware recommendations",
      "Troubleshooting",
      "IT maintenance",
    ],
  },
];