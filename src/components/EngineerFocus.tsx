import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export const EngineerFocus = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-spacing relative bg-secondary" ref={ref}>
      <div className="section-container">
        {/* Staircase Layout Container */}
        <div className="relative min-h-[240px] lg:min-h-[260px]">
          {/* Step 1: First text - Top Left (aligned with cards above) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="absolute top-0 left-0 max-w-lg"
          >
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary-foreground leading-tight">
              Your engineers stay focused on design and coordination.
            </h2>
          </motion.div>

            {/* Step 2: Second text - At arrow head position */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute top-24 lg:top-28 left-1/2 lg:left-[45%] max-w-xs"
            >
              <p className="text-base lg:text-lg text-secondary-foreground/90 leading-relaxed">
                We take care of the plan production.
              </p>
            </motion.div>

            {/* Step 3: Button - Middle Right (where red outline is) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-32 lg:top-36 right-0"
            >
              <button
                onClick={() => scrollToSection('#cta')}
                className="bg-secondary-foreground text-secondary px-6 py-3 rounded-[6px] font-semibold text-base hover:bg-secondary-foreground/90 transition-colors shadow-lg group"
              >
                <span className="flex items-center gap-2">
                  Let's get started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

