import { createFileRoute } from "@tanstack/react-router";
import { featuresData } from "@/data/landing-content";

export const Route = createFileRoute("/api/public/features")({
  server: {
    handlers: {
      GET: async () =>
        Response.json(featuresData, {
          headers: { "Cache-Control": "public, max-age=300" },
        }),
    },
  },
});