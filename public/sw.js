const VERSION = "0.0.1";
const CACHE_NAME = `hb-finances-${VERSION}`;

const ASSETS_TO_CACHE = [
    "/",
    "dist/",
    "/index.html",
    "/manifest.json",
    "/icon512_maskable.png",
    "/icon512_rounded.png",
    "/favicon.svg",

]

// Instalación: Cachear recursos esenciales
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS_TO_CACHE))
            .then(() => self.skipWaiting())
    );
});

// Activación: Eliminar versiones anteriores
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(keys => Promise.all(
            keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
        ))
    );
});
self.addEventListener('fetch', (event) => {
    // Ignora solicitudes no-GET o extensiones especiales
    if (event.request.method !== 'GET' ||
        event.request.url.includes('/socket.io/') ||
        event.request.url.includes('/api/')) {
        return fetch(event.request);
    }

    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                // 1. Devuelve el recurso cacheado si existe
                if (cachedResponse) {
                    console.log(`[SW] Sirviendo desde cache: ${event.request.url}`);

                    // Actualización en background
                    fetch(event.request)
                        .then(networkResponse => {
                            const responseClone = networkResponse.clone();
                            caches.open(CACHE_NAME)
                                .then(cache => cache.put(event.request, responseClone));
                        });

                    return cachedResponse;
                }

                // 2. Intenta red para recursos no cacheados
                return fetch(event.request)
                    .then(networkResponse => {
                        if (!networkResponse || networkResponse.status !== 200) {
                            throw new Error('Error en la red');
                        }

                        const responseClone = networkResponse.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => cache.put(event.request, responseClone));

                        return networkResponse;
                    })

            })
    );
});

