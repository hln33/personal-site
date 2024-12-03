import type { Technologies } from './technology';

export type Project = {
  title: string;
  date: string;
  description: string;
  technologies: Technologies[];
  externalLink: string;
};
