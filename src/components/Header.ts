import { getPageId } from '@/utils/i18n';

/**
 * Header — glassmorphism navigation bar with language switcher.
 * Static markup lives in HTML; this module wires up interactions.
 */
export function initHeader(): void {
  // Highlight the current page in the header navigation
  const currentPage = getPageId();
  document.querySelectorAll<HTMLAnchorElement>('[data-page-link]').forEach((link) => {
    const isActive = link.dataset.pageLink === currentPage;
    link.classList.toggle('active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });

  // Smooth scroll for in-page anchors (all components share this behavior)
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector<HTMLElement>(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        // Move focus for keyboard/screen-reader users
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });

  // Parallax effect for background orbs
  const orbs = document.querySelectorAll<HTMLElement>('.glow-orb');
  if (orbs.length > 0 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('mousemove', (e) => {
      orbs.forEach((orb, index) => {
        const speed = index === 0 ? 30 : -40;
        const xOffset = (window.innerWidth / 2 - e.clientX) / speed;
        const yOffset = (window.innerHeight / 2 - e.clientY) / speed;
        orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    });
  }
}
