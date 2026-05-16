"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

interface ClientBiographyProps {
  fullBio: string;
}

export default function ClientBiography({ fullBio }: ClientBiographyProps) {
  return (
    <div className="w-full flex flex-col min-h-screen bg-background">
      <div className="flex-1 w-full px-4 md:px-0 py-4 md:py-8 flex flex-col">
        <div className="w-full max-w-6xl mx-auto flex flex-col shadow-xl bg-white relative flex-1">
          {/* Header with Back Button */}
          <div className="w-full p-6 lg:p-10">
            <Link
              href="/"
              aria-label="Ana Sayfaya Geri Dön"
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md p-1"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Geri Dön</span>
            </Link>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 flex flex-col items-center justify-center px-6 pb-24 lg:px-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-10">
              Detaylı Biyografi
            </h1>
            <div className="max-w-2xl w-full">
              <div className="text-lg leading-relaxed text-foreground/80 font-light tracking-wide whitespace-pre-wrap text-left">
                <ReactMarkdown
                  components={{
                    p: ({ node, ...props }) => <p className="mb-4 last:mb-0" {...props} />,
                    strong: ({ node, ...props }) => <strong className="font-semibold text-accent" {...props} />,
                  }}
                >
                  {fullBio || "Biyografi henüz eklenmemiş."}
                </ReactMarkdown>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
