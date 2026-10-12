import type { Dictionary, Lang, PageId } from '@/types/i18n';
import { en, enContent } from '@/i18n/en';
import { ru, ruContent } from '@/i18n/ru';

const STORAGE_KEY = 'resume_lang';

const dictionaries: Record<Lang, Dictionary> = { en, ru };
const contents = { en: enContent, ru: ruContent };

export type { Lang, Dictionary, PageId };

/** Current page id, taken from <body data-page="..."> (falls back to 'home'). */
export function getPageId(): PageId {
  const page = document.body.dataset.page;
  return page === 'csharp' || page === 'analyst' ? page : 'home';
}

export function getInitialLang(): Lang {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'en' || saved === 'ru') return saved;

  const browserLang = (navigator.language || '').toLowerCase();
  return browserLang.startsWith('ru') ? 'ru' : 'en';
}

export function applyLanguage(lang: Lang): void {
  const dict = dictionaries[lang];
  if (!dict) return;

  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang;

  // Update language buttons
  document.querySelectorAll<HTMLButtonElement>('[data-lang-btn]').forEach((btn) => {
    const isActive = btn.dataset.langBtn === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  // Translate elements with data-i18n (innerHTML: dictionary may contain markup)
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (key && dict[key] !== undefined) {
      if (el instanceof HTMLMetaElement) {
        // <meta name/description> etc. — translate the content attribute
        el.setAttribute('content', dict[key]);
      } else {
        el.innerHTML = dict[key];
        // Empty translation = paragraph intentionally removed for this language
        el.hidden = dict[key].trim() === '';
      }
    }
  });
}

export function initI18n(): void {
  const initialLang = getInitialLang();
  applyLanguage(initialLang);

  document.querySelectorAll<HTMLButtonElement>('[data-lang-btn]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.langBtn as Lang;
      applyLanguage(lang);
      // Re-render dynamic lists with new content
      window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
    });
  });
}

export function getContent(lang: Lang) {
  return contents[lang];
}

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang];
}
