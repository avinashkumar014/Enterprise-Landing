import { GraduationCap, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FOOTER_LINKS, SITE } from "@/constants/site";

const SOCIALS = [
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com" },
  { label: "X", icon: Twitter, href: "https://x.com" },
  { label: "YouTube", icon: Youtube, href: "https://www.youtube.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/40 py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <GraduationCap className="size-5" aria-hidden="true" />
              </span>
              <span className="font-display text-lg font-semibold">Lumina Enterprise</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Corporate learning programs built around business outcomes — designed, delivered and
              measured with your teams.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-primary" aria-hidden="true" /> {SITE.email}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-primary" aria-hidden="true" /> {SITE.phone}
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" aria-hidden="true" /> {SITE.address}
              </li>
            </ul>
          </div>

          {FOOTER_LINKS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Lumina Enterprise. An independent demonstration build.
          </p>
          <ul className="flex items-center gap-2">
            {SOCIALS.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${label} (opens in a new tab)`}
                  className="flex size-11 items-center justify-center rounded-xl border border-border/60 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}