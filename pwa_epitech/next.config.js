const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  swSrc: 'public/service-worker.js', // Spécifie le service worker personnalisé ici
  disable: process.env.NODE_ENV === 'development', // Désactive en mode développement
});

const nextConfig = {
  reactStrictMode: true,
  // Autres options de configuration Next.js ici si nécessaire
};

module.exports = withPWA(nextConfig);