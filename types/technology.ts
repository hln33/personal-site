export const TECHNOLOGIES = {
  JS: 'JavaScript',
  TS: 'TypeScript',
  Rust: 'Rust',
  React: 'React',
  ReactNative: 'React Native',
  JQuery: 'JQuery',
  Java: 'Java',
  Ruby: 'Ruby',
  Rails: 'Rails',
  Postgres: 'PostgreSQL',
  Python: 'Python',
  Jupyter: 'Jupyter',
  Pandas: 'Pandas',
  Node: 'NodeJS',
} as const;

export type Technologies = (typeof TECHNOLOGIES)[keyof typeof TECHNOLOGIES];
