(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(2135)}])},1551:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,u=[],a=!0,i=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(u.push(n.value),!r||u.length!==r);a=!0);}catch(l){i=!0,o=l}finally{try{a||null==t.return||t.return()}finally{if(i)throw o}}return u}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var u,a=(u=t(7294))&&u.__esModule?u:{default:u},i=t(1003),l=t(880),c=t(9246);var f={};function s(e,r,t,n){if(e&&i.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[r+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=l.useRouter(),u=a.default.useMemo((function(){var r=o(i.resolveHref(n,e.href,!0),2),t=r[0],u=r[1];return{href:t,as:e.as?i.resolveHref(n,e.as):u||t}}),[n,e.href,e.as]),d=u.href,p=u.as,h=a.default.useRef(d),v=a.default.useRef(p),y=e.children,b=e.replace,m=e.shallow,j=e.scroll,g=e.locale;"string"===typeof y&&(y=a.default.createElement("a",null,y));var x=(r=a.default.Children.only(y))&&"object"===typeof r&&r.ref,w=o(c.useIntersection({rootMargin:"200px"}),3),O=w[0],_=w[1],E=w[2],C=a.default.useCallback((function(e){v.current===p&&h.current===d||(E(),v.current=p,h.current=d),O(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[p,x,d,E,O]);a.default.useEffect((function(){var e=_&&t&&i.isLocalURL(d),r="undefined"!==typeof g?g:n&&n.locale,o=f[d+"%"+p+(r?"%"+r:"")];e&&!o&&s(n,d,p,{locale:r})}),[p,d,_,g,t,n]);var k={ref:C,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,u,a,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),r[o?"replace":"push"](t,n,{shallow:u,locale:l,scroll:a}))}(e,n,d,p,b,m,j,g)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),i.isLocalURL(d)&&s(n,d,p,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var A="undefined"!==typeof g?g:n&&n.locale,M=n&&n.isLocaleDomain&&i.getDomainLocale(p,A,n&&n.locales,n&&n.domainLocales);k.href=M||i.addBasePath(i.addLocale(p,A,n&&n.defaultLocale))}return a.default.cloneElement(r,k)};r.default=d,("function"===typeof r.default||"object"===typeof r.default&&null!==r.default)&&(Object.assign(r.default,r),e.exports=r.default)},9246:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,u=[],a=!0,i=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(u.push(n.value),!r||u.length!==r);a=!0);}catch(l){i=!0,o=l}finally{try{a||null==t.return||t.return()}finally{if(i)throw o}}return u}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!i,f=u.useRef(),s=o(u.useState(!1),2),d=s[0],p=s[1],h=o(u.useState(r?r.current:null),2),v=h[0],y=h[1],b=u.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||d||e&&e.tagName&&(f.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=l.get(n):(r=l.get(t),c.push(t));if(r)return r;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var r=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return l.set(t,r={id:t,observer:u,elements:o}),r}(t),o=n.id,u=n.observer,a=n.elements;return a.set(e,r),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),l.delete(o);var r=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));r>-1&&c.splice(r,1)}}}(e,(function(e){return e&&p(e)}),{root:v,rootMargin:t}))}),[n,v,t,d]),m=u.useCallback((function(){p(!1)}),[]);return u.useEffect((function(){if(!i&&!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),u.useEffect((function(){r&&y(r.current)}),[r]),[b,d,m]};var u=t(7294),a=t(4686),i="undefined"!==typeof IntersectionObserver;var l=new Map,c=[];("function"===typeof r.default||"object"===typeof r.default&&null!==r.default)&&(Object.assign(r.default,r),e.exports=r.default)},2135:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return f}});var n=t(5893),o=t(1664),u=t.n(o),a=function(){return(0,n.jsxs)("div",{children:[(0,n.jsx)("input",{type:"checkbox",id:"hamburger-input",className:"burger-shower"}),(0,n.jsx)("label",{htmlFor:"hamburger-input",children:(0,n.jsxs)("div",{id:"hamburger-menu",children:[(0,n.jsx)("span",{}),(0,n.jsx)("span",{}),(0,n.jsx)("span",{})]})}),(0,n.jsx)("nav",{id:"sidebar-menu",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(u(),{href:"/",children:"Home"})}),(0,n.jsx)("li",{children:(0,n.jsx)(u(),{href:"/about",children:"About"})}),(0,n.jsx)("li",{children:(0,n.jsx)(u(),{href:"/projects",children:"Projects"})}),(0,n.jsx)("li",{children:(0,n.jsx)(u(),{href:"/contact",children:"Contact"})})]})}),(0,n.jsx)("div",{className:"overlay"})]})},i=function(){return(0,n.jsxs)("nav",{id:"navbar",children:[(0,n.jsxs)("div",{id:"navbar-links",children:[(0,n.jsx)(u(),{href:"/",children:"Home"}),(0,n.jsx)(u(),{href:"/about",children:"About"}),(0,n.jsx)(u(),{href:"/projects",children:"Projects"}),(0,n.jsx)(u(),{href:"/contact",children:"Contact"})]}),(0,n.jsx)(a,{})]})};t(7914);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){l(e,r,t[r])}))}return e}var f=function(e){var r=e.Component,t=e.pageProps;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{}),(0,n.jsx)(r,c({},t))]})}},7914:function(){},1664:function(e,r,t){e.exports=t(1551)}},function(e){var r=function(r){return e(e.s=r)};e.O(0,[774,179],(function(){return r(6363),r(880)}));var t=e.O();_N_E=t}]);