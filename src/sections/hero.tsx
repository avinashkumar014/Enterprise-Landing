import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, PlayCircle } from "lucide-react";
import heroImage from "@/assets/hero-enterprise.jpg";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { HERO_HIGHLIGHTS } from "@/constants/site";
import { fadeUp, slideInRight, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section id="top" className="hero-glow relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeUp}>
              <Pill>
                <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                Enterprise learning, engineered for outcomes
              </Pill>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl"
            >
              Next-gen expertise for <span className="text-gradient">your enterprise</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-5 max-w-xl text-lg text-muted-foreground">
              Cultivate high-performance teams through expert-led learning that is designed around
              your roles, your tooling and the business results you are accountable for.
            </motion.p>

            <motion.ul variants={fadeUp} className="mt-7 flex flex-wrap gap-2.5">
              {HERO_HIGHLIGHTS.map((item) => (
                <li key={item}>
                  <Pill>
                    <CheckCircle2 className="size-3.5 text-primary" aria-hidden="true" />
                    {item}
                  </Pill>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="font-semibold transition-transform hover:scale-[1.03]"
              >
                <a href="#enquire">
                  Enquire now <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border/70 bg-transparent font-semibold hover:bg-secondary"
              >
                <a href="#capabilities">
                  <PlayCircle className="size-4" aria-hidden="true" /> Explore capabilities
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div variants={slideInRight} initial="hidden" animate="visible" className="relative">
            <div
              className="absolute -inset-6 rounded-[2.5rem] bg-primary/10 blur-3xl"
              aria-hidden="true"
            />
            <img
              src={heroImage}
              alt="Enterprise teams collaborating around learning analytics dashboards"
              width={1280}
              height={1024}
              fetchPriority="high"
              className="glass-panel relative w-full rounded-[2rem] object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}