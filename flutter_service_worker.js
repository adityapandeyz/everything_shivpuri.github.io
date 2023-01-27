'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5e5d1f256239386e1f3d7eb39f501a5f",
"assets/assets/app_logo/dot.-150x150.png": "8164e392023dc28023bf4644f7aa62c3",
"assets/assets/cards/1.png": "1277fd9c1836973a6441daa2847f8d9e",
"assets/assets/cards/10.png": "b778e62c35a35de2e9ba8b6cc1f3bb90",
"assets/assets/cards/11.png": "f2d304bf9d2ede707814556f2a0e5e89",
"assets/assets/cards/12.png": "48a2b24423036f365e58138873d89fe3",
"assets/assets/cards/2.png": "dcfcf56d85e311f9d4829e5f37631fbd",
"assets/assets/cards/3.png": "bb97422652622aed7e506d006907411e",
"assets/assets/cards/4.png": "733b4c9f74eabdd885b558fb5fca6d98",
"assets/assets/cards/5.png": "cd530e69a8df822063bdd49318d51e78",
"assets/assets/cards/6.png": "14c4e13d743ff46a57661a6089e044c5",
"assets/assets/cards/7.png": "084adf93e6983983d2e589a268784deb",
"assets/assets/cards/8.png": "7b7edf4b0fb2110e54a9dc6249b479f6",
"assets/assets/cards/9.png": "50839ddb39be80e52d76cff0b66be332",
"assets/assets/images/1349eca6-802f-4f8a-8487-899c67a7cb67.jpeg": "03d24968556029eff729e2cd8fc423d3",
"assets/assets/images/colllege_hostel_view.jpeg": "ece10700b20d94851506e0e590e39683",
"assets/assets/images/Everything%2520Shivpuri.png": "2560f5ca0a78970834ddd6f9c90f3419",
"assets/assets/images/IMG_20211212_153451-01.jpeg": "9cf9ce31b4fd1c7e810e8cc491a10415",
"assets/assets/images/IMG_20211223_154618-01.jpeg": "cf28562960f0d90821ad0bc063c401ed",
"assets/assets/images/LRM_20220306_174256-01.jpeg": "378b4714801b33b19511327d6be3a439",
"assets/assets/images/play%2520Store%2520Banner.png": "96dae0b941c927db2487ec67e9a1cbf9",
"assets/assets/images/shivpuri_heritage.png_slideshow.png": "97b16de935bc257ef8d593fbfad4ed47",
"assets/assets/images/Tourism1.jpeg": "3c16563793529f59bf30299d5c0e42e5",
"assets/assets/images/watercolor-autumn-landscape.jpg": "e3a63af1f23c10cbc893c332249326bd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "6bfd88e898fd4f30cdc93d4eb08e1382",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "60d73415db847d7cfac2a2f1010e1045",
"/": "60d73415db847d7cfac2a2f1010e1045",
"main.dart.js": "b8ff7c6e0124490fcfd2e836c3bf2012",
"manifest.json": "de73fce48100dfe3c6a8aefcbcf15ac3",
"splash/img/dark-1x.png": "3f11b759228be0e225428561ea7c3394",
"splash/img/dark-2x.png": "3deab9d9294cf7f5c8b113ec4880f30e",
"splash/img/dark-3x.png": "cf75c9bc7f7353a8f388d4409eef30fd",
"splash/img/dark-4x.png": "78cde21252ce75aa8a259a773b6bca8e",
"splash/img/light-1x.png": "3f11b759228be0e225428561ea7c3394",
"splash/img/light-2x.png": "3deab9d9294cf7f5c8b113ec4880f30e",
"splash/img/light-3x.png": "cf75c9bc7f7353a8f388d4409eef30fd",
"splash/img/light-4x.png": "78cde21252ce75aa8a259a773b6bca8e",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "c8c9d901e6739bae6e89c3c9c044aa46",
"version.json": "6bd9a1aecba72b62c8ae3a2957e7e0cd"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
