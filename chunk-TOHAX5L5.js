import{a as l}from"./chunk-74Q5LDNQ.js";import{$ as s,U as i,Ua as o,ga as a,pa as n,qa as m}from"./chunk-KVCASJRN.js";var d=(()=>{let t=class t{constructor(){this.src=n.required(),this.platformCheck=i(l),this.imageRef=i(m),this.renderer=i(o),this.defaultLocalImage="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="}ngOnChanges(){this.initImage()}initImage(){if(this.platformCheck.onServer)return;this.renderer.addClass(this.imageRef.nativeElement,"animate-skeleton-loading");let e=new Image;this.src&&(e.onload=()=>{this.setImage(this.resolveImage(this.src())),this.renderer.removeClass(this.imageRef.nativeElement,"animate-skeleton-loading")},e.onerror=()=>{this.setImage(this.defaultLocalImage),this.renderer.removeClass(this.imageRef.nativeElement,"animate-skeleton-loading")},e.src=this.resolveImage(this.src()))}setImage(e){this.imageRef.nativeElement.setAttribute("src",e)}resolveImage(e){return e||this.defaultLocalImage}};t.\u0275fac=function(h){return new(h||t)},t.\u0275dir=s({type:t,selectors:[["img","skeleton",""]],inputs:{src:[1,"src"]},standalone:!0,features:[a]});let r=t;return r})();export{d as a};
