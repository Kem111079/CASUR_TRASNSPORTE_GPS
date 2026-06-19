const CACHE_NAME = 'casur-transportes-gps-v2-robusta-20260618-01';
const APP_SHELL = [
  './', './index.html', './styles.css?v=2.0.0', './app.js?v=2.0.0', './manifest.json', './offline.html',
  './assets/logo_casur.png', './data/poligonos_casur.geojson?v=2.0.0', './data/metadata.json',
  './icons/icon-192.png', './icons/icon-512.png', './icons/favicon.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL.map(u => new Request(u, { cache:'reload' }))).catch(err => console.warn('SW install parcial', err))));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if(req.method !== 'GET') return;
  const url = new URL(req.url);

  // Tiles y CDNs: red primero, caché como respaldo. Si nunca se cargaron, no bloquea la app.
  if(url.hostname.includes('tile.openstreetmap.org') || url.hostname.includes('arcgisonline.com') || url.hostname.includes('unpkg.com') || url.hostname.includes('cdn.jsdelivr.net')){
    event.respondWith(fetch(req).then(res => {
      const copy = res.clone(); caches.open(CACHE_NAME).then(cache => cache.put(req, copy)).catch(()=>{}); return res;
    }).catch(() => caches.match(req)));
    return;
  }

  // App shell: caché primero con actualización silenciosa.
  event.respondWith(caches.match(req).then(cached => {
    const network = fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE_NAME).then(cache => cache.put(req, copy)).catch(()=>{}); return res; }).catch(() => cached || caches.match('./offline.html'));
    return cached || network;
  }));
});
