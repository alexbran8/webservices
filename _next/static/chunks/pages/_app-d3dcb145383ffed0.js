(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1137:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return u},ACTION_PREFETCH:function(){return c},ACTION_FAST_REFRESH:function(){return l},ACTION_SERVER_ACTION:function(){return s},isThenable:function(){return f}});var r,n,o="refresh",i="navigate",a="restore",u="server-patch",c="prefetch",l="fast-refresh",s="server-action";function f(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9642:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(9086),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6787:function(e,t,r){"use strict";var n=r(8416),o=r(7069),i=r(3171),a=r(968),u=["src","srcSet","sizes","height","width","decoding","className","style","fetchPriority","placeholder","loading","unoptimized","fill","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){a(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return Image}});var s=r(8754),f=r(1757)._(r(7294)),d=s._(r(3935)),p=s._(r(2268)),v=r(9509),h=r(6314),g=r(7616);r(9067);var b=r(6643),y=s._(r(1908)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1};function O(e,t,r,n,o,i){var a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){var i=new Event("load");Object.defineProperty(i,"target",{writable:!1,value:e});var a=!1,u=!1;r.current(l(l({},i),{},{nativeEvent:i,currentTarget:e,target:e,isDefaultPrevented:function(){return a},isPropagationStopped:function(){return u},persist:function(){},preventDefault:function(){a=!0,i.preventDefault()},stopPropagation:function(){u=!0,i.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(e)}}))}function j(e){var t=i(f.version.split(".",2),2),r=t[0],n=t[1],o=parseInt(r,10),a=parseInt(n,10);return o>18||18===o&&a>=3?{fetchPriority:e}:{fetchpriority:e}}var w=(0,f.forwardRef)(function(e,t){var r=e.src,n=e.srcSet,i=e.sizes,a=e.height,c=e.width,s=e.decoding,d=e.className,p=e.style,v=e.fetchPriority,h=e.placeholder,g=e.loading,b=e.unoptimized,y=e.fill,m=e.onLoadRef,w=e.onLoadingCompleteRef,P=e.setBlurComplete,_=e.setShowAltText,S=(e.onLoad,e.onError),E=o(e,u);return f.default.createElement("img",l(l(l({},E),j(v)),{},{loading:g,width:c,height:a,decoding:s,"data-nimg":y?"fill":"1",className:d,style:p,sizes:i,srcSet:n,src:r,ref:(0,f.useCallback)(function(e){t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&O(e,h,m,w,P,b))},[r,h,m,w,P,S,b,t]),onLoad:function(e){O(e.currentTarget,h,m,w,P,b)},onError:function(e){_(!0),"empty"!==h&&P(!0),S&&S(e)}}))});function P(e){var t=e.isAppRouter,r=e.imgAttributes,n=l({as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy},j(r.fetchPriority));return t&&d.default.preload?(d.default.preload(r.src,n),null):f.default.createElement(p.default,null,f.default.createElement("link",l({key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src},n)))}var Image=(0,f.forwardRef)(function(e,t){var r=(0,f.useContext)(b.RouterContext),o=(0,f.useContext)(g.ImageConfigContext),a=(0,f.useMemo)(function(){var e=m||o||h.imageConfigDefault,t=[].concat(n(e.deviceSizes),n(e.imageSizes)).sort(function(e,t){return e-t}),r=e.deviceSizes.sort(function(e,t){return e-t});return l(l({},e),{},{allSizes:t,deviceSizes:r})},[o]),u=e.onLoad,c=e.onLoadingComplete,s=(0,f.useRef)(u);(0,f.useEffect)(function(){s.current=u},[u]);var d=(0,f.useRef)(c);(0,f.useEffect)(function(){d.current=c},[c]);var p=i((0,f.useState)(!1),2),O=p[0],j=p[1],_=i((0,f.useState)(!1),2),S=_[0],E=_[1],x=(0,v.getImgProps)(e,{defaultLoader:y.default,imgConf:a,blurComplete:O,showAltText:S}),C=x.props,k=x.meta;return f.default.createElement(f.default.Fragment,null,f.default.createElement(w,l(l({},C),{},{unoptimized:k.unoptimized,placeholder:k.placeholder,fill:k.fill,onLoadRef:s,onLoadingCompleteRef:d,setBlurComplete:j,setShowAltText:E,ref:t})),k.priority?f.default.createElement(P,{isAppRouter:!r,imgAttributes:C}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3366:function(e,t,r){"use strict";var n=r(968),o=r(3171),i=r(7069),a=["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});var l=r(8754)._(r(7294)),s=r(9530),f=r(9270),d=r(6788),p=r(3819),v=r(8739),h=r(6643),g=r(8651),b=r(1063),y=r(9642),m=r(246),O=r(1137),j=new Set;function w(e,t,r,n,o,i){if(i||(0,f.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){var a=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(j.has(a))return;j.add(a)}Promise.resolve(i?e.prefetch(t,o):e.prefetch(t,r,n)).catch(function(e){})}}function P(e){return"string"==typeof e?e:(0,d.formatUrl)(e)}var _=l.default.forwardRef(function(e,t){var r,n,u=e.href,d=e.as,j=e.children,_=e.prefetch,S=void 0===_?null:_,E=e.passHref,x=e.replace,C=e.shallow,k=e.scroll,M=e.locale,z=e.onClick,R=e.onMouseEnter,I=e.onTouchStart,A=e.legacyBehavior,D=void 0!==A&&A,T=i(e,a);r=j,D&&("string"==typeof r||"number"==typeof r)&&(r=l.default.createElement("a",null,r));var L=l.default.useContext(h.RouterContext),N=l.default.useContext(g.AppRouterContext),U=null!=L?L:N,F=!L,B=!1!==S,H=null===S?O.PrefetchKind.AUTO:O.PrefetchKind.FULL,W=l.default.useMemo(function(){if(!L){var e=P(u);return{href:e,as:d?P(d):e}}var t=o((0,s.resolveHref)(L,u,!0),2),r=t[0],n=t[1];return{href:r,as:d?(0,s.resolveHref)(L,d):n||r}},[L,u,d]),q=W.href,G=W.as,K=l.default.useRef(q),V=l.default.useRef(G);D&&(n=l.default.Children.only(r));var Y=D?n&&"object"==typeof n&&n.ref:t,$=o((0,b.useIntersection)({rootMargin:"200px"}),3),J=$[0],X=$[1],Q=$[2],Z=l.default.useCallback(function(e){(V.current!==G||K.current!==q)&&(Q(),V.current=G,K.current=q),J(e),Y&&("function"==typeof Y?Y(e):"object"==typeof Y&&(Y.current=e))},[G,Y,q,Q,J]);l.default.useEffect(function(){U&&X&&B&&w(U,q,G,{locale:M},{kind:H},F)},[G,q,X,M,B,null==L?void 0:L.locale,U,F,H]);var ee={ref:Z,onClick:function(e){D||"function"!=typeof z||z(e),D&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),U&&!e.defaultPrevented&&function(e,t,r,n,o,i,a,u,c){if(!("A"===e.currentTarget.nodeName.toUpperCase()&&((s=e.currentTarget.getAttribute("target"))&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which||!c&&!(0,f.isLocalURL)(r)))){e.preventDefault();var s,d=function(){var e=null==a||a;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:i,locale:u,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};c?l.default.startTransition(d):d()}}(e,U,q,G,x,C,k,M,F)},onMouseEnter:function(e){D||"function"!=typeof R||R(e),D&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),U&&(B||!F)&&w(U,q,G,{locale:M,priority:!0,bypassPrefetchedCheck:!0},{kind:H},F)},onTouchStart:function(e){D||"function"!=typeof I||I(e),D&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),U&&(B||!F)&&w(U,q,G,{locale:M,priority:!0,bypassPrefetchedCheck:!0},{kind:H},F)}};if((0,p.isAbsoluteUrl)(G))ee.href=G;else if(!D||E||"a"===n.type&&!("href"in n.props)){var et=void 0!==M?M:null==L?void 0:L.locale,er=(null==L?void 0:L.isLocaleDomain)&&(0,y.getDomainLocale)(G,et,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);ee.href=er||(0,m.addBasePath)((0,v.addLocale)(G,et,null==L?void 0:L.defaultLocale))}return D?l.default.cloneElement(n,ee):l.default.createElement("a",c(c({},T),ee),r)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1063:function(e,t,r){"use strict";var n=r(3171);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});var o=r(7294),i=r(3185),a="function"==typeof IntersectionObserver,u=new Map,c=[];function l(e){var t=e.rootRef,r=e.rootMargin,l=e.disabled||!a,s=n((0,o.useState)(!1),2),f=s[0],d=s[1],p=(0,o.useRef)(null),v=(0,o.useCallback)(function(e){p.current=e},[]);return(0,o.useEffect)(function(){if(a){if(!l&&!f){var e,n,o,s,v=p.current;if(v&&v.tagName)return n=(e=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find(function(e){return e.root===r.root&&e.margin===r.margin});if(n&&(t=u.get(n)))return t;var o=new Map;return t={id:r,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},c.push(r),u.set(r,t),t}({root:null==t?void 0:t.current,rootMargin:r})).id,o=e.observer,(s=e.elements).set(v,function(e){return e&&d(e)}),o.observe(v),function(){if(s.delete(v),o.unobserve(v),0===s.size){o.disconnect(),u.delete(n);var e=c.findIndex(function(e){return e.root===n.root&&e.margin===n.margin});e>-1&&c.splice(e,1)}}}}else if(!f){var h=(0,i.requestIdleCallback)(function(){return d(!0)});return function(){return(0,i.cancelIdleCallback)(h)}}},[l,r,t,f,p.current]),[v,f,(0,o.useCallback)(function(){d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3539:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});var n=r(8754)._(r(7294)).default.createContext({})},7187:function(e,t){"use strict";function r(e){var t=void 0===e?{}:e,r=t.ampFirst,n=t.hybrid,o=t.hasQuery;return void 0!==r&&r||void 0!==n&&n&&void 0!==o&&o}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},9509:function(e,t,r){"use strict";r(3171);var n=r(968),o=r(7069),i=r(8416),a=["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"],u=["config"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return v}}),r(9067);var s=r(277),f=r(6314);function d(e){return void 0!==e.default}function p(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function v(e,t){var r,n,c,v,h=e.src,g=e.sizes,b=e.unoptimized,y=void 0!==b&&b,m=e.priority,O=void 0!==m&&m,j=e.loading,w=e.className,P=e.quality,_=e.width,S=e.height,E=e.fill,x=void 0!==E&&E,C=e.style,k=(e.onLoad,e.onLoadingComplete,e.placeholder),M=void 0===k?"empty":k,z=e.blurDataURL,R=e.fetchPriority,I=e.layout,A=e.objectFit,D=e.objectPosition,T=(e.lazyBoundary,e.lazyRoot,o(e,a)),L=t.imgConf,N=t.showAltText,U=t.blurComplete,F=t.defaultLoader,B=L||f.imageConfigDefault;if("allSizes"in B)n=B;else{var H=[].concat(i(B.deviceSizes),i(B.imageSizes)).sort(function(e,t){return e-t}),W=B.deviceSizes.sort(function(e,t){return e-t});n=l(l({},B),{},{allSizes:H,deviceSizes:W})}var q=T.loader||F;delete T.loader,delete T.srcSet;var G="__next_img_default"in q;if(G){if("custom"===n.loader)throw Error('Image with src "'+h+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{var K=q;q=function(e){return e.config,K(o(e,u))}}if(I){"fill"===I&&(x=!0);var V={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];V&&(C=l(l({},C),V));var Y={responsive:"100vw",fill:"100vw"}[I];Y&&!g&&(g=Y)}var $="",J=p(_),X=p(S);if("object"==typeof(r=h)&&(d(r)||void 0!==r.src)){var Q=d(h)?h.default:h;if(!Q.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(Q));if(!Q.height||!Q.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(Q));if(c=Q.blurWidth,v=Q.blurHeight,z=z||Q.blurDataURL,$=Q.src,!x){if(J||X){if(J&&!X){var Z=J/Q.width;X=Math.round(Q.height*Z)}else if(!J&&X){var ee=X/Q.height;J=Math.round(Q.width*ee)}}else J=Q.width,X=Q.height}}var et=!O&&("lazy"===j||void 0===j);(!(h="string"==typeof h?h:$)||h.startsWith("data:")||h.startsWith("blob:"))&&(y=!0,et=!1),n.unoptimized&&(y=!0),G&&h.endsWith(".svg")&&!n.dangerouslyAllowSVG&&(y=!0),O&&(R="high");var er=p(P),en=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:D}:{},N?{}:{color:"transparent"},C),eo=U||"empty"===M?null:"blur"===M?'url("data:image/svg+xml;charset=utf-8,'+(0,s.getImageBlurSvg)({widthInt:J,heightInt:X,blurWidth:c,blurHeight:v,blurDataURL:z||"",objectFit:en.objectFit})+'")':'url("'+M+'")',ei=eo?{backgroundSize:en.objectFit||"cover",backgroundPosition:en.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:eo}:{},ea=function(e){var t=e.config,r=e.src,n=e.unoptimized,o=e.width,a=e.quality,u=e.sizes,c=e.loader;if(n)return{src:r,srcSet:void 0,sizes:void 0};var l=function(e,t,r){var n=e.deviceSizes,o=e.allSizes;if(r){for(var a,u=/(^|\s)(1?\d?\d)vw/g,c=[];a=u.exec(r);a)c.push(parseInt(a[2]));if(c.length){var l=.01*Math.min.apply(Math,c);return{widths:o.filter(function(e){return e>=n[0]*l}),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:i(new Set([t,2*t].map(function(e){return o.find(function(t){return t>=e})||o[o.length-1]}))),kind:"x"}}(t,o,u),s=l.widths,f=l.kind,d=s.length-1;return{sizes:u||"w"!==f?u:"100vw",srcSet:s.map(function(e,n){return c({config:t,src:r,quality:a,width:e})+" "+("w"===f?e:n+1)+f}).join(", "),src:c({config:t,src:r,quality:a,width:s[d]})}}({config:n,src:h,unoptimized:y,width:J,quality:er,sizes:g,loader:q});return{props:l(l({},T),{},{loading:et?"lazy":j,fetchPriority:R,width:J,height:X,decoding:"async",className:w,style:l(l({},en),ei),sizes:ea.sizes,srcSet:ea.srcSet,src:ea.src}),meta:{unoptimized:y,priority:O,placeholder:M,fill:x}}}},2268:function(e,t,r){"use strict";var n=r(968);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return f},default:function(){return h}});var i=r(8754),a=r(1757)._(r(7294)),u=i._(r(8959)),c=r(3539),l=r(5963),s=r(7187);function f(e){void 0===e&&(e=!1);var t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}r(9067);var p=["name","httpEquiv","charSet","itemProp"];function v(e,t){var r,i,u,c,l=t.inAmpMode;return e.reduce(d,[]).reverse().concat(f(l).reverse()).filter((r=new Set,i=new Set,u=new Set,c={},function(e){var t=!0,n=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){n=!0;var o=e.key.slice(e.key.indexOf("$")+1);r.has(o)?t=!1:r.add(o)}switch(e.type){case"title":case"base":i.has(e.type)?t=!1:i.add(e.type);break;case"meta":for(var a=0,l=p.length;a<l;a++){var s=p[a];if(e.props.hasOwnProperty(s)){if("charSet"===s)u.has(s)?t=!1:u.add(s);else{var f=e.props[s],d=c[s]||new Set;("name"!==s||!n)&&d.has(f)?t=!1:(d.add(f),c[s]=d)}}}}return t})).reverse().map(function(e,t){var r=e.key||t;if(!l&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,a.default.cloneElement(e,i)}return a.default.cloneElement(e,{key:r})})}var h=function(e){var t=e.children,r=(0,a.useContext)(c.AmpStateContext),n=(0,a.useContext)(l.HeadManagerContext);return a.default.createElement(u.default,{reduceComponentsToState:v,headManager:n,inAmpMode:(0,s.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},277:function(e,t){"use strict";function r(e){var t=e.widthInt,r=e.heightInt,n=e.blurWidth,o=e.blurHeight,i=e.blurDataURL,a=e.objectFit,u=n?40*n:t,c=o?40*o:r,l=u&&c?"viewBox='0 0 "+u+" "+c+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+l+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(l?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7016:function(e,t,r){"use strict";var n=r(3171);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return l},default:function(){return s}});var o=r(8754),i=r(9509),a=r(9067),u=r(6787),c=o._(r(1908)),l=function(e){(0,a.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");for(var t=(0,i.getImgProps)(e,{defaultLoader:c.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1}}).props,r=0,o=Object.entries(t);r<o.length;r++){var u=n(o[r],2),l=u[0];void 0===u[1]&&delete t[l]}return{props:t}},s=u.Image},1908:function(e,t){"use strict";function r(e){var t=e.config,r=e.src,n=e.width,o=e.quality;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;var n=r},8959:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});var n=r(7294),o=n.useLayoutEffect,i=n.useEffect;function a(e){var t=e.headManager,r=e.reduceComponentsToState;function a(){if(t&&t.mountedInstances){var o=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(o,e))}}return o(function(){var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),function(){var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(function(){return t&&(t._pendingUpdate=a),function(){t&&(t._pendingUpdate=a)}}),i(function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}}),null}},9067:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});var r=function(e){}},4835:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t,r){var o;return o=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"===n(o)?o:String(o))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t),r.d(t,{default:function(){return P}}),r(1346),r(5902),r(5429);var i=r(9008),a=r.n(i),u=r(1664),c=r.n(u);r(5675);var l=r(7294);r(526);var s=r(5893);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var d=[{text:"Home",href:"/"},{text:"Produse",href:"/products"},{text:"Proiecte",href:"/projects"},{text:"Contact",href:"/contact"}],p=function(e){var t=e.text,r=e.href,n=e.active;return(0,s.jsx)(c(),{href:r,className:"nav__item ".concat(n?"active":""),children:t})},v=function(){var e=(0,l.useState)(null),t=(e[0],e[1]),r=(0,l.useState)(-1),n=r[0],i=r[1];return(0,s.jsx)("header",{children:(0,s.jsx)("nav",{className:"nav",children:(0,s.jsx)("div",{className:"nav__menu-list",children:d.map(function(e,r){return(0,s.jsx)("div",{onClick:function(){i(r),t(!1)},children:(0,s.jsx)(p,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach(function(t){o(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({active:n===r},e))},e.text)})})})})};function h(e,t,r,n,o,i,a){try{var u=e[i](a),c=u.value}catch(e){r(e);return}u.done?t(c):Promise.resolve(c).then(n,o)}var g=r(4687),b=r.n(g),y=function(){var e,t,r=(0,l.useState)("open"),n=r[0],o=r[1],i=(0,l.useState)(!0),a=i[0];i[1];var u=(e=b().mark(function e(t){return b().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o("close"),e.next=3,new Promise(function(e){return setTimeout(e,t)});case 3:case"end":return e.stop()}},e)}),t=function(){var t=this,r=arguments;return new Promise(function(n,o){var i=e.apply(t,r);function a(e){h(i,n,o,a,u,"next",e)}function u(e){h(i,n,o,a,u,"throw",e)}a(void 0)})},function(e){return t.apply(this,arguments)});return(0,l.useEffect)(function(){setTimeout(function(){u(5e3)},6500)},[]),(0,s.jsx)("div",{children:a?(0,s.jsxs)("div",{className:"dev-env ".concat(n),children:["Lucrăm la dezvoltarea acestei pagini. \xcentre timp ne puteți contacta sau urmări pe pagina noastră de ",(0,s.jsx)("a",{href:"https://www.facebook.com/webservices.ro",target:"blank",children:"facebook"}),"."]}):null})},m=function(){return(0,s.jsxs)("div",{className:"logo-container logo",title:"test",children:[(0,s.jsx)("img",{src:"/logo.svg",title:"webservices logo",alt:"webservices logo"}),(0,s.jsx)("h5",{children:"Servicii Profesionale Web Development, Web Design, Găzduire"})]})},O=["children","pageTitle","description"],j=function(e){var t=e.children,r=e.pageTitle,n=e.description;return function(e,t){if(null!=e){var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}}}(e,O),(0,s.jsxs)("div",{className:"content",children:[(0,s.jsxs)(a(),{children:[(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,s.jsx)("meta",{charSet:"utf-8"}),(0,s.jsx)("meta",{name:"description",content:n}),(0,s.jsx)("link",{rel:"shortcut icon",href:"/favicon.svg"}),(0,s.jsx)("title",{children:r})]}),(0,s.jsx)(m,{}),(0,s.jsx)(y,{}),(0,s.jsx)(v,{}),t]})};function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var P=function(e){var t=e.Component,r=e.pageProps;return(0,s.jsx)(j,{pageTitle:"webservices.ro",description:"webservices.ro official website",children:(0,s.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach(function(t){o(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},r))})}},1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(4835)}])},526:function(){},5902:function(){},1346:function(){},5429:function(){},9008:function(e,t,r){e.exports=r(2268)},5675:function(e,t,r){r(7016)},1664:function(e,t,r){e.exports=r(3366)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(7985)}),_N_E=e.O()}]);