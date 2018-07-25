var cacheName = 'sairamportfolio';
var filesToCache = [
  '/',
  '/index.html',
  'css/stylish-portfolio.css',
  'css/stylish-portfolio.min.css',
  'img/bg-callout.jpg',
  'img/bg-masthead.jpg',
  'img/portfolio-1.jpg',
  'img/portfolio-2.jpg',
  'img/portfolio-3.jpg',
  'img/portfolio-4.jpg',
  'js/stylish-portfolio.js',
  'js/stylish-portfolio.min.js',
  'scss/_bootstrap-overrides.scss',
  'scss/_callout.scss',
  'scss/_footer.scss',
  'scss/_global.scss',
  'scss/_masthead.scss',
  'scss/_mixins.scss',
  'scss/_portfolio.scss',
  'scss/_services.scss',
  'scss/_sidebar.scss',
  'scss/stylish-portfolio.scss',
  'scss/_variables.scss'  
];
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});