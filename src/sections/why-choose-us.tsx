import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { DOMAIN_AREAS, PROCESS_STEPS } from "@/constants/site";
import { resolveIcon } from "@/lib/icon-map";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20">
      <Container className="flex flex-col gap-12">
        <SectionTitle
          eyebrow="Why choose Lumina"
          title="Specialised programs designed to fuel innovation"
          subtitle="Seven practice areas, one delivery standard — each led by people who have shipped the work themselves."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {DOMAIN_AREAS.map((area) => {
            const Icon = resolveIcon(area.icon);
            return (
              <motion.article
                key={area.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="glass-panel flex h-full gap-4 rounded-3xl p-6"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-semibold">{area.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {area.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="mt-4">
          <SectionTitle
            eyebrow="How we deliver"
            title="A structured three-step approach"
            subtitle="From diagnosis to delivery, every program follows the same disciplined path."
          />
          <motion.ol
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-10 grid gap-5 md:grid-cols-3"
          >
            {PROCESS_STEPS.map((step) => (
              <motion.li key={step.step} variants={fadeUp} className="glass-panel rounded-3xl p-6">
                <span className="font-display text-4xl font-bold text-gradient">{step.step}</span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </Container>
    </section>
  );
}