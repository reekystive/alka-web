import type { MetadataRoute } from 'next';

/**
 * manifest is generated on the server side, so we can't get the current theme (dark or light) here
 *
 * don't set a default background_color and theme_color otherwise page will flicker
 * when the user selected theme is loaded in client side
 *
 * leave them empty to use user-agent defined title bar color and then update them in client code
 *
 * meta tag is updated in src/components/theme/theme-toggle.tsx
 */

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'EatWise',
    short_name: 'EatWise',
    description: 'EatWise web app.',
    start_url: '/',
    display: 'standalone',
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
