"use strict";(self.webpackChunkabptest=self.webpackChunkabptest||[]).push([[80],{80:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(165),a=n(861),s=n(439),u=n(243);u.Z.defaults.baseURL="https://vpic.nhtsa.dot.gov/api/";var c={BASE_URL:"https://vpic.nhtsa.dot.gov/api/",query:[],setQuery:function(e){c.query=e},resetQuery:function(){c.query=""},searchVin:function(){var e=this;return(0,a.Z)((0,r.Z)().mark((function t(){var n,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(e.BASE_URL,"vehicles/decodevin/").concat(e.query,"?format=json"),t.next=3,u.Z.get(n);case 3:return a=t.sent,t.abrupt("return",a.data.Results);case 5:case"end":return t.stop()}}),t)})))()}},i=n(791),o=n(689),f="home_input__x8Mr-",h=n(686),p=n.n(h),l=n(184),v=function(){var e=(0,i.useState)(""),t=(0,s.Z)(e,2),n=t[0],u=t[1],h=(0,i.useState)(""),v=(0,s.Z)(h,2),d=v[0],b=v[1],x=(0,o.s0)(),y=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c.resetQuery(),c.setQuery(n),e.next=5,c.searchVin();case 5:t=e.sent,b(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){d.length>0&&Z()}));var Z=function(){x("variables",{state:{vinLists:d}})},g=n.length>0;return(0,l.jsxs)("div",{children:[(0,l.jsx)("input",{type:"text",onChange:function(e){u(e.target.value)},className:f}),g?(0,l.jsx)("button",{onClick:function(){n.length>17||["!","@","#","$","%"].some((function(e){return n.includes(e)}))?p().Notify.failure("Invalid number or prohibited characters"):y()},children:"Seacrh"}):(0,l.jsx)("button",{disabled:!0,children:"Search"})]})}}}]);
//# sourceMappingURL=80.c60726b2.chunk.js.map