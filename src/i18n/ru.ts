import type { Dictionary, PortfolioContent } from '@/types/i18n';

export const ru: Dictionary = {
  // --- SEO (постранично) ----------------------------------------------------
  seo_title: 'Банников Владислав — разработчик и аналитик данных',
  seo_description:
    'Портфолио Банникова Владислава: разработка на C#/.NET и PostgreSQL, аналитика данных (SQL, Python, Datalens). Проекты, навыки и контакты.',
  seo_keywords:
    'Банников Владислав, разработчик, портфолио, резюме, C#, .NET, Python, SQL, аналитик данных',
  og_title: 'Банников Владислав — разработчик и аналитик данных',
  og_description: 'C#/.NET, PostgreSQL, SQL, Python, Datalens. Проекты, навыки и контакты.',

  csharp_seo_title: 'C# / .NET разработчик — портфолио Банникова Владислава',
  csharp_seo_description:
    'Портфолио C#/.NET разработчика: ASP.NET Core, WPF, Entity Framework, SQL. Проекты на C#, навыки и контакты.',
  csharp_seo_keywords:
    'C# разработчик, .NET, ASP.NET Core, WPF, Entity Framework, портфолио, Банников Владислав',
  csharp_og_title: 'C# / .NET разработчик — портфолио Банникова Владислава',
  csharp_og_description: 'ASP.NET Core, WPF, Entity Framework. Проекты, навыки и контакты.',

  analyst_seo_title: 'Аналитик данных — портфолио Банникова Владислава',
  analyst_seo_description:
    'Портфолио аналитика данных: SQL, Python, Datalens, A/B тесты, ETL. Дашборды, проекты, навыки и контакты.',
  analyst_seo_keywords:
    'аналитик данных, SQL, Python, Datalens, A/B тесты, портфолио, Банников Владислав',
  analyst_og_title: 'Аналитик данных — портфолио Банникова Владислава',
  analyst_og_description: 'SQL, Python, Datalens, A/B тесты. Проекты, навыки и контакты.',

  // --- Доступность ----------------------------------------------------------
  skip_link: 'Перейти к основному содержимому',

  // --- Шапка / навигация ----------------------------------------------------
  // GitHub-ссылка задана в HTML каждой страницы
  nav_brand: 'Банников Владислав',
  nav_github: 'GitHub',
  nav_home: 'Главная',
  nav_csharp: 'C# Разработчик',
  nav_analyst: 'Аналитик данных',

  // --- Главная: hero --------------------------------------------------------
  hero_title: 'C# Разработчик<br><span class="text-gradient">и аналитик данных</span>',
  hero_subtitle:
    'Люблю придумывать новые идеи, как облегчить жизнь другим и усложнить себе :)',
  hero_btn_projects: 'Смотреть проекты',
  hero_btn_contact: 'Связаться',

  // --- Главная: обо мне -----------------------------------------------------
  about_title: 'Обо мне',
  about_p1: 'Начинающий разработчик, аналитик данных. Студент Высшей школы экономики',
  about_p2: '',
  about_p3: 'Когда не пишу код, я участвую в конференциях или изучаю новые технологии.',
  skills_title: 'Ключевые компетенции',

  // --- Главная: проекты -----------------------------------------------------
  projects_title: 'Избранные проекты',
  projects_subtitle: 'Подборка проектов, над которыми я работал',
  projects_view_all: 'Все проекты на GitHub',
  project_open_demo: 'Открыть демо',
  project_open_source: 'Исходный код на GitHub',

  // --- Главная: карточки профессий -----------------------------------------
  prof_title: 'Страницы профессий',
  prof_subtitle: 'Выберите направление, чтобы увидеть профильный стек и проекты',
  prof_csharp_title: 'C# Разработчик',
  prof_csharp_desc: '.NET экосистема: ASP.NET Core API, настольные приложения на WPF, Entity Framework и чистая архитектура.',
  prof_analyst_title: 'Аналитик данных',
  prof_analyst_desc: 'SQL, Python и BI: дашборды, A/B тесты и продуктовые метрики.',
  prof_cta: 'Открыть страницу',

  // --- Страница «C# Разработчик» -------------------------------------------
  csharp_hero_title: 'C# / .NET Разработчик<br><span class="text-gradient">Десктоп и веб-решения</span>',
  csharp_hero_subtitle:
    'Создаю приложения на ASP.NET Core, WPF и Entity Framework. Чистая архитектура, тесты и CI/CD.',
  csharp_about_title: 'Обо мне',
  csharp_about_p1: 'C# разработчик, на .NET экосистеме: ASP.NET Core, WPF.',
  csharp_about_p2: 'Применяю принципы ООП',
  csharp_about_p3: 'Есть опыт интеграции с базами данных, очередями сообщений, а также упаковки и развёртывания приложений.',
  csharp_skills_title: 'Стек',
  csharp_projects_title: 'Проекты на C# / .NET',
  csharp_projects_subtitle: 'Десктопные и серверные приложения',

  // --- Страница «Аналитик данных» ------------------------------------------
  analyst_hero_title: 'Аналитик данных<br><span class="text-gradient">Инсайты из данных</span>',
  analyst_hero_subtitle:
    'Превращаю сырые данные в продуктовые решения: SQL, Python, BI-дашборды и эксперименты.',
  analyst_about_title: 'Обо мне',
  analyst_about_p1: 'Аналитик данных, который превращает сырые данные в продуктовые решения.',
  analyst_about_p2: 'Строю системы метрик, провожу A/B эксперименты и понятно объясняю результаты продуктовым и бизнес-командам.',
  analyst_about_p3: 'Основные инструменты: SQL, Python (pandas), Datalens.',
  analyst_skills_title: 'Стек',
  analyst_projects_title: 'Проекты аналитики',
  analyst_projects_subtitle: 'Дашборды, конвейеры и эксперименты',

  // --- Контакты (общие) -----------------------------------------------------
  contact_title: 'Давайте работать вместе',
  contact_desc: 'Открыт к новым возможностям и проектам.',
  contact_email_label: 'Почта (Нажмите, чтобы скопировать)',
  contact_email_copied: 'Скопировано!',
  contact_github_label: 'GitHub',
  contact_vk_label: 'ВКонтакте',
  contact_tg_label: 'Telegram',

  // --- Cookie-баннер --------------------------------------------------------
  cookie_text: 'Этот сайт использует cookie для анонимной аналитики (Яндекс.Метрика).',
  cookie_privacy: 'Политика конфиденциальности',
  cookie_accept: 'Принять',
  cookie_decline: 'Отклонить',

  // --- Футер (общий) --------------------------------------------------------
  footer_rights: '© 2026 Банников Владислав. Все права защищены.',
  footer_privacy: 'Политика конфиденциальности',
};

