import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { BENEFITS } from "@/constants/site";
import { resolveIcon } from "@/lib/icon-map";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Benefits() {
  return (
    <section id="benefits" className="py-20">
      <Container className="flex flex-col gap-12">
        <SectionTitle
          eyebrow="The Lumina edge"
          title="Enterprise benefits, not just course access"
          subtitle="Key aspects of a strategic training partnership designed for organisations that need capability to move quickly."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {BENEFITS.map((benefit) => {
            const Icon = resolveIcon(benefit.icon);
            return (
              <motion.article
                key={benefit.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="glass-panel h-full rounded-3xl p-6"
              >
                <span className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}