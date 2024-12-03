import type { Technologies } from './technology';

export type Experience = {
  title: string;
  date: string;
  company: string;
  location: string;
  description: string;
  technologies: Technologies[];
  externalLink: string;
};
