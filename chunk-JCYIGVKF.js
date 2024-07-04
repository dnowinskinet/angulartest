import{$b as qe,A as Ie,Aa as C,Ba as x,Ca as _e,Da as Be,Dd as te,E as Se,Ea as ze,Fa as Ve,Ga as $e,Ha as Ge,Ia as Xe,Ja as S,K as Le,N as A,O as m,Oa as V,R as w,T as d,Ta as Je,Tb as Ke,U as E,Ub as We,Uc as H,Wa as L,Y as z,Zb as Q,_b as Ze,a as _,b as Oe,ba as de,bc as v,ca as ke,d as ae,da as Ce,ea as xe,g as ce,m as Ne,n as le,na as ue,r as B,ra as je,ta as Fe,ua as he,va as Ue,wa as I,wd as Ye,y as Pe,ya as fe,zd as ee}from"./chunk-PJYFTTRQ.js";var G=class{},X=class{},b=class r{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(o=>{let t=o.indexOf(":");if(t>0){let n=o.slice(0,t),s=n.toLowerCase(),a=o.slice(t+1).trim();this.maybeSetNormalizedName(n,s),this.headers.has(s)?this.headers.get(s).push(a):this.headers.set(s,[a])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((o,t)=>{this.setHeaderEntries(t,o)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([o,t])=>{this.setHeaderEntries(o,t)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let o=this.headers.get(e.toLowerCase());return o&&o.length>0?o[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,o){return this.clone({name:e,value:o,op:"a"})}set(e,o){return this.clone({name:e,value:o,op:"s"})}delete(e,o){return this.clone({name:e,value:o,op:"d"})}maybeSetNormalizedName(e,o){this.normalizedNames.has(o)||this.normalizedNames.set(o,e)}init(){this.lazyInit&&(this.lazyInit instanceof r?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(o=>{this.headers.set(o,e.headers.get(o)),this.normalizedNames.set(o,e.normalizedNames.get(o))})}clone(e){let o=new r;return o.lazyInit=this.lazyInit&&this.lazyInit instanceof r?this.lazyInit:this,o.lazyUpdate=(this.lazyUpdate||[]).concat([e]),o}applyUpdate(e){let o=e.name.toLowerCase();switch(e.op){case"a":case"s":let t=e.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(e.name,o);let n=(e.op==="a"?this.headers.get(o):void 0)||[];n.push(...t),this.headers.set(o,n);break;case"d":let s=e.value;if(!s)this.headers.delete(o),this.normalizedNames.delete(o);else{let a=this.headers.get(o);if(!a)return;a=a.filter(i=>s.indexOf(i)===-1),a.length===0?(this.headers.delete(o),this.normalizedNames.delete(o)):this.headers.set(o,a)}break}}setHeaderEntries(e,o){let t=(Array.isArray(o)?o:[o]).map(s=>s.toString()),n=e.toLowerCase();this.headers.set(n,t),this.maybeSetNormalizedName(e,n)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(o=>e(this.normalizedNames.get(o),this.headers.get(o)))}};var ye=class{encodeKey(e){return Qe(e)}encodeValue(e){return Qe(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function wt(r,e){let o=new Map;return r.length>0&&r.replace(/^\?/,"").split("&").forEach(n=>{let s=n.indexOf("="),[a,i]=s==-1?[e.decodeKey(n),""]:[e.decodeKey(n.slice(0,s)),e.decodeValue(n.slice(s+1))],l=o.get(a)||[];l.push(i),o.set(a,l)}),o}var Rt=/%(\d[a-f0-9])/gi,bt={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Qe(r){return encodeURIComponent(r).replace(Rt,(e,o)=>bt[o]??e)}function ne(r){return`${r}`}var O=class r{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new ye,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=wt(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(o=>{let t=e.fromObject[o],n=Array.isArray(t)?t.map(ne):[ne(t)];this.map.set(o,n)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let o=this.map.get(e);return o?o[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,o){return this.clone({param:e,value:o,op:"a"})}appendAll(e){let o=[];return Object.keys(e).forEach(t=>{let n=e[t];Array.isArray(n)?n.forEach(s=>{o.push({param:t,value:s,op:"a"})}):o.push({param:t,value:n,op:"a"})}),this.clone(o)}set(e,o){return this.clone({param:e,value:o,op:"s"})}delete(e,o){return this.clone({param:e,value:o,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let o=this.encoder.encodeKey(e);return this.map.get(e).map(t=>o+"="+this.encoder.encodeValue(t)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let o=new r({encoder:this.encoder});return o.cloneFrom=this.cloneFrom||this,o.updates=(this.updates||[]).concat(e),o}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let o=(e.op==="a"?this.map.get(e.param):void 0)||[];o.push(ne(e.value)),this.map.set(e.param,o);break;case"d":if(e.value!==void 0){let t=this.map.get(e.param)||[],n=t.indexOf(ne(e.value));n!==-1&&t.splice(n,1),t.length>0?this.map.set(e.param,t):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var me=class{constructor(){this.map=new Map}set(e,o){return this.map.set(e,o),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function Mt(r){switch(r){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function He(r){return typeof ArrayBuffer<"u"&&r instanceof ArrayBuffer}function et(r){return typeof Blob<"u"&&r instanceof Blob}function tt(r){return typeof FormData<"u"&&r instanceof FormData}function At(r){return typeof URLSearchParams<"u"&&r instanceof URLSearchParams}var $=class r{constructor(e,o,t,n){this.url=o,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase();let s;if(Mt(this.method)||n?(this.body=t!==void 0?t:null,s=n):s=t,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params),this.transferCache=s.transferCache),this.headers??=new b,this.context??=new me,!this.params)this.params=new O,this.urlWithParams=o;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=o;else{let i=o.indexOf("?"),l=i===-1?"?":i<o.length-1?"&":"";this.urlWithParams=o+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||He(this.body)||et(this.body)||tt(this.body)||At(this.body)?this.body:this.body instanceof O?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||tt(this.body)?null:et(this.body)?this.body.type||null:He(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof O?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(e={}){let o=e.method||this.method,t=e.url||this.url,n=e.responseType||this.responseType,s=e.transferCache??this.transferCache,a=e.body!==void 0?e.body:this.body,i=e.withCredentials??this.withCredentials,l=e.reportProgress??this.reportProgress,c=e.headers||this.headers,u=e.params||this.params,p=e.context??this.context;return e.setHeaders!==void 0&&(c=Object.keys(e.setHeaders).reduce((y,R)=>y.set(R,e.setHeaders[R]),c)),e.setParams&&(u=Object.keys(e.setParams).reduce((y,R)=>y.set(R,e.setParams[R]),u)),new r(o,t,a,{params:u,headers:c,context:p,reportProgress:l,responseType:n,withCredentials:i,transferCache:s})}},N=function(r){return r[r.Sent=0]="Sent",r[r.UploadProgress=1]="UploadProgress",r[r.ResponseHeader=2]="ResponseHeader",r[r.DownloadProgress=3]="DownloadProgress",r[r.Response=4]="Response",r[r.User=5]="User",r}(N||{}),J=class{constructor(e,o=200,t="OK"){this.headers=e.headers||new b,this.status=e.status!==void 0?e.status:o,this.statusText=e.statusText||t,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},re=class r extends J{constructor(e={}){super(e),this.type=N.ResponseHeader}clone(e={}){return new r({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},K=class r extends J{constructor(e={}){super(e),this.type=N.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new r({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},D=class extends J{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},ot=200,Dt=204;function pe(r,e){return{body:e,headers:r.headers,context:r.context,observe:r.observe,params:r.params,reportProgress:r.reportProgress,responseType:r.responseType,withCredentials:r.withCredentials,transferCache:r.transferCache}}var Ot=(()=>{let e=class e{constructor(t){this.handler=t}request(t,n,s={}){let a;if(t instanceof $)a=t;else{let c;s.headers instanceof b?c=s.headers:c=new b(s.headers);let u;s.params&&(s.params instanceof O?u=s.params:u=new O({fromObject:s.params})),a=new $(t,n,s.body!==void 0?s.body:null,{headers:c,context:s.context,params:u,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials,transferCache:s.transferCache})}let i=le(a).pipe(Ie(c=>this.handler.handle(c)));if(t instanceof $||s.observe==="events")return i;let l=i.pipe(Pe(c=>c instanceof K));switch(s.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return l.pipe(B(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return c.body}));case"blob":return l.pipe(B(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new Error("Response is not a Blob.");return c.body}));case"text":return l.pipe(B(c=>{if(c.body!==null&&typeof c.body!="string")throw new Error("Response is not a string.");return c.body}));case"json":default:return l.pipe(B(c=>c.body))}case"response":return l;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(t,n={}){return this.request("DELETE",t,n)}get(t,n={}){return this.request("GET",t,n)}head(t,n={}){return this.request("HEAD",t,n)}jsonp(t,n){return this.request("JSONP",t,{params:new O().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,n={}){return this.request("OPTIONS",t,n)}patch(t,n,s={}){return this.request("PATCH",t,pe(s,n))}post(t,n,s={}){return this.request("POST",t,pe(s,n))}put(t,n,s={}){return this.request("PUT",t,pe(s,n))}};e.\u0275fac=function(n){return new(n||e)(d(G))},e.\u0275prov=m({token:e,factory:e.\u0275fac});let r=e;return r})(),Nt=/^\)\]\}',?\n/,Pt="X-Request-URL";function nt(r){if(r.url)return r.url;let e=Pt.toLocaleLowerCase();return r.headers.get(e)}var ge=(()=>{let e=class e{constructor(){this.fetchImpl=E(ve,{optional:!0})?.fetch??fetch.bind(globalThis),this.ngZone=E(L)}handle(t){return new ce(n=>{let s=new AbortController;return this.doRequest(t,s.signal,n).then(Te,a=>n.error(new D({error:a}))),()=>s.abort()})}doRequest(t,n,s){return ae(this,null,function*(){let a=this.createRequestInit(t),i;try{let T=this.fetchImpl(t.urlWithParams,_({signal:n},a));It(T),s.next({type:N.Sent}),i=yield T}catch(T){s.error(new D({error:T,status:T.status??0,statusText:T.statusText,url:t.urlWithParams,headers:T.headers}));return}let l=new b(i.headers),c=i.statusText,u=nt(i)??t.urlWithParams,p=i.status,y=null;if(t.reportProgress&&s.next(new re({headers:l,status:p,statusText:c,url:u})),i.body){let T=i.headers.get("content-length"),j=[],h=i.body.getReader(),f=0,M,k,g=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>ae(this,null,function*(){for(;;){let{done:P,value:U}=yield h.read();if(P)break;if(j.push(U),f+=U.length,t.reportProgress){k=t.responseType==="text"?(k??"")+(M??=new TextDecoder).decode(U,{stream:!0}):void 0;let De=()=>s.next({type:N.DownloadProgress,total:T?+T:void 0,loaded:f,partialText:k});g?g.run(De):De()}}}));let F=this.concatChunks(j,f);try{let P=i.headers.get("Content-Type")??"";y=this.parseBody(t,F,P)}catch(P){s.error(new D({error:P,headers:new b(i.headers),status:i.status,statusText:i.statusText,url:nt(i)??t.urlWithParams}));return}}p===0&&(p=y?ot:0),p>=200&&p<300?(s.next(new K({body:y,headers:l,status:p,statusText:c,url:u})),s.complete()):s.error(new D({error:y,headers:l,status:p,statusText:c,url:u}))})}parseBody(t,n,s){switch(t.responseType){case"json":let a=new TextDecoder().decode(n).replace(Nt,"");return a===""?null:JSON.parse(a);case"text":return new TextDecoder().decode(n);case"blob":return new Blob([n],{type:s});case"arraybuffer":return n.buffer}}createRequestInit(t){let n={},s=t.withCredentials?"include":void 0;if(t.headers.forEach((a,i)=>n[a]=i.join(",")),n.Accept??="application/json, text/plain, */*",!n["Content-Type"]){let a=t.detectContentTypeHeader();a!==null&&(n["Content-Type"]=a)}return{body:t.serializeBody(),method:t.method,headers:n,credentials:s}}concatChunks(t,n){let s=new Uint8Array(n),a=0;for(let i of t)s.set(i,a),a+=i.length;return s}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=m({token:e,factory:e.\u0275fac});let r=e;return r})(),ve=class{};function Te(){}function It(r){r.then(Te,Te)}function St(r,e){return e(r)}function Lt(r,e,o){return(t,n)=>xe(o,()=>e(t,s=>r(s,n)))}var it=new w(""),kt=new w(""),Ct=new w("",{providedIn:"root",factory:()=>!0});var rt=(()=>{let e=class e extends G{constructor(t,n){super(),this.backend=t,this.injector=n,this.chain=null,this.pendingTasks=E(je),this.contributeToStability=E(Ct)}handle(t){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(it),...this.injector.get(kt,[])]));this.chain=n.reduceRight((s,a)=>Lt(s,a,this.injector),St)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(t,s=>this.backend.handle(s)).pipe(Se(()=>this.pendingTasks.remove(n)))}else return this.chain(t,n=>this.backend.handle(n))}};e.\u0275fac=function(n){return new(n||e)(d(X),d(Ce))},e.\u0275prov=m({token:e,factory:e.\u0275fac});let r=e;return r})();var xt=/^\)\]\}',?\n/;function jt(r){return"responseURL"in r&&r.responseURL?r.responseURL:/^X-Request-URL:/m.test(r.getAllResponseHeaders())?r.getResponseHeader("X-Request-URL"):null}var st=(()=>{let e=class e{constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new A(-2800,!1);let n=this.xhrFactory;return(n.\u0275loadImpl?Ne(n.\u0275loadImpl()):le(null)).pipe(Le(()=>new ce(a=>{let i=n.build();if(i.open(t.method,t.urlWithParams),t.withCredentials&&(i.withCredentials=!0),t.headers.forEach((h,f)=>i.setRequestHeader(h,f.join(","))),t.headers.has("Accept")||i.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){let h=t.detectContentTypeHeader();h!==null&&i.setRequestHeader("Content-Type",h)}if(t.responseType){let h=t.responseType.toLowerCase();i.responseType=h!=="json"?h:"text"}let l=t.serializeBody(),c=null,u=()=>{if(c!==null)return c;let h=i.statusText||"OK",f=new b(i.getAllResponseHeaders()),M=jt(i)||t.url;return c=new re({headers:f,status:i.status,statusText:h,url:M}),c},p=()=>{let{headers:h,status:f,statusText:M,url:k}=u(),g=null;f!==Dt&&(g=typeof i.response>"u"?i.responseText:i.response),f===0&&(f=g?ot:0);let F=f>=200&&f<300;if(t.responseType==="json"&&typeof g=="string"){let P=g;g=g.replace(xt,"");try{g=g!==""?JSON.parse(g):null}catch(U){g=P,F&&(F=!1,g={error:U,text:g})}}F?(a.next(new K({body:g,headers:h,status:f,statusText:M,url:k||void 0})),a.complete()):a.error(new D({error:g,headers:h,status:f,statusText:M,url:k||void 0}))},y=h=>{let{url:f}=u(),M=new D({error:h,status:i.status||0,statusText:i.statusText||"Unknown Error",url:f||void 0});a.error(M)},R=!1,T=h=>{R||(a.next(u()),R=!0);let f={type:N.DownloadProgress,loaded:h.loaded};h.lengthComputable&&(f.total=h.total),t.responseType==="text"&&i.responseText&&(f.partialText=i.responseText),a.next(f)},j=h=>{let f={type:N.UploadProgress,loaded:h.loaded};h.lengthComputable&&(f.total=h.total),a.next(f)};return i.addEventListener("load",p),i.addEventListener("error",y),i.addEventListener("timeout",y),i.addEventListener("abort",y),t.reportProgress&&(i.addEventListener("progress",T),l!==null&&i.upload&&i.upload.addEventListener("progress",j)),i.send(l),a.next({type:N.Sent}),()=>{i.removeEventListener("error",y),i.removeEventListener("abort",y),i.removeEventListener("load",p),i.removeEventListener("timeout",y),t.reportProgress&&(i.removeEventListener("progress",T),l!==null&&i.upload&&i.upload.removeEventListener("progress",j)),i.readyState!==i.DONE&&i.abort()}})))}};e.\u0275fac=function(n){return new(n||e)(d(te))},e.\u0275prov=m({token:e,factory:e.\u0275fac});let r=e;return r})(),at=new w(""),Ft="XSRF-TOKEN",Ut=new w("",{providedIn:"root",factory:()=>Ft}),_t="X-XSRF-TOKEN",Bt=new w("",{providedIn:"root",factory:()=>_t}),se=class{},zt=(()=>{let e=class e{constructor(t,n,s){this.doc=t,this.platform=n,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=H(t,this.cookieName),this.lastCookieString=t),this.lastToken}};e.\u0275fac=function(n){return new(n||e)(d(v),d(I),d(Ut))},e.\u0275prov=m({token:e,factory:e.\u0275fac});let r=e;return r})();function Vt(r,e){let o=r.url.toLowerCase();if(!E(at)||r.method==="GET"||r.method==="HEAD"||o.startsWith("http://")||o.startsWith("https://"))return e(r);let t=E(se).getToken(),n=E(Bt);return t!=null&&!r.headers.has(n)&&(r=r.clone({headers:r.headers.set(n,t)})),e(r)}var ct=function(r){return r[r.Interceptors=0]="Interceptors",r[r.LegacyInterceptors=1]="LegacyInterceptors",r[r.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",r[r.NoXsrfProtection=3]="NoXsrfProtection",r[r.JsonpSupport=4]="JsonpSupport",r[r.RequestsMadeViaParent=5]="RequestsMadeViaParent",r[r.Fetch=6]="Fetch",r}(ct||{});function $t(r,e){return{\u0275kind:r,\u0275providers:e}}function Ln(...r){let e=[Ot,st,rt,{provide:G,useExisting:rt},{provide:X,useFactory:()=>E(ge,{optional:!0})??E(st)},{provide:it,useValue:Vt,multi:!0},{provide:at,useValue:!0},{provide:se,useClass:zt}];for(let o of r)e.push(...o.\u0275providers);return de(e)}function kn(){return $t(ct.Fetch,[ge,{provide:X,useExisting:ge}])}var Re=class extends qe{constructor(){super(...arguments),this.supportsDOMEvents=!0}},be=class r extends Re{static makeCurrent(){Ze(new r)}onAndCancel(e,o,t){return e.addEventListener(o,t),()=>{e.removeEventListener(o,t)}}dispatchEvent(e,o){e.dispatchEvent(o)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,o){return o=o||this.getDefaultDocument(),o.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,o){return o==="window"?window:o==="document"?e:o==="body"?e.body:null}getBaseHref(e){let o=Xt();return o==null?null:Jt(o)}resetBaseElement(){W=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return H(document.cookie,e)}},W=null;function Xt(){return W=W||document.querySelector("base"),W?W.getAttribute("href"):null}function Jt(r){return new URL(r,document.baseURI).pathname}var Kt=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=m({token:e,factory:e.\u0275fac});let r=e;return r})(),oe=new w(""),ht=(()=>{let e=class e{constructor(t,n){this._zone=n,this._eventNameToPlugin=new Map,t.forEach(s=>{s.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,n,s){return this._findPluginFor(n).addEventListener(t,n,s)}getZone(){return this._zone}_findPluginFor(t){let n=this._eventNameToPlugin.get(t);if(n)return n;if(n=this._plugins.find(a=>a.supports(t)),!n)throw new A(5101,!1);return this._eventNameToPlugin.set(t,n),n}};e.\u0275fac=function(n){return new(n||e)(d(oe),d(L))},e.\u0275prov=m({token:e,factory:e.\u0275fac});let r=e;return r})(),Z=class{constructor(e){this._doc=e}},Ee="ng-app-id",ft=(()=>{let e=class e{constructor(t,n,s,a={}){this.doc=t,this.appId=n,this.nonce=s,this.platformId=a,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=ee(a),this.resetHostNodes()}addStyles(t){for(let n of t)this.changeUsageCount(n,1)===1&&this.onStyleAdded(n)}removeStyles(t){for(let n of t)this.changeUsageCount(n,-1)<=0&&this.onStyleRemoved(n)}ngOnDestroy(){let t=this.styleNodesInDOM;t&&(t.forEach(n=>n.remove()),t.clear());for(let n of this.getAllStyles())this.onStyleRemoved(n);this.resetHostNodes()}addHost(t){this.hostNodes.add(t);for(let n of this.getAllStyles())this.addStyleToHost(t,n)}removeHost(t){this.hostNodes.delete(t)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(t){for(let n of this.hostNodes)this.addStyleToHost(n,t)}onStyleRemoved(t){let n=this.styleRef;n.get(t)?.elements?.forEach(s=>s.remove()),n.delete(t)}collectServerRenderedStyles(){let t=this.doc.head?.querySelectorAll(`style[${Ee}="${this.appId}"]`);if(t?.length){let n=new Map;return t.forEach(s=>{s.textContent!=null&&n.set(s.textContent,s)}),n}return null}changeUsageCount(t,n){let s=this.styleRef;if(s.has(t)){let a=s.get(t);return a.usage+=n,a.usage}return s.set(t,{usage:n,elements:[]}),n}getStyleElement(t,n){let s=this.styleNodesInDOM,a=s?.get(n);if(a?.parentNode===t)return s.delete(n),a.removeAttribute(Ee),a;{let i=this.doc.createElement("style");return this.nonce&&i.setAttribute("nonce",this.nonce),i.textContent=n,this.platformIsServer&&i.setAttribute(Ee,this.appId),t.appendChild(i),i}}addStyleToHost(t,n){let s=this.getStyleElement(t,n),a=this.styleRef,i=a.get(n)?.elements;i?i.push(s):a.set(n,{elements:[s],usage:1})}resetHostNodes(){let t=this.hostNodes;t.clear(),t.add(this.doc.head)}};e.\u0275fac=function(n){return new(n||e)(d(v),d(he),d(fe,8),d(I))},e.\u0275prov=m({token:e,factory:e.\u0275fac});let r=e;return r})(),we={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Ae=/%COMP%/g,pt="%COMP%",Wt=`_nghost-${pt}`,Zt=`_ngcontent-${pt}`,qt=!0,Yt=new w("",{providedIn:"root",factory:()=>qt});function Qt(r){return Zt.replace(Ae,r)}function Ht(r){return Wt.replace(Ae,r)}function yt(r,e){return e.map(o=>o.replace(Ae,r))}var lt=(()=>{let e=class e{constructor(t,n,s,a,i,l,c,u=null){this.eventManager=t,this.sharedStylesHost=n,this.appId=s,this.removeStylesOnCompDestroy=a,this.doc=i,this.platformId=l,this.ngZone=c,this.nonce=u,this.rendererByCompId=new Map,this.platformIsServer=ee(l),this.defaultRenderer=new q(t,i,c,this.platformIsServer)}createRenderer(t,n){if(!t||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===z.ShadowDom&&(n=Oe(_({},n),{encapsulation:z.Emulated}));let s=this.getOrCreateRenderer(t,n);return s instanceof ie?s.applyToHost(t):s instanceof Y&&s.applyStyles(),s}getOrCreateRenderer(t,n){let s=this.rendererByCompId,a=s.get(n.id);if(!a){let i=this.doc,l=this.ngZone,c=this.eventManager,u=this.sharedStylesHost,p=this.removeStylesOnCompDestroy,y=this.platformIsServer;switch(n.encapsulation){case z.Emulated:a=new ie(c,u,n,this.appId,p,i,l,y);break;case z.ShadowDom:return new Me(c,u,t,n,i,l,this.nonce,y);default:a=new Y(c,u,n,p,i,l,y);break}s.set(n.id,a)}return a}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(n){return new(n||e)(d(ht),d(ft),d(he),d(Yt),d(v),d(I),d(L),d(fe))},e.\u0275prov=m({token:e,factory:e.\u0275fac});let r=e;return r})(),q=class{constructor(e,o,t,n){this.eventManager=e,this.doc=o,this.ngZone=t,this.platformIsServer=n,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,o){return o?this.doc.createElementNS(we[o]||o,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,o){(dt(e)?e.content:e).appendChild(o)}insertBefore(e,o,t){e&&(dt(e)?e.content:e).insertBefore(o,t)}removeChild(e,o){e&&e.removeChild(o)}selectRootElement(e,o){let t=typeof e=="string"?this.doc.querySelector(e):e;if(!t)throw new A(-5104,!1);return o||(t.textContent=""),t}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,o,t,n){if(n){o=n+":"+o;let s=we[n];s?e.setAttributeNS(s,o,t):e.setAttribute(o,t)}else e.setAttribute(o,t)}removeAttribute(e,o,t){if(t){let n=we[t];n?e.removeAttributeNS(n,o):e.removeAttribute(`${t}:${o}`)}else e.removeAttribute(o)}addClass(e,o){e.classList.add(o)}removeClass(e,o){e.classList.remove(o)}setStyle(e,o,t,n){n&(V.DashCase|V.Important)?e.style.setProperty(o,t,n&V.Important?"important":""):e.style[o]=t}removeStyle(e,o,t){t&V.DashCase?e.style.removeProperty(o):e.style[o]=""}setProperty(e,o,t){e!=null&&(e[o]=t)}setValue(e,o){e.nodeValue=o}listen(e,o,t){if(typeof e=="string"&&(e=Q().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${o}`);return this.eventManager.addEventListener(e,o,this.decoratePreventDefault(t))}decoratePreventDefault(e){return o=>{if(o==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(o)):e(o))===!1&&o.preventDefault()}}};function dt(r){return r.tagName==="TEMPLATE"&&r.content!==void 0}var Me=class extends q{constructor(e,o,t,n,s,a,i,l){super(e,s,a,l),this.sharedStylesHost=o,this.hostEl=t,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let c=yt(n.id,n.styles);for(let u of c){let p=document.createElement("style");i&&p.setAttribute("nonce",i),p.textContent=u,this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,o){return super.appendChild(this.nodeOrShadowRoot(e),o)}insertBefore(e,o,t){return super.insertBefore(this.nodeOrShadowRoot(e),o,t)}removeChild(e,o){return super.removeChild(this.nodeOrShadowRoot(e),o)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Y=class extends q{constructor(e,o,t,n,s,a,i,l){super(e,s,a,i),this.sharedStylesHost=o,this.removeStylesOnCompDestroy=n,this.styles=l?yt(l,t.styles):t.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},ie=class extends Y{constructor(e,o,t,n,s,a,i,l){let c=n+"-"+t.id;super(e,o,t,s,a,i,l,c),this.contentAttr=Qt(c),this.hostAttr=Ht(c)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,o){let t=super.createElement(e,o);return super.setAttribute(t,this.contentAttr,""),t}},en=(()=>{let e=class e extends Z{constructor(t){super(t)}supports(t){return!0}addEventListener(t,n,s){return t.addEventListener(n,s,!1),()=>this.removeEventListener(t,n,s)}removeEventListener(t,n,s){return t.removeEventListener(n,s)}};e.\u0275fac=function(n){return new(n||e)(d(v))},e.\u0275prov=m({token:e,factory:e.\u0275fac});let r=e;return r})(),tn=(()=>{let e=class e extends Z{constructor(t){super(t),this.delegate=E(We,{optional:!0})}supports(t){return this.delegate?this.delegate.supports(t):!1}addEventListener(t,n,s){return this.delegate.addEventListener(t,n,s)}removeEventListener(t,n,s){return this.delegate.removeEventListener(t,n,s)}};e.\u0275fac=function(n){return new(n||e)(d(v))},e.\u0275prov=m({token:e,factory:e.\u0275fac});let r=e;return r})(),ut=["alt","control","meta","shift"],nn={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},rn={alt:r=>r.altKey,control:r=>r.ctrlKey,meta:r=>r.metaKey,shift:r=>r.shiftKey},sn=(()=>{let e=class e extends Z{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,n,s){let a=e.parseEventName(n),i=e.eventCallback(a.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Q().onAndCancel(t,a.domEventName,i))}static parseEventName(t){let n=t.toLowerCase().split("."),s=n.shift();if(n.length===0||!(s==="keydown"||s==="keyup"))return null;let a=e._normalizeKey(n.pop()),i="",l=n.indexOf("code");if(l>-1&&(n.splice(l,1),i="code."),ut.forEach(u=>{let p=n.indexOf(u);p>-1&&(n.splice(p,1),i+=u+".")}),i+=a,n.length!=0||a.length===0)return null;let c={};return c.domEventName=s,c.fullKey=i,c}static matchEventFullKeyCode(t,n){let s=nn[t.key]||t.key,a="";return n.indexOf("code.")>-1&&(s=t.code,a="code."),s==null||!s?!1:(s=s.toLowerCase(),s===" "?s="space":s==="."&&(s="dot"),ut.forEach(i=>{if(i!==s){let l=rn[i];l(t)&&(a+=i+".")}}),a+=s,a===n)}static eventCallback(t,n,s){return a=>{e.matchEventFullKeyCode(a,t)&&s.runGuarded(()=>n(a))}}static _normalizeKey(t){return t==="esc"?"escape":t}};e.\u0275fac=function(n){return new(n||e)(d(v))},e.\u0275prov=m({token:e,factory:e.\u0275fac});let r=e;return r})();function or(r,e){return Ke(_({rootComponent:r},on(e)))}function on(r){return{appProviders:[...un,...r?.providers??[]],platformProviders:dn}}function an(){be.makeCurrent()}function cn(){return new ue}function ln(){return Fe(document),document}var dn=[{provide:I,useValue:Ye},{provide:Ue,useValue:an,multi:!0},{provide:v,useFactory:ln,deps:[]}];var un=[{provide:ke,useValue:"root"},{provide:ue,useFactory:cn,deps:[]},{provide:oe,useClass:en,multi:!0,deps:[v,L,I]},{provide:oe,useClass:sn,multi:!0,deps:[v]},{provide:oe,useClass:tn,multi:!0},lt,ft,ht,{provide:Je,useExisting:lt},{provide:te,useClass:Kt,deps:[]},[]];var ir=(()=>{let e=class e{constructor(t){this._doc=t,this._dom=Q()}addTag(t,n=!1){return t?this._getOrCreateElement(t,n):null}addTags(t,n=!1){return t?t.reduce((s,a)=>(a&&s.push(this._getOrCreateElement(a,n)),s),[]):[]}getTag(t){return t&&this._doc.querySelector(`meta[${t}]`)||null}getTags(t){if(!t)return[];let n=this._doc.querySelectorAll(`meta[${t}]`);return n?[].slice.call(n):[]}updateTag(t,n){if(!t)return null;n=n||this._parseSelector(t);let s=this.getTag(n);return s?this._setMetaElementAttributes(t,s):this._getOrCreateElement(t,!0)}removeTag(t){this.removeTagElement(this.getTag(t))}removeTagElement(t){t&&this._dom.remove(t)}_getOrCreateElement(t,n=!1){if(!n){let i=this._parseSelector(t),l=this.getTags(i).filter(c=>this._containsAttributes(t,c))[0];if(l!==void 0)return l}let s=this._dom.createElement("meta");return this._setMetaElementAttributes(t,s),this._doc.getElementsByTagName("head")[0].appendChild(s),s}_setMetaElementAttributes(t,n){return Object.keys(t).forEach(s=>n.setAttribute(this._getMetaKeyMap(s),t[s])),n}_parseSelector(t){let n=t.name?"name":"property";return`${n}="${t[n]}"`}_containsAttributes(t,n){return Object.keys(t).every(s=>n.getAttribute(this._getMetaKeyMap(s))===t[s])}_getMetaKeyMap(t){return hn[t]||t}};e.\u0275fac=function(n){return new(n||e)(d(v))},e.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})(),hn={httpEquiv:"http-equiv"},ar=(()=>{let e=class e{constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}};e.\u0275fac=function(n){return new(n||e)(d(v))},e.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();var fn=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=m({token:e,factory:function(n){let s=null;return n?s=new(n||e):s=d(pn),s},providedIn:"root"});let r=e;return r})(),pn=(()=>{let e=class e extends fn{constructor(t){super(),this._doc=t}sanitize(t,n){if(n==null)return null;switch(t){case S.NONE:return n;case S.HTML:return x(n,"HTML")?C(n):Xe(this._doc,String(n)).toString();case S.STYLE:return x(n,"Style")?C(n):n;case S.SCRIPT:if(x(n,"Script"))return C(n);throw new A(5200,!1);case S.URL:return x(n,"URL")?C(n):Ge(String(n));case S.RESOURCE_URL:if(x(n,"ResourceURL"))return C(n);throw new A(5201,!1);default:throw new A(5202,!1)}}bypassSecurityTrustHtml(t){return _e(t)}bypassSecurityTrustStyle(t){return Be(t)}bypassSecurityTrustScript(t){return ze(t)}bypassSecurityTrustUrl(t){return Ve(t)}bypassSecurityTrustResourceUrl(t){return $e(t)}};e.\u0275fac=function(n){return new(n||e)(d(v))},e.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();export{Ot as a,Ln as b,kn as c,lt as d,or as e,ir as f,ar as g,fn as h};
