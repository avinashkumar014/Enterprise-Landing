import { useState } from "react";
import { motion } from "framer-motion";
import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { FaqItem } from "@/components/faq-item";
import { FAQS, FAQ_TABS } from "@/constants/site";
import { staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { FaqCategory } from "@/types";

export function Faq() {
  const [category, setCategory] = useState<FaqCategory>("course");
  const visible = FAQS.filter((entry) => entry.category === category);

  return (
    <section id="faq" className="py-20">
      <Container className="flex flex-col gap-10">
        <SectionTitle
          eyebrow="Frequently asked questions"
          title="Answers before you talk to us"
          subtitle="Still unsure about something? Send the question through the enquiry form and we'll respond directly."
        />

        <div
          role="tablist"
          aria-label="FAQ categories"
          className="mx-auto flex flex-wrap justify-center gap-2"
        >
          {FAQ_TABS.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              type="button"
              id={`faq-tab-${tab.id}`}
              aria-selected={category === tab.id}
              aria-controls="faq-panel"
              onClick={() => setCategory(tab.id)}
              className={cn(
                "min-h-11 rounded-full px-5 text-sm font-medium transition-colors",
                category === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "glass-panel text-muted-foreground hover:text-foreground",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div
          key={category}
          id="faq-panel"
          role="tabpanel"
          aria-labelledby={`faq-tab-${category}`}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto w-full max-w-3xl"
        >
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {visible.map((entry, position) => (
              <FaqItem key={entry.question} entry={entry} value={`${category}-${position}`} />
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </section>
  );
}