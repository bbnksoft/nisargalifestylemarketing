'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2e4347828f2e12f4fb8c7cfc87a98d4e",
"index.html": "7c7ee7ac248ab29f072666fe603dd28a",
"/": "7c7ee7ac248ab29f072666fe603dd28a",
"main.dart.js": "dbfd0539d0d183f420b427abb43e2262",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "90f7f04d5d122a5ade4147d5032b8f4f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "52a0b6e60b1eba43da9be32eb5ccc92a",
"assets/AssetManifest.json": "515be89f8df5c25c0335b9a377d05eb1",
"assets/NOTICES": "4f039f3567234c95ff3c8ee5f2ef6ee3",
"assets/FontManifest.json": "ac3f70900a17dc2eb8830a3e27c653c3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/slider.jpg": "12c464509fcd430370c4a1b2347e0683",
"assets/assets/images/NIS_Logo.jpg": "eb85ca642236c8e50b1ac8229d14bb66",
"assets/assets/images/ol.png": "0758cfb4cd6f0c4c613269d3d0a56df8",
"assets/assets/images/icon.jpg": "b0e1323cd38013ef6b4f6a0848c0f4b7",
"assets/assets/images/nav_pan.png": "1f805aa4d40b4c6c81c3e13a11568183",
"assets/assets/images/gr.png": "86d096cf432bdcb2ad823b332e7c2e3c",
"assets/assets/images/666.png": "d033b43f24e09a9108451cf52451e99d",
"assets/assets/images/tab_1.png": "518d406fa6d4b579f35a21c9f8fd4698",
"assets/assets/images/avatar_2.jpg": "106bd611530e7fe73e04524900fc494f",
"assets/assets/images/tab_3.png": "518d406fa6d4b579f35a21c9f8fd4698",
"assets/assets/images/tab_2.png": "1844e3c1c80f2019bcda7387dc1acd51",
"assets/assets/images/nav_uploadbank.png": "1ab0c77f445bcea2d567ab2c3b0dea41",
"assets/assets/images/tab_4.png": "ba4021fe090541fd07130a8ff963f1c6",
"assets/assets/images/gl.png": "d4e062d734bf183d03e8b5e634d7505d",
"assets/assets/images/slide_1.jpg": "d166b31436b0e01803f4ea7a034762f4",
"assets/assets/images/avatar.png": "7df1f9b703d2d7d791c4238da1e38329",
"assets/assets/images/to1.png": "c8b64688786c0b66dec22a8df6a77a8c",
"assets/assets/images/go.png": "553fc5133271072d7028f09f0e0f3f91",
"assets/assets/images/slide_3.jpg": "982dd5efd19eb98014cf509d45b2059f",
"assets/assets/images/NLS_Logo2.png": "59c4887096e4d18e3e4cdde57861d33d",
"assets/assets/images/slide_2.jpg": "4ee9e546c5a6c1a598850a999959c912",
"assets/assets/images/logo.jpg": "21780b2fc59ea3db4b2144645a440e97",
"assets/assets/images/logo.png": "f6a894bff1d045050ad29a54bf0f99de",
"assets/assets/images/profile.jpg": "d00bcffcb67f8c58f5840fe54b1b8b96",
"assets/assets/images/slide_4.jpg": "c011da4a352b7f1fed27c68ecd4bda5a",
"assets/assets/images/NIS_Logo1.jpg": "eb85ca642236c8e50b1ac8229d14bb66",
"assets/assets/images/web_side_page.jpeg": "b203e9731991b71207d463c6f7559f9f",
"assets/assets/images/or.png": "5b2a1e9acd194d0d64ab018e132bc542",
"assets/assets/images/to.png": "f276c6436237be85d946d035906a783d",
"assets/assets/images/uploadaadhar.png": "e4b3b025f1f07b569f82c5423ab7673e",
"assets/assets/images/3.png": "83db2a722655fb0e7f977185221e8154",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
