const CACHE_NAME = 'soundboard-v1';
const ASSETS = [
  'index.html',
  'style.css',
  'script.js',
  'sounds/applause.mp3', // 列出所有你想離線使用的音效
  'sounds/laugh.mp3',
  'sounds/drum.mp3',
  'sounds/fail.mp3'
];

// 安裝並快取檔案
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// 攔截請求並從快取回傳
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});