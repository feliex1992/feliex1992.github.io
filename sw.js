var serviceWorkerOption = {
  "assets": [
    "/assets/favicon-16x16.png",
    "/assets/favicon-32x32.png",
    "/assets/favicon-48x48.png",
    "/assets/favicon.ico",
    "/assets/android-chrome-36x36.png",
    "/assets/android-chrome-48x48.png",
    "/assets/android-chrome-72x72.png",
    "/assets/android-chrome-96x96.png",
    "/assets/android-chrome-144x144.png",
    "/assets/android-chrome-192x192.png",
    "/assets/android-chrome-256x256.png",
    "/assets/android-chrome-384x384.png",
    "/assets/android-chrome-512x512.png",
    "/assets/apple-touch-icon-57x57.png",
    "/assets/apple-touch-icon-60x60.png",
    "/assets/apple-touch-icon-72x72.png",
    "/assets/apple-touch-icon-76x76.png",
    "/assets/apple-touch-icon-114x114.png",
    "/assets/apple-touch-icon-120x120.png",
    "/assets/apple-touch-icon-144x144.png",
    "/assets/apple-touch-icon-152x152.png",
    "/assets/apple-touch-icon-167x167.png",
    "/assets/apple-touch-icon-180x180.png",
    "/assets/apple-touch-icon-1024x1024.png",
    "/assets/apple-touch-icon.png",
    "/assets/apple-touch-icon-precomposed.png",
    "/assets/apple-touch-startup-image-640x1136.png",
    "/assets/apple-touch-startup-image-750x1334.png",
    "/assets/apple-touch-startup-image-828x1792.png",
    "/assets/apple-touch-startup-image-1125x2436.png",
    "/assets/apple-touch-startup-image-1242x2208.png",
    "/assets/apple-touch-startup-image-1242x2688.png",
    "/assets/apple-touch-startup-image-1536x2048.png",
    "/assets/apple-touch-startup-image-1668x2224.png",
    "/assets/apple-touch-startup-image-1668x2388.png",
    "/assets/apple-touch-startup-image-2048x2732.png",
    "/assets/apple-touch-startup-image-1136x640.png",
    "/assets/apple-touch-startup-image-2160x1620.png",
    "/assets/apple-touch-startup-image-1620x2160.png",
    "/assets/apple-touch-startup-image-1334x750.png",
    "/assets/apple-touch-startup-image-1792x828.png",
    "/assets/apple-touch-startup-image-2436x1125.png",
    "/assets/apple-touch-startup-image-2208x1242.png",
    "/assets/apple-touch-startup-image-2688x1242.png",
    "/assets/apple-touch-startup-image-2048x1536.png",
    "/assets/apple-touch-startup-image-2224x1668.png",
    "/assets/apple-touch-startup-image-2388x1668.png",
    "/assets/apple-touch-startup-image-2732x2048.png",
    "/assets/firefox_app_60x60.png",
    "/assets/firefox_app_128x128.png",
    "/assets/firefox_app_512x512.png",
    "/assets/mstile-70x70.png",
    "/assets/mstile-144x144.png",
    "/assets/mstile-150x150.png",
    "/assets/mstile-310x150.png",
    "/assets/mstile-310x310.png",
    "/assets/manifest.json",
    "/assets/manifest.webapp",
    "/assets/browserconfig.xml",
    "/0.bundle.js",
    "/1.bundle.js",
    "/2.bundle.js",
    "/3.bundle.js",
    "/4.bundle.js",
    "/5.bundle.js",
    "/6.bundle.js",
    "/7.bundle.js",
    "/8.bundle.js",
    "/bundle.js",
    "/10.bundle.js",
    "/images/connection-lost.json",
    "/webfonts/fa-solid-900.eot",
    "/webfonts/fa-solid-900.svg",
    "/webfonts/fa-solid-900.ttf",
    "/webfonts/fa-solid-900.woff",
    "/webfonts/fa-solid-900.woff2",
    "/index.html"
  ]
};
        
        !function(e){var r={};function o(s){if(r[s])return r[s].exports;var t=r[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=r,o.d=function(e,r,s){o.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:s})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,r){if(1&r&&(e=o(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)o.d(s,t,function(r){return e[r]}.bind(null,t));return s},o.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(r,"a",r),r},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.p="",o(o.s=0)}([function(e,r,o){"use strict";o.r(r);var s={KEY:"12345",BASE_URL:"https://restaurant-api.dicoding.dev/",BASE_IMAGE_URL_SMALL:"https://restaurant-api.dicoding.dev/images/small/",BASE_IMAGE_URL_MEDIUM:"https://restaurant-api.dicoding.dev/images/medium/",BASE_IMAGE_URL_LARGE:"https://restaurant-api.dicoding.dev/images/large/",DEFAULT_LANGUAGE:"en-us",CACHE_NAME:(new Date).toISOString(),DATABASE_NAME:"restaurant-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"restaurants",WEB_SOCKET_SERVER:"wss://movies-feed.dicoding.dev"};importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js"),workbox?console.log("Workbox berhasil dimuat"):console.log("Workbox gagal dimuat"),workbox.precaching.precacheAndRoute([{url:"/index.html",revision:"1"},{url:"/bundle.js",revision:"1"},{url:"/images/heros/hero-image_4-small.jpg",revision:"1"},{url:"/images/heros/hero-image_4-large.jpg",revision:"1"},{url:"/images/connection-lost.json",revision:"1"},{url:"/assets/manifest.json",revision:"1"},{url:"/assets/favicon.ico",revision:"1"},{url:"/assets/favicon-16x16.png",revision:"1"},{url:"/assets/favicon-32x32.png",revision:"1"},{url:"/assets/favicon-48x48.png",revision:"1"},{url:"/assets/android-chrome-36x36.png",revision:"1"},{url:"/assets/android-chrome-48x48.png",revision:"1"},{url:"/assets/android-chrome-72x72.png",revision:"1"},{url:"/assets/android-chrome-96x96.png",revision:"1"},{url:"/assets/android-chrome-144x144.png",revision:"1"},{url:"/assets/android-chrome-192x192.png",revision:"1"},{url:"/assets/android-chrome-256x256.png",revision:"1"},{url:"/assets/android-chrome-384x384.png",revision:"1"},{url:"/assets/android-chrome-512x512.png",revision:"1"},{url:"/webfonts/fa-solid-900.eot",revision:"1"},{url:"/webfonts/fa-solid-900.svg",revision:"1"},{url:"/webfonts/fa-solid-900.ttf",revision:"1"},{url:"/webfonts/fa-solid-900.woff",revision:"1"},{url:"/webfonts/fa-solid-900.woff2",revision:"1"},{url:"https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",revision:"1"}]),workbox.routing.registerRoute("/index.html",workbox.strategies.cacheOnly()),workbox.routing.registerRoute("/bundle.js",workbox.strategies.cacheOnly()),workbox.routing.registerRoute("/images/heros/hero-image_4.jpg",workbox.strategies.cacheOnly()),workbox.routing.registerRoute("/images/connection-lost.json",workbox.strategies.cacheOnly()),workbox.routing.registerRoute("https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",workbox.strategies.cacheOnly()),workbox.routing.registerRoute("/assets/*",workbox.strategies.cacheOnly()),workbox.routing.registerRoute("/webfonts/*",workbox.strategies.cacheOnly()),workbox.routing.registerRoute(new RegExp(s.BASE_URL),workbox.strategies.staleWhileRevalidate({cacheName:"kulinerin-app",plugins:[new workbox.cacheableResponse.Plugin({statuses:[0,200]}),new workbox.expiration.Plugin({maxAgeSeconds:31536e3,maxEntries:40})]}))}]);