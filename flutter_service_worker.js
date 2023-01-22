'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3fcd1c6609f7adca694cf06e535d256e",
"index.html": "eab6278dc800d306ce9a93f4dfe0d047",
"/": "eab6278dc800d306ce9a93f4dfe0d047",
"main.dart.js": "e32ee438ce244e02f9cb61f0a53504ee",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5c70a36f82da40ffe0739ff48527996e",
".git/config": "e5daf9eb6cb21041b160a42d2bc69144",
".git/objects/61/86c40719f94dc5d576d9f71c725422945bf7fe": "612e6056613d899f8a384a6d7bfd2fe5",
".git/objects/61/f86917d6f61386b584f1fe9355cab19dd6cc2e": "46f1852532f436bcf342958fe0a2f771",
".git/objects/59/13dc51cdc72cb547fa67c15eea6f47609812a3": "d33230ff15b20903378843ceccc50bee",
".git/objects/66/9cc8f6a334fe3c54f571be9b441a1faf4f08ee": "b156dde2c9eaab7298d8485771731637",
".git/objects/3e/34856289de7b32004f5753abb4fde2ba71c42c": "b53dba686f2c9d9ed5022f87ad5bc8d0",
".git/objects/57/dd3357df87993165db68f4f3c7b9482ade0b79": "da9a0083b7e6881efba952b8d7af419b",
".git/objects/9e/cbd06eedea7ac7585551f6fd544e05d4fbcd68": "1e990bc5e78867ff9135be55e0c300bd",
".git/objects/35/7cf3ef460a272d0bfc4b1fe3d167a9e84963fd": "9fdbf4501a6037cba134d78f36cc5f4c",
".git/objects/3d/cc429b676f847225c878b8defc2a3b9ed3c20d": "883b052d491a33c9e169acbff615de92",
".git/objects/33/ed2824b89c29e6a5eb2895d5791544f639545c": "abc3b99b7abd5e769e1008ba40c3a597",
".git/objects/05/09168a768d1e51e9edfcaa2a90302120baea00": "16bed22fc7ef8d75f40fde5616de959b",
".git/objects/d7/e60f8535ab13f7c7a24d0695111f047297056f": "06623d1e00b9db9d4959d9913e108618",
".git/objects/b3/1d240dd9bf4804b5dd8ead40592d8a4e4c61e5": "152ec0d3c3d6cddca2b7319518a3bcd9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/e5be7b8772dba5df9e1a6c5eb179c90369bcaf": "0722e24aa57890fa3ff258669cdbbefb",
".git/objects/d8/94d809067a45c6a617526b8a88abbfd3d6b0df": "531c1b4e43dc66e6ec019daaf7e7cb83",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/e96f918e6396a3f8df10b91305cf84fa0c892f": "aab834961e0e82c65f791d6fc17df780",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/995982de73079efa97bb33d7f4e6379eb10ad5": "dc3957c5310e51d3cdcecc5590a42a0f",
".git/objects/fb/086fae80aba724c603e163e1998e2abb4251eb": "55ed7487ed3bc7e7cded8b3eebea4e89",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/42/60ed9bb42652cbf2ac7504d71dd46e63def9e2": "12dd3e792dbf73b73bcc91a358de1e59",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/e31157b2cb403daef5aa969665f6dd11d71058": "f328ba34eca8056a645388bd155fcd29",
".git/objects/21/d7a023b34b7aa803d0c649b971f7f4ac1ebd06": "6171e05c626f64e4adcca01bab34665a",
".git/objects/75/2a05249a72138aeab84e293bd5ce6c43a7c6ca": "eabde6d73765dcd5247471b0cb9f2d68",
".git/objects/2a/3364c7b952d72e2d7b020ab8d1adff8569583d": "dd706101ab93c56a39836346ecf91ff8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5d/fef470b61c247e472b1da4b11b960c09b3123d": "f3d26182a8f0b850fd51c6e1c67ec15b",
".git/objects/3a/f2e444097aed179cbc29f49c03b5c74d63c7be": "fd61056762cc4d96e1077ca7f1e1e022",
".git/objects/30/b00aa9e0866915de023b6c23950b67da92eff2": "9385a63303f16e9ef200696642877ab2",
".git/objects/39/90783389002a073ca8b6a8d0b06c46b628ca8b": "898f876a8b5a317ff8a9dba0abad0bfa",
".git/objects/39/c91d0ee6f93c1b3b82c668b245ab90616d3f3d": "0261ec626a006fab8a6fb755ed882bf1",
".git/objects/99/c96038f4ca3ebb1bffee9acee7fc742a548a79": "51f33c3759bad983f644e99902e34bcf",
".git/objects/52/3ede70ab1b83e2d9adeb0213da4caddc5afb45": "8fdcad29087ef1994d2bbb0aa48d9abb",
".git/objects/90/406179c085ec9d0a96fe373709c953c749b834": "54610f313dd885a1b6fc4ad31c90f7fc",
".git/objects/d3/a8a7a43b55e7dabcd080321faac8541efec021": "fc893f869e9470730d0283fd51a13e72",
".git/objects/b8/1f9e4ca0c60b22fb4d7aaa6250771e8722f625": "43270b38320fc126a5eb617a7d70ab10",
".git/objects/b1/cb6032f8452d4625abd48a58d16bc0e4ddcf5b": "c754474cecd0aa7fc22f68f2df6bd773",
".git/objects/b6/55ca309712746d379ecd24f465e8f88e4009fa": "a2050e1a66f55133c37aea611f1ba6ec",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b0/f590fa778e768e46d1bf7c785dd07db6c2a128": "abd488ccc1b78b05a6544becd828fc0d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a167f03c3d9a0bd6f3c5e508a5f269c2a68d88": "cad0d2ceed95227455b79beb8a3c3bab",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/01dac88969a872a475eb812b064fab5434fff2": "5e1e43ef2de89d8611db570f23a4d05c",
".git/objects/ea/45bbedc19faafe8de100f4242c7c63f66cdf95": "b0b19880aa0f3f7e45aa6f265074334a",
".git/objects/e1/a717c6e4265e41b93c0604f77e3edf365f53fe": "0d68e673fe6fe2a0f285aa8a668cdd61",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/e6/bdcc166abd586f1f8e1edf0722ebb225417050": "2e409d8d288961fcfac8f065df188c5a",
".git/objects/ff/f4ab790887ab614f1cff9a1721b414da853579": "fe20597ef7a759fd337a32cf4ba3fb22",
".git/objects/cb/9810dfa759118f11d68c4f67fd1afe99fc65f2": "a8de50e4bdd6a8df03a05bc44fb94ab5",
".git/objects/cb/5bf660fb10eb5d79bc3ffd53a00ef6d6720040": "22cc7d5177ca89dfa2732f0fbc586249",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/ca1d6e33489d578f0e77aab993b1fea95b020b": "14239a8d68da47166d7f73d67de54aed",
".git/objects/1b/d231e493946d77a55b1fec23ae55f788cfb9d8": "c2dd4f4b4c29a28bb70c45110724cd9d",
".git/objects/77/b9bca3e0c4cebbe6180c31565ae74adc9dae78": "7ee107d3afdf9957fe6741fb0b81c4c6",
".git/objects/77/4ed1b1f6d5692a2d87dd82a254893fc412a89f": "0f9a6c04614b9855e5c620523b321e5e",
".git/objects/48/56412f8973467446ceb26969988b41fb982cac": "8d08ce83679b38950b1623f3553822bf",
".git/objects/70/f7c3ba2396c591a4121f76b6e8b6627e9a9fdb": "de9615bb12a605358e285e6fd6710887",
".git/objects/84/c1d52dc3e0b504cde5dacdeac6fdaa69ae378f": "bfb819599d1a6bc984811dbe6236aab6",
".git/objects/78/a9d19b515c0ceb181b5c7a06a9f91e233bd62d": "f6755ee4309b4829cd9cb5a868d77f4a",
".git/objects/7f/9f2458879bb8560525e55fcd4adb969d15d863": "7d0f49e3484d1eeca489c62f44688ba6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8d0ee0b1c7470d74f9b23efc5560d74a",
".git/logs/refs/heads/main": "d9efe1de067241b35ef37a3c979aae3d",
".git/logs/refs/remotes/origin/main": "26948230a4933c651ac84e285bd41bd3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b1468693ea4dc471ddb2247c28939e75",
".git/refs/remotes/origin/main": "b26e373c29e980a1e95dc985cca8af91",
".git/index": "ae0b4fae1e7a9f84f28ad3641ade4060",
".git/COMMIT_EDITMSG": "196078b1ae002ef01cee9a80102e62f7",
".git/FETCH_HEAD": "c7e429b82a45d8783d59611424233e53",
"assets/AssetManifest.json": "18b2f570495dd1e2543116e1ea2405d6",
"assets/NOTICES": "74a5bed8b0d964bf30fe1606ecdcdefe",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
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
"assets/assets/images/3.png": "83db2a722655fb0e7f977185221e8154"
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
