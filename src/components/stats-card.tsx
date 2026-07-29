import { memo } from "react";
import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/use-count-up";
import { scaleIn } from "@/lib/motion";
import type { Stat } from "@/types";

function StatsCardBase({ stat }: { stat: Stat }) {
  const { ref, display } = useCountUp(stat.value);

  return (
    <motion.article variants={scaleIn} className="glass-panel rounded-3xl p-6 text-center">
      <span ref={ref} className="block font-display text-4xl font-bold text-gradient sm:text-5xl">
        {display}
      </span>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{stat.title}</p>
    </motion.article>
  );
}

export const StatsCard = memo(StatsCardBase);