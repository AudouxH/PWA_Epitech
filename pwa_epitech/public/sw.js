importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js"),workbox.precaching.precacheAndRoute([{'revision':'b66af70c1cc718e647e5cbdad730f587','url':'/_next/app-build-manifest.json'},{'revision':'2ec694eb52ae4f523f265a46bae4d768','url':'/_next/static/bp2YKsROzGmDkuAAhwMY8/_buildManifest.js'},{'revision':'b6652df95db52feb4daf4eca35380933','url':'/_next/static/bp2YKsROzGmDkuAAhwMY8/_ssgManifest.js'},{'revision':'bp2YKsROzGmDkuAAhwMY8','url':'/_next/static/chunks/23-effea5b940252795.js'},{'revision':'bp2YKsROzGmDkuAAhwMY8','url':'/_next/static/chunks/app/_not-found/page-94c683a891433c6f.js'},{'revision':'bp2YKsROzGmDkuAAhwMY8','url':'/_next/static/chunks/app/layout-46c673a30365b799.js'},{'revision':'bp2YKsROzGmDkuAAhwMY8','url':'/_next/static/chunks/app/page-6108dde4eeb8d857.js'},{'revision':'bp2YKsROzGmDkuAAhwMY8','url':'/_next/static/chunks/fd9d1056-62aaf4b921c84028.js'},{'revision':'bp2YKsROzGmDkuAAhwMY8','url':'/_next/static/chunks/framework-f66176bb897dc684.js'},{'revision':'bp2YKsROzGmDkuAAhwMY8','url':'/_next/static/chunks/main-2534240d9b352504.js'},{'revision':'bp2YKsROzGmDkuAAhwMY8','url':'/_next/static/chunks/main-app-a274b1596f11e527.js'},{'revision':'bp2YKsROzGmDkuAAhwMY8','url':'/_next/static/chunks/pages/_app-6a626577ffa902a4.js'},{'revision':'bp2YKsROzGmDkuAAhwMY8','url':'/_next/static/chunks/pages/_error-1be831200e60c5c0.js'},{'revision':'79330112775102f91e1010318bae2bd3','url':'/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js'},{'revision':'bp2YKsROzGmDkuAAhwMY8','url':'/_next/static/chunks/webpack-3719eec26d910e9f.js'},{'revision':'6d9c4020c6909930','url':'/_next/static/css/6d9c4020c6909930.css'},{'revision':'f1b44860c66554b91f3b1c81556f73ca','url':'/_next/static/media/05a31a2ca4975f99-s.woff2'},{'revision':'c4eb7f37bc4206c901ab08601f21f0f2','url':'/_next/static/media/513657b02c5c193f-s.woff2'},{'revision':'bb9d99fb9bbc695be80777ca2c1c2bee','url':'/_next/static/media/51ed15f9841b9f9d-s.woff2'},{'revision':'74c3556b9dad12fb76f84af53ba69410','url':'/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2'},{'revision':'dd930bafc6297347be3213f22cc53d3e','url':'/_next/static/media/d6b16ce4a6175f26-s.woff2'},{'revision':'0e89df9522084290e01e4127495fae99','url':'/_next/static/media/ec159349637c90ad-s.woff2'},{'revision':'71f3fcaf22131c3368d9ec28ef839831','url':'/_next/static/media/fd4db3eb5472fc27-s.woff2'},{'revision':'eaed458cf3f0a6d4572cd8186d201f62','url':'/manifest.json'},{'revision':'8e061864f388b47f33a1c3780831193e','url':'/next.svg'},{'revision':'879fed55ec106ae8aa6e68fbeb310e8f','url':'/service-worker.js'},{'revision':'519acd62ed1e239f49b70d1ceb827d54','url':'/sw.js'},{'revision':'61c6b19abff40ea7acd577be818f3976','url':'/vercel.svg'}]||[]),self.addEventListener("install",e=>{console.log("Service Worker installing."),self.skipWaiting()}),self.addEventListener("activate",e=>{console.log("Service Worker activating.")}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),self.addEventListener("push",function(e){console.log("Push event received:",e);let t=e.data?e.data.json():{},i={body:t.body||"Default message body",icon:"/icon/icon-192x192.png",badge:"/icon/icon-512x512.png"};e.waitUntil(self.registration.showNotification(t.title||"Default title",i))});