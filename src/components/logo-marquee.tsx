import { PARTNER_LOGOS } from "@/constants/site";

/** Continuously scrolling row of partner wordmarks. */
export function LogoMarquee() {
  const track = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <div
      className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      aria-label="Organisations we partner with"
    >
      <ul className="flex w-max animate-marquee items-center gap-4">
        {track.map((name, index) => (
          <li
            key={`${name}-${index}`}
            aria-hidden={index >= PARTNER_LOGOS.length}
            className="glass-panel flex h-16 min-w-44 items-center justify-center rounded-2xl px-6"
          >
            <span className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}