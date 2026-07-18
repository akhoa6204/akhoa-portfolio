import type { Metadata } from "next";
import { Contact } from "@/components/home-page/contact";
import { Footer } from "@/components/home-page/footer";
import { Header } from "@/components/home-page/header";
import { Hero } from "@/components/home-page/hero";
import { Projects } from "@/components/home-page/projects";
import { Skills } from "@/components/home-page/skills";
import { TechnologyStrip } from "@/components/home-page/technology-strip";
import { Career } from "@/components/home-page/career";
import { getBranchData } from "@/lib/portfolio-data";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const profile = await getBranchData("profile");
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
  const profile = await getBranchData("profile");
  const skills = await getBranchData("skills");
  const technologies = await getBranchData("technologies");
  const career = await getBranchData("career");
  const projects = await getBranchData("projects");

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: `mailto:${profile.email}`,
    url: siteUrl,
    image: `${siteUrl}/profile.jpg`,
    sameAs: [profile.socials.github, profile.socials.linkedin],
    knowsAbout: technologies,
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
        <Hero profile={profile} />
        <TechnologyStrip technologies={technologies} />
        <Career career={career} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Contact profile={profile} />
      </main>
    </>
  );
}
