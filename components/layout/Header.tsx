"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  
  const menuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const navLinks = [
    { name: "Anasayfa", href: "#home" },
    { name: "Projeler", href: "#projects" },
    { name: "Hakkımda", href: "#about" },
    { name: "İletişim", href: "#contact" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            window.history.replaceState(null, '', `#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Odak yönetimi (Focus Management) ve tıkla-kapat
  const isFirstRender = useRef(true);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEsc);
      // Menü açıldığında ilk elemana odaklan
      setTimeout(() => firstLinkRef.current?.focus(), 100);
    } else {
      // Menü kapandığında butona geri odaklan (sayfa yüklendiğinde çalışmasını engellemek için aktif eleman kontrolü)
      if (!isFirstRender.current) {
        setTimeout(() => buttonRef.current?.focus(), 100);
      }
    }
    
    isFirstRender.current = false;
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isMobileMenuOpen]);

  // Focus trap (Tab tuşunu menü içinde tutma)
  useEffect(() => {
    const handleTab = (e: KeyboardEvent) => {
      if (!isMobileMenuOpen || e.key !== "Tab") return;
      
      const menu = document.getElementById("mobile-menu");
      if (!menu) return;
      
      const focusableElements = menu.querySelectorAll('a, button');
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-primary text-primary-foreground w-full py-6 md:py-8 sticky top-0 z-50 shadow-sm" ref={menuRef}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center w-full">
        {/* Logo / İsim */}
        <Link 
          href="#home" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-xl md:text-2xl font-medium hover:text-[#60A5FA] transition-colors duration-300 outline-none"
        >
          Yiğit Yıldırım
        </Link>

        {/* Masaüstü Menü */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`${isActive ? "text-[#60A5FA] font-medium" : "text-primary-foreground/90 font-light"} hover:text-[#60A5FA] transition-colors duration-300 text-sm md:text-[15px] tracking-wide outline-none`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobil Menü Butonu */}
        <button
          ref={buttonRef}
          className="md:hidden text-primary-foreground hover:text-[#60A5FA] transition-colors duration-300 outline-none p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobil Açılır Menü */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden absolute top-full left-0 w-full bg-primary shadow-lg border-t border-primary-foreground/10 motion-reduce:transition-none">
          <nav className="flex flex-col">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  ref={index === 0 ? firstLinkRef : null}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-6 py-4 ${isActive ? "text-[#60A5FA] font-medium" : "text-primary-foreground font-light"} hover:bg-primary-foreground/5 hover:text-[#60A5FA] transition-colors duration-300 motion-reduce:transition-none outline-none`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
