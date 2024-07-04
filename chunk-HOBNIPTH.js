import{Db as y2,Fb as v1,P as i1,Pa as l1,Vc as V1,Z as w2,_ as n1,gb as o2,hb as o1,ja as f1,jb as t1,ob as m1,pa as _,pb as H1,qb as z1}from"./chunk-PJYFTTRQ.js";function h1(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function t(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?h1(Object(e),!0).forEach(function(r){C(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):h1(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function L2(c){"@babel/helpers - typeof";return L2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},L2(c)}function p3(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function M1(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function C3(c,a,e){return a&&M1(c.prototype,a),e&&M1(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function C(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function _2(c,a){return L3(c)||g3(c,a)||q1(c,a)||N3()}function n2(c){return u3(c)||d3(c)||q1(c)||x3()}function u3(c){if(Array.isArray(c))return F2(c)}function L3(c){if(Array.isArray(c))return c}function d3(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function g3(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,i=!1,n,f;try{for(e=e.call(c);!(s=(n=e.next()).done)&&(r.push(n.value),!(a&&r.length===a));s=!0);}catch(l){i=!0,f=l}finally{try{!s&&e.return!=null&&e.return()}finally{if(i)throw f}}return r}}function q1(c,a){if(c){if(typeof c=="string")return F2(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return F2(c,a)}}function F2(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function x3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var p1=function(){},X2={},W1={},G1=null,j1={mark:p1,measure:p1};try{typeof window<"u"&&(X2=window),typeof document<"u"&&(W1=document),typeof MutationObserver<"u"&&(G1=MutationObserver),typeof performance<"u"&&(j1=performance)}catch{}var b3=X2.navigator||{},C1=b3.userAgent,u1=C1===void 0?"":C1,R=X2,M=W1,L1=G1,t2=j1,s6=!!R.document,B=!!M.documentElement&&!!M.head&&typeof M.addEventListener=="function"&&typeof M.createElement=="function",_1=~u1.indexOf("MSIE")||~u1.indexOf("Trident/"),m2,H2,z2,v2,V2,A="___FONT_AWESOME___",D2=16,X1="fa",Y1="svg-inline--fa",G="data-fa-i2svg",R2="data-fa-pseudo-element",S3="data-fa-pseudo-element-pending",Y2="data-prefix",$2="data-icon",d1="fontawesome-i2svg",k3="async",w3=["HTML","HEAD","STYLE","SCRIPT"],$1=function(){try{return!0}catch{return!1}}(),h="classic",p="sharp",Q2=[h,p];function f2(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[h]}})}var a2=f2((m2={},C(m2,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),C(m2,p,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),m2)),e2=f2((H2={},C(H2,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),C(H2,p,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),H2)),r2=f2((z2={},C(z2,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),C(z2,p,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),z2)),y3=f2((v2={},C(v2,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),C(v2,p,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),v2)),A3=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Q1="fa-layers-text",P3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,T3=f2((V2={},C(V2,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),C(V2,p,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),V2)),K1=[1,2,3,4,5,6,7,8,9,10],B3=K1.concat([11,12,13,14,15,16,17,18,19,20]),F3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],q={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},s2=new Set;Object.keys(e2[h]).map(s2.add.bind(s2));Object.keys(e2[p]).map(s2.add.bind(s2));var D3=[].concat(Q2,n2(s2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",q.GROUP,q.SWAP_OPACITY,q.PRIMARY,q.SECONDARY]).concat(K1.map(function(c){return"".concat(c,"x")})).concat(B3.map(function(c){return"w-".concat(c)})),Z=R.FontAwesomeConfig||{};function R3(c){var a=M.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function E3(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}M&&typeof M.querySelector=="function"&&(g1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],g1.forEach(function(c){var a=_2(c,2),e=a[0],r=a[1],s=E3(R3(e));s!=null&&(Z[r]=s)}));var g1,J1={styleDefault:"solid",familyDefault:"classic",cssPrefix:X1,replacementClass:Y1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Z.familyPrefix&&(Z.cssPrefix=Z.familyPrefix);var Q=t(t({},J1),Z);Q.autoReplaceSvg||(Q.observeMutations=!1);var H={};Object.keys(J1).forEach(function(c){Object.defineProperty(H,c,{enumerable:!0,set:function(e){Q[c]=e,c2.forEach(function(r){return r(H)})},get:function(){return Q[c]}})});Object.defineProperty(H,"familyPrefix",{enumerable:!0,set:function(a){Q.cssPrefix=a,c2.forEach(function(e){return e(H)})},get:function(){return Q.cssPrefix}});R.FontAwesomeConfig=H;var c2=[];function U3(c){return c2.push(c),function(){c2.splice(c2.indexOf(c),1)}}var D=D2,y={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function I3(c){if(!(!c||!B)){var a=M.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=M.head.childNodes,r=null,s=e.length-1;s>-1;s--){var i=e[s],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=i)}return M.head.insertBefore(a,r),c}}var O3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function i2(){for(var c=12,a="";c-- >0;)a+=O3[Math.random()*62|0];return a}function K(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function K2(c){return c.classList?K(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function Z1(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function q3(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(Z1(c[e]),'" ')},"").trim()}function x2(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function J2(c){return c.size!==y.size||c.x!==y.x||c.y!==y.y||c.rotate!==y.rotate||c.flipX||c.flipY}function W3(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(i," ").concat(n," ").concat(f)},m={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:m}}function G3(c){var a=c.transform,e=c.width,r=e===void 0?D2:e,s=c.height,i=s===void 0?D2:s,n=c.startCentered,f=n===void 0?!1:n,l="";return f&&_1?l+="translate(".concat(a.x/D-r/2,"em, ").concat(a.y/D-i/2,"em) "):f?l+="translate(calc(-50% + ".concat(a.x/D,"em), calc(-50% + ").concat(a.y/D,"em)) "):l+="translate(".concat(a.x/D,"em, ").concat(a.y/D,"em) "),l+="scale(".concat(a.size/D*(a.flipX?-1:1),", ").concat(a.size/D*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var j3=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function c3(){var c=X1,a=Y1,e=H.cssPrefix,r=H.replacementClass,s=j3;if(e!==c||r!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");s=s.replace(i,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(f,".".concat(r))}return s}var x1=!1;function A2(){H.autoAddCss&&!x1&&(I3(c3()),x1=!0)}var _3={mixout:function(){return{dom:{css:c3,insertCss:A2}}},hooks:function(){return{beforeDOMElementCreation:function(){A2()},beforeI2svg:function(){A2()}}}},P=R||{};P[A]||(P[A]={});P[A].styles||(P[A].styles={});P[A].hooks||(P[A].hooks={});P[A].shims||(P[A].shims=[]);var S=P[A],a3=[],X3=function c(){M.removeEventListener("DOMContentLoaded",c),d2=1,a3.map(function(a){return a()})},d2=!1;B&&(d2=(M.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(M.readyState),d2||M.addEventListener("DOMContentLoaded",X3));function Y3(c){B&&(d2?setTimeout(c,0):a3.push(c))}function l2(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,i=s===void 0?[]:s;return typeof c=="string"?Z1(c):"<".concat(a," ").concat(q3(r),">").concat(i.map(l2).join(""),"</").concat(a,">")}function N1(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var $3=function(a,e){return function(r,s,i,n){return a.call(e,r,s,i,n)}},P2=function(a,e,r,s){var i=Object.keys(a),n=i.length,f=s!==void 0?$3(e,s):e,l,m,o;for(r===void 0?(l=1,o=a[i[0]]):(l=0,o=r);l<n;l++)m=i[l],o=f(o,a[m],m,a);return o};function Q3(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((s&1023)<<10)+(i&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function E2(c){var a=Q3(c);return a.length===1?a[0].toString(16):null}function K3(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function b1(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function U2(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,i=b1(a);typeof S.hooks.addPack=="function"&&!s?S.hooks.addPack(c,b1(a)):S.styles[c]=t(t({},S.styles[c]||{}),i),c==="fas"&&U2("fa",a)}var h2,M2,p2,X=S.styles,J3=S.shims,Z3=(h2={},C(h2,h,Object.values(r2[h])),C(h2,p,Object.values(r2[p])),h2),Z2=null,e3={},r3={},s3={},i3={},n3={},c4=(M2={},C(M2,h,Object.keys(a2[h])),C(M2,p,Object.keys(a2[p])),M2);function a4(c){return~D3.indexOf(c)}function e4(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!a4(s)?s:null}var f3=function(){var a=function(i){return P2(X,function(n,f,l){return n[l]=P2(f,i,{}),n},{})};e3=a(function(s,i,n){if(i[3]&&(s[i[3]]=n),i[2]){var f=i[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){s[l.toString(16)]=n})}return s}),r3=a(function(s,i,n){if(s[n]=n,i[2]){var f=i[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){s[l]=n})}return s}),n3=a(function(s,i,n){var f=i[2];return s[n]=n,f.forEach(function(l){s[l]=n}),s});var e="far"in X||H.autoFetchSvg,r=P2(J3,function(s,i){var n=i[0],f=i[1],l=i[2];return f==="far"&&!e&&(f="fas"),typeof n=="string"&&(s.names[n]={prefix:f,iconName:l}),typeof n=="number"&&(s.unicodes[n.toString(16)]={prefix:f,iconName:l}),s},{names:{},unicodes:{}});s3=r.names,i3=r.unicodes,Z2=N2(H.styleDefault,{family:H.familyDefault})};U3(function(c){Z2=N2(c.styleDefault,{family:H.familyDefault})});f3();function c1(c,a){return(e3[c]||{})[a]}function r4(c,a){return(r3[c]||{})[a]}function W(c,a){return(n3[c]||{})[a]}function l3(c){return s3[c]||{prefix:null,iconName:null}}function s4(c){var a=i3[c],e=c1("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function E(){return Z2}var a1=function(){return{prefix:null,iconName:null,rest:[]}};function N2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?h:e,s=a2[r][c],i=e2[r][c]||e2[r][s],n=c in S.styles?c:null;return i||n||null}var S1=(p2={},C(p2,h,Object.keys(r2[h])),C(p2,p,Object.keys(r2[p])),p2);function b2(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,i=(a={},C(a,h,"".concat(H.cssPrefix,"-").concat(h)),C(a,p,"".concat(H.cssPrefix,"-").concat(p)),a),n=null,f=h;(c.includes(i[h])||c.some(function(m){return S1[h].includes(m)}))&&(f=h),(c.includes(i[p])||c.some(function(m){return S1[p].includes(m)}))&&(f=p);var l=c.reduce(function(m,o){var z=e4(H.cssPrefix,o);if(X[o]?(o=Z3[f].includes(o)?y3[f][o]:o,n=o,m.prefix=o):c4[f].indexOf(o)>-1?(n=o,m.prefix=N2(o,{family:f})):z?m.iconName=z:o!==H.replacementClass&&o!==i[h]&&o!==i[p]&&m.rest.push(o),!s&&m.prefix&&m.iconName){var v=n==="fa"?l3(m.iconName):{},V=W(m.prefix,m.iconName);v.prefix&&(n=null),m.iconName=v.iconName||V||m.iconName,m.prefix=v.prefix||m.prefix,m.prefix==="far"&&!X.far&&X.fas&&!H.autoFetchSvg&&(m.prefix="fas")}return m},a1());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===p&&(X.fass||H.autoFetchSvg)&&(l.prefix="fass",l.iconName=W(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||n==="fa")&&(l.prefix=E()||"fas"),l}var i4=function(){function c(){p3(this,c),this.definitions={}}return C3(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];var n=s.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){e.definitions[f]=t(t({},e.definitions[f]||{}),n[f]),U2(f,n[f]);var l=r2[h][f];l&&U2(l,n[f]),f3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(i){var n=s[i],f=n.prefix,l=n.iconName,m=n.icon,o=m[2];e[f]||(e[f]={}),o.length>0&&o.forEach(function(z){typeof z=="string"&&(e[f][z]=m)}),e[f][l]=m}),e}}]),c}(),k1=[],Y={},$={},n4=Object.keys($);function f4(c,a){var e=a.mixoutsTo;return k1=c,Y={},Object.keys($).forEach(function(r){n4.indexOf(r)===-1&&delete $[r]}),k1.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(n){typeof s[n]=="function"&&(e[n]=s[n]),L2(s[n])==="object"&&Object.keys(s[n]).forEach(function(f){e[n]||(e[n]={}),e[n][f]=s[n][f]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(n){Y[n]||(Y[n]=[]),Y[n].push(i[n])})}r.provides&&r.provides($)}),e}function I2(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var i=Y[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(r))}),a}function j(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=Y[c]||[];s.forEach(function(i){i.apply(null,e)})}function T(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return $[c]?$[c].apply(null,a):void 0}function O2(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||E();if(a)return a=W(e,a)||a,N1(o3.definitions,e,a)||N1(S.styles,e,a)}var o3=new i4,l4=function(){H.autoReplaceSvg=!1,H.observeMutations=!1,j("noAuto")},o4={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return B?(j("beforeI2svg",a),T("pseudoElements2svg",a),T("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,Y3(function(){m4({autoReplaceSvgRoot:e}),j("watch",a)})}},t4={icon:function(a){if(a===null)return null;if(L2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:W(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=N2(a[0]);return{prefix:r,iconName:W(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(H.cssPrefix,"-"))>-1||a.match(A3))){var s=b2(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||E(),iconName:W(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var i=E();return{prefix:i,iconName:W(i,a)||a}}}},x={noAuto:l4,config:H,dom:o4,parse:t4,library:o3,findIconDefinition:O2,toHtml:l2},m4=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?M:e;(Object.keys(S.styles).length>0||H.autoFetchSvg)&&B&&H.autoReplaceSvg&&x.dom.i2svg({node:r})};function S2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return l2(r)})}}),Object.defineProperty(c,"node",{get:function(){if(B){var r=M.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function H4(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,i=c.styles,n=c.transform;if(J2(n)&&e.found&&!r.found){var f=e.width,l=e.height,m={x:f/l/2,y:.5};s.style=x2(t(t({},i),{},{"transform-origin":"".concat(m.x+n.x/16,"em ").concat(m.y+n.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function z4(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(H.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:t(t({},s),{},{id:n}),children:r}]}]}function e1(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,i=c.iconName,n=c.transform,f=c.symbol,l=c.title,m=c.maskId,o=c.titleId,z=c.extra,v=c.watchable,V=v===void 0?!1:v,L=r.found?r:e,N=L.width,b=L.height,k=s==="fak",u=[H.replacementClass,i?"".concat(H.cssPrefix,"-").concat(i):""].filter(function(F){return z.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(z.classes).join(" "),d={children:[],attributes:t(t({},z.attributes),{},{"data-prefix":s,"data-icon":i,class:u,role:z.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(b)})},w=k&&!~z.classes.indexOf("fa-fw")?{width:"".concat(N/b*16*.0625,"em")}:{};V&&(d.attributes[G]=""),l&&(d.children.push({tag:"title",attributes:{id:d.attributes["aria-labelledby"]||"title-".concat(o||i2())},children:[l]}),delete d.attributes.title);var g=t(t({},d),{},{prefix:s,iconName:i,main:e,mask:r,maskId:m,transform:n,symbol:f,styles:t(t({},w),z.styles)}),I=r.found&&e.found?T("generateAbstractMask",g)||{children:[],attributes:{}}:T("generateAbstractIcon",g)||{children:[],attributes:{}},O=I.children,k2=I.attributes;return g.children=O,g.attributes=k2,f?z4(g):H4(g)}function w1(c){var a=c.content,e=c.width,r=c.height,s=c.transform,i=c.title,n=c.extra,f=c.watchable,l=f===void 0?!1:f,m=t(t(t({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});l&&(m[G]="");var o=t({},n.styles);J2(s)&&(o.transform=G3({transform:s,startCentered:!0,width:e,height:r}),o["-webkit-transform"]=o.transform);var z=x2(o);z.length>0&&(m.style=z);var v=[];return v.push({tag:"span",attributes:m,children:[a]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function v4(c){var a=c.content,e=c.title,r=c.extra,s=t(t(t({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),i=x2(r.styles);i.length>0&&(s.style=i);var n=[];return n.push({tag:"span",attributes:s,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var T2=S.styles;function q2(c){var a=c[0],e=c[1],r=c.slice(4),s=_2(r,1),i=s[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(H.cssPrefix,"-").concat(q.GROUP)},children:[{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(q.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(q.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:n}}var V4={found:!1,width:512,height:512};function h4(c,a){!$1&&!H.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function W2(c,a){var e=a;return a==="fa"&&H.styleDefault!==null&&(a=E()),new Promise(function(r,s){var i={found:!1,width:512,height:512,icon:T("missingIconAbstract")||{}};if(e==="fa"){var n=l3(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&T2[a]&&T2[a][c]){var f=T2[a][c];return r(q2(f))}h4(c,a),r(t(t({},V4),{},{icon:H.showMissingIcons&&c?T("missingIconAbstract")||{}:{}}))})}var y1=function(){},G2=H.measurePerformance&&t2&&t2.mark&&t2.measure?t2:{mark:y1,measure:y1},J='FA "6.5.2"',M4=function(a){return G2.mark("".concat(J," ").concat(a," begins")),function(){return t3(a)}},t3=function(a){G2.mark("".concat(J," ").concat(a," ends")),G2.measure("".concat(J," ").concat(a),"".concat(J," ").concat(a," begins"),"".concat(J," ").concat(a," ends"))},r1={begin:M4,end:t3},C2=function(){};function A1(c){var a=c.getAttribute?c.getAttribute(G):null;return typeof a=="string"}function p4(c){var a=c.getAttribute?c.getAttribute(Y2):null,e=c.getAttribute?c.getAttribute($2):null;return a&&e}function C4(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(H.replacementClass)}function u4(){if(H.autoReplaceSvg===!0)return u2.replace;var c=u2[H.autoReplaceSvg];return c||u2.replace}function L4(c){return M.createElementNS("http://www.w3.org/2000/svg",c)}function d4(c){return M.createElement(c)}function m3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?L4:d4:e;if(typeof c=="string")return M.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(n){s.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){s.appendChild(m3(n,{ceFn:r}))}),s}function g4(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var u2={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(m3(s),e)}),e.getAttribute(G)===null&&H.keepOriginalSource){var r=M.createComment(g4(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~K2(e).indexOf(H.replacementClass))return u2.replace(a);var s=new RegExp("".concat(H.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(f,l){return l===H.replacementClass||l.match(s)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var n=r.map(function(f){return l2(f)}).join(`
`);e.setAttribute(G,""),e.innerHTML=n}};function P1(c){c()}function H3(c,a){var e=typeof a=="function"?a:C2;if(c.length===0)e();else{var r=P1;H.mutateApproach===k3&&(r=R.requestAnimationFrame||P1),r(function(){var s=u4(),i=r1.begin("mutate");c.map(s),i(),e()})}}var s1=!1;function z3(){s1=!0}function j2(){s1=!1}var g2=null;function T1(c){if(L1&&H.observeMutations){var a=c.treeCallback,e=a===void 0?C2:a,r=c.nodeCallback,s=r===void 0?C2:r,i=c.pseudoElementsCallback,n=i===void 0?C2:i,f=c.observeMutationsRoot,l=f===void 0?M:f;g2=new L1(function(m){if(!s1){var o=E();K(m).forEach(function(z){if(z.type==="childList"&&z.addedNodes.length>0&&!A1(z.addedNodes[0])&&(H.searchPseudoElements&&n(z.target),e(z.target)),z.type==="attributes"&&z.target.parentNode&&H.searchPseudoElements&&n(z.target.parentNode),z.type==="attributes"&&A1(z.target)&&~F3.indexOf(z.attributeName))if(z.attributeName==="class"&&p4(z.target)){var v=b2(K2(z.target)),V=v.prefix,L=v.iconName;z.target.setAttribute(Y2,V||o),L&&z.target.setAttribute($2,L)}else C4(z.target)&&s(z.target)})}}),B&&g2.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function x4(){g2&&g2.disconnect()}function N4(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var i=s.split(":"),n=i[0],f=i.slice(1);return n&&f.length>0&&(r[n]=f.join(":").trim()),r},{})),e}function b4(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=b2(K2(c));return s.prefix||(s.prefix=E()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=r4(s.prefix,c.innerText)||c1(s.prefix,E2(c.innerText))),!s.iconName&&H.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function S4(c){var a=K(c.attributes).reduce(function(s,i){return s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return H.autoA11y&&(e?a["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(r||i2()):(a["aria-hidden"]="true",a.focusable="false")),a}function k4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:y,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function B1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=b4(c),r=e.iconName,s=e.prefix,i=e.rest,n=S4(c),f=I2("parseNodeAttributes",{},c),l=a.styleParser?N4(c):[];return t({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:y,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:n}},f)}var w4=S.styles;function v3(c){var a=H.autoReplaceSvg==="nest"?B1(c,{styleParser:!1}):B1(c);return~a.extra.classes.indexOf(Q1)?T("generateLayersText",c,a):T("generateSvgReplacementMutation",c,a)}var U=new Set;Q2.map(function(c){U.add("fa-".concat(c))});Object.keys(a2[h]).map(U.add.bind(U));Object.keys(a2[p]).map(U.add.bind(U));U=n2(U);function F1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!B)return Promise.resolve();var e=M.documentElement.classList,r=function(z){return e.add("".concat(d1,"-").concat(z))},s=function(z){return e.remove("".concat(d1,"-").concat(z))},i=H.autoFetchSvg?U:Q2.map(function(o){return"fa-".concat(o)}).concat(Object.keys(w4));i.includes("fa")||i.push("fa");var n=[".".concat(Q1,":not([").concat(G,"])")].concat(i.map(function(o){return".".concat(o,":not([").concat(G,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=K(c.querySelectorAll(n))}catch{}if(f.length>0)r("pending"),s("complete");else return Promise.resolve();var l=r1.begin("onTree"),m=f.reduce(function(o,z){try{var v=v3(z);v&&o.push(v)}catch(V){$1||V.name==="MissingIcon"&&console.error(V)}return o},[]);return new Promise(function(o,z){Promise.all(m).then(function(v){H3(v,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),l(),o()})}).catch(function(v){l(),z(v)})})}function y4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;v3(c).then(function(e){e&&H3([e],a)})}function A4(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:O2(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:O2(s||{})),c(r,t(t({},e),{},{mask:s}))}}var P4=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?y:r,i=e.symbol,n=i===void 0?!1:i,f=e.mask,l=f===void 0?null:f,m=e.maskId,o=m===void 0?null:m,z=e.title,v=z===void 0?null:z,V=e.titleId,L=V===void 0?null:V,N=e.classes,b=N===void 0?[]:N,k=e.attributes,u=k===void 0?{}:k,d=e.styles,w=d===void 0?{}:d;if(a){var g=a.prefix,I=a.iconName,O=a.icon;return S2(t({type:"icon"},a),function(){return j("beforeDOMElementCreation",{iconDefinition:a,params:e}),H.autoA11y&&(v?u["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(L||i2()):(u["aria-hidden"]="true",u.focusable="false")),e1({icons:{main:q2(O),mask:l?q2(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:I,transform:t(t({},y),s),symbol:n,title:v,maskId:o,titleId:L,extra:{attributes:u,styles:w,classes:b}})})}},T4={mixout:function(){return{icon:A4(P4)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=F1,e.nodeCallback=y4,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?M:r,i=e.callback,n=i===void 0?function(){}:i;return F1(s,n)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,i=r.title,n=r.titleId,f=r.prefix,l=r.transform,m=r.symbol,o=r.mask,z=r.maskId,v=r.extra;return new Promise(function(V,L){Promise.all([W2(s,f),o.iconName?W2(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var b=_2(N,2),k=b[0],u=b[1];V([e,e1({icons:{main:k,mask:u},prefix:f,iconName:s,transform:l,symbol:m,maskId:z,title:i,titleId:n,extra:v,watchable:!0})])}).catch(L)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,i=e.main,n=e.transform,f=e.styles,l=x2(f);l.length>0&&(s.style=l);var m;return J2(n)&&(m=T("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),r.push(m||i.icon),{children:r,attributes:s}}}},B4={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,i=s===void 0?[]:s;return S2({type:"layer"},function(){j("beforeDOMElementCreation",{assembler:e,params:r});var n=[];return e(function(f){Array.isArray(f)?f.map(function(l){n=n.concat(l.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(H.cssPrefix,"-layers")].concat(n2(i)).join(" ")},children:n}]})}}}},F4={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,i=s===void 0?null:s,n=r.classes,f=n===void 0?[]:n,l=r.attributes,m=l===void 0?{}:l,o=r.styles,z=o===void 0?{}:o;return S2({type:"counter",content:e},function(){return j("beforeDOMElementCreation",{content:e,params:r}),v4({content:e.toString(),title:i,extra:{attributes:m,styles:z,classes:["".concat(H.cssPrefix,"-layers-counter")].concat(n2(f))}})})}}}},D4={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,i=s===void 0?y:s,n=r.title,f=n===void 0?null:n,l=r.classes,m=l===void 0?[]:l,o=r.attributes,z=o===void 0?{}:o,v=r.styles,V=v===void 0?{}:v;return S2({type:"text",content:e},function(){return j("beforeDOMElementCreation",{content:e,params:r}),w1({content:e,transform:t(t({},y),i),title:f,extra:{attributes:z,styles:V,classes:["".concat(H.cssPrefix,"-layers-text")].concat(n2(m))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,i=r.transform,n=r.extra,f=null,l=null;if(_1){var m=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();f=o.width/m,l=o.height/m}return H.autoA11y&&!s&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,w1({content:e.innerHTML,width:f,height:l,transform:i,title:s,extra:n,watchable:!0})])}}},R4=new RegExp('"',"ug"),D1=[1105920,1112319];function E4(c){var a=c.replace(R4,""),e=K3(a,0),r=e>=D1[0]&&e<=D1[1],s=a.length===2?a[0]===a[1]:!1;return{value:E2(s?a[0]:a),isSecondary:r||s}}function R1(c,a){var e="".concat(S3).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var i=K(c.children),n=i.filter(function(O){return O.getAttribute(R2)===a})[0],f=R.getComputedStyle(c,a),l=f.getPropertyValue("font-family").match(P3),m=f.getPropertyValue("font-weight"),o=f.getPropertyValue("content");if(n&&!l)return c.removeChild(n),r();if(l&&o!=="none"&&o!==""){var z=f.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?p:h,V=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?e2[v][l[2].toLowerCase()]:T3[v][m],L=E4(z),N=L.value,b=L.isSecondary,k=l[0].startsWith("FontAwesome"),u=c1(V,N),d=u;if(k){var w=s4(N);w.iconName&&w.prefix&&(u=w.iconName,V=w.prefix)}if(u&&!b&&(!n||n.getAttribute(Y2)!==V||n.getAttribute($2)!==d)){c.setAttribute(e,d),n&&c.removeChild(n);var g=k4(),I=g.extra;I.attributes[R2]=a,W2(u,V).then(function(O){var k2=e1(t(t({},g),{},{icons:{main:O,mask:a1()},prefix:V,iconName:d,extra:I,watchable:!0})),F=M.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(F,c.firstChild):c.appendChild(F),F.outerHTML=k2.map(function(M3){return l2(M3)}).join(`
`),c.removeAttribute(e),r()}).catch(s)}else r()}else r()})}function U4(c){return Promise.all([R1(c,"::before"),R1(c,"::after")])}function I4(c){return c.parentNode!==document.head&&!~w3.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(R2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function E1(c){if(B)return new Promise(function(a,e){var r=K(c.querySelectorAll("*")).filter(I4).map(U4),s=r1.begin("searchPseudoElements");z3(),Promise.all(r).then(function(){s(),j2(),a()}).catch(function(){s(),j2(),e()})})}var O4={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=E1,e}}},provides:function(a){a.pseudoElements2svg=function(e){var r=e.node,s=r===void 0?M:r;H.searchPseudoElements&&E1(s)}}},U1=!1,q4={mixout:function(){return{dom:{unwatch:function(){z3(),U1=!0}}}},hooks:function(){return{bootstrap:function(){T1(I2("mutationObserverCallbacks",{}))},noAuto:function(){x4()},watch:function(e){var r=e.observeMutationsRoot;U1?j2():T1(I2("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},I1=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(r,s){var i=s.toLowerCase().split("-"),n=i[0],f=i.slice(1).join("-");if(n&&f==="h")return r.flipX=!0,r;if(n&&f==="v")return r.flipY=!0,r;if(f=parseFloat(f),isNaN(f))return r;switch(n){case"grow":r.size=r.size+f;break;case"shrink":r.size=r.size-f;break;case"left":r.x=r.x-f;break;case"right":r.x=r.x+f;break;case"up":r.y=r.y-f;break;case"down":r.y=r.y+f;break;case"rotate":r.rotate=r.rotate+f;break}return r},e)},W4={mixout:function(){return{parse:{transform:function(e){return I1(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,r){var s=r.getAttribute("data-fa-transform");return s&&(e.transform=I1(s)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var r=e.main,s=e.transform,i=e.containerWidth,n=e.iconWidth,f={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(s.x*32,", ").concat(s.y*32,") "),m="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),o="rotate(".concat(s.rotate," 0 0)"),z={transform:"".concat(l," ").concat(m," ").concat(o)},v={transform:"translate(".concat(n/2*-1," -256)")},V={outer:f,inner:z,path:v};return{tag:"g",attributes:t({},V.outer),children:[{tag:"g",attributes:t({},V.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:t(t({},r.icon.attributes),V.path)}]}]}}}},B2={x:0,y:0,width:"100%",height:"100%"};function O1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function G4(c){return c.tag==="g"?c.children:[c]}var j4={hooks:function(){return{parseNodeAttributes:function(e,r){var s=r.getAttribute("data-fa-mask"),i=s?b2(s.split(" ").map(function(n){return n.trim()})):a1();return i.prefix||(i.prefix=E()),e.mask=i,e.maskId=r.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var r=e.children,s=e.attributes,i=e.main,n=e.mask,f=e.maskId,l=e.transform,m=i.width,o=i.icon,z=n.width,v=n.icon,V=W3({transform:l,containerWidth:z,iconWidth:m}),L={tag:"rect",attributes:t(t({},B2),{},{fill:"white"})},N=o.children?{children:o.children.map(O1)}:{},b={tag:"g",attributes:t({},V.inner),children:[O1(t({tag:o.tag,attributes:t(t({},o.attributes),V.path)},N))]},k={tag:"g",attributes:t({},V.outer),children:[b]},u="mask-".concat(f||i2()),d="clip-".concat(f||i2()),w={tag:"mask",attributes:t(t({},B2),{},{id:u,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[L,k]},g={tag:"defs",children:[{tag:"clipPath",attributes:{id:d},children:G4(v)},w]};return r.push(g,{tag:"rect",attributes:t({fill:"currentColor","clip-path":"url(#".concat(d,")"),mask:"url(#".concat(u,")")},B2)}),{children:r,attributes:s}}}},_4={provides:function(a){var e=!1;R.matchMedia&&(e=R.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var r=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:t(t({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=t(t({},i),{},{attributeName:"opacity"}),f={tag:"circle",attributes:t(t({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||f.children.push({tag:"animate",attributes:t(t({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:t(t({},n),{},{values:"1;0;1;1;0;1;"})}),r.push(f),r.push({tag:"path",attributes:t(t({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:t(t({},n),{},{values:"1;0;0;0;0;1;"})}]}),e||r.push({tag:"path",attributes:t(t({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:t(t({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},X4={hooks:function(){return{parseNodeAttributes:function(e,r){var s=r.getAttribute("data-fa-symbol"),i=s===null?!1:s===""?!0:s;return e.symbol=i,e}}}},Y4=[_3,T4,B4,F4,D4,O4,q4,W4,j4,_4,X4];f4(Y4,{mixoutsTo:x});var i6=x.noAuto,$4=x.config,n6=x.library,Q4=x.dom,K4=x.parse,f6=x.findIconDefinition,l6=x.toHtml,J4=x.icon,o6=x.layer,Z4=x.text,c6=x.counter;var V3=(()=>{let a=class a{};a.\u0275fac=function(s){return new(s||a)},a.\u0275mod=n1({type:a}),a.\u0275inj=i1({});let c=a;return c})();var e6={prefix:"fas",iconName:"mug-saucer",icon:[640,512,["coffee"],"f0f4","M96 64c0-17.7 14.3-32 32-32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224zM32 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},h3=e6;var r6=c=>({"fill-gray-900 dark:fill-gray-200 flex":c}),T6=(()=>{let a=class a{constructor(){this.path=_(),this.size=_(30),this.color=_(""),this.viewBox=_("0 0 24 24"),this.iconClass=_(""),this.faCoffee=h3}};a.\u0275fac=function(s){return new(s||a)},a.\u0275cmp=w2({type:a,selectors:[["icon"]],inputs:{path:[1,"path"],size:[1,"size"],color:[1,"color"],viewBox:[1,"viewBox"],iconClass:[1,"iconClass"]},standalone:!0,features:[y2],decls:2,vars:11,consts:[[3,"ngClass"]],template:function(s,i){s&1&&(f1(),m1(0,"svg",0),z1(1,"path"),H1()),s&2&&(t1(i.iconClass()),o1("ngClass",v1(9,r6,i.color()=="")),o2("viewBox",i.viewBox())("fill",i.color())("width",i.size())("height",i.size()),l1(),o2("d",i.path()))},dependencies:[V1,V3],encapsulation:2});let c=a;return c})();export{h3 as a,T6 as b};
