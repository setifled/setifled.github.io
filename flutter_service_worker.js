'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_8.part.js": "cab2ffdcb50276df1f1b6674e34d81ae",
"main.dart.js_3.part.js": "504c756f8afbff063e3afacde4c45f90",
"assets/assets/images/empty.png": "82a6bec1df5ed547f8964fa5186ba34c",
"assets/assets/images/logo.svg": "d8237d58d36374eb78ee4f13b649488c",
"assets/assets/images/jr.webp": "a8051c8f34fa161a5a2c64a4495bf1b2",
"assets/assets/images/ecran.webp": "518e19b25bd34bd1d918cb7987f91e68",
"assets/assets/images/header_image.webp": "2319033602d8ebe51382f89c0bd9e329",
"assets/assets/images/error_image.png": "433af6c3c79be8d46df913e7ed552a90",
"assets/assets/images/totem.webp": "1518c9e241ec6af5f326caeae4a4651c",
"assets/assets/images/divider.jpg": "40841202ca9ffebb3e0c787632dc9786",
"assets/assets/images/headerplaceholder.png": "21f24e13fe152f4e2ea0c9b5da7654c9",
"assets/assets/images/acc.webp": "a3c8f163a76c67405188c730952adffc",
"assets/assets/images/placeholder.png": "88584a4f91fb18314adda2d813f644ba",
"assets/assets/images/ens.webp": "c03d70428160b108c8b44057642cadd4",
"assets/assets/images/logo_bar.svg": "ff99677f504389700e6b002d208d97da",
"assets/assets/images/splash.png": "29e4be9238e10d92a61892eff628446d",
"assets/assets/images/let.webp": "b8cfef17dc8aed62b29043abd282b69c",
"assets/assets/fonts/Montserrat-Light.ttf": "94fbe93542f684134cad1d775947ca92",
"assets/assets/fonts/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/assets/fonts/Montserrat-Medium.ttf": "bdb7ba651b7bdcda6ce527b3b6705334",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "cc10461cb5e0a6f2621c7179f4d6de17",
"assets/assets/fonts/Montserrat-Bold.ttf": "ed86af2ed5bbaf879e9f2ec2e2eac929",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/AssetManifest.json": "250745603f7786e2c992b77d6b65891d",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "3134e9e0389369ef1d24817b840343d5",
"assets/NOTICES": "7720d7d443210b864152589c15acb79a",
"assets/AssetManifest.bin": "2e480bc7a6a24bbe043456dddc5180b1",
"assets/FontManifest.json": "21b67a36c87c036b15ef943e3853e723",
"manifest.json": "626b8cddbf205a5cca255c9ea0c28fef",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"main.dart.js_10.part.js": "fd63db60237910bea264a1b644c4d711",
"main.dart.js_4.part.js": "d69418fb48e53f193e4bc99b57e0bc31",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"splash/img/dark-3x.png": "3358c6aa27a73ab977356cfad60115f8",
"splash/img/light-3x.png": "3358c6aa27a73ab977356cfad60115f8",
"splash/img/dark-1x.png": "63d50b385c84e9c4a91fa7d4827057d2",
"splash/img/dark-2x.png": "5e8ad2d237a0f933bb36d1b78aefcb26",
"splash/img/light-4x.png": "97a4bbb86e3993c5174e31982dfd77df",
"splash/img/light-1x.png": "63d50b385c84e9c4a91fa7d4827057d2",
"splash/img/light-2x.png": "5e8ad2d237a0f933bb36d1b78aefcb26",
"splash/img/dark-4x.png": "97a4bbb86e3993c5174e31982dfd77df",
"icons/icon.png": "977a6137e00d9ec12656fae00767a299",
"main.dart.js_12.part.js": "0f2aa2cb75edebae550c679c8ac0d9b3",
"main.dart.js_1.part.js": "2d9e3a950b4d8b92233317029b9e04ce",
"main.dart.js_13.part.js": "18b2d013006f04494c2f7695f9ba737f",
"main.dart.js": "843e04c6375056d9f87249b48d19adc9",
"main.dart.js_7.part.js": "aca52e9bc104b5440835c283414f3e85",
"favicon.png": "977a6137e00d9ec12656fae00767a299",
"main.dart.js_9.part.js": "b0ec3be672c66df24888ede12c653111",
"version.json": "6c801d24bd3cafe68c9161a50156a198",
"main.dart.js_11.part.js": "47aa8cdac4b8857ff447b87f87835579",
"index.html": "5c6decf350ff03ce2226f601b688388c",
"/": "5c6decf350ff03ce2226f601b688388c",
"main.dart.js_5.part.js": "5c64fa98736d47bf3ce2beac60890d76"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
