import "server-only";

import { defaultPortfolioData } from "@/lib/default-data";
import { getAdminDatabase } from "@/lib/firebase-admin";
import type { PortfolioData, Project, Skill } from "@/types/portfolio";

function normalizeData(value: Partial<PortfolioData>): PortfolioData {
  const projects = Array.isArray(value.projects)
    ? value.projects
    : value.projects
      ? Object.values(value.projects)
      : defaultPortfolioData.projects;

  const skills = Array.isArray(value.skills)
    ? value.skills
    : value.skills
      ? Object.values(value.skills)
      : defaultPortfolioData.skills;

  return {
    profile: {
      ...defaultPortfolioData.profile,
      ...value.profile,
      socials: {
        ...defaultPortfolioData.profile.socials,
        ...value.profile?.socials,
      },
      aboutParagraphs:
        value.profile?.aboutParagraphs ??
        defaultPortfolioData.profile.aboutParagraphs,
    },
    projects: (projects as Project[])
      .filter((project) => project.visible !== false)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
    skills: (skills as Skill[]).sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
    technologies: value.technologies ?? defaultPortfolioData.technologies,
    career: value.career ?? defaultPortfolioData.career,
  };
}

export async function getPortfolioData(): Promise<PortfolioData> {
  const database = getAdminDatabase();

  if (!database) {
    console.warn(
      "Firebase environment variables are missing. Using local fallback data.",
    );
    return defaultPortfolioData;
  }

  try {
    const snapshot = await database.ref("portfolio").get();

    if (!snapshot.exists()) {
      console.warn(
        "Firebase path /portfolio is empty. Using local fallback data.",
      );
      return defaultPortfolioData;
    }

    return normalizeData(snapshot.val() as Partial<PortfolioData>);
  } catch (error) {
    console.error("Unable to retrieve portfolio data from Firebase:", error);
    return defaultPortfolioData;
  }
}
