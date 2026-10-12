/**
 * Types for i18n dictionaries and page content.
 */

export type Lang = 'en' | 'ru';

/** Site pages (Vite MPA entries). */
export type PageId = 'home' | 'csharp' | 'analyst';

/** Flat dictionary: key -> string (may contain simple HTML like <br> or <span>). */
export type Dictionary = Record<string, string>;

export interface SkillItem {
  name: string;
  icon?: string; // FontAwesome classes, e.g. "fa-brands fa-react"
}

export interface ProjectItem {
  title: string;
  description: string;
  github: string;
  demo?: string;
  badges: string[];
}

/** Per-page dynamic content (skills grid + projects grid). */
export interface PageContent {
  skills: SkillItem[];
  projects: ProjectItem[];
}

export interface PortfolioContent {
  lang: Lang;
  pages: Record<PageId, PageContent>;
}
