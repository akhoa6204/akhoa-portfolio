export type SocialLinks = {
  github: string;
  linkedin: string;
};

export type Profile = {
  name: string;
  shortName: string;
  role: string;
  email: string;
  location: string;
  availability: string;
  headline: string;
  introduction: string;
  aboutTitle: string;
  aboutParagraphs: string[];
  focus: string;
  socials: SocialLinks;
  avatarUrl: string;
};

export type ProjectFeature = {
  title: string;
  description: string;
};

export type ProjectChallenge = {
  title: string;
  problem: string;
  solution: string;
};

export type ProjectImage = {
  url: string;
  alt: string;
};

export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;

  overview?: string[];
  features?: ProjectFeature[];
  challenges?: ProjectChallenge[];

  role?: string;
  duration?: string;
  status?: string;

  githubUrl?: string;
  demoUrl?: string;
  videoUrl?: string;

  tags: string[];
  accent: string;
  order: number;
  visible: boolean;

  imageUrl?: string;
  gallery?: ProjectImage[];
};

export type Skill = {
  id: string;
  title: string;
  detail: string;
  icon: "code" | "server" | "database" | "layers";
  order: number;
};

export type Technology = {
  icon: string;
  name: string;
};
export type CareerItem = {
  id: string;
  period: string;
  duration?: string;
  organization: string;
  title: string;
  details?: string[];
  order?: number;
  visible?: boolean;
  href?: string;
};

export type CareerData = {
  heading: string;
  description: string;
  experience: CareerItem[];
  education: CareerItem[];
  certificates: CareerItem[];
};