export const ruContent: PortfolioContent = {
  lang: 'ru',
  pages: {
    // ------------------------------------------------------------------ home
    home: {
      skills: [
        { name: 'C#', icon: 'fa-brands fa-microsoft' },
        { name: '.NET', icon: 'fa-solid fa-code' },
        { name: 'PostgreSQL', icon: 'fa-solid fa-database' },
        { name: 'Docker', icon: 'fa-brands fa-docker' },
        { name: 'Git', icon: 'fa-brands fa-git-alt' },
        { name: 'Vite', icon: 'fa-solid fa-bolt' },
        { name: 'Тесты (Unit)', icon: 'fa-solid fa-vial' },
        { name: 'CI/CD', icon: 'fa-solid fa-infinity' },
        { name: 'REST API', icon: 'fa-solid fa-plug' },
        { name: 'SQL', icon: 'fa-solid fa-database' },
        { name: 'Python (pandas)', icon: 'fa-brands fa-python' },
        { name: 'Datalens', icon: 'fa-solid fa-chart-pie' },
        { name: 'Yandex Metrica', icon: 'fa-solid fa-magnifying-glass-chart' },
        { name: 'Статистика', icon: 'fa-solid fa-percent' },
      ],
      projects: [
        {
          title: 'Microservices Take-home project',
          description:
            'Тестовое на микросервисы с CQRS, очередями Kafka, логированием и тестами.',
          github:
            'https://github.com/Art-Rock-Climber/__TAKE-HOME-PROJ__OrderProcessingApp/tree/develop',
          badges: ['.NET', 'Kafka', 'Moq', 'SignalR', 'Docker', 'Swagger'],
        },
        {
          title: 'Presentation Slide Map Maker',
          description:
            'Расширение Google Slides и WPF-приложение для .pptx презентаций: строит интерактивное содержание с кликабельными миниатюрами слайдов.',
          github:
            'https://github.com/Presentation-Slide-Map-Maker',
          badges: ['C#', 'WPF', '.NET Framework'],
        },
        {
          title: 'Курсовая по Веб-маркетингу',
          description:
            'Анализ бизнеса, данных сайта в Метрике, предложения по введению KPI и инструментов аналитики.',
          github: '',
          demo: 'https://docs.google.com/document/d/1-EscJgN3BhPfT-a353eTDvvfWTKJpQUptbqPqDmgrJg/edit?tab=t.0',
          badges: ['Yandex Metrica', 'Wordstat', 'Python'],
        },
        {
          title: 'Анализ сезонности запросов "тур эльбрус" в Яндексе',
          description: 'Построение ARIMA-модели для проверки сезонности запросов.',
          github: 'https://github.com/Art-Rock-Climber/Elbrus-tour-searches-analysis',
          badges: ['Python', 'Статистика', 'Jupyter'],
        },
      ],
    },
    // --------------------------------------------------------------- csharp
    csharp: {
      skills: [
        { name: 'C#', icon: 'fa-brands fa-microsoft' },
        { name: '.NET', icon: 'fa-solid fa-code' },
        { name: 'ASP.NET Core', icon: 'fa-solid fa-server' },
        { name: 'WPF', icon: 'fa-brands fa-windows' },
        { name: 'Entity Framework', icon: 'fa-solid fa-database' },
        { name: 'SQL Server', icon: 'fa-solid fa-table' },
        { name: 'xUnit', icon: 'fa-solid fa-vial' },
        { name: 'Docker', icon: 'fa-brands fa-docker' },
        { name: 'Git', icon: 'fa-brands fa-git-alt' },
      ],
      projects: [
        {
          title: 'Microservices Take-home project',
          description:
            'Тестовое на микросервисы с CQRS, очередями Kafka, логированием и тестами.',
          github: 'https://github.com/Art-Rock-Climber/__TAKE-HOME-PROJ__OrderProcessingApp/tree/develop',
          badges: ['.NET', 'Kafka', 'Moq', "SignalR", 'Docker', 'Swagger'],
        },
        {
          title: 'Presentation Slide Map Maker (Desktop)',
          description:
            'WPF-приложение для .pptx презентаций: строит интерактивное содержание с кликабельными миниатюрами слайдов.',
          github: 'https://github.com/Presentation-Slide-Map-Maker/PptxSlideMapMaker_dotnet-framework',
          badges: ['C#', 'WPF', '.NET Framework'],
        },
        {
          title: 'Лабораторная Study Tracker MVC',
          description:
            'ASP.NET MVC приложение для управления студентами и дисциплинами.',
          github:
            'https://github.com/Art-Rock-Climber/__LABS__StudyTracker_MVC',
          badges: ['C#', 'ASP.NET', 'MVC'],
        },
        {
          title: 'S.A.R.A.',
          description:
            'WPF-приложение для управления награждёнными мунициального образования',
          github: 'https://github.com/Art-Rock-Climber/S.A.R.A._Awarding-Manager',
          badges: ['C#', 'WPF', '.NET Core', 'EF Core'],
        },
        
      ],
    },
    // -------------------------------------------------------------- analyst
    analyst: {
      skills: [
        { name: 'SQL', icon: 'fa-solid fa-database' },
        { name: 'Python (pandas)', icon: 'fa-brands fa-python' },
        { name: 'Datalens', icon: 'fa-solid fa-chart-pie' },
        { name: 'Excel / Google Sheets', icon: 'fa-solid fa-file-excel' },
        { name: 'A/B тесты', icon: 'fa-solid fa-flask' },
        { name: 'Yandex Metrica', icon: 'fa-solid fa-magnifying-glass-chart' },
        { name: 'Статистика', icon: 'fa-solid fa-percent' },
        { name: 'Git', icon: 'fa-brands fa-git-alt' },
      ],
      projects: [
        {
          title: 'Курсовая по Веб-маркетингу',
          description:
            'Анализ бизнеса, данных сайта в Метрике, предложения по введению KPI и инструментов аналитики.',
          github: '',
          demo: 'https://docs.google.com/document/d/1-EscJgN3BhPfT-a353eTDvvfWTKJpQUptbqPqDmgrJg/edit?tab=t.0',
          badges: ['Yandex Metrica', 'Wordstat', 'Python'],
        },
        {
          title: 'Анализ сезонности запросов "тур эльбрус" в Яндексе',
          description:
            'Построение ARIMA-модели для проверки сезонности запросов.',
          github: 'https://github.com/Art-Rock-Climber/Elbrus-tour-searches-analysis',
          badges: ['Python', 'Статистика', 'Jupyter'],
        },
      ],
    },
  },
};
