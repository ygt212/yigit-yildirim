import { siteData as fallbackData } from "@/lib/data";
import { client } from "./sanity.client";

interface SanityProject {
  _id?: string;
  title: string;
  description: string;
  tech?: string[];
  link?: string;
}

// Asenkron veri çekme fonksiyonu (Sanity CMS Entegrasyonu)
export async function getSiteData() {
  try {
    // GROQ sorguları ile Sanity'den tüm içerikleri çekiyoruz
    const [hero, about, projects, socials] = await Promise.all([
      client.fetch(`*[_type == "hero"][0]`),
      client.fetch(`*[_type == "about"][0]`),
      client.fetch(`*[_type == "project"] | order(_createdAt asc)`),
      client.fetch(`*[_type == "social"]`)
    ]);

    // Eğer Sanity henüz boşsa veya yapılandırılmadıysa, statik (fallback) verileri kullan
    if (!hero && !about && (!projects || projects.length === 0)) {
      return fallbackData;
    }

    // Sanity verilerini mevcut SiteData yapımızla eşleştiriyoruz (Normalization)
    return {
      hero: {
        title: hero?.title || fallbackData.hero.title,
        name: hero?.name || fallbackData.hero.name,
        subtitle: hero?.subtitle || fallbackData.hero.subtitle,
        description: hero?.description || fallbackData.hero.description,
        buttons: fallbackData.hero.buttons // Şimdilik statik
      },
      about: {
        title: about?.title || fallbackData.about.title,
        description: about?.description || fallbackData.about.description,
        skills: about?.skills || fallbackData.about.skills
      },
      projects: projects?.length > 0 ? projects.map((p: SanityProject, index: number) => ({
        id: p._id || index,
        title: p.title,
        description: p.description,
        tech: p.tech || [],
        link: p.link || "#"
      })) : fallbackData.projects,
      contact: {
        ...fallbackData.contact,
        socials: socials?.length > 0 ? socials : fallbackData.contact.socials
      }
    };
  } catch (error) {
    console.error('Sanity Fetch Error:', error);
    return fallbackData;
  }
}
