export default defineI18nConfig(() => ({
  legacy: false,
  locale: "ru",
  messages: {
    en: {
        kyubey: "Ilya Mazunin",
        back: "Back",
        launched: 'Launched on:',
        live: "See it live",
        cv: "Download CV",
        portfolio: "Portfolio",
        menu: {
          "home": "Home",
          "projects": "Projects",
          "work": "Work",
          "contacts": "Contacts",
        }
      },
    ru: {
        kyubey: "Илья Мазунин",
        back: "Назад",
        launched: 'Год запуска:',
        live: "Открыть проект",
        cv: "Скачать портфолио",
        portfolio: "Портфолио",
        menu: {
          "home": "Главная",
          "projects": "Проекты",
          "work": "Работа",
          "contacts": "Контакты",
        }
      },
  },
}));
