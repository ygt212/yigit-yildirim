"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteData } from "@/lib/data";

export function About({ data }: { data: SiteData["about"] }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-24 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: shouldReduceMotion ? 0.1 : 0.7, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{data.title}</h2>
        <p className="text-lg font-light text-foreground/80 leading-relaxed mb-12 max-w-3xl mx-auto tracking-wide">
          {data.description}
        </p>
        
        <div className="flex flex-wrap justify-center gap-3">
          {data.skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.4, delay: shouldReduceMotion ? 0 : index * 0.05 }}
              className="bg-background text-foreground px-5 py-2.5 rounded-full text-sm font-medium border border-primary/5 shadow-sm hover:border-primary/20 transition-colors"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

    </div>
  );
}
