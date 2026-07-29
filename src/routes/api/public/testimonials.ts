import { createFileRoute } from "@tanstack/react-router";
import { testimonialsData } from "@/data/landing-content";

export const Route = createFileRoute("/api/public/testimonials")({
  server: {
    handlers: {
      GET: async () =>
        Response.json(testimonialsData, {
          headers: { "Cache-Control": "public, max-age=300" },
        }),
    },
  },
});