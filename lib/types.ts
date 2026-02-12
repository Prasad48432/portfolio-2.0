export type Theme = "light" | "dark";

export interface ConfigProps {
  appName: string;
  appDescription: string;
  appDesignation: string;
  domainName: string;

  social: {
    github: string;
    linkedin: string;
    instagram: string;
    email: string;
    phone: string;
    twitter: string;
  };
}
