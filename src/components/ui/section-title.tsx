import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <motion.span
          variants={fadeUp}
          className="text-xs font-semibold uppercase tracking-[0.22em] text-primary"
        >
          {eyebrow}
        </motion.span>
      ) : null}
      <motion.h2 variants={fadeUp} className="text-3xl font-bold sm:text-4xl">
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p variants={fadeUp} className="max-w-2xl text-base text-muted-foreground">
          {subtitle}
        </motion.p>
      ) : null}
    </motion.div>
  );
}