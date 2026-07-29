import { motion } from "framer-motion";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { StatsCard } from "@/components/stats-card";
import { statsQueryOptions } from "@/services/landing.service";
import { staggerContainer, viewportOnce } from "@/lib/motion";

export function Stats() {
  const { data: stats } = useSuspenseQuery(statsQueryOptions);

  return (
    <section id="impact" className="py-20">
      <Container className="flex flex-col gap-10">
        <SectionTitle
          eyebrow="Our track record"
          title="The numbers behind our success"
          subtitle="Every engagement is measured, reported and reviewed with your leadership team."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <StatsCard key={stat.id} stat={stat} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}