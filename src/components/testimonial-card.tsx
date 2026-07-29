import { memo } from "react";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/types";

function TestimonialCardBase({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="glass-panel flex h-full flex-col rounded-3xl p-7">
      <Quote className="size-8 text-primary" aria-hidden="true" />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
        “{testimonial.review}”
      </blockquote>
      <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
        <img
          src={testimonial.image}
          alt={`Portrait of ${testimonial.name}`}
          loading="lazy"
          width={56}
          height={56}
          className="size-14 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">
            {testimonial.designation}, {testimonial.company}
          </p>
        </div>
      </div>
    </article>
  );
}

export const TestimonialCard = memo(TestimonialCardBase);