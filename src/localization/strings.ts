import enCommon from './en/common.json';
import zhCommon from './zh/common.json';
import enHome from './en/home.json';
import zhHome from './zh/home.json';

export const i18nResources = {
  en: {
    common: enCommon,
    home: enHome,
  },
  zh: {
    common: zhCommon,
    home: zhHome,
  },
} as const;

export type I18nLocale = keyof typeof i18nResources;
export type I18nNS = keyof (typeof i18nResources)['en'];

export const defaultNS: I18nNS = 'common';

// 通过类型层面检测所有的 locale 都应该拥有完全相同的结构
i18nResources satisfies Record<I18nLocale, (typeof i18nResources)['en']>;
