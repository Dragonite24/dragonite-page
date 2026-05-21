/** First professional role — Lanbilling, March 2020 */
export const careerStart = new Date("2020-03-01");

const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;

export function yearsOfExperience(asOf: Date = new Date()): number {
  const elapsed = asOf.getTime() - careerStart.getTime();
  return Math.max(0, Math.floor(elapsed / MS_PER_YEAR));
}

export function yearsOfExperienceLabel(asOf: Date = new Date()): string {
  return `${yearsOfExperience(asOf)}+`;
}

export function buildSummary(asOf: Date = new Date()): string {
  const years = yearsOfExperienceLabel(asOf);
  return `Frontend Developer with ${years} years of experience building scalable, high-performance web applications with React, TypeScript, and Next.js. Focused on frontend architecture, performance optimization, and maintainable UI systems across complex products—including microfrontend and monorepo environments. Experienced in internal tooling, developer workflows, and production-ready delivery with GraphQL, TanStack Query, and modern testing. Multiple-time winner of the Leaders of Digital hackathon.`;
}

export const summary = buildSummary();

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  companyDescription: string;
  highlights: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "elfsight",
    role: "Frontend Engineer",
    company: "Elfsight",
    location: "Yerevan, Armenia",
    period: "March 2023 — Present",
    companyDescription:
      "Product company building no-code, customizable widgets that enhance websites and drive business growth—used by millions worldwide.",
    highlights: [
      "Architected and maintained internal framework and libraries used globally, while shipping new widgets that expanded use cases and increased subscription renewals by 10%",
      "Introduced guidelines for AI-assisted prototyping by designers, streamlining handoff to developers and reducing cycle time by 25%",
      "Designed monorepo-based i18n tools with documentation for other teams, enabling seamless localization and uplifting conversions by 11%",
      "Implemented comprehensive testing automation, reducing regression incidents by 30% and achieving 99% fewer UI regressions before release",
      "Developed AI-driven code orchestration, streamlining features and automating ~40% of repetitive coding efforts",
    ],
    tags: ["React", "TypeScript", "Monorepo", "i18n", "Testing", "AI tooling"],
  },
  {
    id: "code-it-up",
    role: "Frontend Engineer",
    company: "Code It Up",
    location: "Yerevan, Armenia",
    period: "November 2020 — March 2023",
    companyDescription:
      "Boutique IT outsourcing company specializing in custom software development—comparable to EPAM in expertise and services.",
    highlights: [
      "Directed frontend architecture and code reviews on key projects, mentoring engineers and ensuring high-quality deliverables",
      "Engineered marketplace features with UX and SEO focus, increasing user engagement and sales conversion by 12%",
      "Created a design system and reusable component library—20% faster feature delivery, 15% organic traffic growth, and significantly improved Lighthouse scores",
    ],
    tags: ["React", "Design system", "SEO", "Marketplace", "Mentoring"],
  },
  {
    id: "lanbilling",
    role: "Frontend Engineer",
    company: "Lanbilling",
    location: "Yaroslavl, Russia",
    period: "March 2020 — November 2020",
    companyDescription:
      "Product company developing SaaS billing and CRM solutions for telecommunications operators.",
    highlights: [
      "Added PSB payment integration to CRM, increasing successful transactions by 15% and reducing bounces by 20%",
      "Built a reusable UI component library that unified design across internal apps and accelerated feature rollout by 20%",
      "Optimized build configs, shortening deployment times by 25%",
      "Contributed to backend development—PHP and API endpoints for payment integrations and internal services",
    ],
    tags: ["React", "CRM", "Payments", "PHP", "Component library"],
  },
];

export const education = {
  school: "P.G. Demidov Yaroslavl State University",
  degree: "Computer Science, Bachelor’s Degree",
};

export const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "JavaScript",
  "GraphQL",
  "TanStack Query",
  "Redux",
  "Zustand",
  "HTML5",
  "CSS3",
  "SCSS",
  "Tailwind CSS",
  "styled-components",
  "REST API",
  "WebSockets",
  "Microfrontend Architecture",
  "Nx Monorepo",
  "Feature-Sliced Design",
  "Clean Architecture",
  "React Server Components",
  "SSR",
  "Performance Optimization",
  "Accessibility",
  "Storybook",
  "Jest",
  "Playwright",
  "Vitest",
  "Vite",
  "Webpack",
  "Docker",
  "GitLab CI",
  "Git",
  "ESLint",
  "Prettier",
  "Husky",
  "lingui",
  "next-i18next",
  "Figma",
  "Jira",
  "Confluence",
  "Cursor",
  "Claude Code",
] as const;
