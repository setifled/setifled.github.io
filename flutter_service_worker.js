'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/assets/images/empty.png": "82a6bec1df5ed547f8964fa5186ba34c",
"assets/assets/images/let.jpg": "20e8911310ebd695cc67f787ae62e627",
"assets/assets/images/example.png": "078677a9d4812cfaa07e53117190a7e3",
"assets/assets/images/logo.svg": "d8237d58d36374eb78ee4f13b649488c",
"assets/assets/images/temp.jpg": "ed35abf2794a66880b5cd76986b2bc09",
"assets/assets/images/ecran.jpg": "7429d42b57e292970bbbdbf69152268d",
"assets/assets/images/error_image.png": "433af6c3c79be8d46df913e7ed552a90",
"assets/assets/images/ens.jpg": "f57088e5a7bd4bde680bf996c5497f6c",
"assets/assets/images/divider.jpg": "40841202ca9ffebb3e0c787632dc9786",
"assets/assets/images/header_image2.jpg": "2f73fb8f2964b541c91f038f627bf415",
"assets/assets/images/headerplaceholder.png": "21f24e13fe152f4e2ea0c9b5da7654c9",
"assets/assets/images/totem.jpg": "995b2a62b55a0579d1047ba6bd7c1d3f",
"assets/assets/images/header_image1.jpg": "dcaeb250b8c2bed880d712143448bcc9",
"assets/assets/images/header_image3.jpg": "dfc922c283c9e28288a923040ea55c45",
"assets/assets/images/acc.jpg": "e35d691f440d7388a8b7bdb450eb189e",
"assets/assets/images/header_image2max.png": "04b0a8f0be540eb9638b1d5434529828",
"assets/assets/images/placeholder.png": "88584a4f91fb18314adda2d813f644ba",
"assets/assets/images/logo_bar.svg": "ff99677f504389700e6b002d208d97da",
"assets/assets/images/jr.jpg": "24dd983f525317c0230f2e2681404154",
"assets/assets/images/splash.png": "29e4be9238e10d92a61892eff628446d",
"assets/assets/images/header_image2.png": "e76a3c4bc124aca2df3413d684d0cac6",
"assets/assets/fonts/Montserrat-Light.ttf": "94fbe93542f684134cad1d775947ca92",
"assets/assets/fonts/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/assets/fonts/Montserrat-Medium.ttf": "bdb7ba651b7bdcda6ce527b3b6705334",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "cc10461cb5e0a6f2621c7179f4d6de17",
"assets/assets/fonts/Montserrat-Bold.ttf": "ed86af2ed5bbaf879e9f2ec2e2eac929",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/AssetManifest.json": "be9b7ab036f823718663bc8bb4fa94e8",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "3134e9e0389369ef1d24817b840343d5",
"assets/NOTICES": "7720d7d443210b864152589c15acb79a",
"assets/AssetManifest.bin": "5eb513d66101c5f0824a21ffbb5c80c2",
"assets/FontManifest.json": "21b67a36c87c036b15ef943e3853e723",
"manifest.json": "626b8cddbf205a5cca255c9ea0c28fef",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
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
"main.dart.js": "653bf352d08f5049500fc312040172b2",
"favicon.png": "977a6137e00d9ec12656fae00767a299",
"version.json": "6c801d24bd3cafe68c9161a50156a198",
"index.html": "e7330dae3c96bc3cce06d1a5985d4a57",
"/": "e7330dae3c96bc3cce06d1a5985d4a57"};
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
