import { defaultNS, i18nResources } from '@/localization/strings';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: (typeof i18nResources)['en'];
  }
}
