import { queryOptions } from "@tanstack/react-query";
import { getRequestOrigin } from "@/lib/origin.functions";
import type { Feature, LeadResponse, Stat, Testimonial } from "@/types";
import type { LeadFormValues } from "@/lib/validation";

async function resolveBaseUrl(): Promise<string> {
  if (typeof window !== "undefined") return "";
  return await getRequestOrigin();
}

async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(`${await resolveBaseUrl()}${path}`);
  if (!response.ok) {
    throw new Error(`Request to ${path} failed with status ${response.status}`);
  }
  return (await response.json()) as T;
}

export const featuresQueryOptions = queryOptions({
  queryKey: ["features"],
  queryFn: () => getJson<Feature[]>("/api/public/features"),
  staleTime: 5 * 60 * 1000,
});

export const testimonialsQueryOptions = queryOptions({
  queryKey: ["testimonials"],
  queryFn: () => getJson<Testimonial[]>("/api/public/testimonials"),
  staleTime: 5 * 60 * 1000,
});

export const statsQueryOptions = queryOptions({
  queryKey: ["stats"],
  queryFn: () => getJson<Stat[]>("/api/public/stats"),
  staleTime: 5 * 60 * 1000,
});

export async function submitLead(values: LeadFormValues): Promise<LeadResponse> {
  const response = await fetch("/api/public/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  const data = (await response.json().catch(() => null)) as LeadResponse | null;

  if (!response.ok || !data?.success) {
    throw new Error(data?.message ?? "Something went wrong. Please try again.");
  }

  return data;
}