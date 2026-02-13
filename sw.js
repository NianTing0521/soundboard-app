const CACHE_NAME = 'soundboard-v5';
const ASSETS = [
  'index.html',
  'style.css',
  'script.js',
  'sounds/鵲鴝.mp3', // 列出所有你想離線使用的音效
  'sounds/火車啟動.mp3',
  'sounds/升天.mp3',
  'sounds/天亮.mp3'
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



