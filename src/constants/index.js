import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  figma,
  python,
  capcut,
  adobePr,
  adobePs,
  canva,
  lightroom,
  vlc,
  ivl,
  roster,
  optogrow,
  ivyl
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Video Editing',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'git',
    icon: git,
  }, // Change tayo here sa baba ah
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Adobe Premiere Pro',
    icon: adobePr,
  },
  {
    name: 'Adobe PhotoShop',
    icon: adobePs,
  },
  {
    name: 'Adobe LightRoom',
    icon: lightroom,
  },
  {
    name: 'VLC',
    icon: vlc,
  },
  {
    name: 'Canva',
    icon: canva,
  },
  {
    name: 'Cap Cut',
    icon: capcut,
  },
];

const experiences = [
  {
    title: 'Technical Support Specialist',
    company_name: 'OptoGrow',
    icon: optogrow,
    iconBg: '#333333',
    date: 'Aug 2022 - Oct 2022',
  },

  {
    title: 'Video Editor',
    company_name: 'Ivy League Gaming',
    icon: ivyl,
    iconBg: '#333333',
    date: 'March 2024 - Present',
  },
];

const projects = [
  {
    id: 'IVL Gaming',
    name: 'IVL Gaming Tiktok',
    description: 'Edited multiple short form videos.',
    tags: [
      {
        name: 'Video Edit',
        color: 'blue-text-gradient',
      },
      {
        name: 'Valorant Highlights',
        color: 'green-text-gradient',
      },
      {
        name: 'Motion Graphics',
        color: 'pink-text-gradient',
      },
    ],
    image: ivl,
    demo: 'https://www.tiktok.com/@ivylgaming',
  },
  {
    id: 'project-2',
    name: 'IVL Val Roster',
    description:
      'A Video on IVL New Valorant Roster.',
    tags: [
      {
        name: 'Motion Graphics',
        color: 'blue-text-gradient',
      },
      {
        name: 'Valorant',
        color: 'green-text-gradient',
      },
      {
        name: 'Video Grapher',
        color: 'pink-text-gradient',
      },
    ],
    image: roster,
    demo: 'https://www.youtube.com/watch?v=2xJN-biRsLs',
  },
];

export { services, technologies, experiences, projects };
