export const languages = {
  es: "Español",
  en: "English",
};

export const defaultLang = "es";

export const ui = {
  es: {
    "nav.menu": "Menu",
    "nav.about": "Quien Soy",
    "nav.services": "Servicios",
    "nav.contact": "Contacto",
    "nav.lang": "ES",
    "footer.connect": "Para conectar, escribe a:",
    "footer.follow": "Sígueme:",
  },
  en: {
    "nav.menu": "Menu",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.lang": "EN",
    "footer.connect": "Feel free to reach out at:",
    "footer.follow": "Follow at:",
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
