// src/data/case-studies-data.js
export const caseStudies = [
  {
    id: 1,
    slug: "trattoria-bella",
    client: {
      uk: "Локальний бізнес (Концепт)",
      en: "Local Business (Concept)",
    },
    year: 2024,
    title: {
      uk: 'Сайт для ресторану італійської кухні "Trattoria Bella"',
      en: 'Website for Italian Restaurant "Trattoria Bella"',
    },
    description: {
      uk: "Веб-сайт для невеликого ресторану італійської кухні, з затишним дизайном та детальним описом страв, що викликає апетит.",
      en: "A website for a small Italian restaurant, with a cozy design and a detailed description of dishes that whets the appetite.",
    },
    mainImage: "/images/case-studies/trattoria-bella-main.jpg",
    technologies: ["React", "Vite", "Supabase", "CSS Modules", "i18next"],
    liveDemoUrl: null,
    githubRepoUrl: null,
    challenge: {
      title: {
        uk: "Завдання: Створити апетитний онлайн-досвід",
        en: "Challenge: Create an Appetizing Online Experience",
      },
      text: {
        uk: "Головним викликом було створити не просто сайт-візитку, а справжній цифровий куточок Італії. Потрібно було передати атмосферу затишку, продемонструвати страви так, щоб у відвідувачів виникало бажання негайно забронювати столик, та забезпечити просту систему онлайн-бронювання.",
        en: "The main challenge was to create not just a business card website, but a true digital corner of Italy. It was necessary to convey a cozy atmosphere, showcase dishes in a way that would make visitors want to book a table immediately, and provide a simple online booking system.",
      },
    },
    solution: {
      title: {
        uk: "Рішення: Поєднання естетики та функціональності",
        en: "Solution: A Combination of Aesthetics and Functionality",
      },
      text: {
        uk: "Я розробив дизайн, що базується на теплих тонах, натуральних текстурах та елегантній типографіці. Меню було представлено у вигляді інтерактивної галереї з високоякісними фотографіями та детальним описом кожної страви. Для онлайн-бронювання була реалізована інтеграція з Supabase, що дозволило створити просту та надійну форму, дані з якої одразу надходять адміністратору ресторану.",
        en: "I developed a design based on warm tones, natural textures, and elegant typography. The menu was presented as an interactive gallery with high-quality photos and detailed descriptions of each dish. For online booking, an integration with Supabase was implemented, which allowed for the creation of a simple and reliable form, with data immediately sent to the restaurant administrator.",
      },
    },
    results: {
      title: {
        uk: "Результат",
        en: "Result",
      },
      items: [
        {
          uk: "Створено візуально привабливий та адаптивний сайт, що чудово виглядає на всіх пристроях.",
          en: "A visually appealing and responsive website was created that looks great on all devices.",
        },
        {
          uk: "Реалізовано просту та ефективну систему онлайн-бронювання столиків.",
          en: "A simple and effective online table booking system was implemented.",
        },
        {
          uk: "Структура сайту оптимізована для SEO, що допомагає залучати нових клієнтів через пошукові системи.",
          en: "The site structure is SEO-optimized to help attract new customers through search engines.",
        },
      ],
    },
    gallery: [
      "/images/case-studies/trattoria-bella-gallery-1.jpg",
      "/images/case-studies/trattoria-bella-gallery-2.jpg",
      "/images/case-studies/trattoria-bella-gallery-3.jpg",
    ],
  },
  {
    id: 2,
    slug: "flooring-boss-invoicing",
    client: {
      uk: "Flooring Boss Inc.",
      en: "Flooring Boss Inc.",
    },
    year: 2024,
    title: {
      uk: "Система створення інвойсів для підрядника",
      en: "Invoicing System for a Flooring Contractor",
    },
    description: {
      uk: "Веб-додаток, розроблений для компанії з укладання підлоги, що дозволяє власнику та його команді швидко та ефективно створювати та керувати інвойсами.",
      en: "A web application designed for a flooring company that allows the owner and his team to quickly and efficiently create and manage invoices.",
    },
    mainImage: "https://placehold.co/800x600/0d1117/e6edf3?text=Flooring+Boss",
    technologies: [
      "React",
      "Vite",
      "Supabase",
      "react-pdf",
      "CSS Modules",
      "React Router",
    ],
    liveDemoUrl: "https://flooring-boss.vercel.app/",
    githubRepoUrl: null,
    challenge: {
      title: {
        uk: "Завдання: Автоматизувати процес виставлення рахунків",
        en: "Challenge: Automate the Invoicing Process",
      },
      text: {
        uk: "Клієнт потребував простого та надійного інструменту для створення інвойсів безпосередньо на робочому місці. Головним викликом було створити інтуїтивно зрозумілий інтерфейс, який би дозволяв швидко додавати послуги, розраховувати вартість та генерувати готові до друку PDF-документи.",
        en: "The client needed a simple and reliable tool for creating invoices directly at the job site. The main challenge was to create an intuitive interface that would allow for quick addition of services, cost calculation, and generation of print-ready PDF documents.",
      },
    },
    solution: {
      title: {
        uk: "Рішення: Спеціалізований веб-додаток",
        en: "Solution: A Specialized Web Application",
      },
      text: {
        uk: "Я розробив односторінковий додаток (SPA) на React, який забезпечує миттєвий відгук інтерфейсу. Для зберігання даних про клієнтів та послуги була використана база даних Supabase. Ключовою функцією стала генерація PDF-інвойсів на льоту, що дозволило повністю оцифрувати та прискорити процес виставлення рахунків.",
        en: "I developed a Single-Page Application (SPA) on React, which provides instant interface feedback. A Supabase database was used to store client and service data. The key feature was the on-the-fly generation of PDF invoices, which allowed for the complete digitization and acceleration of the billing process.",
      },
    },
    results: {
      title: {
        uk: "Результат",
        en: "Result",
      },
      items: [
        {
          uk: "Процес створення інвойсу скоротився з 15 хвилин до 2.",
          en: "The invoice creation process was reduced from 15 minutes to 2.",
        },
        {
          uk: "Зменшено кількість помилок завдяки автоматичним розрахункам.",
          en: "The number of errors was reduced thanks to automatic calculations.",
        },
        {
          uk: "Створено централізовану базу клієнтів та наданих послуг.",
          en: "A centralized database of clients and services provided was created.",
        },
      ],
    },
    gallery: [
      "https://placehold.co/800x600/161b22/e6edf3?text=Invoice+Form",
      "https://placehold.co/800x600/161b22/e6edf3?text=PDF+Preview",
    ],
  },
  {
    id: 3,
    slug: "floor-boss-work-management",
    client: {
      uk: "Floor Boss Inc.",
      en: "Floor Boss Inc.",
    },
    year: 2024,
    title: {
      uk: "Платформа для управління робочими командами",
      en: "Platform for Work Crew Management",
    },
    description: {
      uk: "Комплексне рішення для компанії з 30+ робітниками, що забезпечує планування робіт, комунікацію, звітність та контроль якості.",
      en: "A comprehensive solution for a company with 30+ workers, providing work scheduling, communication, reporting, and quality control.",
    },
    mainImage:
      "https://placehold.co/800x600/0d1117/e6edf3?text=Floor+Boss+Work",
    technologies: [
      "React",
      "Vite",
      "Supabase (Auth, DB, Storage)",
      "Realtime",
      "PWA",
      "React Context",
    ],
    liveDemoUrl: "https://floor-boss-work.vercel.app/",
    githubRepoUrl: null,
    challenge: {
      title: {
        uk: "Завдання: Організувати роботу 30+ співробітників у полях",
        en: "Challenge: Organize the Work of 30+ Field Employees",
      },
      text: {
        uk: "Основна проблема полягала у відсутності єдиної системи для комунікації та управління завданнями. Роботодавець витрачав години на координацію по телефону, а робітники не мали чіткого доступу до деталей замовлень, що призводило до помилок та затримок.",
        en: "The main problem was the lack of a unified system for communication and task management. The employer spent hours coordinating by phone, and workers did not have clear access to order details, leading to errors and delays.",
      },
    },
    solution: {
      title: {
        uk: "Рішення: Інтерактивна платформа для команди",
        en: "Solution: An Interactive Platform for the Team",
      },
      text: {
        uk: "Було створено веб-додаток з різними ролями доступу для власника та робітників. Власник отримав календар-планувальник та дашборд для моніторингу. Робітники отримали персональні кабінети, де вони бачать свої завдання, можуть спілкуватися в чаті, додавати фото виконаних робіт через Supabase Storage та залишати нотатки.",
        en: "A web application with different access roles for the owner and workers was created. The owner received a calendar planner and a monitoring dashboard. Workers got personal accounts where they can see their tasks, chat, upload photos of completed work via Supabase Storage, and leave notes.",
      },
    },
    results: {
      title: {
        uk: "Результат",
        en: "Result",
      },
      items: [
        {
          uk: "Централізовано планування та звітність по всім об'єктам.",
          en: "Centralized planning and reporting for all job sites.",
        },
        {
          uk: "Налагоджено прозору комунікацію між офісом та робітниками в полях.",
          en: "Streamlined transparent communication between the office and field workers.",
        },
        {
          uk: "Впроваджено фото-звітність для контролю якості виконаних робіт.",
          en: "Implemented photo reporting for quality control of completed work.",
        },
        {
          uk: "Підвищено ефективність та автономність кожного робітника.",
          en: "Increased the efficiency and autonomy of each worker.",
        },
      ],
    },
    gallery: [
      "https://placehold.co/800x600/161b22/e6edf3?text=Dashboard",
      "https://placehold.co/800x600/161b22/e6edf3?text=Task+View",
      "https://placehold.co/800x600/161b22/e6edf3?text=Mobile+Interface",
    ],
  },
];
