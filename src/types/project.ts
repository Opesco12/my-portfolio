export type Project = {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  images: string[];
  mobileApp?: boolean;
  expoUrl?: string;
  url?: string;
  caseStudy?: {
    category: string;
    role: string;
    overview: string;
    challenge: string;
    solution: string;
    outcome: string;
    features: string[];
  };
};
