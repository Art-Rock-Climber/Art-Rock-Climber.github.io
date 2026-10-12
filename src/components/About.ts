import type { Lang } from '@/types/i18n';
import { getContent, getPageId } from '@/utils/i18n';

/**
 * About — renders skill badges into the "Core Competencies" grid.
 * Skills depend on the current page (home / csharp / analyst).
 */
function renderSkills(lang: Lang): void {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  const { skills } = getContent(lang).pages[getPageId()];
  grid.innerHTML = '';

  skills.forEach((skill) => {
    const badge = document.createElement('span');
    badge.className = 'skill-badge';

    if (skill.icon) {
      const icon = document.createElement('i');
      icon.className = skill.icon;
      icon.setAttribute('aria-hidden', 'true');
      badge.appendChild(icon);
    }

    badge.appendChild(document.createTextNode(skill.name));
    grid.appendChild(badge);
  });
}

export function initAbout(): void {
  renderSkills(document.documentElement.lang as Lang);

  window.addEventListener('langchange', ((e: CustomEvent<{ lang: Lang }>) => {
    renderSkills(e.detail.lang);
  }) as EventListener);
}
