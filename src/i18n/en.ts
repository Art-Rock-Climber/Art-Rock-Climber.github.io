import type { Dictionary, PortfolioContent } from '@/types/i18n';

export const en: Dictionary = {
  // --- SEO (per page) -------------------------------------------------------
  seo_title: 'Bannikov Vladislav — Developer & Data Analyst Portfolio',
  seo_description:
    'Portfolio of Bannikov Vladislav: C#/.NET and PostgreSQL development, data analytics with SQL, Python and Datalens. Projects, skills and contacts.',
  seo_keywords:
    'Bannikov Vladislav, portfolio, resume, developer, C#, .NET, Python, SQL, data analyst',
  og_title: 'Bannikov Vladislav — Developer & Data Analyst Portfolio',
  og_description: 'C#/.NET, PostgreSQL, SQL, Python, Datalens. Projects, skills and contacts.',

  csharp_seo_title: 'C# / .NET Developer — Bannikov Vladislav Portfolio',
  csharp_seo_description:
    'C# / .NET developer portfolio: ASP.NET Core, WPF, Entity Framework, SQL. C# projects, skills and contacts.',
  csharp_seo_keywords:
    'C# developer, .NET, ASP.NET Core, WPF, Entity Framework, portfolio, Bannikov Vladislav',
  csharp_og_title: 'C# / .NET Developer — Bannikov Vladislav Portfolio',
  csharp_og_description: 'ASP.NET Core, WPF, Entity Framework. Projects, skills and contacts.',

  analyst_seo_title: 'Data Analyst — Bannikov Vladislav Portfolio',
  analyst_seo_description:
    'Data analyst portfolio: SQL, Python, Datalens, A/B testing, ETL. Dashboards, projects, skills and contacts.',
  analyst_seo_keywords:
    'data analyst, SQL, Python, Datalens, A/B testing, portfolio, Bannikov Vladislav',
  analyst_og_title: 'Data Analyst — Bannikov Vladislav Portfolio',
  analyst_og_description: 'SQL, Python, Datalens, A/B testing. Projects, skills and contacts.',

  // --- Accessibility --------------------------------------------------------
  skip_link: 'Skip to main content',

  // --- Header / navigation --------------------------------------------------
  // GitHub link is set in the HTML of each page
  nav_brand: 'Bannikov Vladislav',
  nav_github: 'GitHub',
  nav_home: 'Home',
  nav_csharp: 'C# Developer',
  nav_analyst: 'Data Analyst',

  // --- Home: hero -----------------------------------------------------------
  hero_title: 'C# Developer<br><span class="text-gradient">&amp; Data Analyst</span>',
  hero_subtitle:
    'Passionate about creating new ideas.',
  hero_btn_projects: 'View Projects',
  hero_btn_contact: 'Get In Touch',

  // --- Home: about ----------------------------------------------------------
  about_title: 'About Me',
  about_p1: 'Junior developer, data analyst. HSE student.',
  about_p2: "C#, Python, Excel, Metrica",
  about_p3: "When not coding, you'll find me participating in conferences or exploring new technologies.",
  skills_title: 'Core Competencies',

  // --- Home: projects -------------------------------------------------------
  projects_title: 'Featured Projects',
  projects_subtitle: 'A selection of projects I’ve worked on',
  projects_view_all: 'View All on GitHub',
  project_open_demo: 'Open live demo',
  project_open_source: 'View source on GitHub',

  // --- Home: professions ----------------------------------------------------
  prof_title: 'Career Pages',
  prof_subtitle: 'Pick a direction to see a focused stack and projects',
  prof_csharp_title: 'C# Developer',
  prof_csharp_desc: '.NET ecosystem: ASP.NET Core APIs, WPF desktop apps, Entity Framework and clean architecture.',
  prof_analyst_title: 'Data Analyst',
  prof_analyst_desc: 'SQL, Python and BI: dashboards, A/B testing and product metrics.',
  prof_cta: 'Open page',

  // --- C# Developer page ----------------------------------------------------
  csharp_hero_title: 'C# / .NET Developer<br><span class="text-gradient">Desktop &amp; Web Solutions</span>',
  csharp_hero_subtitle:
    'Building applications with ASP.NET Core, WPF and Entity Framework. Clean architecture, tests and CI/CD.',
  csharp_about_title: 'About Me',
  csharp_about_p1: 'C# developer focused on the .NET ecosystem: from ASP.NET Core APIs to WPF desktop tools.',
  csharp_about_p2: 'I apply the principles of SOLID, layered architecture and automated testing.',
  csharp_about_p3: 'I have experience integrating databases, message queues and third-party services, as well as packaging and deploying applications.',
  csharp_skills_title: 'Stack',
  csharp_projects_title: 'C# / .NET Projects',
  csharp_projects_subtitle: 'Desktop and server applications',

  // --- Data Analyst page ----------------------------------------------------
  analyst_hero_title: 'Data Analyst<br><span class="text-gradient">Insights From Data</span>',
  analyst_hero_subtitle:
    'Turning raw data into product decisions: SQL, Python, BI dashboards and experiments.',
  analyst_about_title: 'About Me',
  analyst_about_p1: 'Data analyst who turns raw data into product decisions: from SQL requests and ETL to executive dashboards.',
  analyst_about_p2: 'I build metrics systems, run A/B experiments and communicate results clearly to product and business teams.',
  analyst_about_p3: 'Tools of choice: SQL, Python (pandas), Datalens, and a focus on data quality and reproducibility.',
  analyst_skills_title: 'Stack',
  analyst_projects_title: 'Analytics Projects',
  analyst_projects_subtitle: 'Dashboards, pipelines and experiments',

  // --- Contact (shared) -----------------------------------------------------
  contact_title: "Let's Work Together",
  contact_desc: 'Open to new opportunities and projects',
  contact_email_label: 'Email (Click to copy)',
  contact_email_copied: 'Copied!',
  contact_github_label: 'GitHub',
  contact_vk_label: 'VK',
  contact_tg_label: 'Telegram',

  // --- Cookie banner --------------------------------------------------------
  cookie_text: 'This site uses cookies for anonymous analytics (Yandex Metrika).',
  cookie_privacy: 'Privacy Policy',
  cookie_accept: 'Accept',
  cookie_decline: 'Decline',

  // --- Footer (shared) ------------------------------------------------------
  footer_rights: '© 2026 Bannikov Vladislav. All rights reserved.',
  footer_privacy: 'Privacy Policy',
};

export const enContent: PortfolioContent = {
  lang: 'en',
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
            'https://github.com/Presentation-Slide-Map-Maker/PptxSlideMapMaker_dotnet-framework',
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
          github:
            'https://github.com/Art-Rock-Climber/__TAKE-HOME-PROJ__OrderProcessingApp/tree/develop',
          badges: ['.NET', 'Kafka', 'Moq', 'SignalR', 'Docker', 'Swagger'],
        },
        {
          title: 'Presentation Slide Map Maker (Desktop)',
          description:
            'WPF-приложение для .pptx презентаций: строит интерактивное содержание с кликабельными миниатюрами слайдов.',
          github:
            'https://github.com/Presentation-Slide-Map-Maker/PptxSlideMapMaker_dotnet-framework',
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
          description: 'Построение ARIMA-модели для проверки сезонности запросов.',
          github: 'https://github.com/Art-Rock-Climber/Elbrus-tour-searches-analysis',
          badges: ['Python', 'Статистика', 'Jupyter'],
        },
      ],
    },
  },
};
