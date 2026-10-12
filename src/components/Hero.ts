/**
 * Hero — hero section with CTA buttons and profile photo.
 * Static markup lives in index.html; this module ensures CTA anchors scroll smoothly.
 */
export function initHero(): void {
  // CTA buttons are regular anchors handled by Header's smooth scroll.
  // Here we add a subtle tilt effect on the photo (desktop only).
  const card = document.querySelector<HTMLElement>('.hero-photo');
  if (!card || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const heroVisual = card.closest<HTMLElement>('.hero-visual');
  if (!heroVisual) return;

  heroVisual.addEventListener('mousemove', (e) => {
    if (window.innerWidth < 900) return;
    const rect = heroVisual.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateY(${x * 20}deg) rotateX(${-y * 20}deg)`;
  });

  heroVisual.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
}
