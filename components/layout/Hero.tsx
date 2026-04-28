"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { SiteData } from "@/lib/data";
import Image from "next/image";

export function Hero({ data }: { data: SiteData["hero"] }) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.8,
        ease: "easeOut",
        staggerChildren: shouldReduceMotion ? 0 : 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0.1 : 0.5 } }
  };

  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] flex flex-col justify-center items-center px-6 md:px-12 py-20">
      <div className="w-full flex flex-col items-center text-center max-w-4xl z-10">
        
        <motion.div 
          className="flex flex-col items-center gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            {data.imageUrl && (
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/10 shadow-lg">
                <Image src={data.imageUrl} alt={data.name} fill className="object-cover" sizes="(max-width: 768px) 128px, 160px" priority />
              </div>
            )}
            <p className="text-xl md:text-2xl font-medium text-foreground/80">
              {data.title}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary tracking-tight">
              {data.name}
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-accent">
              {data.subtitle}
            </p>
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg font-light text-foreground/80 max-w-2xl leading-relaxed tracking-wide mt-2">
            {data.description}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 pt-6">
            <a 
              href={data.buttons.primary.link}
              className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all shadow-md hover:shadow-lg motion-reduce:transition-none"
            >
              {data.buttons.primary.text}
            </a>
            <a 
              href={data.buttons.secondary.link}
              className="px-8 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary/5 transition-all motion-reduce:transition-none"
            >
              {data.buttons.secondary.text}
            </a>
          </motion.div>
        </motion.div>

      </div>

      {/* Aşağı Ok (Scroll Down) */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldReduceMotion ? 0.1 : 1, duration: shouldReduceMotion ? 0.1 : 1 }}
      >
        <a 
          href="#projects"
          className="flex flex-col items-center text-primary/60 hover:text-primary transition-colors group motion-reduce:transition-none"
          aria-label="Projeler bölümüne kaydır"
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
