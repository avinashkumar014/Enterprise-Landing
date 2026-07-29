import type { Feature, Stat, Testimonial } from "@/types";

/** Source data served by the mock API route handlers. */

export const featuresData: Feature[] = [
  {
    id: "skill-mapping",
    title: "Skill Gap Intelligence",
    description:
      "Diagnostic assessments map capability gaps across every team before a single session is scheduled.",
    icon: "target",
  },
  {
    id: "custom-curriculum",
    title: "Custom-Built Curriculum",
    description:
      "Programs are assembled around your roles, tooling and business outcomes — never off the shelf.",
    icon: "layers",
  },
  {
    id: "practitioner-faculty",
    title: "Practitioner Faculty",
    description:
      "Sessions are led by operators from product, data and engineering teams at global enterprises.",
    icon: "users",
  },
  {
    id: "flexible-delivery",
    title: "Flexible Delivery Modes",
    description:
      "Live virtual, on-campus or blended cohorts that flex around delivery cycles and shift patterns.",
    icon: "calendar",
  },
  {
    id: "applied-capstones",
    title: "Applied Capstones",
    description:
      "Teams ship a real internal project, so learning converts into measurable business output.",
    icon: "rocket",
  },
  {
    id: "impact-analytics",
    title: "Impact Analytics",
    description:
      "Dashboards track participation, proficiency lift and post-program adoption for every cohort.",
    icon: "line-chart",
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: "priya-nair",
    name: "Priya Nair",
    designation: "Head of Learning & Development",
    company: "Northbridge Financial",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80",
    review:
      "The cohort design was genuinely tailored to our analytics maturity. Within a quarter our risk teams were shipping models they previously outsourced.",
  },
  {
    id: "daniel-oyelaran",
    name: "Daniel Oyelaran",
    designation: "VP, Engineering",
    company: "Helix Systems",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    review:
      "Faculty who have actually run platform teams made the difference. Our engineers were engaged from week one and the capstone shipped to production.",
  },
  {
    id: "meera-shah",
    name: "Meera Shah",
    designation: "Chief People Officer",
    company: "Vantage Retail Group",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    review:
      "Reporting was the unlock for us. Leadership could finally see proficiency lift per function instead of attendance numbers.",
  },
  {
    id: "arjun-mehta",
    name: "Arjun Mehta",
    designation: "Director, Digital Transformation",
    company: "Corevance Industries",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    review:
      "We rolled out across four countries with zero scheduling friction. The delivery team absorbed every constraint we threw at them.",
  },
];

export const statsData: Stat[] = [
  { id: "professionals", title: "Professionals trained across enterprise cohorts", value: "10K+" },
  { id: "sessions", title: "Live sessions delivered by practitioner faculty", value: "200+" },
  { id: "learners", title: "Active learners inside running programs", value: "5K+" },
  { id: "satisfaction", title: "Average post-program satisfaction score", value: "4.8/5" },
];