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
"assets/assets/images/placeholder.png": "88584a4f91fb18314adda2d813f644ba",
"assets/assets/images/logo_bar.svg": "ff99677f504389700e6b002d208d97da",
"assets/assets/images/jr.jpg": "24dd983f525317c0230f2e2681404154",
"assets/assets/images/splash.png": "29e4be9238e10d92a61892eff628446d",
"assets/assets/images/header_image2.png": "04b0a8f0be540eb9638b1d5434529828",
"assets/assets/fonts/Montserrat-Light.ttf": "94fbe93542f684134cad1d775947ca92",
"assets/assets/fonts/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/assets/fonts/Montserrat-Medium.ttf": "bdb7ba651b7bdcda6ce527b3b6705334",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "cc10461cb5e0a6f2621c7179f4d6de17",
"assets/assets/fonts/Montserrat-Bold.ttf": "ed86af2ed5bbaf879e9f2ec2e2eac929",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/AssetManifest.json": "b9e72551810bb44d5b5d0caa6fd4321e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "3134e9e0389369ef1d24817b840343d5",
"assets/NOTICES": "7720d7d443210b864152589c15acb79a",
"assets/AssetManifest.bin": "703c76e04d9c8397fa02c236bf6bb9e8",
"assets/FontManifest.json": "21b67a36c87c036b15ef943e3853e723",
"manifest.json": "0d1b4b0251b43920933b7026cde7edf6",
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
"main.dart.js": "d0b0b6cc170f9064af2b1e3e2a3aa130",
"favicon.png": "977a6137e00d9ec12656fae00767a299",
".git/FETCH_HEAD": "6e8da0a1d8673896f2d25942ad7ac79e",
".git/ORIG_HEAD": "050e6165b0dfb960a3e54df0a586a2d4",
".git/COMMIT_EDITMSG": "2412e21f93b6ceeedc830bd51616f5c8",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/logs/HEAD": "c349802cc53609ca9e1d6e439129e6e9",
".git/logs/refs/remotes/origin/master": "821052943e9b9e31e0387d7c87f8b529",
".git/logs/refs/heads/master": "b82af8e3de4bff3ec12c71a6ad03ba57",
".git/config": "5b74b6e57185b0ab820e92031ee3a211",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/remotes/origin/master": "448a5e9759859616fd22be9bc532511c",
".git/refs/heads/master": "448a5e9759859616fd22be9bc532511c",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/1f/3d791bbee109c183ee3f7dcc5f941402faa9dd": "57a408b9872fdd37f34f3790c908ea20",
".git/objects/96/5205143ffed8adac02ffa521b897567289b816": "e07dd980b74e088f055981451d64da04",
".git/objects/96/ef44f80f9ed537a7a02d3571163fde533579ce": "01150602e08f644742dec39457730ea6",
".git/objects/0a/4c498ba94469892e7b1833b3851dcd3e64509f": "7b89a83ec57827fca5079398535df67a",
".git/objects/50/2490b7e78e43aee1033303a995438893f24f81": "72b870be0f18ce8a99a77bb582b50db1",
".git/objects/0c/d7dfd7bf955c692b5422b801757a1fb6275458": "a50bb845fe779ddd854ebcbf812566f5",
".git/objects/26/29042d6c3dec6ea2d95af429ded45594eecaa7": "5205b77b02afb6a2a167badbd9218dd4",
".git/objects/6d/7e2b738867384f6b58b7989b4ce7d40471328f": "5d2cf46c6f1828a35b1791e9d514bf1f",
".git/objects/55/ad167215aee2797b43d4163afeb5027957003f": "44df1195cbbda03820ae87b3f3deb511",
".git/objects/47/0d98eeeaf9db68b991972751e07bb9bb7a1642": "729f12d860b32e19a119de72403a2326",
".git/objects/fc/c9b9fd5cf0c95100ca51426ff8ef85bf9ac4a7": "075251f935ade1088c6380b17de3fd8f",
".git/objects/be/96c571bff05727aa8708fae4cfedc82171438d": "cce58461c918097b10546c8d0cd1ebaf",
".git/objects/be/9f1456dc6a68b9290a2a8e326d96e8066f945a": "71011181d88cbb2ae5b84122c115c7d6",
".git/objects/09/27b8133cfc1ed1c326677f8f1275fae4529606": "a610c88a483a5433f49298b8a9c2bfdc",
".git/objects/31/0084a5ec69fca629f4826ab4568eed42f7e0d6": "72d1906d5a5e6d552f55ae2a8431cdad",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/cde61a1ca5a2ef3257961a2a38ce01c411eff5": "69db410e4aa632f04d3563a5607a2385",
".git/objects/2d/ab7898cd5e85964fd6c3d388e8f8d96409048e": "21fd4607aa733eb6218696480424b1ec",
".git/objects/08/187f9e198cc9bdd2decc90f8e65093d5076140": "dcbf1002d09c8a41f7cb496d2d9c7bc5",
".git/objects/08/4bfa3aacb170c26c7f955c12529cfccd012ea4": "2cbf265313b19cba20b1cd927895d6df",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/5e/3a49daed8987b585de788fcac56743fe036f63": "3e18889304447bc38d16eee668ab9f59",
".git/objects/19/8807088d16f8321754172de8f23ae8752e244b": "e9f43db9715cf84b329c73df9b0bac0f",
".git/objects/c1/7cff083b1cd07a0c875aa4c6c82f215b3824ba": "2edad4698e955fde3d22ee003bca73d0",
".git/objects/53/cb2196579d98ab9dec9af2d8353803f561190e": "670252046ddc5bdc8d756d6e789d7738",
".git/objects/f1/c7fb9ca920dd7c27e07f7957515cd35168bef6": "3b4798bd40375dfefe0b231af19ff4ad",
".git/objects/94/ab7c1f05fb3dcdaed84d39586fe66ab1fb48b2": "bbe5635eeb3f4cfe9cceab125b544e36",
".git/objects/c0/043ed8fd0c4d330432231d3d65e384219c5059": "7aab3c9b482b6cac7a05113d051d04ed",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/f3/a040a7c0e19b0808483a372f5054f0ae12a58a": "c1234b339025d6fe45068ef07d152fa7",
".git/objects/f3/d50365ed6a7a2d7efef39a7b742d7fed1d8887": "c3bef48d167a5973f2235e5625a190c6",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/22/c23e44d7a3c6ca687fbb96dda6c2aa03ca460f": "ae806051183baca2886f8cfc5857c5d3",
".git/objects/81/0c61e9a58380a2c35ce953f2f186104133013e": "799def3c6ce2ceeb3632066e50228b0a",
".git/objects/30/414b69be39eb66d657dad572506b80c1a88f53": "9f9fddf3f4defde22c378a699095a7fc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/b2/bf6120d91dc58a570e352a70aaccd512bf1b56": "e407dfc43645824f9bfd1cc26b7e26f8",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/78/2daca0b41729377f9dc41a89b516d32ad739cf": "9862ec7dcefbc727c21bd978d259da2d",
".git/objects/fe/b18f9b1afdcbc799369cafadc3215a9b7153e3": "f4a66e967ca5e00e4d04f0aa47da80d8",
".git/objects/fe/2da01ddb89db1634448748d5f29535cb510083": "3d7fef7aa7f322876fc420e5ba34bfdd",
".git/objects/d4/e49a923dd48708da4f8db3909cf63b76f61880": "e36e6253f651467d789f03680bccd124",
".git/objects/cb/d85ac23a4d40e49c649abab199fac721a742e1": "2dd515e05f32f23a1e2b84079ecefac3",
".git/objects/f4/5c3fc11438fcfdce6364c305b6f0331deffa40": "2de6f3905adafb8e1a9ab37782d3766f",
".git/objects/f4/a266dd37d5066da46c9a6b8898073ae2930a64": "90c22367f91de9fd622ad04f0a5fd7c8",
".git/objects/d9/e0995aea676056a49bd3a75ebd8d5bb5b72e4a": "ad68e205952eea7af8a8e62e502ba202",
".git/objects/a5/9d86baab7d622bab0b60128dbce0ba3b37c134": "15d4af8e40ce6ee047c11b83e86aa3aa",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/4b/46629b2cec5e996bb17d2bfd3332cf649e3caf": "dce5f14e1db3207d1acfa2a1b3750651",
".git/objects/e4/6eadb363bf014769272de22dd30b8c8c052dc6": "99ed014ef947c47544ca77dd36bd3ed9",
".git/objects/7c/cb8c4ec9c768e4d32694487afd5df86f8f4700": "3f3dcf4c11edb0ba3d071f35d5573a38",
".git/objects/f7/76625044e6230b252eae18735768bae7b3b603": "98738a1d9d3fac47fca6aa48341300ab",
".git/objects/92/f2eba31ba71d7316c5d95c6241096af6be859f": "1241751499d28143fc57120085ce6a93",
".git/objects/06/70ac4a4e999cbec9fe3f77062f084a5f376d97": "dadadcb9bd074f63c38df49deb186126",
".git/objects/06/8a432d90f78f888b5e0746df6fba8153a9a707": "264a606a5621fc2c0ee0ba152221d51e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/f8/8832567be6028bd097becffbf2f57824bfca32": "f0aa88493f7f41af80feb5ab6246bc5a",
".git/objects/bc/7bae76f9a2b6c01942a92032aca12e1a2fde3b": "7b8f8e672e7822e07cb6a02350466d53",
".git/objects/dd/98952c17446e1d35619adbed7256144da2a35d": "3e7b89e59d0d212db849ba378ffa31d0",
".git/objects/04/4664a9a974532d86cb0debf59a52b7a177d592": "92bfe1222ba79f38b32d3bac89571145",
".git/objects/e2/135a57d5b7149f9efdf20b31fe4823ff55b906": "c59318b8dd616b5b9c6da982daef15f4",
".git/objects/e2/28455944daeffeff7d6b695470460b2594acd0": "79a2c3bd12cafe80dbf03c6d1983ee94",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/2d0d5f67a1acbe4bfc4d335e310133fb6cf044": "bcdfad1cbe4d5e39735448e1184142b3",
".git/objects/93/bfdb5a3ddbe636f332a16946d6430d289f2985": "f44c14437062eb0fa327fa764d61e7b9",
".git/objects/93/efb95b0cd7b6dc6e97ddb1c8844780fa210ad5": "e3666cc3b7540c9c00901b8857c70d24",
".git/objects/9d/9df03562828fe1c9179a80eca4db5eedc793c3": "35f76ed0f61a1b6fa20647bab8ab033a",
".git/objects/b1/b4234d09521f1c070fb8720fa7d9bdd1b9ead4": "6d827f5326fd5cfed226ed1373bee746",
".git/objects/40/12225c0b220d0e1d67001daa7e01bba3df6953": "62a756494cd4486a4ac4ba6c10ccb080",
".git/objects/80/6b9ead2cb99e24a13fe07c8700da04e9f4c357": "8e956f69ab16f3efc010c7b6e34e831a",
".git/objects/52/4a0ebcf4c5538688ece9fb8f8b81854b24c62b": "19ed7a5a0a6fbd7ed965166d6c37dee2",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/59/fc7c12d5e443c77590ff1b670670196bad261b": "2b135d42d76d32f94df9cd39f57df55d",
".git/objects/98/617d7e7d15d5c135495a29f3ee1440c990d99b": "f4dbd568c8393d7dd355be8c51129546",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/3581b912f0676f1b04aa222c49967cc29a40cf": "6e4f24b16f01bbb8f9a00876b97ccfe7",
".git/objects/35/e7b11739f0d3c4f6fd744521304441b3b3a423": "cd6ab32d48d56f4192c85d0a0a9ad1f2",
".git/objects/fd/8b3291e75b2e6e6483d7c7507b106207d9ba3a": "8d7b5b165cb9c78b28e2b9e10be07c5f",
".git/objects/fd/6ed50a870edbd6c00290cf2b381016637c9066": "8a1977da411453503fd4168082390524",
".git/objects/fd/787a81c3e608898214c09e62216eefa8f2ba90": "ffec126c6bfda0bcc1ee33fc3e64bcf3",
".git/objects/18/9ce9d0c60c76251cf57657cee1e3e068feaaab": "a4a9e29fbae182a03bbf2790b10f6b59",
".git/objects/18/48955017c4ba62b61a229286373e26efbc02e8": "b48636933ef4b39f40758b604f8d1f9b",
".git/objects/db/c5f83cca3577f04549dcb22febf32e91498aec": "2f8100bea02a06e30274518fe91c7cc9",
".git/objects/76/fa92d2113d6e0e98388640ad430a1cf8ffcd9f": "f703c5f314c384a97f66f4c8388ed44f",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/86/60a78dc14c00c2a3e60d2847688e5d4c9f7a10": "d2cbecc4dba4f3daf36a706a678538ab",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/bf/f341fe8f0e6841339e4ccb0e58706662e9ff6b": "adae15340e453d3538c167befd066c83",
".git/objects/d8/81a1659afe09797a5710094954e79ed0efa197": "c12115e012bbccc87e09f82ae0e3a6e3",
".git/objects/8f/73f64a7553e670f61ffb5bd2a6de9e689efa85": "7fad2926085b297bbc54ce81f7543a60",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/2b/ae875e4020f260855b56534f25839806fbe896": "15e283144f34c0e3dcf308153bbe7848",
".git/objects/65/d7e655aa4611aba4c2e56ac61a76f09be3eeac": "4de32514191962499368a02145ebd05c",
".git/objects/c7/52982b1d138a79b0577542d41b48ab24270e56": "68c3ffb299d1ec0565482cdbcdac7667",
".git/objects/84/694bea5f65a8ef7d9193573085ca0d25fdef0b": "fbd967114a9360d6fbce5d4811ec26d4",
".git/objects/84/d87a97347b63449dbb2b5dcf03cee62331766e": "5b3771cbaa32cb4fc37195a3cec94d53",
".git/objects/12/dadaba8943b7b6144485c236c504f2e2664468": "ec514cee9a8ba4957bd7270de97c459d",
".git/objects/df/0c151bdd1f346119f62b75abb25b2cab164eeb": "1d14c68f6ed26db332721c2353673c64",
".git/objects/9b/b84fcb74b0e577052bb85906649e1b4e346b0b": "def1ade8ef5436c7c59b62a156deb4c9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/a6/0bf1fbc0dc3d655b72b72fa945b8a3d1e862f1": "bc4b653ecf94396abd320b069321f3d8",
".git/objects/58/c035d7c2fd6bb3b6cff3acddaeb1f0eef6e769": "01ceb405a0a68c6b106caaa6ac904a99",
".git/objects/07/73148a5615f993e6a4e1ab55fa37515e872da3": "83c30ca293a9e7fbec7a8270e3e39cd4",
".git/objects/8d/3d267923d3031826535a3b001b99d9549d6ce9": "d99e9fe5205b8cce789a87aa4e259bba",
".git/objects/95/f80594a3a8b5736008d5da3fd2623899084098": "3c4819d00a49e19cc61ea92d4ecac113",
".git/objects/95/2d155c92da49c2b3f37e5acdc582a9b240c9cd": "14f910487903ada7deba5ec252875caa",
".git/objects/b3/f56087a8547dfa3dfb153f68de482514ca515b": "4543931878a611561c33bea5a151d478",
".git/objects/3e/c8cf9f3b74ea1c1f67600386b8d07c42ce57ef": "6ce57f9085c73b4fb2ace763f7035bef",
".git/objects/3e/f732692bed089aa169e59646961ee556ebe8fc": "3092f5f57c433c77aa81a20f5dc52c0f",
".git/objects/3e/a059cf56597b99f44777faca3c4b8a6283ed4c": "e43f3495a56b4a9c3d54ac3e9a5059fd",
".git/objects/8a/84a7e58f4e4039c29b3bda3cf774b339e115b0": "4bace36676311c8a5c5a5ead6ff4bab8",
".git/index": "55e7083ac13a0ce3e13bc4451f29f7bc",
"version.json": "6c801d24bd3cafe68c9161a50156a198",
"index.html": "534a461726b9fbec39d3407d51ace5bc",
"/": "534a461726b9fbec39d3407d51ace5bc"};
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
