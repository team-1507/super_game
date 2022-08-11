import login from './src/components/form/UserinfoForm/FormItems/Login';

const CACHE_NAME = 'my-site-cache-v1';

const URLS = [
    '/index.tsx',
]

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log("Opened cache");
                console.log(cache.addAll(URLS))
                return cache.addAll(URLS);
            })
            .catch(err => {
                console.log(err);
                throw err;
            })
    )
});

self.addEventListener('fetch', event => {
    console.log('fetch 21212');
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
