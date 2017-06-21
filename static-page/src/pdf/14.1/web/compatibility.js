'use strict';
"undefined"==typeof PDFJS&&(("undefined"!=typeof window?window:this).PDFJS={}),function(){function e(e,t){return new n(this.slice(e,t))}function t(e,t){arguments.length<2&&(t=0);for(var n=0,r=e.length;r>n;++n,++t)this[t]=255&e[n]}function n(n){var r,i,o;if("number"==typeof n)for(r=[],i=0;n>i;++i)r[i]=0;else if("slice"in n)r=n.slice(0);else for(r=[],i=0,o=n.length;o>i;++i)r[i]=n[i];return r.subarray=e,r.buffer=r,r.byteLength=r.length,r.set=t,"object"==typeof n&&n.buffer&&(r.buffer=n.buffer),r}return"undefined"!=typeof Uint8Array?("undefined"==typeof Uint8Array.prototype.subarray&&(Uint8Array.prototype.subarray=function(e,t){return new Uint8Array(this.slice(e,t))},Float32Array.prototype.subarray=function(e,t){return new Float32Array(this.slice(e,t))}),void("undefined"==typeof Float64Array&&(window.Float64Array=Float32Array))):(window.Uint8Array=n,window.Int8Array=n,window.Uint32Array=n,window.Int32Array=n,window.Uint16Array=n,window.Float32Array=n,void(window.Float64Array=n))}(),function(){window.URL||(window.URL=window.webkitURL)}(),function(){if("undefined"!=typeof Object.defineProperty){var e=!0;try{Object.defineProperty(new Image,"id",{value:"test"});var t=function(){};t.prototype={get id(){}},Object.defineProperty(new t,"id",{value:"",configurable:!0,enumerable:!0,writable:!1})}catch(n){e=!1}if(e)return}Object.defineProperty=function(e,t,n){delete e[t],"get"in n&&e.__defineGetter__(t,n.get),"set"in n&&e.__defineSetter__(t,n.set),"value"in n&&(e.__defineSetter__(t,function(e){return this.__defineGetter__(t,function(){return e}),e}),e[t]=n.value)}}(),function(){var e=XMLHttpRequest.prototype,t=new XMLHttpRequest;return"overrideMimeType"in t||Object.defineProperty(e,"overrideMimeType",{value:function(e){}}),"responseType"in t?void 0:(PDFJS.disableWorker=!0,Object.defineProperty(e,"responseType",{get:function(){return this._responseType||"text"},set:function(e){("text"===e||"arraybuffer"===e)&&(this._responseType=e,"arraybuffer"===e&&"function"==typeof this.overrideMimeType&&this.overrideMimeType("text/plain; charset=x-user-defined"))}}),"undefined"!=typeof VBArray?void Object.defineProperty(e,"response",{get:function(){return"arraybuffer"===this.responseType?new Uint8Array(new VBArray(this.responseBody).toArray()):this.responseText}}):void Object.defineProperty(e,"response",{get:function(){if("arraybuffer"!==this.responseType)return this.responseText;var e,t=this.responseText,n=t.length,r=new Uint8Array(n);for(e=0;n>e;++e)r[e]=255&t.charCodeAt(e);return r.buffer}}))}(),function(){if(!("btoa"in window)){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";window.btoa=function(t){var n,r,i="";for(n=0,r=t.length;r>n;n+=3){var o=255&t.charCodeAt(n),a=255&t.charCodeAt(n+1),s=255&t.charCodeAt(n+2),u=o>>2,f=(3&o)<<4|a>>4,c=r>n+1?(15&a)<<2|s>>6:64,d=r>n+2?63&s:64;i+=e.charAt(u)+e.charAt(f)+e.charAt(c)+e.charAt(d)}return i}}}(),function(){if(!("atob"in window)){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";window.atob=function(t){if(t=t.replace(/=+$/,""),t.length%4===1)throw new Error("bad atob input");for(var n,r,i=0,o=0,a="";r=t.charAt(o++);~r&&(n=i%4?64*n+r:r,i++%4)?a+=String.fromCharCode(255&n>>(-2*i&6)):0)r=e.indexOf(r);return a}}}(),function(){"undefined"==typeof Function.prototype.bind&&(Function.prototype.bind=function(e){var t=this,n=Array.prototype.slice.call(arguments,1),r=function(){var r=n.concat(Array.prototype.slice.call(arguments));return t.apply(e,r)};return r})}(),function(){var e=document.createElement("div");"dataset"in e||Object.defineProperty(HTMLElement.prototype,"dataset",{get:function(){if(this._dataset)return this._dataset;for(var e={},t=0,n=this.attributes.length;n>t;t++){var r=this.attributes[t];if("data-"===r.name.substring(0,5)){var i=r.name.substring(5).replace(/\-([a-z])/g,function(e,t){return t.toUpperCase()});e[i]=r.value}}return Object.defineProperty(this,"_dataset",{value:e,writable:!1,enumerable:!1}),e},enumerable:!0})}(),function(){function e(e,t,n,r){var i=e.className||"",o=i.split(/\s+/g);""===o[0]&&o.shift();var a=o.indexOf(t);return 0>a&&n&&o.push(t),a>=0&&r&&o.splice(a,1),e.className=o.join(" "),a>=0}var t=document.createElement("div");if(!("classList"in t)){var n={add:function(t){e(this.element,t,!0,!1)},contains:function(t){return e(this.element,t,!1,!1)},remove:function(t){e(this.element,t,!1,!0)},toggle:function(t){e(this.element,t,!0,!0)}};Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){if(this._classList)return this._classList;var e=Object.create(n,{element:{value:this,writable:!1,enumerable:!0}});return Object.defineProperty(this,"_classList",{value:e,writable:!1,enumerable:!1}),e},enumerable:!0})}}(),function(){"console"in window?"bind"in console.log||(console.log=function(e){return function(t){return e(t)}}(console.log),console.error=function(e){return function(t){return e(t)}}(console.error),console.warn=function(e){return function(t){return e(t)}}(console.warn)):window.console={log:function(){},error:function(){},warn:function(){}}}(),function(){function e(e){t(e.target)&&e.stopPropagation()}function t(e){return e.disabled||e.parentNode&&t(e.parentNode)}-1!==navigator.userAgent.indexOf("Opera")&&document.addEventListener("click",e,!0)}(),function(){navigator.userAgent.indexOf("Trident")>=0&&(PDFJS.disableCreateObjectURL=!0)}(),function(){"language"in navigator||(PDFJS.locale=navigator.userLanguage||"en-US")}(),function(){var e=Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0,t=/Android\s[0-2][^\d]/,n=t.test(navigator.userAgent),r=/Chrome\/(39|40)\./.test(navigator.userAgent);(e||n||r)&&(PDFJS.disableRange=!0,PDFJS.disableStream=!0)}(),function(){(!history.pushState||navigator.userAgent.indexOf("Android 2.")>=0)&&(PDFJS.disableHistory=!0)}(),function(){if(window.CanvasPixelArray)"function"!=typeof window.CanvasPixelArray.prototype.set&&(window.CanvasPixelArray.prototype.set=function(e){for(var t=0,n=this.length;n>t;t++)this[t]=e[t]});else{var e,t=!1;if(navigator.userAgent.indexOf("Chrom")>=0?(e=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./),t=e&&parseInt(e[2])<21):navigator.userAgent.indexOf("Android")>=0?t=/Android\s[0-4][^\d]/g.test(navigator.userAgent):navigator.userAgent.indexOf("Safari")>=0&&(e=navigator.userAgent.match(/Version\/([0-9]+)\.([0-9]+)\.([0-9]+) Safari\//),t=e&&parseInt(e[1])<6),t){var n=window.CanvasRenderingContext2D.prototype,r=n.createImageData;n.createImageData=function(e,t){var n=r.call(this,e,t);return n.data.set=function(e){for(var t=0,n=this.length;n>t;t++)this[t]=e[t]},n},n=null}}}(),function(){function e(e){window.setTimeout(e,20)}var t=/(iPad|iPhone|iPod)/g.test(navigator.userAgent);return t?void(window.requestAnimationFrame=e):void("requestAnimationFrame"in window||(window.requestAnimationFrame=window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||e))}(),function(){var e=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),t=/Android/g.test(navigator.userAgent);(e||t)&&(PDFJS.maxCanvasPixels=5242880)}(),function(){var e=navigator.userAgent.indexOf("Trident")>=0&&window.parent!==window;e&&(PDFJS.disableFullscreen=!0)}(),function(){"currentScript"in document||Object.defineProperty(document,"currentScript",{get:function(){var e=document.getElementsByTagName("script");return e[e.length-1]},enumerable:!0,configurable:!0})}();