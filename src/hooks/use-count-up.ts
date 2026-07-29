import { useEffect, useRef, useState } from "react";

interface CountUpResult {
  ref: React.RefObject<HTMLSpanElement | null>;
  display: string;
}

/**
 * Animates the numeric portion of a stat value (e.g. "10K+", "4.8/5")
 * once the element scrolls into view, preserving prefixes and suffixes.
 */
export function useCountUp(value: string, duration = 1400): CountUpResult {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const node = ref.current;
    const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);

    if (!node || !match) {
      setDisplay(value);
      return;
    }

    const prefers = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefers) {
      setDisplay(value);
      return;
    }

    const [, prefix, rawNumber, suffix] = match;
    const target = Number(rawNumber);
    const decimals = rawNumber.includes(".") ? rawNumber.split(".")[1].length : 0;
    let frame = 0;
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`${prefix}${(target * eased).toFixed(decimals)}${suffix}`);
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          frame = requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    setDisplay(`${prefix}0${suffix}`);
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return { ref, display };
}