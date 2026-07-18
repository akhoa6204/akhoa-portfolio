import "server-only";

import { getAdminDatabase } from "@/lib/firebase-admin";

export const portfolioPaths = [
  "profile",
  "career",
  "projects",
  "skills",
  "technologies",
] as const;

export type PortfolioPath = (typeof portfolioPaths)[number];

function normalizeCollection<T>(value: unknown): T[] {
  if (Array.isArray(value)) {
    return value.filter(Boolean) as T[];
  }

  if (typeof value === "object" && value !== null) {
    return Object.values(value).filter(Boolean) as T[];
  }

  return [];
}

export async function getBranchData<T>(path: PortfolioPath): Promise<T> {
  const database = getAdminDatabase();

  if (!database) {
    throw new Error("Firebase Admin is not initialized.");
  }

  const snapshot = await database.ref(`portfolio/${path}`).get();

  if (!snapshot.exists()) {
    throw new Error(`Firebase path /portfolio/${path} does not exist.`);
  }

  const value = snapshot.val();

  return (Array.isArray(value) ? normalizeCollection(value) : value) as T;
}

export async function getBranchItem<T extends Record<string, unknown>>(
  path: PortfolioPath,
  field: keyof T,
  targetValue: unknown,
): Promise<T | null> {
  const branch = await getBranchData<unknown>(path);
  const items = normalizeCollection<T>(branch);

  return (
    items.find(
      (item) => item[field] === targetValue && item.visible !== false,
    ) ?? null
  );
}
