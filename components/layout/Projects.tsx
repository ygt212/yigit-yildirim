"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteData } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export function Projects({ data }: { data: SiteData["projects"] }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-24">
      <motion.h2 
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: shouldReduceMotion ? 0.1 : 0.6 }}
        className="text-3xl md:text-4xl font-bold text-primary mb-16 text-center"
      >
        Öne Çıkan Projeler
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.5, delay: shouldReduceMotion ? 0 : index * 0.15 }}
            className="group bg-white border border-primary/10 border-t-4 border-t-accent rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300 flex flex-col h-full motion-reduce:transition-none motion-reduce:hover:transform-none"
          >
            <h3 className="text-xl font-semibold text-primary mb-4">{project.title}</h3>
            <p className="font-light text-foreground/80 mb-8 flex-grow leading-relaxed text-sm tracking-wide">
              {project.description}
            </p>
            
            <div className="mt-auto flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-medium text-accent bg-accent/10 px-3 py-1.5 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
              <Link 
                href={project.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors w-fit group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              >
                Projeyi İncele 
                <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
