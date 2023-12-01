'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_8.part.js": "ea77bcfa4122f8ef44d4e315678655c4",
"main.dart.js_6.part.js": "81bc5254d7a52b8f18df2b0b1faa851c",
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
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/AssetManifest.json": "250745603f7786e2c992b77d6b65891d",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/fonts/MaterialIcons-Regular.otf": "cce269ce4b31f6cc647eb6308bcaa4a7",
"assets/NOTICES": "dcc807715fc98ef977f1266454100fbe",
"assets/AssetManifest.bin.json": "9de6421302b2c42018def93371c184f1",
"assets/AssetManifest.bin": "2e480bc7a6a24bbe043456dddc5180b1",
"assets/FontManifest.json": "21b67a36c87c036b15ef943e3853e723",
"manifest.json": "626b8cddbf205a5cca255c9ea0c28fef",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"main.dart.js_10.part.js": "9f665ef678759532763f5478dc8f0f5c",
"main.dart.js_4.part.js": "19f903b190b23f392ad8b2f291f3032f",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"splash/img/dark-3x.png": "3358c6aa27a73ab977356cfad60115f8",
"splash/img/light-3x.png": "3358c6aa27a73ab977356cfad60115f8",
"splash/img/dark-1x.png": "63d50b385c84e9c4a91fa7d4827057d2",
"splash/img/dark-2x.png": "5e8ad2d237a0f933bb36d1b78aefcb26",
"splash/img/light-4x.png": "97a4bbb86e3993c5174e31982dfd77df",
"splash/img/light-1x.png": "63d50b385c84e9c4a91fa7d4827057d2",
"splash/img/light-2x.png": "5e8ad2d237a0f933bb36d1b78aefcb26",
"splash/img/dark-4x.png": "97a4bbb86e3993c5174e31982dfd77df",
"icons/icon.png": "977a6137e00d9ec12656fae00767a299",
"main.dart.js_12.part.js": "e7ed6000582932902b78515a2d171365",
"main.dart.js_1.part.js": "f066b45b1891841374d122f2e45cfe65",
"main.dart.js_13.part.js": "bba22b910d163983a742d4bf817f57ff",
"main.dart.js": "c733913d6e0c4ddc58c50592b3d806f7",
"favicon.png": "977a6137e00d9ec12656fae00767a299",
"main.dart.js_9.part.js": "a80fa46ab911180a05bd172838e56b93",
"version.json": "6c801d24bd3cafe68c9161a50156a198",
"main.dart.js_11.part.js": "cb3552ad6ff7cb2dadf3fbf3231e9c03",
"main.dart.js_14.part.js": "2dd827536c173a2550e364f2e9ebd1cb",
"index.html": "5ac6643c81b122915f2e47a74e5ab23a",
"/": "5ac6643c81b122915f2e47a74e5ab23a",
"main.dart.js_5.part.js": "3792222d8692d8ee000dfda82c33c122",
"main.dart.js_2.part.js": "d0b5612843bb4a79bef43706a21d76b1"};
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
