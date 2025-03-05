import { defaultNS, i18nResources } from '@/localization/strings';
import { initReactI18next } from 'react-i18next';
import { I18nLocale } from './strings';
import i18n from 'i18next';

void i18n.use(initReactI18next).init({
  resources: i18nResources,
  lng: 'en' satisfies I18nLocale,
  fallbackLng: 'en' satisfies I18nLocale,
  defaultNS: defaultNS,
  interpolation: {
    // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    escapeValue: false,
  },
});
