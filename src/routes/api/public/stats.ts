import { createFileRoute } from "@tanstack/react-router";
import { statsData } from "@/data/landing-content";

export const Route = createFileRoute("/api/public/stats")({
  server: {
    handlers: {
      GET: async () =>
        Response.json(statsData, {
          headers: { "Cache-Control": "public, max-age=300" },
        }),
    },
  },
});