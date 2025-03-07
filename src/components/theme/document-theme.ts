const LIGHT_BG_COLOR = '#ffffff';
const DARK_BG_COLOR = '#0a0a0a';

export const setDocumentBackgroundColor = (color: string) => {
  const html = document.documentElement;
  html.style.setProperty('background-color', color);
};

export const setPWAThemeColor = (color: string) => {
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', color);
  } else {
    const meta = document.createElement('meta');
    meta.name = 'theme-color';
    meta.content = color;
    document.head.appendChild(meta);
  }
};

export const setDocumentTheme = (theme: 'light' | 'dark') => {
  setDocumentBackgroundColor(theme === 'light' ? LIGHT_BG_COLOR : DARK_BG_COLOR);
  setPWAThemeColor(theme === 'light' ? LIGHT_BG_COLOR : DARK_BG_COLOR);
};
