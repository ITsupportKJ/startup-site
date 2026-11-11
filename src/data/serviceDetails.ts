import type { ServiceId } from "./services";

export type Detail = {
  included: { title: string; text: string }[];
  steps: { title: string; text: string }[];
};

// Content for the services that do not have an interactive explainer yet.
export const details: Partial<Record<ServiceId, Detail>> = {
  web: {
    included: [
      {
        title: "Website design",
        text: "A clear, modern design for your business website, planned around what your visitors need to find.",
      },
      {
        title: "UI/UX design",
        text: "Research, user flows and screens for apps and business systems, designed so people can use them without training.",
      },
      {
        title: "Responsive websites",
        text: "Sites that work well on phones, tablets and desktops, tested on real devices.",
      },
      {
        title: "Prototypes",
        text: "Clickable prototypes you can try before anything is built, so changes are cheap.",
      },
      {
        title: "Business web interfaces",
        text: "Dashboards, portals and internal tools your team uses every day, made simple and fast.",
      },
    ],
    steps: [
      {
        title: "Discover",
        text: "We learn about your business, your customers and what the site or app must achieve.",
      },
      {
        title: "Design",
        text: "Wireframes first, then the visual design, reviewed with you at each stage.",
      },
      {
        title: "Prototype",
        text: "A clickable prototype to test with real people before development starts.",
      },
      {
        title: "Build and launch",
        text: "We build, test on real devices and launch, then support you afterwards.",
      },
    ],
  },
  support: {
    included: [
      {
        title: "Technology consultation",
        text: "Independent advice on what technology your business needs, and what it does not.",
      },
      {
        title: "Hardware recommendations",
        text: "Clear recommendations on computers, servers and network equipment that fit your budget.",
      },
      {
        title: "Troubleshooting",
        text: "We find and fix problems with computers, networks, servers and user accounts.",
      },
      {
        title: "IT maintenance",
        text: "Regular checks, updates and backups, so problems are caught before they stop your work.",
      },
    ],
    steps: [
      {
        title: "Report",
        text: "Tell us what is wrong or what you need, by phone, message or the contact form.",
      },
      {
        title: "Diagnose",
        text: "We find the cause and explain it in plain language.",
      },
      {
        title: "Fix",
        text: "We fix the problem, or recommend the best option if it needs new equipment.",
      },
      {
        title: "Follow up",
        text: "We check that it stays fixed and note what we changed.",
      },
    ],
  },
};