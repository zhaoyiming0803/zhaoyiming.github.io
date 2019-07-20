self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('my-cache-v1').then(function (cache) {
      cache.addAll([
        './',
        './index.js',
        './index.css'
      ]);
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      caches.keys().then(function (cacheList) {
        return Promise.all(
          cacheList.map(function (cacheName) {
            if (cacheName !== 'my-cache-v1') {
              return caches.delete(cacheName);
            }
          })
        )
      })
    ])
  );
})