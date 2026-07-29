import { motion } from "framer-motion";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { FeatureCard } from "@/components/feature-card";
import { featuresQueryOptions } from "@/services/landing.service";
import { staggerContainer, viewportOnce } from "@/lib/motion";

export function Features() {
  const { data: features } = useSuspenseQuery(featuresQueryOptions);

  return (
    <section id="capabilities" className="py-20">
      <Container className="flex flex-col gap-12">
        <SectionTitle
          eyebrow="Platform capabilities"
          title="Everything a learning programme needs, in one engagement"
          subtitle="From diagnostics to post-program analytics — the operating system behind your capability roadmap."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}