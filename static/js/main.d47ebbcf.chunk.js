(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{108:function(e,t,n){"use strict";n.r(t);var r,c=n(0),a=n.n(c),i=n(31),o=n.n(i),u=n(30),s=n(10),l=n(12),d=n(25),p=n(53),b=n.n(p),f=n(44),j=n(2),x=n(5),h=Object(s.c)({name:"auth",initialState:{user:{name:null,email:null},token:null,error:null,isLoggedIn:!1,isFetchCurrentUser:!1,isLoading:!1},extraReducers:(r={},Object(j.a)(r,x.g.pending,(function(e,t){e.error=null,e.isLoading=!0})),Object(j.a)(r,x.g.fulfilled,(function(e,t){var n=t.payload;e.user=n.user,e.token=n.token,e.isLoggedIn=!0,e.isLoading=!1})),Object(j.a)(r,x.g.rejected,(function(e,t){e.isLoading=!1,e.error=t.error.message})),Object(j.a)(r,x.e.pending,(function(e,t){e.error=null,e.isLoading=!0})),Object(j.a)(r,x.e.fulfilled,(function(e,t){var n=t.payload;e.user=n.user,e.token=n.token,e.isLoggedIn=!0,e.isLoading=!1})),Object(j.a)(r,x.e.rejected,(function(e,t){e.isLoading=!1,e.error=t.error.message})),Object(j.a)(r,x.f.pending,(function(e,t){e.error=null,e.isLoading=!0})),Object(j.a)(r,x.f.fulfilled,(function(e,t){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1,e.isLoading=!1})),Object(j.a)(r,x.f.rejected,(function(e,t){e.isLoading=!1,e.error=t.error.message})),Object(j.a)(r,x.a.pending,(function(e,t){e.isFetchCurrentUser=!0,e.isLoading=!0})),Object(j.a)(r,x.a.fulfilled,(function(e,t){var n=t.payload;e.user=n,e.isLoggedIn=!0,e.isFetchCurrentUser=!1,e.isLoading=!1})),Object(j.a)(r,x.a.rejected,(function(e,t){e.isFetchCurrentUser=!1,e.isLoading=!1})),r)}).reducer,g={key:"auth",storage:b.a,whitelist:["token"]},O=Object(u.a)(Object(s.d)({serializableCheck:{ignoredActions:[d.a,d.f,d.b,d.c,d.d,d.e]}})),m=Object(l.b)({contacts:f.a,auth:Object(d.g)(g,h)}),v=Object(s.a)({reducer:m,middleware:O,devTools:!1}),y=Object(d.h)(v),w=n(27),k=n(14),z=n(54),L=(n(87),n(7)),C=n(28),S=n(36),I=n(1),F=["children","restricted","redirectTo"];var U=function(e){var t=e.children,n=e.restricted,r=void 0!==n&&n,c=e.redirectTo,a=void 0===c?"/":c,i=Object(S.a)(e,F),o=Object(k.c)(x.c)&&r;return Object(I.jsx)(L.b,Object(C.a)(Object(C.a)({},i),{},{children:o?Object(I.jsx)(L.a,{to:a}):t}))},T=["children","redirectTo"];var R=function(e){var t=e.children,n=e.redirectTo,r=void 0===n?"/":n,c=Object(S.a)(e,T),a=Object(k.c)(x.c);return Object(I.jsx)(L.b,Object(C.a)(Object(C.a)({},c),{},{children:a?t:Object(I.jsx)(L.a,{to:r})}))},A=n(56),J=n.n(A),P=n(9);var V=Object(P.a)("div",{target:"e1mwk27y0"})({name:"9argoc",styles:"position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center"});var B=function(){return Object(I.jsx)(V,{children:Object(I.jsx)(J.a,{type:"Audio",color:"purple",height:120,width:120,timeout:5e3})})};var E=Object(P.a)("div",{target:"e130fbo80"})({name:"d9hy43",styles:"display:flex;flex-direction:column;margin:0 auto;width:100%"});var W=function(e){var t=e.children;return Object(I.jsx)(E,{children:t})},q=n(26);var H=function(){var e=Object(k.c)(x.c);return Object(I.jsxs)(q.h,{children:[Object(I.jsx)(q.g,{activeStyle:{color:"#ca1277"},to:"/",exact:!0,children:"Home"}),e&&Object(I.jsx)(q.g,{activeStyle:{color:"#ca1277"},to:"/contacts",exact:!0,children:"Contacts"})]})};var M=function(){return Object(I.jsxs)(q.h,{children:[Object(I.jsx)(q.g,{activeStyle:{color:"#5e0c77"},to:"/register",exact:!0,children:"Join"}),Object(I.jsx)(q.g,{activeStyle:{color:"#5e0c77"},to:"/login",exact:!0,children:"Login"})]})};var D=Object(P.a)("div",{target:"e1ogl4l71"})({name:"gu1qke",styles:"display:flex;color:#ca1277;align-items:center;&>p{display:none;}@media screen and (min-width: 768px){&>p{display:block;font-size:12px;font-weight:500;text-transform:capitalize;margin-right:10px;margin-left:10px;}}"}),G=Object(P.a)("button",{target:"e1ogl4l70"})({name:"ljzdkp",styles:"display:inline-block;width:100%;padding:4px 10px;font-size:12px;font-weight:700;background-color:steelblue;color:white;border-radius:5px;border:1px solid transparent;cursor:pointer;transition:all 250ms cubic-bezier(0.4, 0, 0.2, 1);&:hover,&:focus{background-color:#ca1277;box-shadow:0 0 10px 0 rgba(0, 0, 0, 0.5);}"}),K=n.p+"static/media/defaultImage.50f8872b.jpg";var N=function(){var e=Object(k.c)(x.d),t=Object(k.b)(),n=K;return Object(I.jsxs)(D,{children:[Object(I.jsx)("img",{src:n,alt:"",width:"38"}),Object(I.jsxs)("p",{children:[" ","Welcome, ".concat(e)]}),Object(I.jsx)(G,{type:"button",onClick:function(){t(Object(x.f)())},children:"Log Out"})]})};var Q=Object(P.a)("header",{target:"euu65md1"})({name:"m6p4vr",styles:"background-color:lightsteelblue;box-shadow:rgba(188, 188, 235, 0.3) 0px 2px 8px,rgba(188, 188, 235, 0.3) 0px 4px 12px,rgba(188, 188, 235, 0.3) 0px 8px 28px"}),X=Object(P.a)("nav",{target:"euu65md0"})({name:"w964vz",styles:"display:flex;align-items:center;justify-content:space-between;width:100%;padding:20px 60px;font-size:16px;font-weight:700;text-transform:uppercase;@media screen and (min-width: 425px){font-size:18px;}@media screen and (min-width: 768px){font-size:22px;}"});var Y=function(){var e=Object(k.c)(x.c);return Object(I.jsx)(Q,{children:Object(I.jsx)(W,{children:Object(I.jsxs)(X,{children:[Object(I.jsx)(H,{}),e?Object(I.jsx)(N,{}):Object(I.jsx)(M,{})]})})})},Z=n(43);var $=function(){return Object(I.jsx)(Z.a,{duration:"5000",position:"top-right",containerStyle:{top:100},toastOptions:{style:{border:"2px solid #ca1277",padding:"12px",color:"#ca1277"}}})},_=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,269))})),ee=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(6)]).then(n.bind(null,266))})),te=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(4)]).then(n.bind(null,267))})),ne=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(9),n.e(2)]).then(n.bind(null,268))}));var re=function(){var e=Object(k.b)(),t=Object(k.c)(x.b);return Object(c.useEffect)((function(){e(Object(x.a)())}),[e]),!t&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(Y,{}),Object(I.jsxs)(W,{children:[Object(I.jsx)(c.Suspense,{fallback:Object(I.jsx)(B,{}),children:Object(I.jsxs)(L.d,{children:[Object(I.jsx)(U,{path:"/",exact:!0,children:Object(I.jsx)(_,{})}),Object(I.jsx)(U,{path:"/register",restricted:!0,children:Object(I.jsx)(ee,{})}),Object(I.jsx)(U,{path:"/login",redirectTo:"/contacts",restricted:!0,children:Object(I.jsx)(te,{})}),Object(I.jsx)(R,{path:"/contacts",redirectTo:"/login",children:Object(I.jsx)(ne,{})}),Object(I.jsx)(L.a,{to:"/"})]})}),Object(I.jsx)($,{})]})]})};o.a.render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(k.a,{store:v,children:Object(I.jsx)(z.a,{loading:null,persistor:y,children:Object(I.jsx)(w.a,{children:Object(I.jsx)(re,{})})})})}),document.getElementById("root"))},11:function(e,t,n){"use strict";n.d(t,"c",(function(){return j})),n.d(t,"a",(function(){return x})),n.d(t,"b",(function(){return h})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return m})),n.d(t,"f",(function(){return v}));var r=n(4),c=n.n(r),a=n(13),i=n(10),o=n(21),u=n.n(o);function s(){return l.apply(this,arguments)}function l(){return(l=Object(a.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/contacts");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return p.apply(this,arguments)}function p(){return(p=Object(a.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("/contacts",t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return f.apply(this,arguments)}function f(){return(f=Object(a.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.delete("/contacts/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}u.a.defaults.baseURL="https://connections-api.herokuapp.com";var j=Object(i.b)("contacts/fetchContacts",Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),x=Object(i.b)("contacts/addContact",function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),h=Object(i.b)("contacts/deleteContact",function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),g=n(32),O=function(e){return e.contacts.filter},m=Object(g.a)([O,function(e){return e.contacts.items}],(function(e,t){var n=e.toLowerCase();return t.filter((function(e){var t=e.name,r=e.number;return t.toLowerCase().includes(n)||r.includes(n)})).sort((function(e,t){return e.name.localeCompare(t.name)}))})),v=function(e){return e.contacts.isLoading}},26:function(e,t,n){"use strict";n.d(t,"h",(function(){return i})),n.d(t,"g",(function(){return o})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"f",(function(){return p})),n.d(t,"a",(function(){return b})),n.d(t,"i",(function(){return f}));var r=n(9),c=n(27),a=n(37);var i=Object(r.a)("div",{target:"exzchcy8"})({name:"64xo5g",styles:"&>a:first-of-type{margin-right:10px;}"}),o=Object(r.a)(c.b,{target:"exzchcy7"})({name:"lbpg6v",styles:"&:hover,&:focus{color:steelblue;}"}),u=Object(r.a)("div",{target:"exzchcy6"})({name:"czgfah",styles:"width:100%;height:calc(100vh - 60px);display:flex;align-items:center;justify-content:center"}),s=Object(r.a)(a.c,{target:"exzchcy5"})({name:"1fuwz96",styles:"display:flex;flex-direction:column;min-width:250px;padding:35px 20px;border:5px solid steelblue;border-radius:5px;background-color:lightsteelblue;@media screen and (min-width: 425px){width:325px;}@media screen and (min-width: 768px){padding:40px 30px;width:420px;}"}),l=Object(r.a)("h2",{target:"exzchcy4"})({name:"1nt8f1n",styles:"text-align:center;color:purple;font-size:20px;@media screen and (min-width: 425px){font-size:22px;}@media screen and (min-width: 768px){font-size:27px;}"}),d=Object(r.a)(a.b,{target:"exzchcy3"})({name:"1lv3d",styles:"width:100%;padding:8px 0 8px 4px;margin-bottom:5px;background-color:whitesmoke;font-size:16px;color:darkblue;border:none;outline:none;border-bottom:2px solid steelblue;&:focus,&:hover{border-bottom:2px solid #ca1277;}&::placeholder{color:grey;font-size:14px;}"}),p=Object(r.a)("label",{target:"exzchcy2"})({name:"sjyk5b",styles:"display:flex;align-items:center;font-size:16px;font-weight:400;color:#ca1277;margin-top:15px;margin-bottom:5px;&>svg{margin-right:5px;}"}),b=Object(r.a)("button",{target:"exzchcy1"})({name:"xip8n",styles:"display:inline-block;width:100%;padding:8px 12px;margin-top:20px;font-size:14px;font-weight:700;background-color:steelblue;color:white;text-transform:uppercase;border-radius:5px;border:1px solid transparent;cursor:pointer;transition:all 250ms cubic-bezier(0.4, 0, 0.2, 1);&:hover,&:focus{background-color:#ca1277;box-shadow:0px 1px 12px 4px rgba(255, 255, 255, 0.3);}"}),f=Object(r.a)("div",{target:"exzchcy0"})({name:"1n04vsk",styles:"font-size:14px;color:darkblue;margin-top:5px;margin-bottom:5px"})},44:function(e,t,n){"use strict";n.d(t,"b",(function(){return b}));var r,c,a,i=n(2),o=n(30),u=n(10),s=n(12),l=n(11),d=Object(u.c)({name:"items",initialState:[],extraReducers:(r={},Object(i.a)(r,l.c.fulfilled,(function(e,t){return t.payload})),Object(i.a)(r,l.a.fulfilled,(function(e,t){return[t.payload].concat(Object(o.a)(e))})),Object(i.a)(r,l.b.fulfilled,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),r)}),p=Object(u.c)({name:"filter",initialState:"",reducers:{setFilterValue:function(e,t){return t.payload}}}),b=p.actions.setFilterValue,f=Object(u.c)({name:"error",initialState:null,extraReducers:(c={},Object(i.a)(c,l.c.pending,(function(){return null})),Object(i.a)(c,l.c.rejected,(function(e,t){return t.error.message})),Object(i.a)(c,l.a.pending,(function(){return null})),Object(i.a)(c,l.a.rejected,(function(e,t){return t.error.message})),Object(i.a)(c,l.b.pending,(function(){return null})),Object(i.a)(c,l.b.rejected,(function(e,t){return t.error.message})),c)}),j=Object(u.c)({name:"isLoading",initialState:!1,extraReducers:(a={},Object(i.a)(a,l.c.pending,(function(){return!0})),Object(i.a)(a,l.c.fulfilled,(function(){return!1})),Object(i.a)(a,l.c.rejected,(function(){return!1})),Object(i.a)(a,l.a.pending,(function(){return!0})),Object(i.a)(a,l.a.fulfilled,(function(){return!1})),Object(i.a)(a,l.a.rejected,(function(){return!1})),Object(i.a)(a,l.b.pending,(function(){return!0})),Object(i.a)(a,l.b.fulfilled,(function(){return!1})),Object(i.a)(a,l.b.rejected,(function(){return!1})),a)}),x=d.reducer,h=p.reducer,g=f.reducer,O=j.reducer;t.a=Object(s.b)({items:x,filter:h,error:g,isLoading:O})},5:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"g",(function(){return y})),n.d(t,"e",(function(){return w})),n.d(t,"f",(function(){return k})),n.d(t,"a",(function(){return z}));var r=function(e){return e.auth.isLoggedIn},c=function(e){return e.auth.user.name},a=function(e){return e.auth.isFetchCurrentUser},i=n(4),o=n.n(i),u=n(13),s=n(10),l=n(21),d=n.n(l);d.a.defaults.baseURL="https://connections-api.herokuapp.com";var p=function(e){d.a.defaults.headers.common.Authorization="Bearer ".concat(e)},b=function(){d.a.defaults.headers.common.Authorization=""};function f(e){return j.apply(this,arguments)}function j(){return(j=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/users/signup",t);case 2:return n=e.sent,r=n.data,p(r.token),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return h.apply(this,arguments)}function h(){return(h=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/users/login",t);case 2:return n=e.sent,r=n.data,p(r.token),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/users/logout");case 2:b();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(t),e.next=3,d.a.get("/users/current");case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=Object(s.b)("auth/register",function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),w=Object(s.b)("auth/logIn",function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),k=Object(s.b)("auth/logOut",Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:case"end":return e.stop()}}),e)})))),z=Object(s.b)("auth/getCurrentUser",function(){var e=Object(u.a)(o.a.mark((function e(t,n){var r,c,a,i,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState,c=n.rejectWithValue,a=r(),null!==(i=a.auth.token)){e.next=5;break}return e.abrupt("return",c());case 5:return e.next=7,m(i);case 7:return u=e.sent,e.abrupt("return",u);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},87:function(e,t,n){}},[[108,7,8]]]);
//# sourceMappingURL=main.d47ebbcf.chunk.js.map