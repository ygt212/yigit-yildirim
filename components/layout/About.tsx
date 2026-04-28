"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteData } from "@/lib/data";
import { ChevronDown } from "lucide-react";

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

      {/* Aşağı Ok (Scroll Down) */}
      <motion.div 
        className="flex justify-center mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: shouldReduceMotion ? 0.1 : 0.5, duration: 0.5 }}
      >
        <a 
          href="#contact"
          className="flex flex-col items-center text-primary/60 hover:text-primary transition-colors group motion-reduce:transition-none"
          aria-label="İletişim bölümüne kaydır"
        >
          <span className="text-sm font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all -mb-4 group-hover:mb-1 motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:mb-1">
            Kaydır
          </span>
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
            transition={shouldReduceMotion ? {} : { repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown size={32} className="text-accent" />
          </motion.div>
        </a>
      </motion.div>
    </div>
  );
}
