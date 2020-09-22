(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{135:function(e,a,t){"use strict";var n=t(20),c=t.n(n),s=t(0),l=t.n(s),r=t(9),i=t(27),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(a){return a.isCurrent?{className:"".concat(e," active").trim()}:{className:e}}};a.a=function(e){var a=Object(r.useLocation)(),t=e.to===a.pathname+a.hash;return l.a.createElement(i.a,c()({getProps:m(e.className),replace:t},e))}},136:function(e,a,t){"use strict";var n=t(138);a.a={home:"/",about:"/#about-section",contact:"/#contact-section",cases:Object(n.include)("/cases",{all:"",detail:Object(n.include)(":slug",{show:""})})}},137:function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return c}));t(143);function n(e){return e.replace(/[\D]+/g,"")}function c(e){return{__html:e}}},139:function(e,a,t){"use strict";var n=t(0),c=t.n(n),s=t(135);a.a=function(e){var a=e.title,t=e.icon,n=e.short_desc,l=e.background,r=e.image_review,i=e.image_review_mobile,m=e.mobile_centrize,o=e.reviewer,u=e.reviewer_position,d=e.review_body,E=e.url,p="case-img";return m&&(p+=" centrize-mobile"),c.a.createElement("li",{className:"case-review",style:{background:l}},c.a.createElement(s.a,{className:"case-review-link",to:E}),c.a.createElement("div",{className:"case-review-left"},c.a.createElement("div",{className:"case-head-box"},c.a.createElement("div",{className:"case-icon"},c.a.createElement("img",{src:t,alt:"case-icon"})),c.a.createElement("h3",{className:"case-title"},a)),c.a.createElement("div",{className:"case-desc-box"},c.a.createElement("div",{className:"case-desc"},n)),d&&c.a.createElement("div",{className:"case-review-box"},c.a.createElement("div",{className:"review-body"},d),c.a.createElement("div",{className:"review-person"},c.a.createElement("div",{className:"reviewer"},o),c.a.createElement("div",{className:"reviewer-position"},u)))),c.a.createElement("div",{className:"case-review-right"},c.a.createElement("picture",null,c.a.createElement("source",{media:"(min-width: 620px)",srcSet:"".concat(r[0].path," 1x, ").concat(r[1].path," 2x")}),c.a.createElement("source",{media:"(max-width: 619px)",srcSet:"".concat(i[0].path," 1x, ").concat(i[1].path," 2x")}),c.a.createElement("img",{src:r[0].path,alt:a,className:p}))))}},140:function(e,a,t){"use strict";var n=t(8),c=t.n(n),s=t(0),l=t.n(s),r=t(142),i=t(135),m=function(e){Object(s.useEffect)((function(){return e.forEach((function(e){document.addEventListener(e.type,e.callback)})),function(){return e.forEach((function(e){document.removeEventListener(e.type,e.callback)}))}}),[e])},o=function(e){var a=e.isTop,t=e.items,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=Object(s.useRef)(null),t=Object(s.useState)(!1),n=c()(t,2),l=n[0],r=n[1],i=Object(s.useCallback)((function(t){!l||a.current&&a.current.contains(t.target)||(r(!1),e&&e())}),[l,a,e]),o=[];return"undefined"!=typeof window&&window.PointerEvent?o.push({type:"pointerdown",callback:i}):(o.push({type:"mousedown",callback:i}),o.push({type:"touchstart",callback:i})),m(o),[a,l,r]}(),r=c()(n,3),o=r[0],u=r[1],d=r[2],E="menu header-menu";return u&&(E+=" header-menu-open"),Object(s.useEffect)((function(){a&&d(!1)}),[a]),l.a.createElement("div",{className:E,ref:o},l.a.createElement("div",{id:"header-menu-button","aria-haspopup":"true","aria-expanded":u,onClick:function(){return d(!u)}},l.a.createElement("div",{className:"burger"})),l.a.createElement("ul",{className:"header-menu-window",role:"menu","aria-labelledby":"header-menu-button"},t.map((function(e){return l.a.createElement("li",{key:e.title,role:"presentation"},l.a.createElement(i.a,{to:e.url,role:"menuitem"},e.title),"}")}))))},u=t(136),d=[{title:"About",url:u.a.about,classes:""},{title:"Cases",url:u.a.cases.all,classes:""}];a.a=function(){var e=Object(s.useState)("undefined"!=typeof window&&0===window.scrollY),a=c()(e,2),t=a[0],n=a[1];return Object(r.useScrollPosition)((function(e){var a=e.prevPos,c=e.currPos,s=0===c.y||c.y<100&&a.y>c.y;s!==t&&n(s)}),[t],null,!0,60),l.a.createElement("header",{id:"app-header",className:t?"header-on-top":""},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"header-inner"},l.a.createElement("div",{className:"brand-box"},l.a.createElement(i.a,{className:"brand",to:u.a.home})),l.a.createElement("div",{className:"menu-box"},l.a.createElement(o,{isTop:t,items:d}),l.a.createElement("nav",{className:"menu main-menu"},l.a.createElement("ul",null,d.map((function(e){return l.a.createElement("li",{key:e.title,className:e.classes},l.a.createElement(i.a,{to:e.url},e.title),"}")}))))))))}},141:function(e,a,t){"use strict";var n=t(0),c=t.n(n),s=t(17),l=t(135),r=t(136),i=function(){return c.a.createElement("div",{className:"brand-box"},c.a.createElement(l.a,{className:"brand",to:r.a.home},c.a.createElement("img",{src:"/images/brand.svg",alt:"brand"})))},m=t(137);a.a=function(){var e=Object(s.useSiteData)(),a=e.address,t=e.phoneLA,n=e.phoneMoscow,l=e.email;return c.a.createElement("footer",{id:"app-footer"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"footer-inner inner-padding plain-text"},c.a.createElement("div",{className:"address-box"},a),c.a.createElement("div",{className:"contact-box"},c.a.createElement("div",{className:"phones"},t&&c.a.createElement("a",{href:"tel:+".concat(Object(m.a)(t)),className:"phone"},t),n&&c.a.createElement("a",{href:"tel:+".concat(Object(m.a)(n)),className:"phone"},n)),c.a.createElement("a",{href:"mailto:".concat(l),className:"email"},l)),c.a.createElement(i,null))))}},57:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(17),l=t(9),r=function(e){var a=Object(l.useLocation)(),t=Object(n.useCallback)((function(){var e=document.getElementById(a.hash.replace("#",""));e&&(e.scrollIntoView({behavior:"smooth"}),0===e.getBoundingClientRect().top&&requestAnimationFrame(t))}),[a.hash]);return Object(n.useEffect)((function(){a.hash&&requestAnimationFrame(t)}),[a]),e.children||null},i=t(135),m=t(140),o=t(141),u=t(137),d=function(e){var a=e.block,t=e.advantages,n=e.specialties;return c.a.createElement("section",{id:"about-section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"inner-padding-left"},c.a.createElement("div",{className:"about-inner text-container"},c.a.createElement("h2",{className:"section-label"},a.title),c.a.createElement("ul",{className:"advantages"},t.map((function(e){return c.a.createElement("li",{className:"advantage",key:e.data},c.a.createElement("h3",{className:"advantage-data"},e.data),c.a.createElement("div",{className:"advantage-desc"},e.desc))}))),a.contents&&c.a.createElement("div",{className:"about-text",dangerouslySetInnerHTML:Object(u.b)(a.contents)}))),c.a.createElement("div",{className:"specialty-inner"},c.a.createElement("ul",{className:"specialties"},n.map((function(e){return c.a.createElement("li",{className:"specialty",key:e.title},c.a.createElement("div",{className:"specialty-icon ".concat(e.icon_class)}),c.a.createElement("h3",{className:"specialty-title"},e.title),c.a.createElement("div",{className:"specialty-trend"},e.trend))}))))))},E=t(8),p=t.n(E),v=function(e){var a=e.block,t=e.steps,s=Object(n.useState)(0),l=p()(s,2),r=l[0],i=l[1],m=function(e){i(e)};return c.a.createElement("section",{id:"process-section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"inner-padding"},c.a.createElement("div",{className:"process-inner"},c.a.createElement("h2",{className:"section-label"},a.title),c.a.createElement("p",{className:"plain-text"},a.desc),c.a.createElement("div",{className:"hint"},c.a.createElement("svg",{className:"hint-icon",width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M10.7197 10.9258L15.8622 16.0682C16.0459 16.252 16.0459 16.55 15.8622 16.7338C15.6784 16.9175 15.3804 16.9175 15.1967 16.7338L10.0542 11.5913L8.43693 15.6346C8.27852 16.0306 7.7172 16.0285 7.56177 15.6313L5.06869 9.26011C4.79638 9.31448 4.51758 9.34217 4.2353 9.34217C1.89621 9.34217 0 7.44596 0 5.10688C0 2.76779 1.89621 0.871582 4.2353 0.871582C6.57439 0.871582 8.47059 2.76779 8.47059 5.10688C8.47059 5.38916 8.44291 5.66796 8.38853 5.94028L14.7597 8.43335C15.1569 8.58878 15.159 9.1501 14.763 9.30851L10.7197 10.9258ZM7.52942 5.10688C7.52942 3.28759 6.05459 1.81276 4.2353 1.81276C2.416 1.81276 0.941177 3.28759 0.941177 5.10688C0.941177 6.92617 2.416 8.40099 4.2353 8.40099C4.39846 8.40099 4.55991 8.38917 4.71877 8.36583L3.32647 4.80777C3.17694 4.42562 3.55405 4.04852 3.93619 4.19806L7.49426 5.59034C7.51759 5.43148 7.52942 5.27004 7.52942 5.10688ZM4.5949 5.46648L8.00481 14.1807L9.44543 10.5792C9.49326 10.4596 9.588 10.3648 9.70758 10.317L13.3091 8.87639L4.5949 5.46648Z",fill:"black"})),c.a.createElement("div",{className:"hint-text"},a.hint)),c.a.createElement("ul",{className:"steps"},t.map((function(e,a){var t=a===r?"step selected":"step";return c.a.createElement("li",{className:t,key:e.title,onClick:function(){return m(a)},onMouseEnter:function(){return m(a)}},c.a.createElement("div",{className:"step-inner"},c.a.createElement("h3",{className:"step-title plain-text"},e.title),c.a.createElement("p",{className:"step-desc"},e.desc)))})))))))},h=t(20),b=t.n(h),N=t(27),f=t(139),w=t(136),g=function(e){var a=e.block,t=e.cases;return c.a.createElement("section",{id:"cases-section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"cases-inner"},c.a.createElement("div",{className:"inner-padding text-container"},c.a.createElement("h2",{className:"section-label"},a.title),a.desc&&c.a.createElement("p",{className:"plain-text"},a.desc)),c.a.createElement("ul",{className:"cases"},t.map((function(e){return c.a.createElement(f.a,b()({},e,{key:e.title}))}))),c.a.createElement("div",{className:"button-wrapper"},c.a.createElement(N.a,{to:w.a.cases.all,className:"btn btn-border"},"All cases")))))},k="#0094FF";a.default=function(){var e=Object(s.useRouteData)(),a=e.page,t=e.about_block,n=e.process_block,l=e.cases_block,u=e.advantages,E=e.specialties,p=e.steps,h=e.cases;return c.a.createElement(r,null,c.a.createElement(m.a,null),c.a.createElement("main",{id:"app-main"},c.a.createElement("section",{id:"hero-section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"inner-padding"},c.a.createElement("div",{className:"hero-inner glitch-area"},c.a.createElement("h1",{className:"hero-title glitch glitch-black","data-text":a.title},a.title,c.a.createElement("span",{"data-text":a.title_emphasis,className:"hero-title-emphasis glitch glitch-blue"},a.title_emphasis)),c.a.createElement("div",{className:"hero-subheader"},a.subheader)))),c.a.createElement("div",{className:"hero-next-wrapper"},c.a.createElement(i.a,{to:w.a.about,className:"hero-next-link"},c.a.createElement("svg",{viewBox:"0 0 24 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M2 2L12 12L22 2",stroke:k,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}))))),c.a.createElement(d,{block:t,advantages:u,specialties:E}),c.a.createElement(v,{block:n,steps:p}),c.a.createElement(g,{block:l,cases:h.filter((function(e){return e.show_in_review_block})).slice(0,3)})),c.a.createElement(o.a,null))}}}]);