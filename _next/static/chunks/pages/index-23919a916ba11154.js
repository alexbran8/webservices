(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7913:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},u=n(2199),l=n(1587),c=n(7215);function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i={};function s(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[t+"%"+n+(o?"%"+o:"")]=!0}}var d=a.default.forwardRef((function(e,t){var n,o=e.legacyBehavior,d=void 0===o?!0!==Boolean(!1):o,p=e.href,v=e.as,h=e.children,b=e.prefetch,y=e.passHref,g=e.replace,m=e.shallow,E=e.scroll,_=e.locale,O=e.onClick,j=e.onMouseEnter,w=f(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=h,d&&"string"===typeof n&&(n=a.default.createElement("a",null,n));var k,M=!1!==b,C=l.useRouter(),L=a.default.useMemo((function(){var e=u.resolveHref(C,p,!0),t=r(e,2),n=t[0],o=t[1];return{href:n,as:v?u.resolveHref(C,v):o||n}}),[C,p,v]),x=L.href,R=L.as,I=a.default.useRef(x),N=a.default.useRef(R);d&&(k=a.default.Children.only(n));var P=d?k&&"object"===typeof k&&k.ref:t,H=c.useIntersection({rootMargin:"200px"}),U=r(H,3),K=U[0],S=U[1],T=U[2],B=a.default.useCallback((function(e){N.current===R&&I.current===x||(T(),N.current=R,I.current=x),K(e),P&&("function"===typeof P?P(e):"object"===typeof P&&(P.current=e))}),[R,P,x,T,K]);a.default.useEffect((function(){var e=S&&M&&u.isLocalURL(x),t="undefined"!==typeof _?_:C&&C.locale,n=i[x+"%"+R+(t?"%"+t:"")];e&&!n&&s(C,x,R,{locale:t})}),[R,x,S,_,M,C]);var D={ref:B,onClick:function(e){d||"function"!==typeof O||O(e),d&&k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,l,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:l}))}(e,C,x,R,g,m,E,_)},onMouseEnter:function(e){d||"function"!==typeof j||j(e),d&&k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),u.isLocalURL(x)&&s(C,x,R,{priority:!0})}};if(!d||y||"a"===k.type&&!("href"in k.props)){var A="undefined"!==typeof _?_:C&&C.locale,X=C&&C.isLocaleDomain&&u.getDomainLocale(R,A,C&&C.locales,C&&C.domainLocales);D.href=X||u.addBasePath(u.addLocale(R,A,C&&C.defaultLocale))}return d?a.default.cloneElement(k,D):a.default.createElement("a",Object.assign({},w,D),n)}));t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},7215:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,f=e.disabled||!u,i=o.useRef(),s=o.useState(!1),d=r(s,2),p=d[0],v=d[1],h=o.useState(t?t.current:null),b=r(h,2),y=b[0],g=b[1],m=o.useCallback((function(e){i.current&&(i.current(),i.current=void 0),f||p||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=l.get(r):(t=l.get(n),c.push(n));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(n,t={id:n,observer:a,elements:o}),t}(n),o=r.id,a=r.observer,u=r.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),l.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&v(e)}),{root:y,rootMargin:n}))}),[f,y,n,p]),E=o.useCallback((function(){v(!1)}),[]);return o.useEffect((function(){if(!u&&!p){var e=a.requestIdleCallback((function(){return v(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[p]),o.useEffect((function(){t&&g(t.current)}),[t]),[m,p,E]};var o=n(7294),a=n(8065),u="undefined"!==typeof IntersectionObserver;var l=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},8265:function(e,t,n){"use strict";n.r(t);var r=n(1664),o=n.n(r),a=n(5893);t.default=function(){return(0,a.jsxs)("div",{children:["Hello World!",(0,a.jsx)(o(),{href:"/about",as:"/Next-gh-page-example/about",children:(0,a.jsx)("a",{children:"About"})})]})}},5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8265)}])},1664:function(e,t,n){e.exports=n(7913)}},function(e){e.O(0,[774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);