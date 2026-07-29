import type { Benefit, DomainArea, FaqEntry, NavLink, ProcessStep } from "@/types";

export const SITE = {
  name: "Lumina Enterprise",
  tagline: "Next-gen expertise for your enterprise",
  description:
    "Corporate learning programs that close skill gaps fast — custom curriculum, practitioner faculty and measurable capability lift for enterprise teams.",
  email: "enterprise@lumina.example",
  phone: "+91 98765 43210",
  address: "4th Floor, Cyber Hub, Gurugram, India",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Impact", href: "#impact" },
  { label: "Benefits", href: "#benefits" },
  { label: "Why us", href: "#why-us" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export const HERO_HIGHLIGHTS = [
  "Tailored solutions",
  "Industry insights",
  "Expert guidance",
  "Measurable impact",
] as const;

export const PARTNER_LOGOS = [
  "Northbridge",
  "Helix Systems",
  "Vantage Group",
  "Corevance",
  "Lumen Health",
  "Arcadia Bank",
  "Meridian Tech",
] as const;

export const BENEFITS: Benefit[] = [
  {
    title: "Outcome-led program design",
    description:
      "Every engagement starts from a business metric — cycle time, adoption, retention — not a course catalogue.",
    icon: "target",
  },
  {
    title: "Enterprise-grade delivery",
    description:
      "Dedicated program managers, SLA-backed scheduling and cohort reporting across geographies.",
    icon: "shield",
  },
  {
    title: "Blended learning stack",
    description:
      "Live labs, async modules, mentor hours and assessments combined into one coherent journey.",
    icon: "layers",
  },
  {
    title: "Leadership visibility",
    description:
      "Executive dashboards translate learning activity into capability and readiness signals.",
    icon: "bar-chart",
  },
  {
    title: "Certification pathways",
    description:
      "Recognised credentials that give teams a durable, portable record of new capability.",
    icon: "award",
  },
  {
    title: "Continuous iteration",
    description:
      "Cohort feedback loops refine the curriculum between waves so the program keeps improving.",
    icon: "workflow",
  },
];

export const DOMAIN_AREAS: DomainArea[] = [
  {
    title: "Product & Innovation",
    description: "Discovery, roadmapping and product operating models for cross-functional teams.",
    icon: "compass",
  },
  {
    title: "Gen-AI Mastery",
    description: "Applied LLM workflows, evaluation and responsible deployment inside the enterprise.",
    icon: "brain",
  },
  {
    title: "Leadership Elevation",
    description: "People leadership, strategic decision-making and change management at scale.",
    icon: "users",
  },
  {
    title: "Tech & Data",
    description: "Data engineering, analytics and platform practices for modern delivery teams.",
    icon: "cpu",
  },
  {
    title: "Operations Excellence",
    description: "Process design, automation and continuous improvement across the value chain.",
    icon: "settings",
  },
  {
    title: "Digital Enterprise",
    description: "Transformation playbooks that connect technology investment to customer outcomes.",
    icon: "building",
  },
  {
    title: "Fintech Innovation",
    description: "Payments, risk and regulatory technology fundamentals for financial services teams.",
    icon: "trending",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Skill gap analysis",
    description:
      "We benchmark current capability by role and surface the gaps that actually block delivery.",
  },
  {
    step: "02",
    title: "Customised training plan",
    description:
      "A roadmap is built around your goals, tooling and calendar, with clear success measures.",
  },
  {
    step: "03",
    title: "Flexible program delivery",
    description:
      "Cohorts run in the format your teams can sustain, with reporting after every milestone.",
  },
];

export const FAQ_TABS: { id: FaqEntry["category"]; label: string }[] = [
  { id: "course", label: "About the course" },
  { id: "delivery", label: "About the delivery" },
  { id: "misc", label: "Miscellaneous" },
];

export const FAQS: FaqEntry[] = [
  {
    category: "course",
    question: "What types of corporate training programs do you offer?",
    answer:
      "Customisable, industry-specific programs across leadership, technology, data, operations, fintech and generative AI — each shaped around your organisation's role structure and goals.",
  },
  {
    category: "course",
    question: "Which domain specialisations are available?",
    answer:
      "Leadership development, tech and data, fintech, digital business, product innovation, operations management and applied generative AI.",
  },
  {
    category: "course",
    question: "Can programs be mapped to internal competency frameworks?",
    answer:
      "Yes. We map every module to your competency matrix so progression is reported in the language your HR systems already use.",
  },
  {
    category: "delivery",
    question: "How are sessions delivered?",
    answer:
      "Live virtual classrooms, on-site workshops or a blended model. Cohorts typically run two to three sessions a week with async labs in between.",
  },
  {
    category: "delivery",
    question: "What is the typical program duration?",
    answer:
      "Focused sprints run four to six weeks; full certification tracks run eight to twenty-four weeks depending on depth and cohort availability.",
  },
  {
    category: "delivery",
    question: "Can you support globally distributed teams?",
    answer:
      "We run parallel cohorts across time zones with shared curriculum, localised scheduling and a single consolidated reporting view.",
  },
  {
    category: "misc",
    question: "What is the minimum cohort size?",
    answer:
      "Enterprise cohorts usually start at fifteen participants, though we run smaller leadership intensives on request.",
  },
  {
    category: "misc",
    question: "How is program impact measured?",
    answer:
      "Baseline and exit assessments, capstone review scores, manager feedback and adoption metrics gathered ninety days post-program.",
  },
];

export const FOOTER_LINKS: { title: string; links: NavLink[] }[] = [
  {
    title: "Solutions",
    links: [
      { label: "Leadership programs", href: "#capabilities" },
      { label: "Gen-AI enablement", href: "#capabilities" },
      { label: "Data & analytics", href: "#capabilities" },
      { label: "Operations excellence", href: "#capabilities" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why choose us", href: "#why-us" },
      { label: "Client impact", href: "#impact" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Get started",
    links: [
      { label: "Talk to our team", href: "#enquire" },
      { label: "Request a proposal", href: "#enquire" },
      { label: "Book a discovery call", href: "#enquire" },
    ],
  },
];