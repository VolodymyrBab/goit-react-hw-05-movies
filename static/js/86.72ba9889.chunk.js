"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[86],{243:function(A,t,n){function r(A,t,n,r,e,a,c){try{var o=A[a](c),u=o.value}catch(s){return void n(s)}o.done?t(u):Promise.resolve(u).then(r,e)}function e(A){return function(){var t=this,n=arguments;return new Promise((function(e,a){var c=A.apply(t,n);function o(A){r(c,e,a,o,u,"next",A)}function u(A){r(c,e,a,o,u,"throw",A)}o(void 0)}))}}n.d(t,{yA:function(){return s},Ku:function(){return v},ts:function(){return Q},Q_:function(){return d},fI:function(){return C},Aj:function(){return i}});var a=n(687),c=n.n(a),o="https://api.themoviedb.org/3",u="86ff1474d02492b68b238125fe79bb52",s="https://image.tmdb.org/t/p/w500";function i(){return p.apply(this,arguments)}function p(){return(p=e(c().mark((function A(){var t;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,fetch("".concat(o,"/trending/movie/day?api_key=").concat(u));case 2:return t=A.sent,A.next=5,t.json();case 5:return A.abrupt("return",A.sent);case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function d(A,t){return f.apply(this,arguments)}function f(){return(f=e(c().mark((function A(t,n){var r;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,fetch("".concat(o,"/search/movie?api_key=").concat(u,"&query=").concat(n,"&page=").concat(t));case 2:return r=A.sent,A.next=5,r.json();case 5:return A.abrupt("return",A.sent);case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function Q(A){return l.apply(this,arguments)}function l(){return(l=e(c().mark((function A(t){var n;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,fetch("".concat(o,"/movie/").concat(t,"?api_key=").concat(u));case 2:return n=A.sent,A.next=5,n.json();case 5:return A.abrupt("return",A.sent);case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function v(A){return g.apply(this,arguments)}function g(){return(g=e(c().mark((function A(t){var n;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,fetch("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(u));case 2:return n=A.sent,A.next=5,n.json();case 5:return A.abrupt("return",A.sent);case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function C(A){return k.apply(this,arguments)}function k(){return(k=e(c().mark((function A(t){var n;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,fetch("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(u));case 2:return n=A.sent,A.next=5,n.json();case 5:return A.abrupt("return",A.sent);case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}},86:function(A,t,n){n.r(t),n.d(t,{default:function(){return l}});var r,e,a=n(439),c=n(791),o=n(243),u=n(689),s=n(168),i=n(686),p=i.Z.li(r||(r=(0,s.Z)(["\ndisplay: block;\nwidth: 300px;"]))),d=n(184),f=function(A){var t=A.poster,n=A.name,r=A.character;return(0,d.jsxs)(p,{children:[(0,d.jsx)("img",{src:t?"".concat(o.yA).concat(t):"data:image/jpeg;base64,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",alt:n}),(0,d.jsxs)("p",{children:["Name: ",n]}),(0,d.jsxs)("p",{children:[" Character: ",r]})]})},Q=i.Z.ul(e||(e=(0,s.Z)(["\nlist-style: none;\ndisplay: grid;\ngap: 24px;\ngrid-template-columns: 300px 300px 300px 300px;\njustify-content: center;\n"])));function l(){var A=(0,c.useState)([]),t=(0,a.Z)(A,2),n=t[0],r=t[1],e=(0,u.UO)().movieId;return(0,c.useEffect)((function(){e&&(0,o.Ku)(e).then((function(A){return r(A.cast)}))}),[e]),(0,d.jsx)("div",{children:(0,d.jsxs)(Q,{children:[0===n.length&&(0,d.jsx)("p",{children:"Sorry! We have no information about the actors."}),n&&n.map((function(A){var t=A.id,n=A.profile_path,r=A.name,e=A.character;return(0,d.jsx)(f,{poster:n,name:r,character:e},t)}))]})})}}}]);
//# sourceMappingURL=86.72ba9889.chunk.js.map