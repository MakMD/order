// In a real application, you might fetch this from a CMS or API
export const caseStudies = [
  {
    id: 1,
    slug: "trattoria-bella",
    client: "Локальний бізнес (Концепт)",
    year: 2024,
    title: 'Сайт для ресторану італійської кухні "Trattoria Bella"',
    description:
      "Веб-сайт для невеликого ресторану італійської кухні, з затишним дизайном та детальним описом страв, що викликає апетит.",
    mainImage: "/images/case-studies/trattoria-bella-main.jpg", // Placeholder image path
    technologies: ["React", "Vite", "Supabase", "CSS Modules", "i18next"],
    liveDemoUrl: null, // Add link when available
    githubRepoUrl: null, // Add link when available

    challenge: {
      title: "Завдання: Створити апетитний онлайн-досвід",
      text: "Головним викликом було створити не просто сайт-візитку, а справжній цифровий куточок Італії. Потрібно було передати атмосферу затишку, продемонструвати страви так, щоб у відвідувачів виникало бажання негайно забронювати столик, та забезпечити просту систему онлайн-бронювання.",
    },
    solution: {
      title: "Рішення: Поєднання естетики та функціональності",
      text: "Я розробив дизайн, що базується на теплих тонах, натуральних текстурах та елегантній типографіці. Меню було представлено у вигляді інтерактивної галереї з високоякісними фотографіями та детальним описом кожної страви. Для онлайн-бронювання була реалізована інтеграція з Supabase, що дозволило створити просту та надійну форму, дані з якої одразу надходять адміністратору ресторану.",
    },
    results: {
      title: "Результат",
      items: [
        "Створено візуально привабливий та адаптивний сайт, що чудово виглядає на всіх пристроях.",
        "Реалізовано просту та ефективну систему онлайн-бронювання столиків.",
        "Структура сайту оптимізована для SEO, що допомагає залучати нових клієнтів через пошукові системи.",
      ],
    },
    gallery: [
      "/images/case-studies/trattoria-bella-gallery-1.jpg",
      "/images/case-studies/trattoria-bella-gallery-2.jpg",
      "/images/case-studies/trattoria-bella-gallery-3.jpg",
    ],
  },
  // To add a new case study, copy the object above and paste it here, then change the content.
];
