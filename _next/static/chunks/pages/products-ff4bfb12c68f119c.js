(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{4620:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return I}});var n=r(7294),i=r(8947),a=r(5697),o=r.n(a);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){u(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function d(e){var t;return(t=e-0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1)}var m=["style"],b=!1;try{b=!0}catch(e){}function y(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:i.Qc.icon?i.Qc.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function g(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}var h=n.forwardRef(function(e,t){var r,n,a,o,l,c,f,d,m,v,x,j,E,I,k,P,N,S,w,T=e.icon,A=e.mask,_=e.symbol,R=e.className,z=e.title,C=e.titleId,D=e.maskId,L=y(T),F=g("classes",[].concat(p((n=e.beat,a=e.fade,o=e.beatFade,l=e.bounce,c=e.shake,f=e.flash,d=e.spin,m=e.spinPulse,v=e.spinReverse,x=e.pulse,j=e.fixedWidth,E=e.inverse,I=e.border,k=e.listItem,P=e.flip,N=e.size,S=e.rotation,w=e.pull,Object.keys((u(r={"fa-beat":n,"fa-fade":a,"fa-beat-fade":o,"fa-bounce":l,"fa-shake":c,"fa-flash":f,"fa-spin":d,"fa-spin-reverse":v,"fa-spin-pulse":m,"fa-pulse":x,"fa-fw":j,"fa-inverse":E,"fa-border":I,"fa-li":k,"fa-flip":!0===P,"fa-flip-horizontal":"horizontal"===P||"both"===P,"fa-flip-vertical":"vertical"===P||"both"===P},"fa-".concat(N),null!=N),u(r,"fa-rotate-".concat(S),null!=S&&0!==S),u(r,"fa-pull-".concat(w),null!=w),u(r,"fa-swap-opacity",e.swapOpacity),r)).map(function(e){return r[e]?e:null}).filter(function(e){return e}))),p(R.split(" ")))),U=g("transform","string"==typeof e.transform?i.Qc.transform(e.transform):e.transform),W=g("mask",y(A)),M=(0,i.qv)(L,s(s(s(s({},F),U),W),{},{symbol:_,title:z,titleId:C,maskId:D}));if(!M)return!function(){if(!b&&console&&"function"==typeof console.error){var e;(e=console).error.apply(e,arguments)}}("Could not find icon",L),null;var Y=M.abstract,B={ref:t};return Object.keys(e).forEach(function(t){h.defaultProps.hasOwnProperty(t)||(B[t]=e[t])}),O(Y[0],B)});h.displayName="FontAwesomeIcon",h.propTypes={beat:o().bool,border:o().bool,beatFade:o().bool,bounce:o().bool,className:o().string,fade:o().bool,flash:o().bool,mask:o().oneOfType([o().object,o().array,o().string]),maskId:o().string,fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf([!0,!1,"horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),shake:o().bool,size:o().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,spinPulse:o().bool,spinReverse:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,titleId:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool},h.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var O=(function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var i=(r.children||[]).map(function(r){return e(t,r)}),a=Object.keys(r.attributes||{}).reduce(function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var r,n=t.indexOf(":"),i=d(t.slice(0,n)),a=t.slice(n+1).trim();return i.startsWith("webkit")?e[(r=i).charAt(0).toUpperCase()+r.slice(1)]=a:e[i]=a,e},{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[d(t)]=n}return e},{attrs:{}}),o=n.style,l=function(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(n,m);return a.attrs.style=s(s({},a.attrs.style),void 0===o?{}:o),t.apply(void 0,[r.tag,s(s({},a.attrs),l)].concat(p(i)))}).bind(null,n.createElement),v=r(1436),x=JSON.parse('[{"title":"SITE PREZENTARE","description":["Design modern, tema personalizata","o singura pagina contine toate componentele site-ului","deployment gratuit, doar achizitionarea unui domeniu","compatibil cu telefoane mobile / tablete / pc / laptop","nu necesita stocare date","SEO FRIENDLY (trafic organic / performante / site ranking)"]},{"title":"SITE BASIC","description":["Design modern, tema personalizata","pagini dedicate fiecaror sectiuni (prezentare, produse, servicii, contact, etc.)","poate necesita stocare date","solutii diverse pentru gazduire","compatibil cu toate tipurile de device (telefoane mobile / tablete / pc / laptop / etc.)","SEO FRIENDLY (trafic organic / performante / site ranking)","nu necesita autentificare"]},{"title":"SITE PREMIUM","description":["Design modern, tema personalizata, animatii","multilanguage","pagini dedicate fiecaror sectiuni ale site-ului (prezentare, produse, servicii, preturi, contact, etc.)","necesita stocare date","solutii diverse pentru deployment","compatibil cu toate tipurile de device (telefoane mobile / tablete / pc / laptop / etc.)","TOP SEO PERFORMANCE (trafic organic / performante / site ranking)","PWA - compatibil cu toate platformele, poate fi instalat"]},{"title":"E-COMMERCE","description":["Design modern, tema personalizata","mentenanta rapida","compatibil cu toate tipurile de device (telefoane mobile / tablete / pc / laptop / etc.)","experienta utilizator imbunatatita datorita folosirii tehnologiilor moderne de programare","seo friendly (trafic organic / performante / site ranking)","multilanguage"]},{"title":"BLOG","description":["Design modern, tema personalizata","mentenanta rapida","compatibil cu toate tipurile de device (telefoane mobile / tablete / pc / laptop / etc.)","experienta utilizator imbunatatita datorita folosirii tehnologiilor moderne de programare","seo friendly (trafic organic / performante / site ranking)","multilanguage"]},{"title":"STYLING/DESIGN"},{"title":"APLICATII COMPLEXE","description":["automatizare procese","digitalizare procese"]},{"title":"SOLUTII INFRASTRUCTURA","description":["configurare masini virtuale","migrare aplicatii in solutii moderne"]}]'),j=r(5893),E=function(e){var t=e.title,r=e.description;return(0,j.jsxs)("div",{className:"grid-item",children:[(0,j.jsx)("div",{className:"grid-item-header",children:(0,j.jsx)("h3",{children:t})}),(0,j.jsx)("div",{className:"grid-item-body",children:(0,j.jsx)("ul",{children:r&&r.map(function(e,t){return(0,j.jsxs)("li",{children:[(0,j.jsx)(h,{className:"icon",icon:v.fV7}),e]},t)})})}),(0,j.jsx)("div",{className:"grid-item-footer",children:(0,j.jsx)("button",{className:"button",children:"Afla mai multe informatii"})})]})};r(5675);var I=function(){return(0,j.jsx)("div",{className:"center",children:(0,j.jsx)("div",{className:"grid-card-container",children:x&&x.map(function(e,t){return(0,j.jsx)(E,{title:e.title,description:e.description},"card-".concat(t))})})})}},7638:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products",function(){return r(4620)}])},2703:function(e,t,r){"use strict";var n=r(414);function i(){}function a(){}a.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,a,o){if(o!==n){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:i};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[523,774,888,179],function(){return e(e.s=7638)}),_N_E=e.O()}]);