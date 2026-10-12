import type { Lang } from '@/types/i18n';
import { getContent, getDictionary, getPageId } from '@/utils/i18n';
import { initRevealOnScroll } from '@/utils/observer';

/**
 * Projects — renders project cards (title, description, badges, GitHub/Demo links).
 * Projects depend on the current page (home / csharp / analyst).
 */
function renderProjects(lang: Lang): void {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const dict = getContent(lang).pages[getPageId()];
  const t = getDictionary(lang);
  const section = grid.closest<HTMLElement>('section');
  grid.innerHTML = '';

  // No projects for this page/language — hide the whole section
  if (dict.projects.length === 0) {
    if (section) section.hidden = true;
    return;
  }
  if (section) section.hidden = false;

  dict.projects.forEach((project, index) => {
    const card = document.createElement('article');
    card.className = `project-card glass-card reveal-on-scroll delay-${Math.min(index % 3, 2)}`;

    // Header with title + action links
    const header = document.createElement('div');
    header.className = 'project-header';

    const titleLink = document.createElement('a');
    titleLink.className = 'project-title-link';
    titleLink.href = project.demo || project.github || '#';
    if (project.demo || project.github) {
      titleLink.target = '_blank';
      titleLink.rel = 'noopener noreferrer';
    }

    const title = document.createElement('h3');
    title.className = 'project-title';
    title.textContent = project.title;
    titleLink.appendChild(title);
    header.appendChild(titleLink);

    const actions = document.createElement('div');
    actions.className = 'project-actions';

    if (project.demo) {
      const demoLink = document.createElement('a');
      demoLink.className = 'project-link';
      demoLink.href = project.demo;
      demoLink.target = '_blank';
      demoLink.rel = 'noopener noreferrer';
      demoLink.title = t.project_open_demo ?? 'Open live demo';
      demoLink.setAttribute('aria-label', `${t.project_open_demo ?? 'Open demo'}: ${project.title}`);
      demoLink.innerHTML = '<i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>';
      actions.appendChild(demoLink);
    }

    if (project.github) {
      const githubLink = document.createElement('a');
      githubLink.className = 'project-link';
      githubLink.href = project.github;
      githubLink.target = '_blank';
      githubLink.rel = 'noopener noreferrer';
      githubLink.title = t.project_open_source ?? 'View source on GitHub';
      githubLink.setAttribute('aria-label', `${t.project_open_source ?? 'View source'}: ${project.title}`);
      githubLink.innerHTML = '<i class="fa-brands fa-github" aria-hidden="true"></i>';
      actions.appendChild(githubLink);
    }

    header.appendChild(actions);
    card.appendChild(header);

    // Description
    const desc = document.createElement('p');
    desc.className = 'project-desc';
    desc.textContent = project.description;
    card.appendChild(desc);

    // Badges
    const badges = document.createElement('div');
    badges.className = 'project-badges';
    project.badges.forEach((badgeText) => {
      const badge = document.createElement('span');
      badge.className = 'badge';
      badge.textContent = badgeText;
      badges.appendChild(badge);
    });
    card.appendChild(badges);

    grid.appendChild(card);
  });

  // Observe freshly rendered cards for reveal animation
  initRevealOnScroll();
}

export function initProjects(): void {
  renderProjects(document.documentElement.lang as Lang);

  window.addEventListener('langchange', ((e: CustomEvent<{ lang: Lang }>) => {
    renderProjects(e.detail.lang);
  }) as EventListener);
}
