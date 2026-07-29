import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { leadSchema, type LeadFormValues } from "@/lib/validation";
import { submitLead } from "@/services/landing.service";

const FIELDS = [
  { name: "fullName", label: "Full name", placeholder: "Jordan Patel", type: "text" },
  { name: "email", label: "Work email", placeholder: "jordan@company.com", type: "email" },
  { name: "phone", label: "Phone", placeholder: "+91 98765 43210", type: "tel" },
  { name: "company", label: "Company name", placeholder: "Northbridge Financial", type: "text" },
] as const;

export function LeadForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: { fullName: "", email: "", phone: "", company: "", message: "" },
  });

  const onSubmit = async (values: LeadFormValues) => {
    setServerError(null);
    try {
      const result = await submitLead(values);
      toast.success(result.message);
      reset();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong. Please try again.";
      setServerError(message);
      toast.error(message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-labelledby="enquire-heading"
      className="glass-panel rounded-3xl p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {FIELDS.map((field) => (
          <div key={field.name} className="flex flex-col gap-2">
            <Label htmlFor={`lead-${field.name}`}>{field.label}</Label>
            <Input
              id={`lead-${field.name}`}
              type={field.type}
              placeholder={field.placeholder}
              autoComplete={field.name === "email" ? "email" : "on"}
              aria-invalid={Boolean(errors[field.name])}
              aria-describedby={errors[field.name] ? `lead-${field.name}-error` : undefined}
              className="bg-background/40"
              {...register(field.name)}
            />
            {errors[field.name] ? (
              <p id={`lead-${field.name}-error`} role="alert" className="text-xs text-destructive">
                {errors[field.name]?.message}
              </p>
            ) : null}
          </div>
        ))}

        <div className="flex flex-col gap-2 sm:col-span-2">
          <Label htmlFor="lead-message">What would you like to solve?</Label>
          <Textarea
            id="lead-message"
            rows={4}
            placeholder="Tell us about your team size, target skills and timelines."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "lead-message-error" : undefined}
            className="bg-background/40"
            {...register("message")}
          />
          {errors.message ? (
            <p id="lead-message-error" role="alert" className="text-xs text-destructive">
              {errors.message.message}
            </p>
          ) : null}
        </div>
      </div>

      {serverError ? (
        <p
          role="alert"
          className="mt-5 rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive"
        >
          {serverError}
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full font-semibold transition-transform hover:scale-[1.01] active:scale-[0.99]"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" /> Sending enquiry…
          </>
        ) : (
          <>
            <Send className="size-4" aria-hidden="true" /> Send enquiry
          </>
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        We reply within one business day. No newsletters, ever.
      </p>
    </form>
  );
}