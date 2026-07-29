import { motion } from "framer-motion";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeUp } from "@/lib/motion";
import type { FaqEntry } from "@/types";

interface FaqItemProps {
  entry: FaqEntry;
  value: string;
}

export function FaqItem({ entry, value }: FaqItemProps) {
  return (
    <motion.div variants={fadeUp}>
      <AccordionItem value={value} className="glass-panel rounded-2xl border-none px-5">
        <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
          {entry.question}
        </AccordionTrigger>
        <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
          {entry.answer}
        </AccordionContent>
      </AccordionItem>
    </motion.div>
  );
}