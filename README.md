# Resume Portfolio

Личный сайт-резюме на **Vite + TypeScript + SCSS** с несколькими страницами (мультистраничная сборка Vite MPA), стилями glassmorphism, i18n (RU/EN), SEO, PWA и деплоем на GitHub Pages через GitHub Actions.

## Страницы

| Страница | Файл | Содержимое |
|---|---|---|
| Главная | `index.html` | базовая информация, навыки, **ссылки на страницы профессий**, избранные проекты, контакты |
| C# разработчик | `csharp.html` | профильный hero, стек C#/.NET, проекты на C# |
| Аналитик данных | `analyst.html` | профильный hero, стек аналитика, проекты аналитики |
| Политика | `public/privacy.html` | политика конфиденциальности |

Навигация между страницами — в шапке (`page-nav`), на главной дополнительно — карточки профессий в секции «Страницы профессий».

## Стек

- **Vite 5** — dev-сервер и production-сборка (MPA: 3 точки входа в `vite.config.ts`)
- **TypeScript 5** — типизация (strict)
- **SCSS + Dart Sass modern API** — стили без legacy JS API warning
- **CSS Custom Properties** — дизайн-токены в `src/styles/variables.css`
- **Vanilla TypeScript components** — инициализация интерактивных блоков без UI-фреймворка
- **Font Awesome** — иконки навыков, контактов и проектов
- **Python (Pillow)** — автоматическая оптимизация изображений (WebP-генерация, квантование палитры)
- **GitHub Actions** — автоматический деплой на Pages

## Использованные приёмы

- **Оптимизация производительности и Core Web Vitals (LCP, CLS)**:
  - **WebP и адаптивный `<picture>`**: выдача сжатого WebP для современных браузеров с PNG-fallback (сокращение веса главного фото с 2.08 МБ до 25.7 КБ, **−98.8%**).
  - **Разделение контекстов графики**: отдельный thumbnail (80×80 WebP, ~1.2 КБ) для аватара в шапке вместо масштабирования полноразмерного hero-фото.
  - **Предотвращение сдвигов макета (CLS)**: явные атрибуты `width` и `height` на всех изображениях.
  - **Сжатие PWA-иконок и favicons**: квантование адаптивной 256-цветной палитрой (иконка 512×512 уменьшена с 500 КБ до 54 КБ, **−89%**).
  - **Ранний `preconnect`**: к `cdnjs.cloudflare.com` и `fonts.gstatic.com` для заблаговременного DNS/TLS-рукопожатия.
  - **Шрифтовой тримминг**: подключение только используемых начертаний Google Fonts (Inter и Space Grotesk) вместо избыточных 10 весов.
- **Блокирующая загрузка CSS из `<head>`** — `variables.css` и `main.scss` подключены напрямую в HTML, чтобы страница не мигала без оформления до запуска JS.
- **MPA-навигация** — отдельные HTML-страницы `index`, `csharp`, `analyst` с общим TypeScript-entrypoint.
- **i18n RU/EN** — словари `src/i18n/ru.ts` и `src/i18n/en.ts`, переключатель языка и обновление SEO/контента.
- **SEO и social preview** — canonical, meta description/keywords, Open Graph, Twitter Card, sitemap и robots.
- **PWA-база** — manifest, favicon-набор, service worker (кэширование HTML и ассетов, версионирование `v4`) и theme color.
- **Доступность** — skip-link, `aria-label`, `aria-pressed`, `aria-current`, `:focus-visible`, поддержка `prefers-reduced-motion`.
- **Приватная аналитика по согласию** — cookie-баннер и отложенная загрузка Яндекс.Метрики.
- **Reveal on scroll** — IntersectionObserver-анимации для карточек и секций.
- **Clipboard API** — копирование email из карточки контактов.
- **Lightbox** — просмотр кликабельных изображений проектов.
- **Responsive CSS** — адаптивные сетки и шапка через media queries.

## Структура

```
├─ index.html               (главная — точка входа Vite)
├─ csharp.html              (страница C# разработчика)
├─ analyst.html             (страница аналитика данных)
├─ src/
│  ├─ main.ts               (основной TypeScript-модуль)
│  ├─ assets/               (исходники фото и графики в полном разрешении)
│  ├─ styles/
│  │  ├─ variables.css      (CSS-переменные, темы)
│  │  └─ main.scss          (глобальные стили)
│  ├─ components/           (Header, Hero, About, Projects, Contact, Footer, CookieBanner)
│  ├─ i18n/                 (en.ts, ru.ts — словари + навыки/проекты всех страниц)
│  ├─ utils/                (observer.ts, i18n.ts)
│  └─ types/                (i18n.d.ts)
├─ public/                  (manifest.json, robots.txt, sitemap.xml, sw.js, favicon/, assets/og-image.png, privacy.html)
├─ scripts/                 (optimize-images.py, generate-favicons.ps1, generate-favicon-from-photo.ps1, create-favicon-ico.ps1, generate-og-image.ps1)
└─ .github/workflows/deploy.yml
```

**Дизайн** — собственная идентичность v2: дуотон индиго → маджента (`--color-primary-mid` → `--color-primary-light`), mesh-градиент со сеткой, слоистое стекло, заголовки Space Grotesk, приподнятые карточки с градиентной кромкой. Токены — в `src/styles/variables.css`, компоненты — в `src/styles/main.scss`.

**Оптимизация изображений** — `npm run optimize:images` (или `python scripts/optimize-images.py`): генерирует WebP и сжатые PNG для hero и аватара из `src/assets/resume_photo_original.png`, а также сжимает favicons и OG-картинку.
**Favicon** — можно при необходимости перегенерировать: `powershell -ExecutionPolicy Bypass -File scripts\generate-favicons.ps1`.
**OG-картинка** (1200×630 для превью в соцсетях) — можно заменить `public/assets/og-image.png` своей или перегенерировать: `powershell -ExecutionPolicy Bypass -File scripts\generate-og-image.ps1` (тексты и цвета — в самом скрипте).
**Яндекс.Метрика** — счётчик `113568266` задан в `src/components/CookieBanner.ts` (константа `YANDEX_METRIKA_ID`)

## Cookie-баннер и аналитика

- Компонент `src/components/CookieBanner.ts` показывает баннер при первом визите; выбор сохраняется в `localStorage` (`resume_cookie_consent` = `accepted` / `declined`) и общий для всех трёх страниц.
- Скрипт Яндекс.Метрики (`tag.js?id=113568266`) загружается **только** после нажатия «Принять» и только если задан `YANDEX_METRIKA_ID`.
- Тексты кнопок и описания — ключи `cookie_*` в `src/i18n/ru.ts` и `src/i18n/en.ts`.

## Деплой

Workflow `.github/workflows/deploy.yml` собирает и публикует сайт автоматически при push в `main`.

## Доступность

- skip-link к основному контенту
- `aria-label` у интерактивных элементов, `aria-pressed` у переключателя языка, `aria-current="page"` в навигации
- видимый `:focus-visible`
- поддержка `prefers-reduced-motion`
