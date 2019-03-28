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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0a27a4163254fc8fce870c8cc3a3f94f"
  },
  {
    "url": "assets/css/anim.body.circles.min.css",
    "revision": "f2c4bbde9662e44de7bbe56f6542bc3b"
  },
  {
    "url": "assets/css/anim.body.fadeIn.min.css",
    "revision": "5358beaafeef5051e883111cb5fcd594"
  },
  {
    "url": "assets/css/ui.auth.min.css",
    "revision": "b5c669494ffde469488ab2e486121aaf"
  },
  {
    "url": "assets/css/ui.dashboard.min.css",
    "revision": "03a90ed17000183be51d955e50138a9f"
  },
  {
    "url": "assets/css/ui.index.min.css",
    "revision": "22edb0d7b6f916a4ed4945439494703e"
  },
  {
    "url": "assets/css/ui.settings.min.css",
    "revision": "89a81c12a978ecea0603f8033015767d"
  },
  {
    "url": "assets/fonts/raleway/Raleway-Black.ttf",
    "revision": "3fc090e7188efb11fe2fef586bbb1a44"
  },
  {
    "url": "assets/fonts/raleway/Raleway-BlackItalic.ttf",
    "revision": "1ec88bc52d1686c5192b34435fff8ea1"
  },
  {
    "url": "assets/fonts/raleway/Raleway-Bold.ttf",
    "revision": "575e4317521b381ac94c0c8207c81979"
  },
  {
    "url": "assets/fonts/raleway/Raleway-BoldItalic.ttf",
    "revision": "c7a4548f69aa83778b84585f5bb558b9"
  },
  {
    "url": "assets/fonts/raleway/Raleway-ExtraBold.ttf",
    "revision": "a38a54df0089bca4f5109fe44f944051"
  },
  {
    "url": "assets/fonts/raleway/Raleway-ExtraBoldItalic.ttf",
    "revision": "e314d73289b57b6764c143bfefc1016c"
  },
  {
    "url": "assets/fonts/raleway/Raleway-ExtraLight.ttf",
    "revision": "1f43e4f21a0b08df2629fe68a0b72721"
  },
  {
    "url": "assets/fonts/raleway/Raleway-ExtraLightItalic.ttf",
    "revision": "9d3080b9f3c5de2b749c4ba3ce446d29"
  },
  {
    "url": "assets/fonts/raleway/Raleway-Italic.ttf",
    "revision": "dd03a26a6d06f63d75ceeac6b491f26a"
  },
  {
    "url": "assets/fonts/raleway/Raleway-Light.ttf",
    "revision": "b1bdea561f247adc2c904f5b24a07c51"
  },
  {
    "url": "assets/fonts/raleway/Raleway-LightItalic.ttf",
    "revision": "d817d3a18e437e12e243aa3475b89f53"
  },
  {
    "url": "assets/fonts/raleway/Raleway-Medium.ttf",
    "revision": "430a0518f5ff3b6c8968b759a29b36e2"
  },
  {
    "url": "assets/fonts/raleway/Raleway-MediumItalic.ttf",
    "revision": "ff3c8ca6aa39754108f381ba4d7d5c13"
  },
  {
    "url": "assets/fonts/raleway/Raleway-Regular.ttf",
    "revision": "580d0778ad254335be45bf58bb449f43"
  },
  {
    "url": "assets/fonts/raleway/Raleway-SemiBold.ttf",
    "revision": "17ba6410cbc694808961a988fd4426de"
  },
  {
    "url": "assets/fonts/raleway/Raleway-SemiBoldItalic.ttf",
    "revision": "0ef49fe89bb646aed7c0a10852b7d342"
  },
  {
    "url": "assets/fonts/raleway/Raleway-Thin.ttf",
    "revision": "9f5eec4e61754abf89124df236b87358"
  },
  {
    "url": "assets/fonts/raleway/Raleway-ThinItalic.ttf",
    "revision": "15c46f66688256cc6bfc826f33bc0a1d"
  },
  {
    "url": "assets/fonts/raleway/SIL Open Font License.txt",
    "revision": "f07ebf6e8c0f4dd85d407ecf64e49366"
  },
  {
    "url": "assets/images/bg/auth.png",
    "revision": "20494f6689252b4f42e6b92dd706661b"
  },
  {
    "url": "assets/images/icons/color/icon-128x128.png",
    "revision": "23b824fe812bbd0ce0db41ec3b348814"
  },
  {
    "url": "assets/images/icons/color/icon-144x144.png",
    "revision": "5541f072deced372e65ec67b5a6fdf72"
  },
  {
    "url": "assets/images/icons/color/icon-152x152.png",
    "revision": "0324484e0b835f9a859be55ddd3248c2"
  },
  {
    "url": "assets/images/icons/color/icon-192x192.png",
    "revision": "b7c1d036e3caf964953bdde6d3381431"
  },
  {
    "url": "assets/images/icons/color/icon-384x384.png",
    "revision": "fee69404d4f988f38a7edaca98d3c7b1"
  },
  {
    "url": "assets/images/icons/color/icon-512x512.png",
    "revision": "29087e2f70bcfadbe4073ffcb3468fda"
  },
  {
    "url": "assets/images/icons/color/icon-72x72.png",
    "revision": "7bf1ea287ec224aa26157626955637e6"
  },
  {
    "url": "assets/images/icons/color/icon-96x96.png",
    "revision": "573a43810578e1fc6a6ccad0ebfa4075"
  },
  {
    "url": "assets/images/icons/dark/icon-128x128.png",
    "revision": "56aed8a9f9dcbfba805c84422dcfdd22"
  },
  {
    "url": "assets/images/icons/dark/icon-144x144.png",
    "revision": "417fe09c8a971deab8acbc4edf935e50"
  },
  {
    "url": "assets/images/icons/dark/icon-152x152.png",
    "revision": "47ee98be0bc087571189406388805129"
  },
  {
    "url": "assets/images/icons/dark/icon-192x192.png",
    "revision": "7eed324d98b83f3d3ea1fbbccb18d2da"
  },
  {
    "url": "assets/images/icons/dark/icon-384x384.png",
    "revision": "377f35753b893b78f52406f3fefb26bc"
  },
  {
    "url": "assets/images/icons/dark/icon-512x512.png",
    "revision": "0e588885995044fd91cace5909b04312"
  },
  {
    "url": "assets/images/icons/dark/icon-72x72.png",
    "revision": "ba8d12e8f32089a15be2069a763b758e"
  },
  {
    "url": "assets/images/icons/dark/icon-96x96.png",
    "revision": "bf3ca21625089eb99281ce8fc154fad4"
  },
  {
    "url": "assets/images/icons/white/icon-128x128.png",
    "revision": "d931895518d14238d9696c506165e33d"
  },
  {
    "url": "assets/images/icons/white/icon-144x144.png",
    "revision": "81b0deff785f83013e79e1038e9e7b44"
  },
  {
    "url": "assets/images/icons/white/icon-152x152.png",
    "revision": "11e38de53032725ca3987b4ba8b871d6"
  },
  {
    "url": "assets/images/icons/white/icon-192x192.png",
    "revision": "e756882aae323c31f0114f981b01a7dd"
  },
  {
    "url": "assets/images/icons/white/icon-384x384.png",
    "revision": "4296fcc54485e97f07d999ff808805e0"
  },
  {
    "url": "assets/images/icons/white/icon-512x512.png",
    "revision": "7da70c2977efa897d75158a8acee8c0e"
  },
  {
    "url": "assets/images/icons/white/icon-72x72.png",
    "revision": "d5b07633e2857e8e373a17fef74092e6"
  },
  {
    "url": "assets/images/icons/white/icon-96x96.png",
    "revision": "1b225cac337b83925bcd9789a916005e"
  },
  {
    "url": "assets/images/others/noted.png",
    "revision": "c19f2916fd5ca7fe64cd91a5e764c74b"
  },
  {
    "url": "assets/js/core.auth.js",
    "revision": "29fd20012b4b98e51defd0028b0efd38"
  },
  {
    "url": "assets/js/core.main.min.js",
    "revision": "f209ea732f3f000d067c50456fa158a1"
  },
  {
    "url": "assets/js/core.pageArrayLoader.js",
    "revision": "a9d22d477fbcff1a8a075bbd43728753"
  },
  {
    "url": "assets/js/google.firebase.js",
    "revision": "f5e36b70ce9e3783e08296035f4516ef"
  },
  {
    "url": "assets/js/module.showCurrentClass.min.js",
    "revision": "82c284874bdeecc87c0fc29b64518f92"
  },
  {
    "url": "assets/js/ui.auth.min.js",
    "revision": "de350f50ab46f2ac4640fad428c61ba1"
  },
  {
    "url": "assets/js/ui.dashboard.min.js",
    "revision": "22ab30608cc298f93aa2c4e5e7deb827"
  },
  {
    "url": "assets/js/ui.settings.min.js",
    "revision": "39082011c81939b87cd5f27ecec9d274"
  },
  {
    "url": "index.html",
    "revision": "9568b4feaa0ec852d60ad160b057d699"
  },
  {
    "url": "libs/bootstrap-switch@3.3.4/bootstrap-switch.min.css",
    "revision": "17fc6e5330ede6f875a0736479b7f362"
  },
  {
    "url": "libs/bootstrap-switch@3.3.4/bootstrap-switch.min.js",
    "revision": "27d0f1f3f774af8d8305c8d462ba98ed"
  },
  {
    "url": "libs/bootstrap@4.3.1/bootstrap.bundle.min.js",
    "revision": "a454220fc07088bf1fdd19313b6bfd50"
  },
  {
    "url": "libs/bootstrap@4.3.1/bootstrap.min.css",
    "revision": "a15c2ac3234aa8f6064ef9c1f7383c37"
  },
  {
    "url": "libs/bootstrap@4.3.1/bootstrap.min.js",
    "revision": "e1d98d47689e00f8ecbc5d9f61bdb42e"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/css/all.min.css",
    "revision": "7b1d7f457d056ace7b230b587b9f3753"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/css/brands.min.css",
    "revision": "39401661f292a1b333ed11444a0d42c5"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/css/fontawesome.min.css",
    "revision": "761f47f35799f23c7596e6c82c8ce6e9"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/css/regular.min.css",
    "revision": "d5c2e76b5cfdc2534ad92edc14dbd4a4"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/css/solid.min.css",
    "revision": "372b31365ea9367753d9137e8a9e934e"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/css/svg-with-js.min.css",
    "revision": "fbda33ed84aa346d96d403221aa06b77"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/css/v4-shims.min.css",
    "revision": "c217bda6dbb0d3e301283e4118777ac0"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/js/all.min.js",
    "revision": "3321acfaaf879848a1f6773e691e2dd0"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/js/brands.min.js",
    "revision": "66defce05383490f57378b1a364986d2"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/js/fontawesome.min.js",
    "revision": "f5e2cc24682bd489f36f55634b6384e7"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/js/regular.min.js",
    "revision": "65ed6ca7b91b06457f79fe29e32258c6"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/js/solid.min.js",
    "revision": "04a5608d5ca7f5953a7a9e6113c241b7"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/js/v4-shims.min.js",
    "revision": "6fefaf25ceea1caad6bb18bfeba4330a"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/metadata/categories.yml",
    "revision": "0d82a082334f0871ae348fa209025a9a"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/metadata/icons.yml",
    "revision": "000fe31951df6ac391360d0e4ea0aa38"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/metadata/shims.json",
    "revision": "72d57ceb3eb1f892fa249c64a294a26f"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/metadata/shims.yml",
    "revision": "6787dfdebeb827215b5e5f450b8cfb70"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/metadata/sponsors.yml",
    "revision": "202b5c738df07cf8a7b767121747d257"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/webfonts/fa-brands-400.eot",
    "revision": "d9d17590c975aad1be0ddab673f9c769"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/webfonts/fa-brands-400.svg",
    "revision": "80533988ff5fecd5be26557d08ce8237"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/webfonts/fa-brands-400.ttf",
    "revision": "c39278f7abfc798a241551194f55e29f"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/webfonts/fa-brands-400.woff",
    "revision": "b90365bccdabd68c6c03902b4b141f09"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/webfonts/fa-brands-400.woff2",
    "revision": "4b115e1153a9ea339d6a0bb284cc8ed3"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/webfonts/fa-regular-400.eot",
    "revision": "414ff5daad323a1c47c5177d4bd29674"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/webfonts/fa-regular-400.svg",
    "revision": "e7e957c87c454bccaa3bf9fdaa6874f8"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/webfonts/fa-regular-400.ttf",
    "revision": "f6c6f6c8cb7784254ad00056f6fbd74e"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/webfonts/fa-regular-400.woff",
    "revision": "5dd3976cb5d61e2e561f2a46b916f377"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/webfonts/fa-regular-400.woff2",
    "revision": "65779ebcc35604a25c2ba77309c5b8af"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/webfonts/fa-solid-900.eot",
    "revision": "b5596f4d339f99e3d69bc41be78db962"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/webfonts/fa-solid-900.svg",
    "revision": "82905d8d1c06969df11c8c378e9bdd4c"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/webfonts/fa-solid-900.ttf",
    "revision": "b70cea0339374107969eb53e5b1f603f"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/webfonts/fa-solid-900.woff",
    "revision": "61969d433bf265b9717a6c357a1e04e4"
  },
  {
    "url": "libs/fontawesome-free@5.7.2/webfonts/fa-solid-900.woff2",
    "revision": "462806316fea535a6a57651bc2b000b0"
  },
  {
    "url": "libs/jquery-ui@1.12.1/jquery-ui-1.12.1.custom.min.js",
    "revision": "4e4b386f24b3fdd5c1bf4cb6419e67ee"
  },
  {
    "url": "libs/jquery@3.3.1/jquery-3.3.1.min.js",
    "revision": "a09e13ee94d51c524b7e2a728c7d4039"
  },
  {
    "url": "libs/material-design-icons@3.0.1/material-icons.css",
    "revision": "c5941eed2e20a509114128aab1e96edf"
  },
  {
    "url": "libs/material-design-icons@3.0.1/MaterialIcons-Regular.eot",
    "revision": "e79bfd88537def476913f3ed52f4f4b3"
  },
  {
    "url": "libs/material-design-icons@3.0.1/MaterialIcons-Regular.ijmap",
    "revision": "ed6a98d002bc0b535dd8618f3ae05fe7"
  },
  {
    "url": "libs/material-design-icons@3.0.1/MaterialIcons-Regular.svg",
    "revision": "a1adea65594c502f9d9428f13ae210e1"
  },
  {
    "url": "libs/material-design-icons@3.0.1/MaterialIcons-Regular.ttf",
    "revision": "a37b0c01c0baf1888ca812cc0508f6e2"
  },
  {
    "url": "libs/material-design-icons@3.0.1/MaterialIcons-Regular.woff",
    "revision": "012cf6a10129e2275d79d6adac7f3b02"
  },
  {
    "url": "libs/material-design-icons@3.0.1/MaterialIcons-Regular.woff2",
    "revision": "570eb83859dc23dd0eec423a49e147fe"
  },
  {
    "url": "libs/material-design-lite-extensions@0.17.1/mdl-ext-eqjs.css",
    "revision": "fcd17dee5693d5ccf277519c7e823a1f"
  },
  {
    "url": "libs/material-design-lite-extensions@0.17.1/mdl-ext-eqjs.min.css",
    "revision": "239573961e08d721e86daac148414589"
  },
  {
    "url": "libs/material-design-lite-extensions@0.17.1/mdl-ext.css",
    "revision": "dc3c96e66b22d79e04f12e280d4069d5"
  },
  {
    "url": "libs/material-design-lite-extensions@0.17.1/mdl-ext.js",
    "revision": "b9843e1f355e2929535fafa3c80f1672"
  },
  {
    "url": "libs/material-design-lite-extensions@0.17.1/mdl-ext.min.css",
    "revision": "2a722a64cb089cf6fef1863eea0ba73d"
  },
  {
    "url": "libs/material-design-lite-extensions@0.17.1/mdl-ext.min.js",
    "revision": "3bb2e35c75ca57afd5b63f9d2da43699"
  },
  {
    "url": "libs/material-design-lite@1.3.0/material.min.css",
    "revision": "9ab85b48144d24908b4e455c2afb648c"
  },
  {
    "url": "libs/material-design-lite@1.3.0/material.min.js",
    "revision": "713af0c6ce93dbbce2f00bf0a98d0541"
  },
  {
    "url": "libs/nouislider@10.0.0/nouislider.js",
    "revision": "f11dd14c98150e5cc09d755aa3ecec9d"
  },
  {
    "url": "libs/paper-kit@2.1.0/paper-kit.css",
    "revision": "89d8c3d82a6bbf571ce24828a49ca6e9"
  },
  {
    "url": "libs/paper-kit@2.1.0/paper-kit.js",
    "revision": "f6a5516a117059e6771694f5d5d9a3e8"
  },
  {
    "url": "libs/popper.js@1.14.7/popper.min.js",
    "revision": "56456db9d72a4b380ed3cb63095e6022"
  },
  {
    "url": "libs/taffydb@2.7.3/package.json",
    "revision": "eadaa2584b4bfb962d757a8ce9af479d"
  },
  {
    "url": "libs/taffydb@2.7.3/README.md",
    "revision": "397b819ac301dd511eb771b281e1d1d1"
  },
  {
    "url": "libs/taffydb@2.7.3/taffy-min.js",
    "revision": "27c11a100def26ee818ec43974349fbd"
  },
  {
    "url": "manifest.json",
    "revision": "d22bf46395213c21aa79cb22e238db30"
  },
  {
    "url": "pages/auth/auth.html",
    "revision": "c207633de633d206261f1c371e40a383"
  },
  {
    "url": "pages/dashboard/dashboard.html",
    "revision": "05c48e8f040ccc9d17a2eeb26cc57922"
  },
  {
    "url": "pages/settings/settings.html",
    "revision": "8ad3d1db261cfa661a2bbd21dc0362e6"
  },
  {
    "url": "pages/timetable/timetable.html",
    "revision": "4add2a01532df5d205fce6561764a25f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
