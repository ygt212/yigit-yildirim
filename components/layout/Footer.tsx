import { ArrowUp } from "lucide-react";
import type { SiteData } from "@/lib/data";

// Standart SVG'ler (Erişilebilirlik ve performans için)
const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17A5.25 5.25 0 0 0 19 4.3a5.2 5.2 0 0 0-.1-3s-1.1-.3-3.5 1.3a11.8 11.8 0 0 0-6 0C6.9 1.3 5.8 1.3 5.8 1.3a5.2 5.2 0 0 0-.1 3 5.25 5.25 0 0 0-1.5 3.5c0 5.76 3.35 6.78 6.5 7.16A4.8 4.8 0 0 0 9 18v4"></path></svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const TwitterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>;

const iconMap: Record<string, React.ReactNode> = {
  Github: <GithubIcon />,
  Linkedin: <LinkedinIcon />,
  Twitter: <TwitterIcon />,
  Mail: <MailIcon />
};

export function Footer({ data }: { data: SiteData["contact"] }) {
  return (
    <footer className="w-full bg-primary text-primary-foreground py-8 border-t border-primary-foreground/10 mt-auto">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm font-light text-primary-foreground/80 tracking-wide">
          &copy; {new Date().getFullYear()} Yiğit Yıldırım. Tüm hakları saklıdır.
        </p>
        
        <div className="flex gap-5">
          {data.socials.map((social) => (
            <a 
              key={social.name}
              href={social.url || "#"}
              target={(social.url?.startsWith("mailto:") || social.url?.startsWith("tel:")) ? "_self" : "_blank"}
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-primary-foreground/70 hover:text-[#60A5FA] transition-colors focus:outline-none focus:ring-2 focus:ring-[#60A5FA] rounded-sm p-1"
            >
              {iconMap[social.icon] || <MailIcon />}
            </a>
          ))}
        </div>

        <a 
          href="#home" 
          aria-label="Başa Dön"
          className="flex items-center gap-2 text-sm font-medium text-primary-foreground/90 hover:text-[#60A5FA] transition-colors group focus:outline-none focus:ring-2 focus:ring-[#60A5FA] rounded-md px-2 py-1"
        >
          Başa Dön
          <div className="p-1.5 bg-primary-foreground/10 rounded-full group-hover:bg-[#60A5FA]/20 transition-colors">
            <ArrowUp size={16} />
          </div>
        </a>
      </div>
    </footer>
  );
}
