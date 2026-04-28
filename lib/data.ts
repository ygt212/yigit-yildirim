export interface SiteData {
  hero: {
    title: string;
    name: string;
    subtitle: string;
    description: string;
    buttons: {
      primary: { text: string; link: string };
      secondary: { text: string; link: string };
    };
  };
  about: {
    title: string;
    description: string;
    skills: string[];
  };
  projects: Array<{
    id: number;
    title: string;
    description: string;
    tech: string[];
    link: string;
  }>;
  contact: {
    title: string;
    description: string;
    email: string;
    socials: Array<{
      name: string;
      url: string;
      icon: string;
    }>;
  };
}

export const siteData: SiteData = {
  hero: {
    title: "Merhaba, Ben",
    name: "Yiğit Yıldırım",
    subtitle: "Frontend Mimarı & UI/UX Geliştirici",
    description: "Modern teknolojileri kullanarak dijital dünyada iz bırakan, kullanıcı deneyimini ön planda tutan yaratıcı ve yüksek performanslı web uygulamaları üretiyorum.",
    buttons: {
      primary: { text: "Projelerimi İncele", link: "#projects" },
      secondary: { text: "İletişime Geç", link: "#contact" }
    }
  },
  about: {
    title: "Hakkımda",
    description: "Yazılım dünyasına adım attığım günden beri estetik ve işlevselliği birleştiren projeler geliştirmeye tutkuyla bağlıyım. Temiz kod (clean code) prensiplerine sadık kalıp, güncel tasarım trendlerini takip ederek kullanıcıların severek kullanacağı sürdürülebilir mimariler kuruyorum. Problem çözmeyi bir sanat olarak görüyorum.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Framer Motion", "Figma", "Git"]
  },
  projects: [
    {
      id: 1,
      title: "Nova E-Ticaret Ekosistemi",
      description: "Müşterilere ultra hızlı ve kusursuz bir alışveriş deneyimi sunmak üzere sıfırdan kurgulanmış, sunucu taraflı render (SSR) destekli modern e-ticaret platformu.",
      tech: ["Next.js 14", "Tailwind CSS", "Prisma", "Stripe"],
      link: "#"
    },
    {
      id: 2,
      title: "Pulse Analitik Paneli",
      description: "Markaların sosyal medya metriklerini, kullanıcı etkileşimlerini ve dönüşüm oranlarını tek bir ekranda canlı olarak izleyebildiği kapsamlı SaaS arayüzü.",
      tech: ["React", "TypeScript", "Recharts", "Node.js"],
      link: "#"
    },
    {
      id: 3,
      title: "Kişisel Blog Motoru",
      description: "İçerik üreticileri için tasarlanmış, Markdown tabanlı, SEO puanı 100/100 olan minimalist ve yüksek performanslı modern blog sistemi.",
      tech: ["Next.js", "MDX", "Framer Motion"],
      link: "#"
    }
  ],
  contact: {
    title: "Birlikte Çalışalım",
    description: "Yenilikçi bir dijital ürün geliştirmek istiyorsanız veya sadece tasarım ve teknoloji üzerine sohbet etmek isterseniz bana her zaman ulaşabilirsiniz.",
    email: "iletisim@ygtyildirm.com",
    socials: [
      { name: "GitHub", url: "https://github.com/ygtyildirm", icon: "Github" },
      { name: "LinkedIn", url: "https://linkedin.com/in/ygtyildirm", icon: "Linkedin" },
      { name: "Twitter", url: "https://twitter.com/ygtyildirm", icon: "Twitter" },
      { name: "Email", url: "mailto:iletisim@ygtyildirm.com", icon: "Mail" }
    ]
  }
};
