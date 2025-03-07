import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'EatWise',
    short_name: 'EatWise',
    description: 'EatWise web app.',
    start_url: '/',
    display: 'standalone',
    background_color: '#420d0f',
    theme_color: '#420d0f',
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
