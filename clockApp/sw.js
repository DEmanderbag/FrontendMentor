const staticCacheName = "site-static-v3";
const assets = [
  "/",
  "/index.html",
  "/assets/mobile/bg-image-daytime.jpg",
  "/assets/mobile/bg-image-nighttime.jpg",
  "/assets/tablet/bg-image-daytime.jpg",
  "/assets/tablet/bg-image-nighttime.jpg",
  "/assets/desktop/bg-image-daytime.jpg",
  "/assets/desktop/bg-image-nighttime.jpg",
  "/assets/desktop/icon-arrow-up.svg",
  "/assets/desktop/icon-moon.svg",
  "/assets/desktop/icon-refresh.svg",
  "/assets/desktop/icon-sun.svg",
  "/js/app.js",
  "/js/mode.js",
  "/js/moreData.js",
  "/js/quote.js",
  "/js/time.js",
  "/css/main.css",
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap",
  "https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2",
];

// install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.add(
        keys.filter((key) => key !== staticCacheName).map((key) => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cacheResponse) => {
      return cacheResponse || fetch(event.request);
    })
  );
});
