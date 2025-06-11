import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  uk: {
    translation: {
      // Навігація та Footer
      nav_home: "Головна",
      nav_services: "Послуги",
      nav_about: "Про нас",
      nav_contact: "Замовити",
      footer_rights: "My-Dev. Всі права захищено.",

      // HomePage: Hero
      home_hero_title:
        "Сучасні веб-сайти на React, що випереджають конкурентів.",
      home_hero_subtitle:
        "Я створюю швидкі, надійні та візуально привабливі сайти для бізнесів, які готові до зростання. Ваш сайт — це інвестиція, а не витрата.",
      home_hero_button: "Переглянути мої послуги",

      // HomePage: Features
      home_features_title: "Чому обирають мене?",
      home_features_subtitle: "Я пропоную більше, ніж просто код.",
      home_feature_1_title: "Комплексний підхід",
      home_feature_1_desc:
        "Я супроводжую ваш проєкт на всіх етапах: від аналізу та дизайну до розробки, тестування й підтримки.",
      home_feature_2_title: "Сучасні технології",
      home_feature_2_desc:
        "Використовую передовий стек — React, Vite, Supabase — для створення швидких, безпечних та масштабованих рішень, що працюватимуть роками.",
      home_feature_3_title: "Підтримка та розвиток",
      home_feature_3_desc:
        "Після запуску я не залишаю вас наодинці. Пропоную технічну підтримку та плани розвитку вашого продукту.",

      // HomePage: Key Services
      home_key_services_title: "Мої ключові послуги",
      home_key_services_subtitle:
        "Рішення, сфокусовані на якості та результаті.",
      home_key_service_1_title: 'Розробка "під ключ"',
      home_key_service_1_desc:
        "Створення унікальних сайтів на React, від ідеї до повного запуску.",
      home_key_service_2_title: "Модернізація проєктів",
      home_key_service_2_desc:
        "Перенос існуючих сайтів на сучасний стек для підвищення швидкості та безпеки.",
      home_key_service_3_title: "Технічна підтримка",
      home_key_service_3_desc:
        "Забезпечення стабільної роботи та поступовий розвиток вашого сайту після запуску.",
      home_view_all_services: "Дізнатися більше про послуги →",

      // HomePage: CTA
      home_cta_title: "Готові розпочати ваш проєкт?",
      home_cta_subtitle:
        "Давайте обговоримо ваші ідеї та знайдемо найкраще рішення для вашого бізнесу.",
      home_cta_button: "Зв'язатися зі мною",

      // ServicesPage
      services_page_title: "Мої Послуги",
      services_page_subtitle:
        "Я пропоную комплексні рішення, сфокусовані на якості коду, швидкості та надійності вашого веб-сайту.",
      services_core_dev_title: 'Розробка сайту "під ключ" на React',
      services_core_dev_desc:
        "Створюю унікальні сайти, що повністю відповідають вашим бізнес-цілям. Від детального аналізу до розгортання — ви отримуєте готовий інструмент для залучення клієнтів.",
      services_core_dev_f1: "Аналіз вимог та проєктування архітектури",
      services_core_dev_f2: "Розробка фронтенду та бекенду",
      services_core_dev_f3: "Тестування та розгортання",
      services_core_dev_f4: "Масштабована та надійна структура",
      services_modernization_title: "Модернізація та перехід на React",
      services_modernization_desc:
        "Вдихну нове життя у ваш існуючий проєкт. Перенесу ваш застарілий сайт на сучасні технології, зробивши його швидким, адаптивним та безпечним.",
      services_modernization_f1: "Аудит існуючого коду та дизайну",
      services_modernization_f2: "Редизайн та покращення UX",
      services_modernization_f3: "Адаптація під мобільні пристрої",
      services_modernization_f4: "Додавання нового функціоналу",
      services_partnership_title: "Довгострокове партнерство",
      services_maintenance_title: "Підтримка та обслуговування",
      services_maintenance_desc:
        "Забезпечую стабільну та безпечну роботу вашого проєкту після запуску. Пропоную пакети підтримки для регулярних оновлень та моніторингу.",
      services_maintenance_f1: "Регулярне резервне копіювання",
      services_maintenance_f2: "Оновлення залежностей",
      services_maintenance_f3: "Моніторинг безпеки 24/7",
      services_maintenance_f4: "Консультаційна підтримка",
      services_cta_title: "Не знайшли потрібну послугу?",
      services_cta_subtitle:
        "Я готовий до індивідуальних завдань. Зв'яжіться зі мною, щоб обговорити ваш унікальний проєкт.",
      services_cta_button: "Обговорити проєкт",

      // AboutUsPage
      about_hero_title: "Ваш надійний веб-розробник",
      about_hero_subtitle:
        "Привіт, я Мирослав. Я допомагаю бізнесам отримувати технологічну перевагу через професійну веб-розробку. Мій підхід — це прозорість, якість коду та фокус на ваших бізнес-цілях.",
      about_philosophy_title: "Моя філософія",
      about_philosophy_1_title: "Прозорість",
      about_philosophy_1_desc:
        "Я будую роботу на чесності та відкритому діалозі. Ви завжди знаєте, на якому етапі знаходиться ваш проєкт.",
      about_philosophy_2_title: "Якість",
      about_philosophy_2_desc:
        "Чистий, ефективний та масштабований код — мій стандарт. Я створюю продукти, які легко підтримувати та розвивати.",
      about_philosophy_3_title: "Партнерство",
      about_philosophy_3_desc:
        "Я занурююсь у ваші бізнес-цілі, щоб запропонувати найкраще технологічне рішення для їх досягнення.",
      about_spec_title: "На чому я спеціалізуюсь",
      about_spec_1_title: "React & Vite",
      about_spec_1_desc:
        "Створюю блискавично швидкі та інтерактивні інтерфейси на найсучаснішому стеку.",
      about_spec_2_title: "Supabase",
      about_spec_2_desc:
        "Використовую Supabase як надійний та масштабований бекенд, що прискорює розробку.",
      about_spec_3_title: "UI/UX & Адаптивність",
      about_spec_3_desc:
        "Приділяю максимальну увагу дизайну та досвіду користувача на всіх пристроях.",
      about_cta_title: "Давайте створимо щось видатне разом",
      about_cta_subtitle:
        "Зв'яжіться зі мною, щоб обговорити ваш наступний проєкт.",
      about_cta_button: "Розпочати співпрацю",
    },
  },
  en: {
    translation: {
      // Navigation & Footer
      nav_home: "Home",
      nav_services: "Services",
      nav_about: "About Me",
      nav_contact: "Order",
      footer_rights: "My-Dev. All rights reserved.",

      // HomePage: Hero
      home_hero_title: "Modern React websites that outperform competitors.",
      home_hero_subtitle:
        "I build fast, reliable, and visually appealing sites for businesses ready to grow. Your website is an investment, not an expense.",
      home_hero_button: "View my services",

      // HomePage: Features
      home_features_title: "Why Choose Me?",
      home_features_subtitle: "I offer more than just code.",
      home_feature_1_title: "Comprehensive Approach",
      home_feature_1_desc:
        "I accompany your project at all stages: from analysis and design to development, testing, and support.",
      home_feature_2_title: "Modern Technologies",
      home_feature_2_desc:
        "I use a cutting-edge stack — React, Vite, Supabase — to create fast, secure, and scalable solutions that will work for years.",
      home_feature_3_title: "Support and Growth",
      home_feature_3_desc:
        "After launch, I don't leave you alone. I offer technical support and development plans for your product.",

      // HomePage: Key Services
      home_key_services_title: "My Key Services",
      home_key_services_subtitle: "Solutions focused on quality and results.",
      home_key_service_1_title: "Turnkey Development",
      home_key_service_1_desc:
        "Creating unique React sites, from idea to full launch.",
      home_key_service_2_title: "Project Modernization",
      home_key_service_2_desc:
        "Migrating existing sites to a modern stack to improve speed and security.",
      home_key_service_3_title: "Technical Support",
      home_key_service_3_desc:
        "Ensuring the stable operation and gradual development of your site after launch.",
      home_view_all_services: "Learn more about services →",

      // HomePage: CTA
      home_cta_title: "Ready to start your project?",
      home_cta_subtitle:
        "Let's discuss your ideas and find the best solution for your business.",
      home_cta_button: "Contact me",

      // ServicesPage
      services_page_title: "My Services",
      services_page_subtitle:
        "I offer comprehensive solutions focused on code quality, speed, and the reliability of your website.",
      services_core_dev_title: "Turnkey React Site Development",
      services_core_dev_desc:
        "I create unique sites that fully meet your business goals. From detailed analysis to deployment, you get a ready-made tool to attract customers.",
      services_core_dev_f1: "Requirement analysis and architecture design",
      services_core_dev_f2: "Frontend and backend development",
      services_core_dev_f3: "Testing and deployment",
      services_core_dev_f4: "Scalable and reliable structure",
      services_modernization_title: "Modernization and Migration to React",
      services_modernization_desc:
        "I will breathe new life into your existing project. I will migrate your outdated site to modern technologies, making it fast, responsive, and secure.",
      services_modernization_f1: "Audit of existing code and design",
      services_modernization_f2: "Redesign and UX improvement",
      services_modernization_f3: "Adaptation for mobile devices",
      services_modernization_f4: "Adding new functionality",
      services_partnership_title: "Long-term Partnership",
      services_maintenance_title: "Support and Maintenance",
      services_maintenance_desc:
        "I ensure the stable and secure operation of your project after launch. I offer support packages for regular updates and monitoring.",
      services_maintenance_f1: "Regular backups",
      services_maintenance_f2: "Dependency updates",
      services_maintenance_f3: "24/7 security monitoring",
      services_maintenance_f4: "Consultation support",
      services_cta_title: "Didn't find the service you need?",
      services_cta_subtitle:
        "I am ready for custom tasks. Contact me to discuss your unique project.",
      services_cta_button: "Discuss a project",

      // AboutUsPage
      about_hero_title: "Your Reliable Web Developer",
      about_hero_subtitle:
        "Hello, I'm Myroslav. I help businesses gain a technological advantage through professional web development. My approach is transparency, code quality, and a focus on your business goals.",
      about_philosophy_title: "My Philosophy",
      about_philosophy_1_title: "Transparency",
      about_philosophy_1_desc:
        "I build my work on honesty and open dialogue. You always know at what stage your project is.",
      about_philosophy_2_title: "Quality",
      about_philosophy_2_desc:
        "Clean, efficient, and scalable code is my standard. I create products that are easy to maintain and evolve.",
      about_philosophy_3_title: "Partnership",
      about_philosophy_3_desc:
        "I delve into your business goals to offer the best technological solution for achieving them.",
      about_spec_title: "What I Specialize In",
      about_spec_1_title: "React & Vite",
      about_spec_1_desc:
        "I create lightning-fast and interactive interfaces on the most modern stack.",
      about_spec_2_title: "Supabase",
      about_spec_2_desc:
        "I use Supabase as a reliable and scalable backend that accelerates development.",
      about_spec_3_title: "UI/UX & Responsiveness",
      about_spec_3_desc:
        "I pay maximum attention to design and user experience on all devices.",
      about_cta_title: "Let's create something great together",
      about_cta_subtitle: "Contact me to discuss your next project.",
      about_cta_button: "Start collaboration",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uk",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
