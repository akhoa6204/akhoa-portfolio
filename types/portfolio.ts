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

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  tags: string[];
  accent: "indigo" | "cyan" | "violet";
  order: number;
  visible: boolean;
  imageUrl?: string;
};

export type Skill = {
  id: string;
  title: string;
  detail: string;
  icon: "code" | "server" | "database" | "layers";
  order: number;
};

export type PortfolioData = {
  profile: Profile;
  projects: Project[];
  skills: Skill[];
  technologies: Technology[];
  career: CareerData;
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
};

export type CareerData = {
  heading: string;
  description: string;
  experience: CareerItem[];
  education: CareerItem[];
  certificates: CareerItem[];
};
