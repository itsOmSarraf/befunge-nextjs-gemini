if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/190-0b0b56c628bde013.js",revision:"kEYFba0vOQjFvqtyZGp9K"},{url:"/_next/static/chunks/364-3474ba7d58c27254.js",revision:"kEYFba0vOQjFvqtyZGp9K"},{url:"/_next/static/chunks/app/_not-found/page-70dc30333d70a36e.js",revision:"kEYFba0vOQjFvqtyZGp9K"},{url:"/_next/static/chunks/app/layout-e81fa314a2f91267.js",revision:"kEYFba0vOQjFvqtyZGp9K"},{url:"/_next/static/chunks/app/page-ceb551c3f6be092e.js",revision:"kEYFba0vOQjFvqtyZGp9K"},{url:"/_next/static/chunks/fd9d1056-ded65dab082ef8d2.js",revision:"kEYFba0vOQjFvqtyZGp9K"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"kEYFba0vOQjFvqtyZGp9K"},{url:"/_next/static/chunks/main-app-90fdc25be9efd797.js",revision:"kEYFba0vOQjFvqtyZGp9K"},{url:"/_next/static/chunks/main-de0ee60eeca847f7.js",revision:"kEYFba0vOQjFvqtyZGp9K"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"kEYFba0vOQjFvqtyZGp9K"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"kEYFba0vOQjFvqtyZGp9K"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-879f858537244e02.js",revision:"kEYFba0vOQjFvqtyZGp9K"},{url:"/_next/static/css/167edad6e98389ba.css",revision:"167edad6e98389ba"},{url:"/_next/static/kEYFba0vOQjFvqtyZGp9K/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/kEYFba0vOQjFvqtyZGp9K/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/icons/apple-splash-1290-2796.jpeg",revision:"ec6254990a3eeefb7e268ffe6fae9967"},{url:"/icons/apple-splash-1668-2388.jpeg",revision:"ec6254990a3eeefb7e268ffe6fae9967"},{url:"/icons/apple-splash-2048-2732.jpeg",revision:"ec6254990a3eeefb7e268ffe6fae9967"},{url:"/icons/icon-192x192.png",revision:"ec29d51b40205e49e92eb1deb5563cf4"},{url:"/icons/icon-256x256.png",revision:"08a91ff5ca88afe283a86cc828d9b05b"},{url:"/icons/icon-384x384.png",revision:"8c51cf07db5ab5c8891f755c77356df2"},{url:"/icons/icon-512x512.png",revision:"774b2989c292fe9ec82901809a0bca99"},{url:"/icons/icon.png",revision:"cf3d7680c369232822357705d20dd8af"},{url:"/manifest.json",revision:"fc9b1517324390e4d57ae0a24d09115f"},{url:"/opengraph-image.png",revision:"cf3d7680c369232822357705d20dd8af"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
