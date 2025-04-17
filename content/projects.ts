import type { Project } from '@/types/project';
import { TECHNOLOGIES } from '@/types/technology';

const projects: Project[] = [
  {
    title: 'Cradle',
    date: 'Spring 2025',
    description: `A patient management system built in collaboration with SFU and doctors in Kings College London. It aims to replace paper-based systems and remove barriers to timely care in low-income environments, primarily located in Uganda and Sierra Leone.`,
    technologies: [
      TECHNOLOGIES.TS,
      TECHNOLOGIES.React,
      TECHNOLOGIES.Kotlin,
      TECHNOLOGIES.Android,
      TECHNOLOGIES.Python,
      TECHNOLOGIES.Flask,
      TECHNOLOGIES.MySql,
    ],
    externalLink: 'https://github.com/drbfraser/CRADLE-Platform',
  },
  {
    title: 'Community Based Rehabilitation',
    date: 'Fall 2024',
    description: `An open-source platform developed in collaboration with Hope Health Action, a non-profit.
      CBR assists Ugandan refugee settlements with tracking client data and facilitating referrals to critical services such as food aid or wheelchair access.`,
    technologies: [
      TECHNOLOGIES.TS,
      TECHNOLOGIES.React,
      TECHNOLOGIES.ReactNative,
      TECHNOLOGIES.Python,
      TECHNOLOGIES.Django,
      TECHNOLOGIES.Postgres,
    ],
    externalLink: 'https://github.com/drbfraser/HHA-CommunityBasedRehabilitation',
  },
  {
    title: 'Rlox',
    date: 'Summer 2024',
    description: `A tree-walking interpreter for a custom programming language called RLox.
      RLox constructs an abstract syntax tree from a .lox file that follows the RLox grammar.
      It has support for many advanced language features such as classes, inheritance, first-class functions, and more.`,
    technologies: [TECHNOLOGIES.Rust],
    externalLink: 'https://github.com/hln33/rlox',
  },
  {
    title: 'NBA All-Star Classifier',
    date: 'Summer 2023',
    description: `A machine learning pipeline that is able to identitfy NBA all-stars based on the current season's statistics.
      Utilizing machine learning algorithms, and data from over 60,000 NBA game box-scores and 12,000 player seasons, NBA all-stars are able to be identified with 97% accuracy.`,
    technologies: [TECHNOLOGIES.Python, TECHNOLOGIES.Pandas, TECHNOLOGIES.Jupyter],
    externalLink: 'https://github.com/hln33/NBA-Allstar-Classifier',
  },
  {
    title: 'Investment Simulator',
    date: 'Spring 2023',
    description: `A mock stock trading web application. Users sign up to be able to practice their investing skills through trading
    with fake currency and real stock data provided via Yahoo Finance. Users can compete against one another through \"trading
    competitions\", where whomever has the highest portfolio value after a set amount of time wins.`,
    technologies: [
      TECHNOLOGIES.TS,
      TECHNOLOGIES.React,
      TECHNOLOGIES.Node,
      TECHNOLOGIES.Postgres,
    ],
    externalLink: 'https://github.com/hln33/investing-simulator',
  },
];

export default projects;
