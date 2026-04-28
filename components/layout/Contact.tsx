"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteData } from "@/lib/data";
import { Mail } from "lucide-react";
import Link from "next/link";

// Lucide-react'ten marka ikonları (Github, Twitter vs.) kaldırıldığı için özel SVG'ler kullanıyoruz.
const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17A5.25 5.25 0 0 0 19 4.3a5.2 5.2 0 0 0-.1-3s-1.1-.3-3.5 1.3a11.8 11.8 0 0 0-6 0C6.9 1.3 5.8 1.3 5.8 1.3a5.2 5.2 0 0 0-.1 3 5.25 5.25 0 0 0-1.5 3.5c0 5.76 3.35 6.78 6.5 7.16A4.8 4.8 0 0 0 9 18v4"></path></svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const TwitterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;

const iconMap: Record<string, React.ReactNode> = {
  Github: <GithubIcon />,
  Linkedin: <LinkedinIcon />,
  Twitter: <TwitterIcon />,
  Mail: <Mail size={24} />
};

export function Contact({ data }: { data: SiteData["contact"] }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-32 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: shouldReduceMotion ? 0.1 : 0.7, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 tracking-tight">{data.title}</h2>
        <p className="text-lg font-light text-foreground/80 mb-14 max-w-xl leading-relaxed tracking-wide">
          {data.description}
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {data.socials.map((social, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.5, delay: shouldReduceMotion ? 0 : index * 0.1 }}
            >
              <Link
                href={social.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-background border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:transform-none"
                aria-label={social.name}
              >
                {iconMap[social.icon] || <Mail size={24} />}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
