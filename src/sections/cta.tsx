import { motion } from "framer-motion";
import { CalendarClock, MailCheck, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { LeadForm } from "@/components/lead-form";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const ASSURANCES = [
  { icon: MailCheck, text: "A tailored proposal within three working days" },
  { icon: CalendarClock, text: "Discovery call scheduled around your calendar" },
  { icon: ShieldCheck, text: "Your details stay private — no third-party sharing" },
];

export function CallToAction() {
  return (
    <section id="enquire" className="hero-glow py-20">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]"
        >
          <div>
            <motion.h2 id="enquire-heading" variants={fadeUp} className="text-3xl font-bold sm:text-4xl">
              Want to learn more about our{" "}
              <span className="text-gradient">training solutions?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 max-w-lg text-base text-muted-foreground">
              Share a few details about your team and we'll come back with a capability plan built
              for your goals, budget and timeline.
            </motion.p>
            <motion.ul variants={fadeUp} className="mt-8 space-y-4">
              {ASSURANCES.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm text-muted-foreground">{text}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div variants={fadeUp}>
            <LeadForm />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}