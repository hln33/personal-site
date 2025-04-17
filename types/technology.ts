export const TECHNOLOGIES = {
  // javascript ecosystem
  JS: 'JavaScript',
  TS: 'TypeScript',
  JQuery: 'JQuery',
  Node: 'NodeJS',
  React: 'React',
  ReactNative: 'React Native',
  // server related
  Java: 'Java',
  Ruby: 'Ruby',
  Rails: 'Rails',
  Rust: 'Rust',
  // mobile
  Kotlin: 'Kotlin',
  Android: 'Android',
  // python ecosystem
  Python: 'Python',
  Pandas: 'Pandas',
  Jupyter: 'Jupyter',
  Django: 'Django',
  Flask: 'Flask',
  // databases
  Postgres: 'PostgreSQL',
  MySql: 'MySQL',
} as const;

export type Technologies = (typeof TECHNOLOGIES)[keyof typeof TECHNOLOGIES];
