if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,r,c)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return a;case"module":return d;default:return e(i)}}))).then((e=>{const i=c(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/04/24/Hexo博客搭建记录/index.html",revision:"2dda45d80878242c796d3f9f073e2cee"},{url:"2021/04/24/Paper-Reading-Scalable-Scanning-and-Automatic-Classification-of-TLS-Padding-Oracle-Vulnerabilities/index.html",revision:"79d1a89bdb0bcc4f8e0b008760b5b783"},{url:"2021/04/24/TLS-Attacker框架：项目复现/index.html",revision:"1e413f962837dfabfcf6d0862291eea7"},{url:"2021/04/26/「送你一朵小红花」/index.html",revision:"ea5b1c5e3c120447f8c70d04445a25ed"},{url:"2021/04/27/LeetCode/index.html",revision:"033a6721c1ea4af650ac6804962d4d21"},{url:"2021/04/28/国密算法-协议-工控/index.html",revision:"0136724599debd3a0f5b49d5cde2fdd3"},{url:"2021/05/19/SSL-TLS相关/index.html",revision:"4dc10f16ee0ab4a7b2646d0563a18c9d"},{url:"2021/05/20/TLS1-2-RFC-5246文档翻译学习/index.html",revision:"187dc0e139918ad131625041f50cfb91"},{url:"404.html",revision:"2294ed4bd9f31fd6c02053f018000535"},{url:"about/index.html",revision:"01cb9d7e53a9db5b6625b942309f1410"},{url:"archives/2021/04/index.html",revision:"1633f0e8c1d55fc297a29273b5af29c2"},{url:"archives/2021/05/index.html",revision:"b6ad7c2de7f9235142d40e06b4966951"},{url:"archives/2021/index.html",revision:"78d11eb649621a1c917f49512fc6052d"},{url:"archives/index.html",revision:"9631e8a59ec1e6bf217c74f81419d7e3"},{url:"categories/index.html",revision:"6cf98a3c3ba6d6087ac745c6737b2b4a"},{url:"css/index.css",revision:"64137cccab29e157493e5766f7709ec0"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/刘浩存/LHC-cover.jpg",revision:"cdbe0df4c7375b15567a1f68efb15a54"},{url:"images/刘浩存/LHC11.jpg",revision:"ee6f29ec78926188a170288adb7fac71"},{url:"images/刘浩存/LHC12.jpg",revision:"046fd94e989fbbaadef528b840b4e277"},{url:"images/刘浩存/LHC13.jpg",revision:"ca309bac328903f75844068736c42016"},{url:"images/刘浩存/LHC3.jpg",revision:"47d25187ae947fd74f0757d87606a957"},{url:"images/刘浩存/LHC5.jpg",revision:"e87fbb103287d8520bff429c340c5cd9"},{url:"images/刘浩存/LHC8.jpg",revision:"4639479bf9cd0e209d8839241fc52b71"},{url:"images/刘浩存/LHC9.jpg",revision:"d9eef4141a4c45f568bdf5f608dcb8e8"},{url:"images/GMSSL/1-one-cert-one-auth-anlysis.jpg",revision:"0b4ecedb56f71e61e0d4f00aaeebb559"},{url:"images/GMSSL/GM-CipherSuites.png",revision:"26d7830c01784db887656ba447f95507"},{url:"images/GMSSL/GM-SSL-Process.png",revision:"e593fe6ec0e15b508ecc5ce97e2fbf15"},{url:"images/GMSSL/gmssl-cover.png",revision:"322c7c62c44de7a5a59356b4d8cee885"},{url:"images/Hexo-blog-build-record/chrome-F12-Console-errors.jpg",revision:"55e2ab9e0d8d8f59ae20ed1f93ebf182"},{url:"images/LeetCode/cover.jpg",revision:"2eeafdaeb2484ec1519ee2185116244a"},{url:"images/LeetCode/search-insert-position-1.jpg",revision:"8ba7deec2a8048c376642358dd12c6b3"},{url:"images/RFC5246-TLS1.2/TLS1_2-cover.png",revision:"10fa97817a582a662d4ea6c972884f70"},{url:"images/siteicon/android-chrome-144x144.png",revision:"b23d65009a764566e589511251595dd5"},{url:"images/siteicon/android-chrome-192x192.png",revision:"c08b7aa79c03c1ed30fd2b31f3077930"},{url:"images/siteicon/android-chrome-256x256.png",revision:"2f8ef97f783fcfe7881839f9557fbbd7"},{url:"images/siteicon/android-chrome-36x36.png",revision:"0169569928c7ad049093f0a7a95f258d"},{url:"images/siteicon/android-chrome-384x384.png",revision:"bf4fe1916cc12b29c139a1e89503934d"},{url:"images/siteicon/android-chrome-48x48.png",revision:"64cfa5dc88cef73ef22cc22aa3dca6da"},{url:"images/siteicon/android-chrome-512x512.png",revision:"8a9e2c403da70f844c33b73cd8fb1fb0"},{url:"images/siteicon/android-chrome-72x72.png",revision:"76ba561d4238fc4d6aedce48f0601e74"},{url:"images/siteicon/android-chrome-96x96.png",revision:"83362d58800bfeef66ed8b99af2aedeb"},{url:"images/siteicon/apple-touch-icon.png",revision:"d6047ffe11ed5f06b039977f57b349a4"},{url:"images/siteicon/favicon-16x16.png",revision:"4cc96efa0cad0b32a58936b5dcb92880"},{url:"images/siteicon/favicon-32x32.png",revision:"db5a1e266f55a8162d45ed067fc85782"},{url:"images/siteicon/mstile-150x150.png",revision:"ae1e5ae07332159e61fe6e1ba8e09adc"},{url:"images/siteicon/README.html",revision:"ef284a779f6993a4b3afec18ff250d3c"},{url:"images/siteicon/safari-pinned-tab.svg",revision:"c83c635fcb7bbc1817ebcf1d18f6476e"},{url:"images/SSL TLS Related/TLS-cover.jpg",revision:"ffb27b295146cc761417048ddee9232d"},{url:"images/SSL TLS Related/TLS-SSL-cover.png",revision:"506f2a2c629d6403ba808144960ea510"},{url:"images/TLS-Attacker-recurrence/tls-attacker-design.png",revision:"bd931bc3c8beb8a8d7e9e85e7a9b8449"},{url:"images/USS-2020-paper/Figure-1.jpg",revision:"966d1b000a89432aa63d245818586bb0"},{url:"images/USS-2020-paper/Figure-2.jpg",revision:"e2ed7d5ce487dc9ab4568a034d0a6205"},{url:"images/USS-2020-paper/Figure-3.jpg",revision:"2857782b6c8d2bfc72a1404e24770ab5"},{url:"images/USS-2020-paper/Figure-4.jpg",revision:"c7c75c52f8f4e0160fbfdcbf26d3ec8f"},{url:"images/USS-2020-paper/Figure-5.jpg",revision:"57dd46553abaea9c132c2d915f8246ca"},{url:"images/USS-2020-paper/Figure-6.jpg",revision:"410c172c9c3dd07e53af424501a138a5"},{url:"images/USS-2020-paper/Figure-7.jpg",revision:"5090aca3289c0d495743ea25672c223b"},{url:"images/USS-2020-paper/Table-1.jpg",revision:"1e930563f429e7695aa60e94e1c44121"},{url:"images/USS-2020-paper/Table-2-exp.jpg",revision:"74abb7728b2d107241862be6ad2937f3"},{url:"images/USS-2020-paper/Table-2.jpg",revision:"d2da25acca1ee727b7bd3c74a1a89c96"},{url:"images/USS-2020-paper/USS-2020-paper-cover.jpg",revision:"35db7634cc9b1b35c7eb28eb704d52a4"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"index.html",revision:"ea04c3f67a6a59ef2ede87ea86aba9cb"},{url:"js/main.js",revision:"5641b1a6b817df7d81f465c27ed538d9"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"sw-register.js",revision:"a440733a9d1391289eeb31473efd85d9"},{url:"sw.js",revision:"022a13e7c6a3b62d0235d25ab9a00feb"},{url:"tags/algorithm/index.html",revision:"f30635f6b2f32771121163a45b67dc30"},{url:"tags/blog/index.html",revision:"6f566741c0be74a74bb6ff29e1df194d"},{url:"tags/github-project/index.html",revision:"4fc203ec73ef26482edc49cf9c0a83ab"},{url:"tags/index.html",revision:"dd206f6edebb6ceaf95ba0565cfab36c"},{url:"tags/Industrial-control/index.html",revision:"7ebb5242533f2ded662691b24d326164"},{url:"tags/leetcode/index.html",revision:"5fd90592a0f3f9181477173ea9a0c74b"},{url:"tags/movie/index.html",revision:"bd3f7949dbaf0173dbc7ad639adb005e"},{url:"tags/paper/index.html",revision:"448440be1dcf743aabebc86483de412d"},{url:"tags/protocol/index.html",revision:"df739f71b455b6abac9ed29d3b7ecacd"},{url:"tags/RFC6246/index.html",revision:"d501a1f2806b7a770ba0dcc88968d2ba"},{url:"tags/ssl-tls/index.html",revision:"5fda4167ea16a6c7c94ec9f3ada1b4ee"},{url:"tags/TLS1-2/index.html",revision:"b83618d3992808b0051dc72395a7edb9"}],{})}));
//# sourceMappingURL=service-worker.js.map
