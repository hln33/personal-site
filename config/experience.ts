import type { Experience } from '@/types/experience';
import { TECHNOLOGIES } from '@/types/technology';

const experiences: Experience[] = [
  {
    title: 'Software Developer Co-op',
    date: 'Jan - Sept 2024',
    company: 'Motorola Solutions',
    location: 'Vancouver, BC',
    description: `Implemented features and bug-fixes for an access control product.
      Developed front-end components for an interactive map-based monitoring page,
      showcased at ISC West 2024, a North American security trade event, as part of an upcoming major release preview.
      Enhanced UI/UX by designing and implementing improvements such as dynamically positioned context menus.`,
    technologies: [
      TECHNOLOGIES.JS,
      TECHNOLOGIES.React,
      TECHNOLOGIES.JQuery,
      TECHNOLOGIES.Ruby,
      TECHNOLOGIES.Rails,
    ],
    externalLink: 'https://www.avigilon.com/unity',
  },
  {
    title: 'Application Developer Co-op',
    date: 'Jan - Sept 2022',
    company: 'ICBC',
    location: 'North Vancouver, BC',
    description: `Assisted in the migration of 12 legacy Java apps from IBM WebSphere to IBM Liberty Servers.
      Periodically acted as the main point of contact for this project, performing project management tasks including
      task delegation, and cross-department communication.
      Helped address cyber-security vulnerabilities discovered during penetration testing by configuring HTTP headers.`,
    technologies: [TECHNOLOGIES.JS, TECHNOLOGIES.Java],
    externalLink: 'https://www.icbc.com/',
  },
];

export default experiences;
