self.addEventListener('install', event => {
  console.log('🧙 Service Worker instalado.');
  self.skipWaiting(); // ativa imediatamente
});

self.addEventListener('activate', event => {
  console.log('🧙 Service Worker ativado.');
});

self.addEventListener('fetch', event => {
  // você pode implementar cache futuro aqui
});
