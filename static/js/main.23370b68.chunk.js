(this.webpackJsonpapartment_cards=this.webpackJsonpapartment_cards||[]).push([[0],{11:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r={mainColor:"#4089F6",secondColor:"#444444",thirdColor:"#FFFF00",activeColor:"#ff6347",moonColor:"#F4F6F0"}},32:function(n,t,e){"use strict";e.r(t);var r=e(3),o=e(8),c=e(14),a=e.n(c),i=e(16),s=e(0),u=e.n(s),l=e(6),p=e(2),d=e(17),f=function n(){Object(d.a)(this,n)};f.data=[{id:1,price:14e3,square:29,img:"https://novostroyki.shop/wp-content/uploads/2021/01/2250619.jpg"},{id:2,price:2e4,square:45,img:"https://urbanlook.ru/wp-content/uploads/2017/10/%D0%90%D0%BF%D0%B0%D1%80%D1%82%D0%B0%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-552x367.jpg"},{id:3,price:9e3,square:21,img:"https://cdn.mskguru.ru/uploads/news/spros-na-apartamenty-moskve-v-pervom-kvartale-zametno-snizilsja_l.jpg"},{id:4,price:1e4,square:30,img:"https://rcmm.ru/uploads/posts/2016-11_/1478682970_ft2085841.jpg"},{id:5,price:18e3,square:31.8,img:"https://andornn.ru/upload/iblock/cf1/showroom_-%2815%29.jpg"},{id:6,price:17e3,square:35,img:"https://cdn.iz.ru/sites/default/files/styles/1920x1080/public/article-2021-01/kitchen-living-room-4043091_1920.jpg?itok=JsuzfmRf"}],f.getApartments=function(){return new Promise((function(n){setTimeout((function(){return n(f.data)}),500)}))};var b,h=e(34),j=e(35),m=e(11);!function(n){n.Dark="dark",n.Light="light"}(b||(b={}));var g,x,O,k,v,y,w,C,D,F,E,S={fetching:!0,theme:b.Light},z="SET_FETCHING",_="SET_THEME",B=function(n){return{type:z,payload:{fetching:n}}},T=e(7),q=Object(T.a)((function(n){return n.ui}),(function(n){return n.theme})),M=Object(T.a)((function(n){return n.ui}),(function(n){return n.fetching})),A=e(1),L=function(){var n=Object(l.b)(),t=Object(l.c)(q);return Object(A.jsxs)(I,{color:t===b.Light?m.a.moonColor:m.a.thirdColor,children:[Object(A.jsx)(H,{type:"checkbox",id:"switch",onClick:function(){n(function(n){return{type:_,payload:{theme:n}}}(t===b.Dark?b.Light:b.Dark))}}),Object(A.jsxs)(J,{htmlFor:"switch",children:[Object(A.jsx)(N,{size:24}),Object(A.jsx)(R,{size:24})]})]})},N=Object(p.c)(h.a)(g||(g=Object(r.a)(["\n  position: absolute;\n  top: 3px;\n  left: 3px;\n"]))),R=Object(p.c)(j.a)(x||(x=Object(r.a)(["\n  position: absolute;\n  top: 3px;\n  right: 3px;\n"]))),H=p.c.input(O||(O=Object(r.a)(["\n  &:checked + label {\n    background: ",";\n    border: 2px solid #808080;\n  }\n\n  &:checked + label:after {\n    left: calc(100% - 3px);\n    transform: translateX(-100%);\n  }\n"])),(function(n){return n.theme.backgroundColor})),J=p.c.label(k||(k=Object(r.a)(["\n  cursor: pointer;\n  text-indent: 1;\n  width: 60px;\n  height: 30px;\n  background: #808080;\n  display: block;\n  border-radius: 30px;\n  position: relative;\n  border: 2px solid transparent;\n  cursor: pointer;\n\n  &:active:after {\n    width: 30px;\n  }\n\n  &:after {\n    content: '';\n    position: absolute;\n    top: 3px;\n    left: 3px;\n    width: 24px;\n    height: 24px;\n    background: #fffff0;\n    border-radius: 24px;\n    transition: 0.3s;\n    z-index: 2;\n  }\n"]))),I=p.c.div(v||(v=Object(r.a)(["\n  position: fixed;\n  top: 10px;\n  left: 10px;\n  color: ",";\n  transition: 0.3s;\n\n  input[type='checkbox'] {\n    height: 0;\n    width: 0;\n    visibility: hidden;\n  }\n"])),(function(n){return n.color})),P=p.c.div(y||(y=Object(r.a)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),U=p.c.div(C||(C=Object(r.a)(["\n  width: 50px;\n  height: 50px;\n  border-top: 2px solid #00b2ff;\n  border-right: 2px solid transparent;\n  margin: 0 8px;\n  animation: "," 0.6s linear infinite;\n  background: transparent;\n  border-radius: 50%;\n"])),(function(){return Object(p.d)(w||(w=Object(r.a)(["\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n"])))})),G=function(){return Object(A.jsx)(P,{children:Object(A.jsx)(U,{})})},X={dark:{backgroundColor:"#282c34",textColor:"#282c34",reverseColor:"#fffff0"},light:{backgroundColor:"#fffff0",textColor:"#fffff0",reverseColor:"#282c34"}},K=[],Q="SET_APARTMENTS",V=function(n){return{type:Q,payload:{apartments:n}}},W=Object(T.a)((function(n){return n.apartments}),(function(n){return n})),Y=Object(s.lazy)((function(){return e.e(3).then(e.bind(null,36)).then((function(n){return{default:n.ApartmentCard}}))})),Z=function(){var n=Object(l.c)(q),t=Object(l.b)(),e=Object(l.c)(W),r=Object(l.c)(M);return Object(s.useEffect)((function(){console.log("%c React version: ".concat(u.a.version),"color: ".concat(m.a.mainColor))}),[]),Object(s.useEffect)((function(){Object(i.a)(a.a.mark((function n(){var e;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.getApartments();case 3:e=n.sent,t(V(e)),t(B(!1)),n.next=11;break;case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0.message);case 11:return n.prev=11,t(B(!1)),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))()}),[]),r?Object(A.jsx)(G,{}):Object(A.jsx)(p.a,{theme:X[n],children:Object(A.jsx)(s.Suspense,{fallback:Object(A.jsx)(G,{}),children:Object(A.jsxs)(nn,{children:[Object(A.jsx)($,{children:e.map((function(n){return Object(s.createElement)(Y,Object(o.a)(Object(o.a)({},n),{},{key:n.id}))}))}),Object(A.jsx)(L,{})]})})})},$=p.c.div(D||(D=Object(r.a)(["\n  margin: 0 auto;\n  width: calc(100% - 85px);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  font-size: calc(10px + 2vmin);\n"]))),nn=p.c.main(F||(F=Object(r.a)(["\n  background-color: ",";\n  min-height: 100vh;\n"])),(function(n){return n.theme.backgroundColor})),tn=e(12),en=e(21),rn=e(4),on=Object(rn.b)({apartments:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return t.payload.apartments;default:return n}},ui:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(o.a)(Object(o.a)({},n),{},{fetching:t.payload.fetching});case _:return Object(o.a)(Object(o.a)({},n),{},{theme:t.payload.theme});default:return n}}}),cn=Object(en.a)({reducer:on}),an=Object(p.b)(E||(E=Object(r.a)(["\n  body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n      monospace;\n  }\n"])));Object(tn.render)(Object(A.jsxs)(u.a.StrictMode,{children:[Object(A.jsx)(an,{}),Object(A.jsx)(l.a,{store:cn,children:Object(A.jsx)(Z,{})})]}),document.querySelector("#root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.23370b68.chunk.js.map