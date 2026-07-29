import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { TestimonialCard } from "@/components/testimonial-card";
import { testimonialsQueryOptions } from "@/services/landing.service";

export function Testimonials() {
  const { data: testimonials } = useSuspenseQuery(testimonialsQueryOptions);
  const [index, setIndex] = useState(0);
  const active = testimonials[index % testimonials.length];

  const move = (direction: 1 | -1) =>
    setIndex((current) => (current + direction + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-20">
      <Container className="flex flex-col gap-10">
        <SectionTitle
          eyebrow="Testimonials from our partners"
          title="What our clients are saying"
          subtitle="Feedback from learning, engineering and people leaders who ran cohorts with us."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="relative min-h-72">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
                className="h-full"
              >
                <TestimonialCard testimonial={active} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hidden lg:block">
            <TestimonialCard testimonial={testimonials[(index + 1) % testimonials.length]} />
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <Button
            variant="outline"
            size="icon"
            className="min-h-11 min-w-11 border-border/70 bg-transparent"
            aria-label="Show previous testimonial"
            onClick={() => move(-1)}
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </Button>
          <span className="text-sm text-muted-foreground" aria-live="polite">
            {index + 1} / {testimonials.length}
          </span>
          <Button
            variant="outline"
            size="icon"
            className="min-h-11 min-w-11 border-border/70 bg-transparent"
            aria-label="Show next testimonial"
            onClick={() => move(1)}
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  );
}