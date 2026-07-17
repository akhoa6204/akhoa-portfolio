import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { TechnologyStrip } from "@/components/sections/technology-strip";
import { getPortfolioData } from "@/lib/portfolio-data";
import { Career } from "@/components/sections/career";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const { profile } = await getPortfolioData();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  return {
    alternates: { canonical: siteUrl },
    openGraph: {
      type: "website",
      url: siteUrl,
      title: `${profile.name} | ${profile.role}`,
      description: profile.introduction,
      images: [
        { url: "/profile.jpg", width: 1200, height: 1500, alt: profile.name },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${profile.name} | ${profile.role}`,
      description: profile.introduction,
      images: ["/profile.jpg"],
    },
  };
}

export default async function HomePage() {
  const data = await getPortfolioData();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: data.profile.name,
    jobTitle: data.profile.role,
    email: `mailto:${data.profile.email}`,
    url: siteUrl,
    image: `${siteUrl}/profile.jpg`,
    sameAs: [data.profile.socials.github, data.profile.socials.linkedin],
    knowsAbout: data.technologies,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className="relative overflow-hidden">
        <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-[850px]" />
        <div className="pointer-events-none absolute left-1/2 top-[-280px] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px]" />
        <Header profile={data.profile} />
        <Hero profile={data.profile} />
        <TechnologyStrip technologies={data.technologies} />
        <Career career={data.career} />
        <Projects projects={data.projects} />
        <Skills skills={data.skills} />
        <Contact profile={data.profile} />
        <Footer name={data.profile.name} />
      </main>
    </>
  );
}
