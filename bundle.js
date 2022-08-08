(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(81),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap);"]),i.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n\nbody {\n  font-family: 'Indie Flower';\n  overflow: hidden;\n}\n\nul {\n  list-style: none;\n}\n\n.svg-logo {\n  width: 100px;\n}\n\nnav.navbar {\n  padding: 1em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.title {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n}\n\n.text-head {\n  font-size: 2em;\n  padding-left: 20px;\n}\n\n.big-link {\n  font-size: 2.5em;\n}\n\n.links {\n  text-align: center;\n}\n\n.links li {\n  display: inline;\n  margin-left: 50px;\n}\n\n.img-home img {\n  height: 80vh;\n}\n\n.home {\n  display: flex;\n}\n\n.box-home {\n  background-color: lightgray;\n  border-radius: 15px;\n  text-align: center;\n  padding: 2em;\n  width: 500px;\n}\n\n.left-side .container {\n  align-items: center;\n  text-align: center;\n  width: 70vw;\n}\n\n.container-box {\n  display: flex;\n  justify-content: center;\n  padding: 5em;\n}\n\n.credits a {\n  text-decoration: underline;\n}\n\n.credits {\n  font-size: 2em;\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=a.base?s[0]+a.base:s[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=r(m,a);a.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var s=a(e,r),d=0;d<o.length;d++){var l=t(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={id:a,exports:{}};return e[a](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),r=t.n(a),o=t(569),i=t.n(o),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=t.p+"0e4480074fd0bd9c140f.svg";const v=t.p+"992befddb4afd1f7ccb5.avif";const g=document.getElementById("content");g.appendChild(function(){const e=document.createElement("nav");return e.classList.add("navbar"),function(e){const n=document.createElement("div");n.classList.add("title-div");const t=document.createElement("a");t.href="./index.html",t.classList.add("title");const a=document.createElement("div");a.classList.add("svg-logo");const r=new Image;r.src=h,a.appendChild(r);const o=document.createElement("div"),i=document.createElement("h1");o.classList.add("actual-title"),o.classList.add("text-head"),i.textContent="Sweet Tooth",o.appendChild(i),t.appendChild(o),t.appendChild(a),n.appendChild(t),e.appendChild(n)}(e),function(e){const n=document.createElement("div");n.classList.add("links");const t=document.createElement("ul"),a=["Home","Menu","Contact"];for(let e=0;e<3;e++){let n=document.createElement("li"),r=document.createElement("a");r.href="#",r.classList.add(a[e]);let o=document.createElement("span");o.classList.add("big-link"),o.textContent=a[e],r.appendChild(o),n.appendChild(r),t.appendChild(n)}n.appendChild(t),e.appendChild(n)}(e),e}()),g.appendChild(function(){const e=document.createElement("div");return e.classList.add("home"),function(e){const n=document.createElement("div");n.classList.add("img-home");const t=new Image;t.src=v,n.appendChild(t),e.appendChild(n)}(e),function(e){const n=document.createElement("div");n.classList.add("left-side");const t=document.createElement("div");t.classList.add("container"),function(e){const n=document.createElement("div");n.classList.add("main-heading"),n.classList.add("text-head");const t=["Limited Time!","Try our Strawberry Ice Cream ! !"];for(const e in t){let a=document.createElement("h1");a.textContent=t[e],n.appendChild(a)}e.appendChild(n)}(t),function(e){const n=document.createElement("div"),t=document.createElement("div");n.classList.add("container-box"),t.classList.add("box-home");const a=document.createElement("h1");a.style.fontSize="1.9em",a.textContent="From $15.99 a bowl ! !";const r=document.createElement("p");r.style.fontSize="1.8em",r.textContent="try our exquisite fine ice scream bowl, with 3 ice cream cones, and a handful of strawberries, picked from the finest farms, we will be sure you love it ! !",t.appendChild(a),t.appendChild(r),n.appendChild(t),e.appendChild(n)}(t),function(e){const n=document.createElement("div");n.classList.add("credits"),n.innerHTML='Photo by <a href="https://unsplash.com/@kekse_und_ich?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Svitlana</a> on <a href="https://unsplash.com/images/food/ice-cream?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',e.appendChild(n)}(t),n.appendChild(t),e.appendChild(n)}(e),e}()),document.body.appendChild(g)})()})();