(function(){"use strict";var t={9032:function(t,n,o){var e=o(9199);const r={id:"app"},i={id:"wrapper"};function a(t,n,o,a,c,u){const f=(0,e.up)("NotificationBell");return(0,e.wg)(),(0,e.iD)("div",r,[(0,e._)("div",i,[(0,e.Wm)(f)])])}const c={class:"fancy-container"},u={href:"#",class:"position-relative"},f=(0,e._)("i",{class:"fa fa-bell _gray",style:{"font-size":"24px"}},null,-1),s=(0,e._)("span",{class:"my-text btnLnk"},"Visits",-1),l={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger _reduced"};function p(t,n,o,r,i,a){return(0,e.wg)(),(0,e.iD)("div",c,[(0,e._)("a",u,[f,s,(0,e._)("span",l,(0,e.zw)(i.notificationCount),1)])])}var d=o(1076),v={data(){return{notificationCount:0}},mounted(){this.fetchNotificationCount()},methods:{async fetchNotificationCount(){try{const t=await d.Z.get("http://127.0.0.1:8000/api/process-json/"),n=t.data.filter((t=>0===t.is_read));this.notificationCount=n.length}catch(t){console.error("Error fetching notification count:",t)}}}},h=o(89);const b=(0,h.Z)(v,[["render",p]]);var g=b,m={components:{NotificationBell:g}};const y=(0,h.Z)(m,[["render",a]]);var _=y;(0,e.ri)(_).mount("#app")}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(n,e,r,i){if(!e){var a=1/0;for(s=0;s<t.length;s++){e=t[s][0],r=t[s][1],i=t[s][2];for(var c=!0,u=0;u<e.length;u++)(!1&i||a>=i)&&Object.keys(o.O).every((function(t){return o.O[t](e[u])}))?e.splice(u--,1):(c=!1,i<a&&(a=i));if(c){t.splice(s--,1);var f=r();void 0!==f&&(n=f)}}return n}i=i||0;for(var s=t.length;s>0&&t[s-1][2]>i;s--)t[s]=t[s-1];t[s]=[e,r,i]}}(),function(){o.d=function(t,n){for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};o.O.j=function(n){return 0===t[n]};var n=function(n,e){var r,i,a=e[0],c=e[1],u=e[2],f=0;if(a.some((function(n){return 0!==t[n]}))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(u)var s=u(o)}for(n&&n(e);f<a.length;f++)i=a[f],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(s)},e=self["webpackChunkvue_autocomplete_component_example"]=self["webpackChunkvue_autocomplete_component_example"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=o.O(void 0,[998],(function(){return o(9032)}));e=o.O(e)})();
//# sourceMappingURL=app.js.map