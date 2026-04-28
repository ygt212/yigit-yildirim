import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";

const montserrat = Montserrat({ 
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'] 
});

export const metadata: Metadata = {
  title: "Yiğit Yıldırım | Portfolio",
  description: "Modern web çözümleri geliştiren Full Stack Geliştirici",
  openGraph: {
    title: "Yiğit Yıldırım | Portfolio",
    description: "Modern web çözümleri geliştiren Full Stack Geliştirici",
    url: "https://ygtyildirm.com",
    siteName: "Yiğit Yıldırım",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yiğit Yıldırım | Portfolio",
    description: "Modern web çözümleri geliştiren Full Stack Geliştirici",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${montserrat.variable} font-sans min-h-screen bg-background text-foreground flex flex-col antialiased`}>
        <Header />
        <main className="flex-1 flex flex-col w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
