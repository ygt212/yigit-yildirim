import { Hero } from "@/components/layout/Hero";
import { Projects } from "@/components/layout/Projects";
import { About } from "@/components/layout/About";
import { Contact } from "@/components/layout/Contact";
import { Footer } from "@/components/layout/Footer";
import { getSiteData } from "@/lib/api";

export default async function Home() {
  const data = await getSiteData();

  return (
    <div className="w-full flex flex-col min-h-screen">
      <div className="flex-1 w-full px-4 md:px-0 py-4 md:py-8 flex flex-col">
        <div className="w-full max-w-6xl mx-auto flex flex-col shadow-xl bg-white relative flex-1">
          {/* 1. Hero / Ana Karşılama Alanı */}
          <section id="home" className="w-full scroll-mt-[100px]">
            <Hero data={data.hero} />
          </section>

          {/* 2. Projeler Alanı */}
          <section id="projects" className="w-full border-t border-primary/15 scroll-mt-[100px]">
            <Projects data={data.projects} />
          </section>

          {/* 3. Hakkımda Alanı */}
          <section id="about" className="w-full border-t border-primary/15 bg-primary/[0.02] scroll-mt-[100px]">
            <About data={data.about} />
          </section>

          {/* 4. İletişim Alanı */}
          <section id="contact" className="w-full border-t border-primary/15 scroll-mt-[100px]">
            <Contact data={data.contact} />
          </section>
        </div>
      </div>
      
      {/* 5. Footer Alanı (Tam Genişlik) */}
      <Footer data={data.contact} />
    </div>
  );
}
