(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{23:function(e,t,n){e.exports={timer:"Timer_timer__3l8LW",counter:"Timer_counter__3BjqM"}},34:function(e,t,n){"use strict";n.r(t);var c=n(7),r=n.n(c),i=n(25),s=n.n(i),u=(n(30),n(31),n(24)),a=n(3),j=function(e){var t=e.text,n=e.onClick,c=e.refBtn;return Object(a.jsx)("button",{ref:c,onClick:n,className:"btn waves-effect waves-light",children:t})},o=n(43),b=n(42),l=n(41),f=n(38),O=n(39),d=n(21),x=n(40),p=n(37),h=n(23),m=n.n(h),v=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(0),n=Object(u.a)(t,2),r=n[0],i=n[1],s=Object(c.useState)(!1),h=Object(u.a)(s,2),v=h[0],g=h[1];Object(c.useEffect)((function(){var e=new o.a;return Object(b.a)(1e3).pipe(Object(p.a)(e)).subscribe((function(){v&&i((function(e){return e+1e3}))})),function(){e.next(),e.complete()}}),[v]);if(e.current){var S=Object(l.a)(e.current,"click");S.pipe(Object(f.a)(S.pipe(Object(O.a)(300))),Object(d.a)((function(e){return e.length})),Object(x.a)((function(e){return 2===e}))).subscribe((function(){g(!1)}))}return Object(a.jsx)("div",{className:m.a.timer,children:Object(a.jsxs)("div",{className:"container center-align",children:[Object(a.jsx)("div",{className:m.a.counter,children:Object(a.jsx)("span",{children:new Date(r).toISOString().slice(11,19)})}),Object(a.jsx)("div",{children:Object(a.jsx)(j,{text:"Start/Stop",onClick:function(){v?g((function(e){return!e}))||i(0):g((function(e){return!e}))}})}),Object(a.jsxs)("div",{children:[Object(a.jsx)(j,{refBtn:e,text:"Wait"}),Object(a.jsx)(j,{text:"Reset",onClick:function(){return i(0)}})]})]})})},g=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(v,{})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),S()}},[[34,1,2]]]);
//# sourceMappingURL=main.d158e6fd.chunk.js.map