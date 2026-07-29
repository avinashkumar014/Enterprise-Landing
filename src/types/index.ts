/** Shared domain types for the enterprise landing experience. */

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  image: string;
  review: string;
}

export interface Stat {
  id: string;
  title: string;
  value: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface DomainArea {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export type FaqCategory = "course" | "delivery" | "misc";

export interface FaqEntry {
  category: FaqCategory;
  question: string;
  answer: string;
}

export interface LeadResponse {
  success: boolean;
  message: string;
}