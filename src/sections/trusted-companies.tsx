import { Container } from "@/components/ui/container";
import { LogoMarquee } from "@/components/logo-marquee";
import { SectionTitle } from "@/components/ui/section-title";

export function TrustedCompanies() {
  return (
    <section id="partners" className="py-16">
      <Container className="flex flex-col gap-8">
        <SectionTitle
          eyebrow="Our proven partnerships"
          title="Trusted by teams across regulated and high-growth industries"
        />
        <LogoMarquee />
      </Container>
    </section>
  );
}