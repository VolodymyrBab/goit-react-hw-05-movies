"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[414],{243:function(n,e,t){function r(n,e,t,r,s,a,i){try{var c=n[a](i),o=c.value}catch(u){return void t(u)}c.done?e(o):Promise.resolve(o).then(r,s)}function s(n){return function(){var e=this,t=arguments;return new Promise((function(s,a){var i=n.apply(e,t);function c(n){r(i,s,a,c,o,"next",n)}function o(n){r(i,s,a,c,o,"throw",n)}c(void 0)}))}}t.d(e,{yA:function(){return u},Ku:function(){return x},ts:function(){return h},Q_:function(){return f},fI:function(){return j},Aj:function(){return p}});var a=t(687),i=t.n(a),c="https://api.themoviedb.org/3",o="86ff1474d02492b68b238125fe79bb52",u="https://image.tmdb.org/t/p/w500";function p(){return d.apply(this,arguments)}function d(){return(d=s(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"/trending/movie/day?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n,e){return l.apply(this,arguments)}function l(){return(l=s(i().mark((function n(e,t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"/search/movie?api_key=").concat(o,"&query=").concat(t,"&page=").concat(e));case 2:return r=n.sent,n.next=5,r.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=s(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"/movie/").concat(e,"?api_key=").concat(o));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=s(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"/movie/").concat(e,"/credits?api_key=").concat(o));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function j(n){return w.apply(this,arguments)}function w(){return(w=s(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"/movie/").concat(e,"/reviews?api_key=").concat(o));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},701:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,s,a,i,c=t(439),o=t(689),u=t(791),p=t(243),d=t.p+"static/media/placeholder.556def56eb9b7ef79e04.jpg",f=t(168),l=t(686),h=t(87),v=(l.Z.button(r||(r=(0,f.Z)(["\n  display: block;\n    font-family: 'Montserrat',sans-serif;\n    margin: 20px;\n    background-color: #FB7756;\n    border: none;\n    border-radius: 3px;\n    color: white;\n    width: 100px;\n    text-align: center;\n    text-decoration: none;\n    font-size: 16px;\n    cursor: pointer;\n    height: 30px;\n}"]))),(0,l.Z)(h.rU)(s||(s=(0,f.Z)(["\n  display: block;\n    font-family: 'Montserrat',sans-serif;\n    margin: 20px;\n    background-color: #FB7756;\n    border: none;\n    border-radius: 3px;\n    color: white;\n    width: 100px;\n    text-align: center;\n    text-decoration: none;\n    font-size: 16px;\n    cursor: pointer;\n}"])))),x=l.Z.div(a||(a=(0,f.Z)(["\npadding: 20px;\nfont-size: 20px;\n"]))),m=l.Z.div(i||(i=(0,f.Z)(["\npadding-left: 20px;\npadding-right: 20px;\ndisplay: flex"]))),j=t(184);function w(){var n,e,t,r,s,a,i=(0,u.useState)({}),f=(0,c.Z)(i,2),l=f[0],h=f[1],w=(0,o.UO)().movieId,y=(0,o.TH)();(0,u.useEffect)((function(){w&&(0,p.ts)(w).then(h)}),[w]);return(0,j.jsxs)("div",{children:[(0,j.jsx)(v,{to:null!==(n=null===(e=y.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies",children:"Back"}),(0,j.jsxs)(m,{children:[(0,j.jsx)("img",{src:l.poster_path?"".concat(p.yA).concat(l.poster_path):d,alt:l.title}),(0,j.jsxs)(x,{children:[(0,j.jsxs)("p",{children:[(0,j.jsxs)("span",{children:[l.title,l.name]}),(0,j.jsx)("span",{children:l.first_air_date?l.first_air_date.slice(0,4):l.release_date?l.release_date.slice(0,4):""===l.first_air_date||""===l.release_date?l.status:void 0})]}),(0,j.jsx)("p",{children:l.tagline}),(0,j.jsxs)("p",{children:[(0,j.jsx)("span",{children:"User Score:"}),(0,j.jsxs)("span",{children:[Math.round(l.vote_average/10*100),"%"]})]}),(0,j.jsxs)("p",{children:["Overview: ",l.overview]}),(0,j.jsxs)("p",{children:["Genres: ",l.genres&&l.genres.map((function(n){return(0,j.jsxs)("span",{children:["| ",n.name," | "]},n.id)}))]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("p",{children:"Additional information"}),(0,j.jsx)(v,{to:"/movies/".concat(w,"/Cast"),state:{from:null!==(t=null===(r=y.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"movies"},children:"Cast"}),(0,j.jsx)(v,{to:"/movies/".concat(w,"/Reviews"),state:{from:null!==(s=null===(a=y.state)||void 0===a?void 0:a.from)&&void 0!==s?s:"movies"},children:"Reviews"})]})]})]}),(0,j.jsx)(u.Suspense,{fallback:null,children:(0,j.jsx)(o.j3,{})})]})}}}]);
//# sourceMappingURL=414.2b7cceb4.chunk.js.map