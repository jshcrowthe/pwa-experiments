/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["bower_components/app-layout/app-box/app-box.html","1463e2a822eed0be826432f77e6cb496"],["bower_components/app-layout/app-box/demo/document-scroll.html","a5603c5d0dce62a22234a70136f4ee0f"],["bower_components/app-layout/app-box/demo/index.html","5aaf8de460597a107baa49e603f232b9"],["bower_components/app-layout/app-box/demo/scrolling-region.html","107fad03cbb429ce53d0f7944dd3c79d"],["bower_components/app-layout/app-drawer-layout/app-drawer-layout.html","d550f12ee174ef96feefb0747bb6f157"],["bower_components/app-layout/app-drawer-layout/demo/index.html","9bf3631dec5e5c821eb1f6fae457f84c"],["bower_components/app-layout/app-drawer-layout/demo/simple-drawer.html","a8696464f9f04791c535fda2f2a09809"],["bower_components/app-layout/app-drawer-layout/demo/two-drawers.html","69ab5ad62c70595ac6a5c1201dc6cb68"],["bower_components/app-layout/app-drawer-layout/test/app-drawer-layout.html","8181191bf49d777779d07c6a1d8b278a"],["bower_components/app-layout/app-drawer-layout/test/index.html","88ff1b63a05dc93e081828f4d6860935"],["bower_components/app-layout/app-drawer/app-drawer.html","f27e630d9bb27ba9f1b828dcce7eaeba"],["bower_components/app-layout/app-drawer/demo/index.html","f1807e6fa33da22068e1ca5bf96d93b0"],["bower_components/app-layout/app-drawer/demo/left-drawer.html","2ca79b5f8d762b0e088327c89711a254"],["bower_components/app-layout/app-drawer/demo/right-drawer.html","3720302e6f2fa0fc74af53cf088b42a7"],["bower_components/app-layout/app-drawer/test/app-drawer.html","8d418bb7ee8634370daa650364fa9fe0"],["bower_components/app-layout/app-drawer/test/index.html","ee25d178e272349e839cae1da6a46da9"],["bower_components/app-layout/app-header-layout/app-header-layout.html","a528ff444a1468240e9b93ba190b614d"],["bower_components/app-layout/app-header-layout/demo/index.html","45280bcdedda730f9bfcb922f22e9703"],["bower_components/app-layout/app-header-layout/demo/music.html","f39814d2482be6f2a6481e1d14deee52"],["bower_components/app-layout/app-header-layout/demo/scrolling-region.html","f1494ef078acded027dba30f58486425"],["bower_components/app-layout/app-header-layout/demo/simple.html","cd29267bdc890b87ec6b063099fb7ad9"],["bower_components/app-layout/app-header-layout/test/app-header-layout.html","e68a750d014cad3a142910c8af188ad4"],["bower_components/app-layout/app-header-layout/test/index.html","d1a039baec04bb6228a9dae36dda7046"],["bower_components/app-layout/app-header/app-header.html","8de224d8eff55db0e2d353fcbdacdd82"],["bower_components/app-layout/app-header/demo/blend-background-1.html","d6ec97bfc94dfbb050189dd40195bac1"],["bower_components/app-layout/app-header/demo/blend-background-2.html","e08096bb003ce434bfe60a1272691b7c"],["bower_components/app-layout/app-header/demo/blend-background-3.html","6e9fb1efe7bc085fbc51beb573d62848"],["bower_components/app-layout/app-header/demo/contacts.html","3184a87b0a3db83466cf01ac976a3cfd"],["bower_components/app-layout/app-header/demo/give.html","debc6301dc3a9011e91c0d01e013529e"],["bower_components/app-layout/app-header/demo/index.html","fd903dcac490e3762083b0ec2283969a"],["bower_components/app-layout/app-header/demo/music.html","987847bd63b8712fda5e129b3a51e14f"],["bower_components/app-layout/app-header/demo/no-effects.html","92609e3ba0e024c6298d2cc9f02a2d8c"],["bower_components/app-layout/app-header/demo/notes.html","069d42399959b5675fb75eafcec464ec"],["bower_components/app-layout/app-header/test/app-header.html","427083b54967098e9ac1ba4b5c65c96e"],["bower_components/app-layout/app-header/test/index.html","0566371493b2b48f90fcf07d145c0840"],["bower_components/app-layout/app-layout.html","beb2ef8164dac4f97efb3b9da45b150c"],["bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","73aae485e62fd98b5af647182b506bc0"],["bower_components/app-layout/app-scroll-effects/app-scroll-effects.html","df10385a8e531f795aa8ab60ba8a39c5"],["bower_components/app-layout/app-scroll-effects/effects/blend-background.html","74740e1eb4b37d5e4e9357065f46da95"],["bower_components/app-layout/app-scroll-effects/effects/fade-background.html","8fb894f233a7477c9b7b2a8b997837f6"],["bower_components/app-layout/app-scroll-effects/effects/material.html","f449685972c7c28831008fc15e1727a6"],["bower_components/app-layout/app-scroll-effects/effects/parallax-background.html","36b3b5dadfd465185b4b36e72101ca68"],["bower_components/app-layout/app-scroll-effects/effects/resize-snapped-title.html","4bf64796de06507b33ce07a7fc7fc0a3"],["bower_components/app-layout/app-scroll-effects/effects/resize-title.html","b5ab3ce3a59f2b8216c42dd876189b00"],["bower_components/app-layout/app-scroll-effects/effects/waterfall.html","5484fbcd6f4d5ea2bc622a53b5df3647"],["bower_components/app-layout/app-scrollpos-control/app-scrollpos-control.html","c4e04ec7b6fc2b8e52be27167114a8be"],["bower_components/app-layout/app-scrollpos-control/demo/index.html","ed858e47a6c81bb38f19f7d16f5b6d07"],["bower_components/app-layout/app-scrollpos-control/test/app-scrollpos-control.html","9d1bf5f7aeafcd2e021d5a5e0c785337"],["bower_components/app-layout/app-scrollpos-control/test/index.html","5af054deb6a98f36a0daa26a900e84a6"],["bower_components/app-layout/app-toolbar/app-toolbar.html","03d5977c475238c1fb6a0baec9410c82"],["bower_components/app-layout/app-toolbar/demo/index.html","65c0a7b4c126f3cc0d9ecbd10545615f"],["bower_components/app-layout/app-toolbar/test/app-toolbar.html","f35b906b838a613e4886e58a216a88b3"],["bower_components/app-layout/app-toolbar/test/index.html","41a1e3c71a57b1220fe917ec1d9ba72a"],["bower_components/app-layout/demo/demo1.html","b1ef45707cda7e92d5d08e2d37dc0e76"],["bower_components/app-layout/demo/demo2.html","7fb5267720828519b6a88e19aaf61503"],["bower_components/app-layout/demo/demo3.html","17c9830c2fa22698eb7abd4e687d95c9"],["bower_components/app-layout/demo/demo4.html","f7cd8fee2ecd8c9a07ffa8f4575ed694"],["bower_components/app-layout/demo/demo5.html","48c7afefef96ccc571ef3b747b0707a9"],["bower_components/app-layout/demo/demo6.html","90a38310635ce193c2895bf8370cf143"],["bower_components/app-layout/demo/demo7.html","cdeb84be1e1fe4fb829f8da28d988064"],["bower_components/app-layout/demo/sample-content.html","376de7c12351072ebeca4249fee663fb"],["bower_components/app-layout/docs.html","78790fc9ba214e6cd8d5387f16173b38"],["bower_components/app-layout/helpers/helpers.html","4640f12b117809fafabdfb9e812ee1d2"],["bower_components/app-layout/helpers/test/index.html","e9117686aa5e104ad449b514e6e818a9"],["bower_components/app-layout/helpers/test/register-effect.html","0d51cccc0cc91f7f6cc001553be491d2"],["bower_components/app-layout/helpers/test/scroll.html","c868a351c5310e84b51ae58b44b692b7"],["bower_components/app-layout/index.html","78c7d4596cbdeb5f6dce76dcd9825039"],["bower_components/app-layout/patterns/expand-card/index.html","a6fd4745305e15348eb61afc7a65dbb6"],["bower_components/app-layout/patterns/transform-navigation/index.html","9fe46e80935cf40331274debec7d1a9b"],["bower_components/app-layout/patterns/transform-navigation/x-app.html","080daef2ad433b6d3788975948f04630"],["bower_components/app-layout/site/device-viewer/device-layout-viewer.html","d365ac1f5b416ee46db01e5f4d2c2d50"],["bower_components/app-layout/site/device-viewer/device-view.html","b5ed345a6a74d41e4c57d9ffbd692868"],["bower_components/app-layout/site/device-viewer/index.html","f447b6177eaa83ff8966bde2ea33d9ab"],["bower_components/app-layout/templates/getting-started/index.html","a0fcc3d292fb41ca1618002e3257d717"],["bower_components/app-layout/templates/getting-started/x-app.html","19575a9400a020fe1090e1753bddc102"],["bower_components/app-layout/templates/landing-page/index.html","8633272c75e83485f7f164b37988af6a"],["bower_components/app-layout/templates/landing-page/x-app.html","12660a310c8a8a1850e2c7cbc2626c4a"],["bower_components/app-layout/templates/pesto/index.html","bea71396af12c1c46505e7edfd6a3695"],["bower_components/app-layout/templates/pesto/src/app-icons.html","18132df20fcd8ec5a211b1f4bb9dad02"],["bower_components/app-layout/templates/pesto/src/recipe-app.html","25062d58ed75d327f295ec9465a19365"],["bower_components/app-layout/templates/pesto/src/recipe-detail.html","11fff6cfeeee02af351fe788e830d7ec"],["bower_components/app-layout/templates/pesto/src/recipe-list.html","0b0fdb40485fe4c8ef74f3f7e2e7be2b"],["bower_components/app-layout/templates/publishing/index.html","da42a94b4239a3e9a88c4c9a28301f77"],["bower_components/app-layout/templates/publishing/src/app-icons.html","215cbbd87443219ce9ffcf9be8513580"],["bower_components/app-layout/templates/publishing/src/article-detail.html","5f7b6a339aa352e048a87234dc0150af"],["bower_components/app-layout/templates/publishing/src/article-headline.html","e96248d8bd83c327f0ec89c7cfe92257"],["bower_components/app-layout/templates/publishing/src/blog-app.html","e1717fe0b390b0443813473496a5be07"],["bower_components/app-layout/templates/publishing/src/two-columns-grid.html","4c9c7b217a48a06058ef872a277b735e"],["bower_components/app-layout/templates/shrine/index.html","daaf834c4835dde845884384587a3d8b"],["bower_components/app-layout/templates/shrine/src/shrine-app.html","e283000223789f84c34cfcec0173c843"],["bower_components/app-layout/templates/shrine/src/shrine-detail.html","e9185e7cb364a6aa2e962ae6f0f80cea"],["bower_components/app-layout/templates/shrine/src/shrine-featured-item.html","1b8430a6d143aefe7990b772985be937"],["bower_components/app-layout/templates/shrine/src/shrine-item.html","5c87ff91b977aae5d27bfb89927d08ef"],["bower_components/app-layout/templates/shrine/src/shrine-list.html","e9a1aebc61a5a761679a1f18c6299c94"],["bower_components/app-layout/templates/shrine/src/shrine-simple-item.html","4acbabce2955c362e8b32045fff80fdb"],["bower_components/app-layout/templates/test-drive/index.html","0b5cb94b746a12ace41630d868244ad1"],["bower_components/app-layout/templates/test-drive/test-app.html","00812da53615b6f9b7af1cdf747a1fb1"],["bower_components/app-layout/test/index.html","e334f7c588447b9a607ca63ffe4cdd48"],["bower_components/app-storage/app-indexeddb-mirror/app-indexeddb-mirror-client.html","97e44d1ae68ed0f76b4be124847dfc60"],["bower_components/app-storage/app-indexeddb-mirror/app-indexeddb-mirror-worker.js","a7e73ff0a64b112bd3cde266f193ad98"],["bower_components/app-storage/app-indexeddb-mirror/app-indexeddb-mirror.html","72ab979a9169e6aa7702aacf475a75a7"],["bower_components/app-storage/app-indexeddb-mirror/common-worker-scope.js","ee3751715397236b8b6a9351bcb42b34"],["bower_components/app-storage/app-indexeddb-mirror/common-worker.html","91a248e22623171a3da8db139204a71e"],["bower_components/app-storage/app-localstorage/app-localstorage-document.html","ef1b25e10f428917c2eda2b1fcadcf15"],["bower_components/app-storage/app-network-status-behavior.html","65110b80564b08b397ea71bb24090c11"],["bower_components/app-storage/app-storage-behavior.html","6b3a29d62dabb043dc5f7c6464d36844"],["bower_components/app-storage/index.html","98c2068939cd33f62d3e71f2ecaacde2"],["bower_components/app-storage/test/app-indexeddb-mirror/app-indexeddb-mirror.html","2a7cf13a68203eb57971b8e02dc5aecc"],["bower_components/app-storage/test/app-indexeddb-mirror/helpers.js","c4b32d9099f07f924d37d1a68a3f5090"],["bower_components/app-storage/test/app-localstorage/app-localstorage-document.html","232ed37aa2822e3da86df7531a745d4c"],["bower_components/app-storage/test/app-storage-compatibility-suite.html","b3813c990bf38f171f096a9840ddb3fa"],["bower_components/app-storage/test/app-storage.html","3a244a57bf8b79575afcce96aacd9a10"],["bower_components/app-storage/test/index.html","9d873f0e1525aef894540ceb9e12097d"],["bower_components/firebase-sdk/index.js","dd2f7bac6e5a3df5207a53252f11c565"],["bower_components/font-roboto/roboto.html","3c017dcd17189b99a03dbeffb81bc254"],["bower_components/iron-a11y-announcer/demo/index.html","1c372437e3f6d385507439da68fca439"],["bower_components/iron-a11y-announcer/demo/x-announces.html","643a535812400c2048f0c688af3e61ef"],["bower_components/iron-a11y-announcer/index.html","88776a7513529faf429eebdb9fd7e716"],["bower_components/iron-a11y-announcer/iron-a11y-announcer.html","cdfa785e0fef5e0832e038c9be9f0309"],["bower_components/iron-a11y-announcer/test/index.html","4d48e91fdc449236e2a9723495afcc1b"],["bower_components/iron-a11y-announcer/test/iron-a11y-announcer.html","d41ea17676468c35625a0338e64cf2c9"],["bower_components/iron-a11y-keys-behavior/demo/index.html","1ce1854e9de7a43eb739e2ce78853c0f"],["bower_components/iron-a11y-keys-behavior/demo/x-key-aware.html","57cc6dc1bc098af7dd2c8da89b4c66cc"],["bower_components/iron-a11y-keys-behavior/index.html","f8e16b2a3282b3da28213336695b54ea"],["bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","4934a645c7d912aaf6daee09adc8f628"],["bower_components/iron-a11y-keys-behavior/test/basic-test.html","f72432dbcdea1904337416764120981c"],["bower_components/iron-a11y-keys-behavior/test/index.html","6705a3ea09c958ae2f85ee34d9965518"],["bower_components/iron-autogrow-textarea/demo/index.html","1939a4b4a77f0df851962ceb7f93869f"],["bower_components/iron-autogrow-textarea/index.html","516eb6756f60fa54f103881b3a0a7055"],["bower_components/iron-autogrow-textarea/iron-autogrow-textarea.html","e15d55ff303f8a1c20f253ef85699db1"],["bower_components/iron-autogrow-textarea/test/basic.html","3b7321c7ba35a175c2da89e3b61939e1"],["bower_components/iron-autogrow-textarea/test/index.html","caba5fad77eeb59483f45c301c17653d"],["bower_components/iron-behaviors/demo/index.html","50b686272f914fdba14a1bd48f88edab"],["bower_components/iron-behaviors/demo/simple-button.html","dad2e11ca6ea196d4729cc3e214fe948"],["bower_components/iron-behaviors/index.html","224d488d9de603f8a42e9eba8457cffa"],["bower_components/iron-behaviors/iron-button-state.html","75da1ac0ca8d191caa798a65ec5a4c8b"],["bower_components/iron-behaviors/iron-control-state.html","c05daf791e449749c5268bd95ec626aa"],["bower_components/iron-behaviors/test/active-state.html","180f6b194654f83c40aa4779f8551574"],["bower_components/iron-behaviors/test/disabled-state.html","6eff753429983058871fa4bb34a82395"],["bower_components/iron-behaviors/test/focused-state.html","2b06bd9b51703fd61cbbe70afcfab848"],["bower_components/iron-behaviors/test/index.html","e96eaf1204b28df91964c64d4f4d669c"],["bower_components/iron-behaviors/test/test-elements.html","c94b1c7668dd38d51daeb948c982d9ab"],["bower_components/iron-checked-element-behavior/demo/index.html","713379cbccca81d7aa8792a019598e87"],["bower_components/iron-checked-element-behavior/demo/simple-checkbox.html","faec485e71d23017f693504d64fe59f7"],["bower_components/iron-checked-element-behavior/index.html","610778b47d072c4783f599220c046b29"],["bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html","7e2eac4f0556d07cc8ec8bf03c7625c1"],["bower_components/iron-checked-element-behavior/test/basic.html","b016cac4b1d65007905452517e66d6b1"],["bower_components/iron-checked-element-behavior/test/index.html","ee22366c0264850229bee3b53309ffb3"],["bower_components/iron-checked-element-behavior/test/simple-checkbox.html","883d99528dd4d44ece5d869503dc9b0e"],["bower_components/iron-fit-behavior/demo/index.html","0da63b006919d3211096ff6e41163a3e"],["bower_components/iron-fit-behavior/demo/simple-fit.html","cb83615ce6bc5d2eb63674087477477d"],["bower_components/iron-fit-behavior/index.html","cb88b82df07e8ae982234d016d1ab70f"],["bower_components/iron-fit-behavior/iron-fit-behavior.html","0efba37727302fb6d46297c60e051395"],["bower_components/iron-fit-behavior/test/index.html","40be86b35dccfab182f54ee7651fdffa"],["bower_components/iron-fit-behavior/test/iron-fit-behavior.html","a41904d20b0e0b388a70b214d85b34a8"],["bower_components/iron-fit-behavior/test/test-fit.html","1eadf9d945acc4024eea00722999c72b"],["bower_components/iron-flex-layout/classes/iron-flex-layout.html","533766b209c5e3d1957117204c312241"],["bower_components/iron-flex-layout/classes/iron-shadow-flex-layout.html","c880e8f5354c298f0404530ab0cff0d9"],["bower_components/iron-flex-layout/demo/index.html","882df91034e93a809e2e01c2027414cb"],["bower_components/iron-flex-layout/index.html","196e49064318640b296a576da99dc554"],["bower_components/iron-flex-layout/iron-flex-layout-classes.html","656314ffe981830043fe89b918e20371"],["bower_components/iron-flex-layout/iron-flex-layout.html","151308b528090fb6c76b74d8943aa0b0"],["bower_components/iron-flex-layout/test/index.html","8a2bd37e8a6b7dd3649282b41cc94197"],["bower_components/iron-flex-layout/test/iron-flex-layout-classes.html","49e84a4e738ea1b7ec0ffd8bac71cd4b"],["bower_components/iron-flex-layout/test/iron-flex-layout.html","a862da5e10e4b98093e6639ebb96fde3"],["bower_components/iron-form-element-behavior/demo/index.html","1d904c65ac632daeed43e7d1c04a676b"],["bower_components/iron-form-element-behavior/demo/simple-element.html","7e26743b5a10eb2864bbf41510027ab4"],["bower_components/iron-form-element-behavior/demo/simple-form.html","1816335d3a15b96690dc98ff9294ea3b"],["bower_components/iron-form-element-behavior/index.html","af04489de5b0e8c97e460f662f1ceee4"],["bower_components/iron-form-element-behavior/iron-form-element-behavior.html","8ffdd1ce0a492d317776bb1bb4a443a0"],["bower_components/iron-form-element-behavior/test/basic.html","8169ea520f059d53bd16817f033064c3"],["bower_components/iron-form-element-behavior/test/index.html","810bc13af626f3bd68007f568b0679c9"],["bower_components/iron-form-element-behavior/test/simple-element.html","4257780a78b4fbe0e445646c59f6d462"],["bower_components/iron-form-element-behavior/test/simple-form.html","186a8eba928c7aeb0ae9d3c12d34777f"],["bower_components/iron-icon/demo/async.html","ebea7cbc54d6c5cc5becfce0b7bae95e"],["bower_components/iron-icon/demo/index.html","e06651850d9ad441b3a3a6c28faf7cfa"],["bower_components/iron-icon/index.html","05d0abe0ed8dad3699359b4102400b21"],["bower_components/iron-icon/iron-icon.html","2b494249a1fa82b0df56a56ffa74e885"],["bower_components/iron-icon/test/index.html","2dd78711ceaffacdf2b30c8893143f45"],["bower_components/iron-icon/test/iron-icon.html","819f05fc2bf10d0a7598b45a538e6bc4"],["bower_components/iron-icons/av-icons.html","7ddc624b73101033c72e95f2d138fb32"],["bower_components/iron-icons/communication-icons.html","f5d3567b8b566cd0f4e6044142ec4367"],["bower_components/iron-icons/demo/index.html","e08fc4e13f1d27e2d4ec83045d482df8"],["bower_components/iron-icons/device-icons.html","3f45536976ee6acc3511387bc971927c"],["bower_components/iron-icons/editor-icons.html","966f59875767c28d63e85109f72342b7"],["bower_components/iron-icons/hardware-icons.html","3a47896ccd2f6001ac02b1af558df06f"],["bower_components/iron-icons/image-icons.html","f8a35791c75944606e49d9c905630a6b"],["bower_components/iron-icons/index.html","c476a87844207f1468ecca848d1e8b79"],["bower_components/iron-icons/iron-icons.html","4d452f51b8128ca8daa6f19dd5863f89"],["bower_components/iron-icons/maps-icons.html","6e9b1f0fc963de60dd8ab8d3f35897ce"],["bower_components/iron-icons/notification-icons.html","17bd1a49aa9ba1e4ee871e38b62a585d"],["bower_components/iron-icons/places-icons.html","ea613d2a960538ee952d2b34c6ff895a"],["bower_components/iron-icons/social-icons.html","e368d3300eca0228f9684f7f88d5aaaa"],["bower_components/iron-iconset-svg/demo/index.html","ae6de2f85123bbf5ab9257a6bdb892ea"],["bower_components/iron-iconset-svg/demo/svg-sample-icons.html","4335ff78f3b031d257f8158617cf3d5f"],["bower_components/iron-iconset-svg/index.html","2949f48a7ae6e2335b0efd7d59516712"],["bower_components/iron-iconset-svg/iron-iconset-svg.html","16623955b0dd63fed0ca4f3d28612406"],["bower_components/iron-iconset-svg/test/index.html","bb496f209373d7b4c00ccbea5dc071de"],["bower_components/iron-iconset-svg/test/iron-iconset-svg.html","aed61e16f26231ffbfe8353b2ee18055"],["bower_components/iron-input/demo/index.html","b3e0e362d8199e495bb3a46d1367d0dd"],["bower_components/iron-input/index.html","53c06c55498dd515ef364a1c41a0ae9b"],["bower_components/iron-input/iron-input.html","c9258caa5be1130df21efa8963b8bec2"],["bower_components/iron-input/test/disabled-input.html","709ebfb0b14fda9e2c39c71f4c9448c9"],["bower_components/iron-input/test/index.html","d71f2d0a4b80eed6298f21921149ebd9"],["bower_components/iron-input/test/iron-input.html","1c949b0f7a932cc6a306e97d6b9f3d27"],["bower_components/iron-input/test/letters-only.html","1dd0b9001e2d67a605f5f3f02075c944"],["bower_components/iron-list/demo/basic.html","04db80d6b7e4cd2ac6e3132cc9f9f3ef"],["bower_components/iron-list/demo/collapse.html","6f6feb20a96027c8118e4b172b4d0082"],["bower_components/iron-list/demo/grid.html","25cdfbc79f425bec0036da413cd65d04"],["bower_components/iron-list/demo/index.html","cc602c092632921af79793d79361f50f"],["bower_components/iron-list/demo/scroll-threshold.html","72b6c5670dd96d6a072ce349882ffd50"],["bower_components/iron-list/demo/selection.html","d75dde8032b59c0500aada0cb684f19d"],["bower_components/iron-list/index.html","eb42c6ec037c39483d970db6408886ac"],["bower_components/iron-list/iron-list.html","9eedf7cd25c70d972f244b75efbd7cb2"],["bower_components/iron-list/test/basic.html","5806c8338a96067020583bdaa49b6e55"],["bower_components/iron-list/test/different-heights.html","873a8d0aedb5fa5ab45d04ad8916e519"],["bower_components/iron-list/test/dynamic-item-size.html","b0ac0f969d1cc46344fe9af1be3926a0"],["bower_components/iron-list/test/focus.html","79c63dc2e2aa96fdf79e2ca241152f77"],["bower_components/iron-list/test/grid.html","b17f42321f6bd1ba65a259e4f7357fc5"],["bower_components/iron-list/test/helpers.html","5b7d2793ce8e47afae63618bd831879e"],["bower_components/iron-list/test/hidden-list.html","c077d564a0ce190474f450ab29a243e7"],["bower_components/iron-list/test/index.html","24cae8a642cdf1d238ba1d1a92af599a"],["bower_components/iron-list/test/mutations.html","c2940c85dd60567b9d1eceae2d64f48a"],["bower_components/iron-list/test/physical-count.html","8e64ac34ba2333c28f63472dc3248688"],["bower_components/iron-list/test/selection.html","5d1a099760a359e91030eefedce5767e"],["bower_components/iron-list/test/smoke/avg-worst-case.html","dafe59028ed86e0e9169c481c40c1dda"],["bower_components/iron-list/test/smoke/dummy-data.html","64630e2840b2833de6499d8e54b3f411"],["bower_components/iron-list/test/smoke/index.html","799e9c69f7658328d4ee54afa56afaa0"],["bower_components/iron-list/test/smoke/physical-count.html","f69f1d8af280fb36293eceda1740ea01"],["bower_components/iron-list/test/x-grid.html","6a305b35fa09644dbd5951d12992ad35"],["bower_components/iron-list/test/x-list.html","9484328a49049b51527cbc8aa50190b2"],["bower_components/iron-media-query/demo/index.html","dec37ea48f03b47488c57e798ded16c7"],["bower_components/iron-media-query/index.html","e4f6ed187a569d968ded4fae7098faae"],["bower_components/iron-media-query/iron-media-query.html","0716c876740cd1225cfc060109c4f1d9"],["bower_components/iron-media-query/test/basic.html","e18d9357fb5320364f50e6606ba1ab9f"],["bower_components/iron-media-query/test/index.html","4ddb45b1eef7e7dbd5d66c894903351e"],["bower_components/iron-meta/demo/index.html","8efc89248967a8b40ae593e3f41432be"],["bower_components/iron-meta/index.html","dd0b2fc459101527718f4e8be836cb8b"],["bower_components/iron-meta/iron-meta.html","8691947fe9eeca635dd4d4bb9c85ad05"],["bower_components/iron-meta/test/basic.html","6bb0a9ba1e4f1170badd6c77882f7fd5"],["bower_components/iron-meta/test/index.html","f521b4d1274d38f25802eb9c11a59932"],["bower_components/iron-meta/test/iron-meta.html","3cd8fc35a8c2a4e0b08c88300076298f"],["bower_components/iron-overlay-behavior/demo/index.html","02465d677e56604a68ff95772fd156e0"],["bower_components/iron-overlay-behavior/demo/simple-overlay.html","3749d4b897eaa7a6c1a0d79a5c028fb4"],["bower_components/iron-overlay-behavior/index.html","16cd1612d3b9c046b573380fb6b87016"],["bower_components/iron-overlay-behavior/iron-overlay-backdrop.html","395be8f75cc07446eb9a53e9791fb53d"],["bower_components/iron-overlay-behavior/iron-overlay-behavior.html","47d27e3b617b084eb7d78ddd993906bf"],["bower_components/iron-overlay-behavior/iron-overlay-manager.html","14978b6f3003428e37936fe7d3823ee9"],["bower_components/iron-overlay-behavior/test/index.html","3f697cdff7a34f4eb0ac79a542c44d4c"],["bower_components/iron-overlay-behavior/test/iron-overlay-backdrop.html","bd1f305a03b57afc6a18e67d06ffa248"],["bower_components/iron-overlay-behavior/test/iron-overlay-behavior.html","d403d78e2e22e8c801cdf8fdbe935307"],["bower_components/iron-overlay-behavior/test/test-buttons.html","e23e97686a09c022a702437cf9972b3b"],["bower_components/iron-overlay-behavior/test/test-menu-button.html","b17c854c8c689ac4d7f7e6de3eb50f15"],["bower_components/iron-overlay-behavior/test/test-overlay.html","3bdb0c006f8edad01d11270c675907fb"],["bower_components/iron-overlay-behavior/test/test-overlay2.html","257af1b570bd31b694ca411d9fdd7a87"],["bower_components/iron-resizable-behavior/demo/index.html","e0f7cf728aa97c39d4834e693c4630a9"],["bower_components/iron-resizable-behavior/demo/src/x-app.html","b8c55927bb93255d39bd86605af3c3cf"],["bower_components/iron-resizable-behavior/index.html","97869841e903c8dc4022a56bc4c9e777"],["bower_components/iron-resizable-behavior/iron-resizable-behavior.html","db25dbe9ed72665b9aebb68ce5d15749"],["bower_components/iron-resizable-behavior/test/basic.html","06b7a0e400127f521f73a894ed51b0af"],["bower_components/iron-resizable-behavior/test/index.html","72ef9cbc3e30318e92fd0d176f6a9613"],["bower_components/iron-resizable-behavior/test/iron-resizable-behavior.html","d14fc2f9406e915742b66b75b6d94caf"],["bower_components/iron-resizable-behavior/test/test-elements.html","357311aa15795dcd645f9bbee076fab7"],["bower_components/iron-scroll-target-behavior/demo/document.html","9c43c7e7439e6074d918e1735ffade56"],["bower_components/iron-scroll-target-behavior/demo/scrolling-region.html","63c3896a914ac92f29ee40f2e8e343c8"],["bower_components/iron-scroll-target-behavior/demo/x-scrollable.html","40340464b085f827b4f59b8718556eb4"],["bower_components/iron-scroll-target-behavior/index.html","e890c0407dbaf79a07d0bed0ab2d772d"],["bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","fa5ea4cf35746073f1504df653fcaed2"],["bower_components/iron-scroll-target-behavior/test/basic.html","118d72af4bdbb3a6835ab4387a527da6"],["bower_components/iron-scroll-target-behavior/test/index.html","c22951e5f734f5a8a44b31401b0dc01e"],["bower_components/iron-scroll-target-behavior/test/x-nested-scrollable.html","02f5bc8a28bac3f32cad681a27e55861"],["bower_components/iron-scroll-target-behavior/test/x-scrollable.html","cecabeabea7174bca3abfa9cd9c3f50e"],["bower_components/iron-validatable-behavior/demo/cats-only.html","e626c89c736addb7dbffda3873b1e415"],["bower_components/iron-validatable-behavior/demo/index.html","811027ad482129ce80646b30efe8d10e"],["bower_components/iron-validatable-behavior/demo/validatable-input.html","f113ca6f1710c1c000575d8a155c80b6"],["bower_components/iron-validatable-behavior/index.html","230e2151859e88473e6cdb8fb186b107"],["bower_components/iron-validatable-behavior/iron-validatable-behavior.html","7ab1d3a5f460d0e87c3aa9fb4fcdfe00"],["bower_components/iron-validatable-behavior/test/cats-only.html","320fcb41e5081b89c584ef9d56a256dc"],["bower_components/iron-validatable-behavior/test/dogs-only.html","1aca6a2eb016bf2c325ab9ba23473730"],["bower_components/iron-validatable-behavior/test/index.html","22074ee13b08afe2898321fab4d6e34b"],["bower_components/iron-validatable-behavior/test/iron-validatable-behavior.html","a56d1c293dd113e82c7e080aa6c5cb57"],["bower_components/iron-validatable-behavior/test/test-validatable.html","43a61e08482031059b62a158a1243dbd"],["bower_components/paper-behaviors/demo/index.html","f097f60037f4e31788516f13493e38ab"],["bower_components/paper-behaviors/demo/paper-button.html","6aaa813e640c6b616125d817fa046167"],["bower_components/paper-behaviors/demo/paper-radio-button.html","7d43f9098c5b72a2289324e3b09fc0c9"],["bower_components/paper-behaviors/index.html","5f6135dc7ff835d11275c61a5e8d0655"],["bower_components/paper-behaviors/paper-button-behavior.html","1016bc52f8e65a928feaba9a69ff5a55"],["bower_components/paper-behaviors/paper-checked-element-behavior.html","e20f5b98229a013c389748422b1694e1"],["bower_components/paper-behaviors/paper-inky-focus-behavior.html","ec5cb962fbb967d6bd639aa52096b25c"],["bower_components/paper-behaviors/paper-ripple-behavior.html","e5dc0f6510ce15d17ec03e4ba13fd52a"],["bower_components/paper-behaviors/test/index.html","267b97c54efe0094411fdb7132463f4a"],["bower_components/paper-behaviors/test/paper-button-behavior.html","236d348b085f6d98daa3c7ddd08592d7"],["bower_components/paper-behaviors/test/paper-checked-element-behavior.html","586673494c5e3f69427bf352df4b04db"],["bower_components/paper-behaviors/test/paper-radio-button-behavior.html","dc8ce918e2b64603741e84998cc2a0c9"],["bower_components/paper-behaviors/test/paper-ripple-behavior.html","9873c710315930f74c0df015096891ab"],["bower_components/paper-behaviors/test/shadowed-ripple.html","76bcdda81c2e6905477e11b42ae22202"],["bower_components/paper-behaviors/test/test-button.html","d5f13ebcc1d241f3c29cf95b0720d01e"],["bower_components/paper-behaviors/test/test-radio-button.html","d3f2ce529f36b9a4b53c77cdb88bc032"],["bower_components/paper-button/demo/index.html","6fb91a613589ef53fdd5168ef88ed1d7"],["bower_components/paper-button/index.html","05d0abe0ed8dad3699359b4102400b21"],["bower_components/paper-button/paper-button.html","256825218382748ded3d4a1c90b40046"],["bower_components/paper-button/test/index.html","da45c80657f199ebea7dabfe5c770375"],["bower_components/paper-button/test/paper-button.html","f63779cc07eac43f4ae4ef75a5afa759"],["bower_components/paper-checkbox/demo/index.html","c071b6ed5facc211b43145051ff7606f"],["bower_components/paper-checkbox/index.html","2cbae41a0047be02ce481f3b77705fe1"],["bower_components/paper-checkbox/metadata.html","99e5831ccd158b4dd3c74af930a5a439"],["bower_components/paper-checkbox/paper-checkbox.html","9e87af5d5e78ec38eb20b15df02266c6"],["bower_components/paper-checkbox/test/basic.html","1c249a494966de2d21d8e1f28d38a1a1"],["bower_components/paper-checkbox/test/index.html","7564a1c962ffd001c6a5de4cbfd038d1"],["bower_components/paper-icon-button/demo/index.html","099aa0ab8fc318be95dce77be8edaddc"],["bower_components/paper-icon-button/demo/paper-icon-button-light.html","bbd3ebd9d2f2ecc02d339f9ac5f2f767"],["bower_components/paper-icon-button/index.html","399a635107d6dbfa2b7255463ceaee7c"],["bower_components/paper-icon-button/paper-icon-button-light.html","29284fba1b58e4a216d3196658db41fc"],["bower_components/paper-icon-button/paper-icon-button.html","2a3385b29e6e9f71e54e3f2efaccfcd8"],["bower_components/paper-icon-button/test/a11y.html","3e118ae9c88073aa5e352b2d3d95b545"],["bower_components/paper-icon-button/test/basic.html","4454e194f8fb65d38bcbf9650ab19b8f"],["bower_components/paper-icon-button/test/index.html","2c5083d24a61ca51dc7f4e8e55a210f8"],["bower_components/paper-input/all-imports.html","9163c20ddfd457e2918b9a752097c152"],["bower_components/paper-input/demo/index.html","bb41d46cf0fea0a004b98c0c4e5e22cb"],["bower_components/paper-input/demo/ssn-input.html","4431554be4544d2e9ed6a0f124848011"],["bower_components/paper-input/demo/ssn-validator.html","fbbc4fad2d2b4394950b1d1e26940662"],["bower_components/paper-input/index.html","5a4ea8b440283bbeb5820070a537999d"],["bower_components/paper-input/paper-input-addon-behavior.html","92fe877f9231f09bcde5b2298dc0536c"],["bower_components/paper-input/paper-input-behavior.html","9867b3fdc46e27d47a03438f45d1156d"],["bower_components/paper-input/paper-input-char-counter.html","dc680c43b95aa4d14923002a0c9b3776"],["bower_components/paper-input/paper-input-container.html","c0307a4a50846709345a85457134fdfa"],["bower_components/paper-input/paper-input-error.html","47e38ab875f7bf6ca03648842f99d10d"],["bower_components/paper-input/paper-input.html","1f9f47abda58e3a8c970c9f2e5244323"],["bower_components/paper-input/paper-textarea.html","60a821705ca03bd69aab03e25137c5b3"],["bower_components/paper-input/test/index.html","f755e839c3e921199bd6c426082e0ac9"],["bower_components/paper-input/test/letters-only.html","1dd0b9001e2d67a605f5f3f02075c944"],["bower_components/paper-input/test/paper-input-char-counter.html","3ff01efaebcbe9fd8894289b357eab88"],["bower_components/paper-input/test/paper-input-container.html","73565a9a197157ef51b6a5cde2f8216c"],["bower_components/paper-input/test/paper-input-error.html","fed46721cfb1f450095664128e05cf1d"],["bower_components/paper-input/test/paper-input.html","2d0458a4209facc3448a2ee59e31a3ff"],["bower_components/paper-input/test/paper-textarea.html","db23933404fa9992a2100cb8743fefdf"],["bower_components/paper-material/demo/index.html","da9bbf7b7844f956b26f6d2fdc97461e"],["bower_components/paper-material/index.html","c1590824b451030e91c20376c5af0f47"],["bower_components/paper-material/paper-material-shared-styles.html","69c1aafd30b9710e1f852fd677907bf8"],["bower_components/paper-material/paper-material.html","3c53783a2f03a21a4e56ff2548a841dd"],["bower_components/paper-material/test/index.html","3401efcc01720f9177bde8f4851f1f10"],["bower_components/paper-material/test/paper-material.html","2016eb6c862e1513598102055673e60f"],["bower_components/paper-ripple/demo/index.html","38d139805e215ba20838108e2e7d8101"],["bower_components/paper-ripple/index.html","1e14ddb92529ac8c6482c555b8dc6a6f"],["bower_components/paper-ripple/paper-ripple.html","c44508d7d7fb0a611811ef680a77ffc4"],["bower_components/paper-ripple/test/index.html","db1bad5120629b001ccf6ce8fdc8447e"],["bower_components/paper-ripple/test/paper-ripple.html","c1301714d5d8553c88b4166e21537bea"],["bower_components/paper-styles/classes/global.html","93fdfcdc19f0ec3c0625c3e62fa4481d"],["bower_components/paper-styles/classes/shadow-layout.html","097b5a534bdc4cdc904cbf81d56cea8b"],["bower_components/paper-styles/classes/shadow.html","a231a73a8f7ee570839111670f11a45d"],["bower_components/paper-styles/classes/typography.html","e789f7494370bd93e78aa01eeaa2d395"],["bower_components/paper-styles/color.html","c416d52e3dddcb9259e7ffa65c829bcf"],["bower_components/paper-styles/default-theme.html","4c77bbaac8b5b7f92e93286609a5debd"],["bower_components/paper-styles/demo-pages.html","579e044c549f136283213044069c4181"],["bower_components/paper-styles/demo.css","a6afbbe17d5350a006d50bc1ac0bd59e"],["bower_components/paper-styles/demo/index.html","29012ce337653e7417508785d9511834"],["bower_components/paper-styles/index.html","667b76ca73c2a70105443a2151c49b7e"],["bower_components/paper-styles/paper-styles-classes.html","152826dd4271452e7f557b5133a83b95"],["bower_components/paper-styles/paper-styles.html","116f49145f929f7317e9ab63b5e8f8bd"],["bower_components/paper-styles/shadow.html","49d31041d4a6fd2242e57307fa5c709c"],["bower_components/paper-styles/typography.html","1e421eceab74be3206d130933c0768fb"],["bower_components/paper-toast/demo/index.html","06212df252e981c809fed0e4c00b0b74"],["bower_components/paper-toast/index.html","05d0abe0ed8dad3699359b4102400b21"],["bower_components/paper-toast/paper-toast.html","5692284aa7d8b4736301703b3bb22eb5"],["bower_components/paper-toast/test/basic.html","6b5898e4841f8fd6f22c2014889a835a"],["bower_components/paper-toast/test/index.html","002db9b7c212e7aef3a522b9300941d6"],["bower_components/polymer/polymer-micro.html","cc2be85799f71da51d335e9f76843b40"],["bower_components/polymer/polymer-mini.html","c3291af06d88a8200dc5b01e47d1b6b3"],["bower_components/polymer/polymer.html","f0f8459d7cf414a44661b35668a47836"],["bower_components/polymerfire/demo/firebase-auth.html","afdb882dd0e8d8fb5c8d1d6ddfc54838"],["bower_components/polymerfire/demo/index.html","66c7ffec14350842b2403f4a06aa5ef4"],["bower_components/polymerfire/demo/note-app.html","c58c6204418677585b93792cb644808f"],["bower_components/polymerfire/firebase-app.html","f8bff9a7aed5ca03b4f9076bfadb1abb"],["bower_components/polymerfire/firebase-auth.html","a3ca0a5710fe2c95aec507362533f1a4"],["bower_components/polymerfire/firebase-common-behavior.html","36cd02036b3d6cad1550302f7cf69b2c"],["bower_components/polymerfire/firebase-database-behavior.html","250fdc0aa9801a9f3d942241c9905d83"],["bower_components/polymerfire/firebase-document.html","5f500d32c5eff3b1c881b48caeeac669"],["bower_components/polymerfire/firebase-query.html","85ca7e76d8661f70642a415a7533c689"],["bower_components/polymerfire/firebase.html","95b1a25ad5c2a922f5d65bcffb005251"],["bower_components/polymerfire/index.html","7518fcc2069457fffc2e84cb0559c8c4"],["bower_components/polymerfire/polymerfire.html","21a3ad7774c0a9697b91930cd2210aa5"],["bower_components/promise-polyfill/Gruntfile.js","897a309ddd90b9c814067d663f64a01b"],["bower_components/promise-polyfill/Promise-Statics.js","11f24d53d13eab0070af1eef6765de14"],["bower_components/promise-polyfill/Promise.js","bba570eb1a316814fb95ff05a7f1e52e"],["bower_components/promise-polyfill/Promise.min.js","bbdcfdb8c2bd5f2e956d93dbbfd57c79"],["bower_components/promise-polyfill/promise-polyfill-lite.html","8d6461bda5e7958cc9d3f94f2f444900"],["bower_components/promise-polyfill/promise-polyfill.html","5743083b07b1d7b5b30b87b461f21b32"],["bower_components/webcomponentsjs/CustomElements.js","307b37f7a1788c31697b59c1188385d9"],["bower_components/webcomponentsjs/CustomElements.min.js","10480cbc19e5c4ef0127c6e7aa0d96b0"],["bower_components/webcomponentsjs/HTMLImports.js","024b667f081fbd609e9217ebf38857f3"],["bower_components/webcomponentsjs/HTMLImports.min.js","65d8cf6494d79d87ec71e3450941b294"],["bower_components/webcomponentsjs/MutationObserver.js","fb270c356ee7a93d3b24b5ee4ef63fab"],["bower_components/webcomponentsjs/MutationObserver.min.js","5ad9184185a02abde843125cd99a3563"],["bower_components/webcomponentsjs/ShadowDOM.js","6cd6b56e29caa266c3005c8a674b6570"],["bower_components/webcomponentsjs/ShadowDOM.min.js","846cca6d315bedd14510ed41612a7d06"],["bower_components/webcomponentsjs/webcomponents-lite.js","9bd9e8a827ca7ed9ce61425f1a7403f8"],["bower_components/webcomponentsjs/webcomponents-lite.min.js","b0f32ad3c7749c40d486603f31c9d8b1"],["bower_components/webcomponentsjs/webcomponents.js","374a564027fecf40044696642330db85"],["bower_components/webcomponentsjs/webcomponents.min.js","fd5d02f9e1e7855ab9ddb4dd8047702d"],["elements.html","d45c1d851c41f9c4dc84257e3791c560"],["elements/todo-listing.html","7cb5d1f8cb70f23b6988ded430eca791"],["index.html","37106133ff18b3abfdcdd77c0f7185d5"],["js/main.js","f6d06c632899a6145af6b6875c58708f"],["styles.css","f9fb7065fbb4cd3490705bea134da7fb"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-sw-precache-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




