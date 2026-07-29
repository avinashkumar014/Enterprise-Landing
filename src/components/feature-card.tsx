import { memo } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { resolveIcon } from "@/lib/icon-map";
import type { Feature } from "@/types";

function FeatureCardBase({ feature }: { feature: Feature }) {
  const Icon = resolveIcon(feature.icon);

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="glass-panel group h-full rounded-3xl p-6"
    >
      <span className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <h3 className="text-lg font-semibold">{feature.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
    </motion.article>
  );
}

export const FeatureCard = memo(FeatureCardBase);