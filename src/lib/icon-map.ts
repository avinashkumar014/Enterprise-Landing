import {
  Award,
  BarChart3,
  BookOpen,
  BrainCircuit,
  Briefcase,
  Building2,
  Calendar,
  Compass,
  Cpu,
  GraduationCap,
  Layers,
  LineChart,
  Rocket,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

/** Maps serialisable icon names (from the APIs) to Lucide components. */
export const iconMap: Record<string, LucideIcon> = {
  award: Award,
  "bar-chart": BarChart3,
  book: BookOpen,
  brain: BrainCircuit,
  briefcase: Briefcase,
  building: Building2,
  calendar: Calendar,
  compass: Compass,
  cpu: Cpu,
  graduation: GraduationCap,
  layers: Layers,
  "line-chart": LineChart,
  rocket: Rocket,
  settings: Settings2,
  shield: ShieldCheck,
  sparkles: Sparkles,
  target: Target,
  trending: TrendingUp,
  users: Users,
  workflow: Workflow,
};

export function resolveIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles;
}