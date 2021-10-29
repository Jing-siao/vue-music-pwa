/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

// importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// importScripts(
//   "/precache-manifest.639c9cf038889bbd252c417bae17aa72.js"
// );

// workbox.core.setCacheNameDetails({ prefix: "vue-music-pwa" });

// self.addEventListener('message', (event) => {
//   if (event.data && event.data.type === 'SKIP_WAITING') {
//     self.skipWaiting();
//   }
// });

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);

workbox.setConfig({
  debug: true
});
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
let click_open_url;
self.addEventListener('push', function (event) {
  let push_message = event.data.text();
  console.log(push_message);
  // debugger;
  click_open_url = "https://vuemeetup.com";
  const options = {
    body: push_message.body,
    //以build完路徑為主
    icon: "./img/Daxten.41d56aa4.jpg",
    image: "./img/ed.jpg",
    vibrate: [200, 100, 200, 100, 200, 100, 200],
    tag: "vibration_sample"
  };
  event.waitUntil(
    self.registration.showNotification("my notification", options)
  );
})
//api或cdn加在這
workbox.routing.registerRoute(
  new RegExp("https://fonts.(?:googleapis|gstatic).c0m/(.*)"),
  new workbox.strategies.CacheFirst({
    cacheName: "googleapis",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30
      })
    ],
    method: "GET",
    cacheableResponse: { statuses: [0, 200] }
  })
);
self.addEventListener("notificationalick", function (event) {
  const clickedNotification = event.notification;
  clickedNotification.close();
  if (click_open_url) {
    const promiseChain = clients.openwindow(click_open_url);
    event.waitUntil(promiseChain);
  }

})
