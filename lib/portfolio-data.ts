import "server-only";

import { defaultPortfolioData } from "@/lib/default-data";
import { getAdminDatabase } from "@/lib/firebase-admin";
import type { PortfolioData, Project, Skill } from "@/types/portfolio";

function normalizeCollection<T>(value: unknown): T[] {
  if (Array.isArray(value)) {
    return value.filter(Boolean) as T[];
  }

  if (typeof value === "object" && value !== null) {
    return Object.values(value).filter(Boolean) as T[];
  }

  return [];
}

export async function getBranchData<K extends keyof PortfolioData>(
  path: K,
): Promise<PortfolioData[K]> {
  const fallbackValue = defaultPortfolioData[path];

  try {
    const database = getAdminDatabase();

    if (!database) {
      console.warn(
        `Firebase is unavailable. Using fallback data for /portfolio/${String(path)}.`,
      );

      return fallbackValue;
    }

    const snapshot = await database.ref(`portfolio/${String(path)}`).get();

    if (!snapshot.exists()) {
      console.warn(
        `Firebase path /portfolio/${String(path)} is empty. Using fallback data.`,
      );

      return fallbackValue;
    }

    const value = snapshot.val();

    if (Array.isArray(fallbackValue)) {
      return normalizeCollection(value) as PortfolioData[K];
    }

    return value as PortfolioData[K];
  } catch (error) {
    console.error(
      `Unable to retrieve Firebase branch /portfolio/${String(path)}:`,
      error,
    );

    return fallbackValue;
  }
}

export async function getBranchItem<T extends Record<string, unknown>>(
  path: keyof PortfolioData,
  field: keyof T,
  targetValue: unknown,
): Promise<T | null> {
  const branch = await getBranchData(path);

  const items = normalizeCollection<T>(branch);

  return (
    items.find((item) => item[field] === targetValue && item.visible) ?? null
  );
}
