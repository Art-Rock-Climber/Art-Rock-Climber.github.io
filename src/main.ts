import { initHeader } from '@/components/Header';
import { initHero } from '@/components/Hero';
import { initAbout } from '@/components/About';
import { initProjects } from '@/components/Projects';
import { initContact } from '@/components/Contact';
import { initFooter } from '@/components/Footer';
import { initCookieBanner } from '@/components/CookieBanner';
import { initI18n } from '@/utils/i18n';
import { initRevealOnScroll } from '@/utils/observer';

/** Lightbox for zoomable images. */
function initLightbox(): void {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = lightbox?.querySelector<HTMLElement>('.lightbox-close');
  if (!lightbox || !(lightboxImg instanceof HTMLImageElement)) return;

  const open = (src: string, alt: string) => {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.style.display = 'block';
    closeBtn?.focus();
  };

  const close = () => {
    lightbox.style.display = 'none';
  };

  const bindZoomable = () => {
    document.querySelectorAll<HTMLImageElement>('.zoomable').forEach((img) => {
      img.addEventListener('click', () => open(img.src, img.alt));
    });
  };
  bindZoomable();

  // Re-bind after project re-renders on language change
  window.addEventListener('langchange', bindZoomable);

  closeBtn?.addEventListener('click', close);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'block') close();
  });
}

/** Register the PWA service worker (production only). */
function initServiceWorker(): void {
  if (!('serviceWorker' in navigator) || import.meta.env.DEV) return;
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      /* SW registration is best-effort */
    });
  });
}

function init(): void {
  // Banner first: it renders data-i18n nodes that initI18n() then translates
  initCookieBanner();
  initI18n();
  initHeader();
  initHero();
  initAbout();
  initProjects();
  initContact();
  initFooter();
  initRevealOnScroll();
  initLightbox();
  initServiceWorker();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
