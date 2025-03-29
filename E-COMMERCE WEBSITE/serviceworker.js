// ShopHub Service Worker for caching and offline support

const CACHE_NAME = 'shophub-cache-v1';
const STATIC_ASSETS = [
  '/',
  '/HTML/index.html',
  '/HTML/products.html',
  '/HTML/product-detail.html',
  '/HTML/cart.html',
  '/HTML/checkout.html',
  '/HTML/order-confirmation.html',
  '/HTML/categories.html',
  '/HTML/about.html',
  '/HTML/contact.html',
  '/CSS/styles.css',
  '/JAVASCRIPT/app.js',
  '/JAVASCRIPT/products.js',
  '/JAVASCRIPT/product-detail.js',
  '/JAVASCRIPT/cart.js',
  '/JAVASCRIPT/checkout.js',
  '/JAVASCRIPT/product-filter.js',
  '/JAVASCRIPT/user-profile.js',
  '/JAVASCRIPT/wishlist.js',
  '/JAVASCRIPT/order-confirmation.js'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache if available, otherwise fetch from network
self.addEventListener('fetch', event => {
  // Skip for browser-sync or non-GET requests
  if (event.request.url.includes('browser-sync') || event.request.method !== 'GET') {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // If found in cache, return cached response
        if (response) {
          return response;
        }
        
        // Otherwise, fetch from network
        return fetch(event.request)
          .then(response => {
            // If response is not valid, return it
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone the response since we need to use it twice
            const responseToCache = response.clone();
            
            // Cache the fetched response
            caches.open(CACHE_NAME)
              .then(cache => {
                // Don't cache API responses with dynamic data
                if (!event.request.url.includes('/api/')) {
                  cache.put(event.request, responseToCache);
                }
              });
            
            return response;
          });
      })
      .catch(() => {
        // If both cache and network fail, serve an offline page
        if (event.request.url.includes('.html')) {
          return caches.match('/HTML/offline.html');
        }
      })
  );
});

// Push notification event
self.addEventListener('push', event => {
  const title = 'ShopHub';
  const options = {
    body: event.data.text(),
    icon: '/images/logo.png',
    badge: '/images/badge.png'
  };
  
  event.waitUntil(self.registration.showNotification(title, options));
});

// Notification click event
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('https://shophub.netlify.app')
  );
}); 