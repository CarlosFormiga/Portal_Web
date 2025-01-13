'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a080ae1a2cb8962ae6700ff5c97e4b1e",
"assets/AssetManifest.bin.json": "0da194f8174911b948a9c88d4a3f38d0",
"assets/AssetManifest.json": "3706eb7755f6cc87b75598b2a6d5d093",
"assets/assets/fonts/work_sans/WorkSans-Black.ttf": "b2aba36e3bf90520d734ccf777833847",
"assets/assets/fonts/work_sans/WorkSans-BlackItalic.ttf": "20c828ce9191741aaa1f411efb07cb2d",
"assets/assets/fonts/work_sans/WorkSans-Bold.ttf": "1559ffc7cf61cbae7ea55a250722009c",
"assets/assets/fonts/work_sans/WorkSans-BoldItalic.ttf": "2ef442b6bb99374940cb0d2b567d1283",
"assets/assets/fonts/work_sans/WorkSans-ExtraBold.ttf": "bbd6edc88df326a3283424a0a1c711f0",
"assets/assets/fonts/work_sans/WorkSans-ExtraBoldItalic.ttf": "1095c7f0d04afc7c48bb60f17bebb2cb",
"assets/assets/fonts/work_sans/WorkSans-ExtraLight.ttf": "16ad283672151ea426e8c98d8ad0cfb5",
"assets/assets/fonts/work_sans/WorkSans-ExtraLightItalic.ttf": "fb1581ad7f1470989c88be9c384d162d",
"assets/assets/fonts/work_sans/WorkSans-Light.ttf": "02db4b738c689e05f3f12b3f22969815",
"assets/assets/fonts/work_sans/WorkSans-LightItalic.ttf": "2108a8426b898093f45a2c624d0d876b",
"assets/assets/fonts/work_sans/WorkSans-Medium.ttf": "73f5c36f3da9740c41b2c1aeb7fc94e5",
"assets/assets/fonts/work_sans/WorkSans-MediumItalic.ttf": "85fe46010c3600601eb2e5f4a7f3019b",
"assets/assets/fonts/work_sans/WorkSans-Regular.ttf": "a3d6c7f7606fc33a6ab5bed9688d1fe8",
"assets/assets/fonts/work_sans/WorkSans-SemiBold.ttf": "c1b2dde1705db3ada7fd668c36523f66",
"assets/assets/fonts/work_sans/WorkSans-SemiBoldItalic.ttf": "993687940ebf76815f5e44209e1a2fba",
"assets/assets/fonts/work_sans/WorkSans-Thin.ttf": "6b3fb1a15d5c60fd9944e8c218525984",
"assets/assets/fonts/work_sans/WorkSans-ThinItalic.ttf": "ba242e3d26d1d4532ac4a253b73f07e8",
"assets/assets/images/logo.png": "ed3c7a21cda8290f2c88d31b3f45fdab",
"assets/assets/images/METALFORTEini.png": "f3535afb2400ff0165e22e8b79e640d4",
"assets/assets/launcher/background.png": "b4e2b2ed3896ca81ebd4287090b760a6",
"assets/assets/launcher/foreground.png": "11976169dbeb615ad9f4c929e7560600",
"assets/assets/launcher/launcher.png": "962fbeff86230141b46f99f644e0be64",
"assets/assets/launcher/splash.png": "962fbeff86230141b46f99f644e0be64",
"assets/FontManifest.json": "8243bc2e431f31b734c720a2612bf1d8",
"assets/fonts/MaterialIcons-Regular.otf": "10f250198e4dd943e98e2d0e8f17c56f",
"assets/NOTICES": "a734c0dd78784200c17486d39a382472",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsOutlined.ttf": "8f5b37a8841bc2a793996c800019e5dd",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsRounded.ttf": "0300d8e46ec9a427a9393f409ce9f1cc",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsSharp.ttf": "406872dfaa855c17ace5790ae99cb0eb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "2667c6e22b99a388a1b8b0766df27258",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3cb1f163bbf882568af4ce36a3b4e81b",
"/": "3cb1f163bbf882568af4ce36a3b4e81b",
"main.dart.js": "6cc1432b1b2e7c3b6c69f8c366f5af4a",
"manifest.json": "73284fa679e2ec3b77c30ca9591b34e9",
"version.json": "37cd84bb0ddaf49dda493023f93fa4b0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
