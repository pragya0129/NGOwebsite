import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ id, children, setVisitedSections }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Allow trigger multiple times
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setVisitedSections((prev) => new Set([...prev, id]));
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView, id, setVisitedSections]);

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
