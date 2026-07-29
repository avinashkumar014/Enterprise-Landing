import { createFileRoute } from "@tanstack/react-router";
import { leadSchema } from "@/lib/validation";

export const Route = createFileRoute("/api/public/leads")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return Response.json(
            { success: false, message: "Invalid request body." },
            { status: 400 },
          );
        }

        const parsed = leadSchema.safeParse(payload);
        if (!parsed.success) {
          return Response.json(
            {
              success: false,
              message: parsed.error.issues[0]?.message ?? "Please check the form and try again.",
            },
            { status: 422 },
          );
        }

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { error } = await supabaseAdmin.from("leads").insert({
          full_name: parsed.data.fullName,
          email: parsed.data.email,
          phone: parsed.data.phone,
          company: parsed.data.company,
          message: parsed.data.message,
        });

        if (error) {
          console.error("[leads] insert failed", error.message);
          return Response.json(
            { success: false, message: "We couldn't save your enquiry. Please try again." },
            { status: 500 },
          );
        }

        return Response.json({
          success: true,
          message: "Thanks! Our enterprise team will reach out within one business day.",
        });
      },
    },
  },
});