/**
 * Cookie consent banner + Yandex Metrika loader.
 *
 * The counter is loaded ONLY after the user clicks "Accept".
 * Consent is stored in localStorage (key: resume_cookie_consent).
 */

// Your Yandex Metrika counter ID (null = analytics disabled).
// Loaded only after the user clicks "Accept" in the cookie banner.
const YANDEX_METRIKA_ID: number | null = 113568266;

const CONSENT_KEY = 'resume_cookie_consent';

type MetrikaStub = ((...args: unknown[]) => void) & { a?: unknown[]; l?: number };

declare global {
  interface Window {
    ym?: MetrikaStub;
  }
}

let metrikaLoaded = false;

/** Load the Metrika tag and initialize it (consent already given). */
function loadMetrika(): void {
  if (metrikaLoaded || !YANDEX_METRIKA_ID) return;
  metrikaLoaded = true;

  if (!window.ym) {
    const stub = ((...args: unknown[]) => {
      stub.a = stub.a || [];
      stub.a.push(args);
    }) as MetrikaStub;
    window.ym = stub;
  }
  window.ym.l = Date.now();

  const script = document.createElement('script');
  script.src = `https://mc.yandex.ru/metrika/tag.js?id=${YANDEX_METRIKA_ID}`;
  script.async = true;
  script.onload = () => {
    window.ym?.(YANDEX_METRIKA_ID, 'init', {
      ssr: true,
      webvisor: true,
      clickmap: true,
      accurateTrackBounce: true,
      trackLinks: true,
    });
  };
  document.head.appendChild(script);
}

function hideBanner(banner: HTMLElement): void {
  banner.classList.remove('show');
  banner.addEventListener('transitionend', () => banner.remove(), { once: true });
  // Fallback if transitionend never fires
  window.setTimeout(() => banner.remove(), 600);
}

export function initCookieBanner(): void {
  const consent = localStorage.getItem(CONSENT_KEY);

  if (consent === 'accepted') {
    loadMetrika();
    return;
  }
  if (consent === 'declined') return;

  const banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.id = 'cookieBanner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-live', 'polite');
  banner.setAttribute('aria-label', 'Cookie consent');
  banner.innerHTML = `
    <p class="cookie-text">
      <span data-i18n="cookie_text">This site uses cookies for anonymous analytics (Yandex Metrika).</span>
      <a href="/privacy.html" class="cookie-link" data-i18n="cookie_privacy">Privacy Policy</a>
    </p>
    <div class="cookie-actions">
      <button type="button" class="btn btn-primary cookie-accept" data-i18n="cookie_accept">Accept</button>
      <button type="button" class="btn btn-secondary cookie-decline" data-i18n="cookie_decline">Decline</button>
    </div>
  `;

  document.body.appendChild(banner);
  // Trigger the entrance animation on the next frame
  window.requestAnimationFrame(() => banner.classList.add('show'));

  banner.querySelector('.cookie-accept')?.addEventListener('click', () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    loadMetrika();
    hideBanner(banner);
  });

  banner.querySelector('.cookie-decline')?.addEventListener('click', () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    hideBanner(banner);
  });
}
