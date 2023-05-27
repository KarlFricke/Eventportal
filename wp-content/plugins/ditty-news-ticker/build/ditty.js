(()=>{"use strict";var t=function(){return t=Object.assign||function(t){for(var n,i=1,e=arguments.length;i<e;i++)for(var r in n=arguments[i])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},t.apply(this,arguments)};function n(t,n,i){if(i||2===arguments.length)for(var e,r=0,a=n.length;r<a;r++)!e&&r in n||(e||(e=Array.prototype.slice.call(n,0,r)),e[r]=n[r]);return t.concat(e||Array.prototype.slice.call(n))}function i(t){return Array.prototype.slice.call(t)}function e(t,n){var i=Math.floor(t);return i===n||i+1===n?t:n}function r(){return Date.now()}function a(t,n,i){if(n="data-keen-slider-"+n,null===i)return t.removeAttribute(n);t.setAttribute(n,i||"")}function o(t,n){return n=n||document,"function"==typeof t&&(t=t(n)),Array.isArray(t)?t:"string"==typeof t?i(n.querySelectorAll(t)):t instanceof HTMLElement?[t]:t instanceof NodeList?i(t):[]}function s(t){t.raw&&(t=t.raw),t.cancelable&&!t.defaultPrevented&&t.preventDefault()}function u(t){t.raw&&(t=t.raw),t.stopPropagation&&t.stopPropagation()}function d(){var t=[];return{add:function(n,i,e,r){n.addListener?n.addListener(e):n.addEventListener(i,e,r),t.push([n,i,e,r])},input:function(t,n,i,e){this.add(t,n,function(t){return function(n){n.nativeEvent&&(n=n.nativeEvent);var i=n.changedTouches||[],e=n.targetTouches||[],r=n.detail&&n.detail.x?n.detail:null;return t({id:r?r.identifier?r.identifier:"i":e[0]?e[0]?e[0].identifier:"e":"d",idChanged:r?r.identifier?r.identifier:"i":i[0]?i[0]?i[0].identifier:"e":"d",raw:n,x:r&&r.x?r.x:e[0]?e[0].screenX:r?r.x:n.pageX,y:r&&r.y?r.y:e[0]?e[0].screenY:r?r.y:n.pageY})}}(i),e)},purge:function(){t.forEach((function(t){t[0].removeListener?t[0].removeListener(t[2]):t[0].removeEventListener(t[1],t[2],t[3])})),t=[]}}}function c(t,n,i){return Math.min(Math.max(t,n),i)}function l(t){return(t>0?1:0)-(t<0?1:0)||+t}function f(t){var n=t.getBoundingClientRect();return{height:e(n.height,t.offsetHeight),width:e(n.width,t.offsetWidth)}}function p(t,n,i,e){var r=t&&t[n];return null==r?i:e&&"function"==typeof r?r():r}function v(t){return Math.round(1e6*t)/1e6}function h(t){var i,e,a,o,s,u,d,f,h,m,g,b,k,x,y=1/0,w=[],M=null,T=0;function C(t){H(T+t)}function E(t){var n=A(T+t).abs;return I(n)?n:null}function A(t){var i=Math.floor(Math.abs(v(t/e))),r=v((t%e+e)%e);r===e&&(r=0);var a=l(t),o=d.indexOf(n([],d,!0).reduce((function(t,n){return Math.abs(n-r)<Math.abs(t-r)?n:t}))),s=o;return a<0&&i++,o===u&&(s=0,i+=a>0?1:-1),{abs:s+i*u*a,origin:o,rel:s}}function z(t,n,i){var e;if(n||!_())return L(t,i);if(!I(t))return null;var r=A(null!=i?i:T),a=r.abs,o=t-r.rel,s=a+o;e=L(s);var d=L(s-u*l(o));return(null!==d&&Math.abs(d)<Math.abs(e)||null===e)&&(e=d),v(e)}function L(t,n){if(null==n&&(n=v(T)),!I(t)||null===t)return null;t=Math.round(t);var i=A(n),r=i.abs,a=i.rel,o=i.origin,s=S(t),c=(n%e+e)%e,l=d[o],f=Math.floor((t-(r-a))/u)*e;return v(l-c-l+d[s]+f+(o===u?e:0))}function I(t){return D(t)===t}function D(t){return c(t,h,m)}function _(){return o.loop}function S(t){return(t%u+u)%u}function H(n){var i;i=n-T,w.push({distance:i,timestamp:r()}),w.length>6&&(w=w.slice(-6)),T=v(n);var e=O().abs;if(e!==M){var a=null!==M;M=e,a&&t.emit("slideChanged")}}function O(n){var r=n?null:function(){if(u){var t=_(),n=t?(T%e+e)%e:T,i=(t?T%e:T)-s[0][2],r=0-(i<0&&t?e-Math.abs(i):i),d=0,c=A(T),f=c.abs,p=c.rel,v=s[p][2],y=s.map((function(n,i){var a=r+d;(a<0-n[0]||a>1)&&(a+=(Math.abs(a)>e-1&&t?e:0)*l(-a));var s=i-p,c=l(s),h=s+f;t&&(-1===c&&a>v&&(h+=u),1===c&&a<v&&(h-=u),null!==g&&h<g&&(a+=e),null!==b&&h>b&&(a-=e));var m=a+n[0]+n[1],k=Math.max(a>=0&&m<=1?1:m<0||a>1?0:a<0?Math.min(1,(n[0]+a)/n[0]):(1-a)/n[0],0);return d+=n[0]+n[1],{abs:h,distance:o.rtl?-1*a+1-n[0]:a,portion:k,size:n[0]}}));return f=D(f),p=S(f),{abs:D(f),length:a,max:x,maxIdx:m,min:k,minIdx:h,position:T,progress:t?n/e:T/a,rel:p,slides:y,slidesLength:e}}}();return i.details=r,t.emit("detailsChanged"),r}return i={absToRel:S,add:C,details:null,distToIdx:E,idxToDist:z,init:function(n){if(function(){if(o=t.options,s=(o.trackConfig||[]).map((function(t){return[p(t,"size",1),p(t,"spacing",0),p(t,"origin",0)]})),u=s.length){e=v(s.reduce((function(t,n){return t+n[0]+n[1]}),0));var n,i=u-1;a=v(e+s[0][2]-s[i][0]-s[i][2]-s[i][1]),d=s.reduce((function(t,i){if(!t)return[0];var e=s[t.length-1],r=t[t.length-1]+(e[0]+e[2])+e[1];return r-=i[2],t[t.length-1]>r&&(r=t[t.length-1]),r=v(r),t.push(r),(!n||n<r)&&(f=t.length-1),n=r,t}),null),0===a&&(f=0),d.push(v(e))}}(),!u)return O(!0);var i;!function(){var n=t.options.range,i=t.options.loop;g=h=i?p(i,"min",-1/0):0,b=m=i?p(i,"max",y):f;var e=p(n,"min",null),r=p(n,"max",null);e&&(h=e),r&&(m=r),k=h===-1/0?h:t.track.idxToDist(h||0,!0,0),x=m===y?m:z(m,!0,0),null===r&&(b=m),p(n,"align",!1)&&m!==y&&0===s[S(m)][2]&&(x-=1-s[S(m)][0],m=E(x-T)),k=v(k),x=v(x)}(),i=n,Number(i)===i?C(L(D(n))):O()},to:H,velocity:function(){var t=r(),n=w.reduce((function(n,i){var e=i.distance,r=i.timestamp;return t-r>200||(l(e)!==l(n.distance)&&n.distance&&(n={distance:0,lastTimestamp:0,time:0}),n.time&&(n.distance+=e),n.lastTimestamp&&(n.time+=r-n.lastTimestamp),n.lastTimestamp=r),n}),{distance:0,lastTimestamp:0,time:0});return n.distance/n.time||0}}}function m(t){var n,i,e,r,a,o,s,u;function d(t){return 2*t}function f(t){return c(t,s,u)}function p(t){return 1-Math.pow(1-t,3)}function v(){return e?t.track.velocity():0}function h(t,n){void 0===n&&(n=1e3);var i=147e-9+(t=Math.abs(t))/n;return{dist:Math.pow(t,2)/i,dur:t/i}}function m(){var n=t.track.details;n&&(a=n.min,o=n.max,s=n.minIdx,u=n.maxIdx)}function g(){t.animator.stop()}t.on("updated",m),t.on("optionsChanged",m),t.on("created",m),t.on("dragStarted",(function(){e=!1,g(),n=i=t.track.details.abs})),t.on("dragChecked",(function(){e=!0})),t.on("dragEnded",(function(){var e=t.options.mode;"snap"===e&&function(){var e=t.track,r=t.track.details,s=r.position,u=l(v());(s>o||s<a)&&(u=0);var d=n+u;0===r.slides[e.absToRel(d)].portion&&(d-=u),n!==i&&(d=i),l(e.idxToDist(d,!0))!==u&&(d+=u),d=f(d);var c=e.idxToDist(d,!0);t.animator.start([{distance:c,duration:500,easing:function(t){return 1+--t*t*t*t*t}}])}(),"free"!==e&&"free-snap"!==e||function(){g();var n="free-snap"===t.options.mode,i=t.track,e=v();r=l(e);var s=t.track.details,u=[];if(e||!n){var c=h(e),m=c.dist,b=c.dur;if(b=d(b),m*=r,n){var k=i.idxToDist(i.distToIdx(m),!0);k&&(m=k)}u.push({distance:m,duration:b,easing:p});var x=s.position,y=x+m;if(y<a||y>o){var w=y<a?a-x:o-x,M=0,T=e;if(l(w)===r){var C=Math.min(Math.abs(w)/Math.abs(m),1),E=function(t){return 1-Math.pow(1-t,1/3)}(C)*b;u[0].earlyExit=E,T=e*(1-C)}else u[0].earlyExit=0,M+=w;var A=h(T,100),z=A.dist*r;t.options.rubberband&&(u.push({distance:z,duration:d(A.dur),easing:p}),u.push({distance:-z+M,duration:500,easing:p}))}t.animator.start(u)}else t.moveToIdx(f(s.abs),!0,{duration:500,easing:function(t){return 1+--t*t*t*t*t}})}()})),t.on("dragged",(function(){i=t.track.details.abs}))}function g(t){var n,i,e,r,a,f,p,v,h,m,g,b,k,x,y,w,M,T,C=d();function E(n){if(f&&v===n.id){var o=I(n);if(h){if(!L(n))return z(n);m=o,h=!1,t.emit("dragChecked")}if(w)return m=o;s(n);var d=function(n){if(M===-1/0&&T===1/0)return n;var e=t.track.details,o=e.length,s=e.position,u=c(n,M-s,T-s);if(0===o)return 0;if(!t.options.rubberband)return u;if(s<=T&&s>=M)return n;if(s<M&&i>0||s>T&&i<0)return n;var d=(s<M?s-M:s-T)/o,l=r*o,f=Math.abs(d*l),p=Math.max(0,1-f/a*2);return p*p*n}(p(m-o)/r*e);i=l(d);var k=t.track.details.position;(k>M&&k<T||k===M&&i>0||k===T&&i<0)&&u(n),g+=d,!b&&Math.abs(g*r)>5&&(b=!0),t.track.add(d),m=o,t.emit("dragged")}}function A(n){!f&&t.track.details&&t.track.details.length&&(g=0,f=!0,b=!1,h=!0,v=n.id,L(n),m=I(n),t.emit("dragStarted"))}function z(n){f&&v===n.idChanged&&(f=!1,t.emit("dragEnded"))}function L(t){var n=D(),i=n?t.y:t.x,e=n?t.x:t.y,r=void 0!==k&&void 0!==x&&Math.abs(x-e)<=Math.abs(k-i);return k=i,x=e,r}function I(t){return D()?t.y:t.x}function D(){return t.options.vertical}function _(){r=t.size,a=D()?window.innerHeight:window.innerWidth;var n=t.track.details;n&&(M=n.min,T=n.max)}function S(t){b&&(u(t),s(t))}function H(){if(C.purge(),t.options.drag&&!t.options.disabled){var i;i=t.options.dragSpeed||1,p="function"==typeof i?i:function(t){return t*i},e=t.options.rtl?-1:1,_(),n=t.container,function(){var t="data-keen-slider-clickable";o("[".concat(t,"]:not([").concat(t,"=false])"),n).map((function(t){C.add(t,"dragstart",u),C.add(t,"mousedown",u),C.add(t,"touchstart",u)}))}(),C.add(n,"dragstart",(function(t){s(t)})),C.add(n,"click",S,{capture:!0}),C.input(n,"ksDragStart",A),C.input(n,"ksDrag",E),C.input(n,"ksDragEnd",z),C.input(n,"mousedown",A),C.input(n,"mousemove",E),C.input(n,"mouseleave",z),C.input(n,"mouseup",z),C.input(n,"touchstart",A,{passive:!0}),C.input(n,"touchmove",E,{passive:!1}),C.input(n,"touchend",z),C.input(n,"touchcancel",z),C.add(window,"wheel",(function(t){f&&s(t)}));var r="data-keen-slider-scrollable";o("[".concat(r,"]:not([").concat(r,"=false])"),t.container).map((function(t){return function(t){var n;C.input(t,"touchstart",(function(t){n=I(t),w=!0,y=!0}),{passive:!0}),C.input(t,"touchmove",(function(i){var e=D(),r=e?t.scrollHeight-t.clientHeight:t.scrollWidth-t.clientWidth,a=n-I(i),o=e?t.scrollTop:t.scrollLeft,u=e&&"scroll"===t.style.overflowY||!e&&"scroll"===t.style.overflowX;if(n=I(i),(a<0&&o>0||a>0&&o<r)&&y&&u)return w=!0;y=!1,s(i),w=!1})),C.input(t,"touchend",(function(){w=!1}))}(t)}))}}t.on("updated",_),t.on("optionsChanged",H),t.on("created",H),t.on("destroyed",C.purge)}function b(t){var n,i,e=null;function r(n,i,e){t.animator.active?o(n,i,e):requestAnimationFrame((function(){return o(n,i,e)}))}function a(){r(!1,!1,i)}function o(i,r,a){var o=0,s=t.size,c=t.track.details;if(c&&n){var l=c.slides;n.forEach((function(t,n){if(i)!e&&r&&u(t,null,a),d(t,null,a);else{if(!l[n])return;var c=l[n].size*s;!e&&r&&u(t,c,a),d(t,l[n].distance*s-o,a),o+=c}}))}}function s(n){return"performance"===t.options.renderMode?Math.round(n):n}function u(t,n,i){var e=i?"height":"width";null!==n&&(n=s(n)+"px"),t.style["min-"+e]=n,t.style["max-"+e]=n}function d(t,n,i){if(null!==n){n=s(n);var e=i?n:0;n="translate3d(".concat(i?0:n,"px, ").concat(e,"px, 0)")}t.style.transform=n,t.style["-webkit-transform"]=n}function c(){n&&(o(!0,!0,i),n=null),t.on("detailsChanged",a,!0)}function l(){r(!1,!0,i)}function f(){c(),i=t.options.vertical,t.options.disabled||"custom"===t.options.renderMode||(e="auto"===p(t.options.slides,"perView",null),t.on("detailsChanged",a),(n=t.slides).length&&l())}t.on("created",f),t.on("optionsChanged",f),t.on("beforeOptionsChanged",(function(){c()})),t.on("updated",l),t.on("destroyed",c)}function k(n,i){return function(e){var r,s,u,c,l,v=d();function h(t){var n;a(e.container,"reverse","rtl"!==(n=e.container,window.getComputedStyle(n,null).getPropertyValue("direction"))||t?null:""),a(e.container,"v",e.options.vertical&&!t?"":null),a(e.container,"disabled",e.options.disabled&&!t?"":null)}function m(){g()&&w()}function g(){var n=null;if(c.forEach((function(t){t.matches&&(n=t.__media)})),n===r)return!1;r||e.emit("beforeOptionsChanged"),r=n;var i=n?u.breakpoints[n]:u;return e.options=t(t({},u),i),h(),A(),z(),T(),!0}function b(t){var n=f(t);return(e.options.vertical?n.height:n.width)/e.size||1}function k(){return e.options.trackConfig.length}function x(n){for(var a in r=!1,u=t(t({},i),n),v.purge(),s=e.size,c=[],u.breakpoints||[]){var o=window.matchMedia(a);o.__media=a,c.push(o),v.add(o,"change",m)}v.add(window,"orientationchange",E),v.add(window,"resize",C),g()}function y(t){e.animator.stop();var n=e.track.details;e.track.init(null!=t?t:n?n.abs:0)}function w(t){y(t),e.emit("optionsChanged")}function M(t,n){if(t)return x(t),void w(n);A(),z();var i=k();T(),k()!==i?w(n):y(n),e.emit("updated")}function T(){var t=e.options.slides;if("function"==typeof t)return e.options.trackConfig=t(e.size,e.slides);for(var n=e.slides,i=n.length,r="number"==typeof t?t:p(t,"number",i,!0),a=[],o=p(t,"perView",1,!0),s=p(t,"spacing",0,!0)/e.size||0,u="auto"===o?s:s/o,d=p(t,"origin","auto"),c=0,l=0;l<r;l++){var f="auto"===o?b(n[l]):1/o-s+u,v="center"===d?.5-f/2:"auto"===d?0:d;a.push({origin:v,size:f,spacing:s}),c+=f}if(c+=s*(r-1),"auto"===d&&!e.options.loop&&1!==o){var h=0;a.map((function(t){var n=c-h;return h+=t.size+s,n>=1||(t.origin=1-n-(c>1?0:1-c)),t}))}e.options.trackConfig=a}function C(){A();var t=e.size;e.options.disabled||t===s||(s=t,M())}function E(){C(),setTimeout(C,500),setTimeout(C,2e3)}function A(){var t=f(e.container);e.size=(e.options.vertical?t.height:t.width)||1}function z(){e.slides=o(e.options.selector,e.container)}e.container=(l=o(n,document)).length?l[0]:null,e.destroy=function(){v.purge(),e.emit("destroyed"),h(!0)},e.prev=function(){e.moveToIdx(e.track.details.abs-1,!0)},e.next=function(){e.moveToIdx(e.track.details.abs+1,!0)},e.update=M,x(e.options)}}var x=function(t,i,e){try{return function(t,n){var i,e={};return i={emit:function(t){e[t]&&e[t].forEach((function(t){t(i)}));var n=i.options&&i.options[t];n&&n(i)},moveToIdx:function(t,n,e){var r=i.track.idxToDist(t,n);if(r){var a=i.options.defaultAnimation;i.animator.start([{distance:r,duration:p(e||a,"duration",500),easing:p(e||a,"easing",(function(t){return 1+--t*t*t*t*t}))}])}},on:function(t,n,i){void 0===i&&(i=!1),e[t]||(e[t]=[]);var r=e[t].indexOf(n);r>-1?i&&delete e[t][r]:i||e[t].push(n)},options:t},function(){if(i.track=h(i),i.animator=function(t){var n,i,e,r,a,o;function s(n){o||(o=n),u(!0);var a=n-o;a>e&&(a=e);var l=r[i];if(l[3]<a)return i++,s(n);var f=l[2],p=l[4],v=l[0],h=l[1]*(0,l[5])(0===p?1:(a-f)/p);if(h&&t.track.to(v+h),a<e)return c();o=null,u(!1),d(null),t.emit("animationEnded")}function u(t){n.active=t}function d(t){n.targetIdx=t}function c(){var t;t=s,a=window.requestAnimationFrame(t)}function l(){var n;n=a,window.cancelAnimationFrame(n),u(!1),d(null),o&&t.emit("animationStopped"),o=null}return n={active:!1,start:function(n){if(l(),t.track.details){var a=0,o=t.track.details.position;i=0,e=0,r=n.map((function(t){var n,i=Number(o),r=null!==(n=t.earlyExit)&&void 0!==n?n:t.duration,s=t.easing,u=t.distance*s(r/t.duration)||0;o+=u;var d=e;return e+=r,a+=u,[i,t.distance,d,e,t.duration,s]})),d(t.track.distToIdx(a)),c(),t.emit("animationStarted")}},stop:l,targetIdx:null}}(i),n)for(var t=0,e=n;t<e.length;t++)(0,e[t])(i);i.track.init(i.options.initial||0),i.emit("created")}(),i}(i,n([k(t,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),b,g,m],e||[],!0))}catch(t){console.error(t)}};ditty.utils={DittyRotator:class{constructor(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.element=t,this.element.classList.contains("keen-slider")||this.element.classList.add("keen-slider"),this.slides=Array.from(this.element.querySelectorAll(".keen-slider__slide")),this.options={transitionType:"fade",transitionEasing:"ease",transitionTiming:300,staticHeight:!1,dynamicHeight:!1,heightAnimationSpeed:300,heightEasing:"ease",arrowNavigation:!1,bulletNavigation:!1,...n},this.slider=null,this.init()}init(){this.options.slides&&this.options.slides.forEach((t=>{const n=document.createElement("div");n.classList.add("keen-slider__slide"),n.innerHTML=t,this.element.appendChild(n)})),this.slider=new x(this.element,{loop:!0,slides:{perView:1,origin:0},defaultAnimation:{duration:1e3}},[]),this.slider.update()}update(){this.slider.update()}size(t){this.slider.size=t}replaceAllSlides(t){if(t){const n=t.map((t=>{const n=document.createElement("div");return n.classList.add("keen-slider__slide"),n.innerHTML=t,n}));this.slider.update({slides:n},0)}}slideTo(t){console.log("index",t),this.slider.update(),this.slider.moveToIdx(t)}}}})();