import {precacheAndRoute} from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);

const CACHE_NAME = 'ivan\'s-dacha-v1';

const URLS = [
    './main.js',
    './main.css',
    './index.html'
]

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(URLS);
            })
            .catch(err => {
                console.log(err);
                throw err;
            })
    )
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }

                const fetchRequest = event.request.clone();
                return fetch(fetchRequest)
                    .then(response => {
                            if(!response || response.status !== 200 || response.type !== 'basic') {
                                return response;
                            }

                            const responseToCache = response.clone();
                            // Получаем доступ к кешу по CACHE_NAME
                            caches.open(CACHE_NAME)
                                .then(cache => {
                                    cache.put(event.request, responseToCache);
                                });
                            return response;
                        }
                    );
            })
    );
});

self.addEventListener("activate", function(event) {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(() => true)
                    .map(name => caches.delete(name))
            )
        })
);
});

