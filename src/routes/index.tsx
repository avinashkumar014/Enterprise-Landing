import { Suspense, lazy } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/sections/hero";
import { TrustedCompanies } from "@/sections/trusted-companies";
import { FAQS, SITE } from "@/constants/site";
import {
  featuresQueryOptions,
  statsQueryOptions,
  testimonialsQueryOptions,
} from "@/services/landing.service";

const Stats = lazy(() => import("@/sections/stats").then((m) => ({ default: m.Stats })));
const Benefits = lazy(() => import("@/sections/benefits").then((m) => ({ default: m.Benefits })));
const WhyChooseUs = lazy(() =>
  import("@/sections/why-choose-us").then((m) => ({ default: m.WhyChooseUs })),
);
const Features = lazy(() => import("@/sections/features").then((m) => ({ default: m.Features })));
const Testimonials = lazy(() =>
  import("@/sections/testimonials").then((m) => ({ default: m.Testimonials })),
);
const Faq = lazy(() => import("@/sections/faq").then((m) => ({ default: m.Faq })));
const CallToAction = lazy(() => import("@/sections/cta").then((m) => ({ default: m.CallToAction })));

const TITLE = "Lumina Enterprise — Corporate Training That Moves Business Metrics";

export const Route = createFileRoute("/")({
  loader: async ({ context }) => {
    await Promise.all([
      context.queryClient.ensureQueryData(featuresQueryOptions),
      context.queryClient.ensureQueryData(statsQueryOptions),
      context.queryClient.ensureQueryData(testimonialsQueryOptions),
    ]);
  },
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: SITE.description },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: SITE.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: SITE.description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((entry) => ({
            "@type": "Question",
            name: entry.question,
            acceptedAnswer: { "@type": "Answer", text: entry.answer },
          })),
        }),
      },
    ],
  }),
  component: LandingPage,
});

function SectionFallback() {
  return <div className="py-20" aria-hidden="true" />;
}

function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustedCompanies />
        <Suspense fallback={<SectionFallback />}>
          <Stats />
          <Benefits />
          <WhyChooseUs />
          <Features />
          <Testimonials />
          <Faq />
          <CallToAction />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
