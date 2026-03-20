// Service Worker - Empty for now to prevent 404 errors from previous cached app versions
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
