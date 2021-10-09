(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{168:function(e,t,n){},169:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(31),r=n.n(c),o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,171)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))},s=n(8),i=n(36),u=n(63),l="[Auth] login",d="[Auth] logout",j="[UI] Set Error",b="[UI] Remove Error",p="[UI] Start loading",f="[UI] Finish loading",h="[Notes] New note",m="[Notes] Set active note",O="[Notes] Load notes",x="[Notes] Update note saved",v="[Notes] Delete note",g="[Notes] Logout Cleaning",_=n(45),y=n(6),w={},N={loading:!1,msError:null},k="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||null,C=Object(i.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return{uid:t.payload.uid,name:t.payload.displayName};case d:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(y.a)(Object(y.a)({},e),{},{msError:t.payload});case b:return Object(y.a)(Object(y.a)({},e),{},{msError:null});case p:return Object(y.a)(Object(y.a)({},e),{},{loading:!0});case f:return Object(y.a)(Object(y.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(y.a)(Object(y.a)({},e),{},{active:Object(y.a)({},t.payload)});case h:return Object(y.a)(Object(y.a)({},e),{},{notes:[t.payload].concat(Object(_.a)(e.notes))});case O:return Object(y.a)(Object(y.a)({},e),{},{notes:Object(_.a)(t.payload)});case x:return Object(y.a)(Object(y.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case v:return Object(y.a)(Object(y.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case g:return Object(y.a)(Object(y.a)({},e),{},{active:null,notes:[]});default:return e}}}),E=Object(i.c)(C,k(Object(i.a)(u.a))),S=n(10),I=n.n(S),A=n(13),P=n(20),D=n(24),L=n(7),F=n(28);n(170),n(75);F.a.initializeApp({apiKey:"AIzaSyC7wcQ_DTGfmkee1M2Vh_FDUDRBlV_vbTg",authDomain:"react-app-cc2e5.firebaseapp.com",projectId:"react-app-cc2e5",storageBucket:"react-app-cc2e5.appspot.com",messagingSenderId:"156524881274",appId:"1:156524881274:web:dfe5dd5ced63f91ce5e2c3"});var U=F.a.firestore(),R=new F.a.auth.GoogleAuthProvider,T=n(21),B=n.n(T),G=function(){var e=Object(A.a)(I.a.mark((function e(t){var n,a,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return" https://api.cloudinary.com/v1_1/dicn2ueb2/upload",(n=new FormData).append("upload_preset","React-journal"),n.append("file",t),e.prev=4,e.next=7,fetch(" https://api.cloudinary.com/v1_1/dicn2ueb2/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return c=e.sent,e.abrupt("return",c.secure_url);case 15:return e.abrupt("return",null);case 16:e.next=21;break;case 18:throw e.prev=18,e.t0=e.catch(4),e.t0;case 21:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(A.a)(I.a.mark((function e(t){var n,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.collection("".concat(t,"/journal/notes")).get();case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(y.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(e,t){return{type:m,payload:Object(y.a)({id:e},t)}},J=function(e,t){return{type:h,payload:Object(y.a)({id:e},t)}},V=function(e){return function(){var t=Object(A.a)(I.a.mark((function t(n){var a;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W(e);case 2:a=t.sent,n(M(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},M=function(e){return{type:O,payload:e}},X=function(e){return function(){var t=Object(A.a)(I.a.mark((function t(n,a){var c,r;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,e.url||delete e.url,delete(r=Object(y.a)({},e)).id,t.next=6,U.doc("".concat(c,"/journal/notes/").concat(e.id)).update(r);case 6:n(q(e.id,r)),B.a.fire("Saved",e.title,"success");case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},q=function(e,t){return{type:x,payload:{id:e,note:Object(y.a)({id:e},t)}}},K=function(e){return{type:v,payload:e}},Q=n(34),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(P.a)(t,2),c=n[0],r=n[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},s=function(e){var t=e.target;r(Object(y.a)(Object(y.a)({},c),{},Object(Q.a)({},t.name,t.value)))};return[c,s,o]},Y=n(1),Z=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.notes})).active;return Object(Y.jsxs)("div",{className:"notes__appbar",children:[Object(Y.jsx)("span",{children:"11 de Agosto de 2021"}),Object(Y.jsx)("input",{type:"file",id:"fileSelector",name:"file",style:{display:"none"},onChange:function(t){var n=t.target.files[0];n&&e(function(e){return function(){var t=Object(A.a)(I.a.mark((function t(n,a){var c,r;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().notes.active,B.a.fire({title:"Uploading...",text:"Pleas wait...",allowOutsideClick:!1,onBeforeOpen:function(){B.a.showLoading()}}),t.next=4,G(e);case 4:r=t.sent,c.url=r,n(X(c)),B.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(Y.jsxs)("div",{children:[Object(Y.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()},children:"Picture"}),Object(Y.jsx)("button",{className:"btn",onClick:function(){e(X(t))},children:"Save"})]})]})},$=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.notes})).active,n=H(t),c=Object(P.a)(n,3),r=c[0],o=c[1],i=c[2],u=r.body,l=r.title,d=r.id,j=Object(a.useRef)(t.id);Object(a.useEffect)((function(){t.id!==j.current&&(i(t),j.current=t.id)}),[t,i]),Object(a.useEffect)((function(){e(z(r.id,Object(y.a)({},r)))}),[r,e]);return Object(Y.jsxs)("div",{className:"notes__main-content",children:[Object(Y.jsx)(Z,{}),Object(Y.jsxs)("div",{className:"notes__content",children:[Object(Y.jsx)("input",{type:"text",placeholder:"Some awesome title",className:"notes__title-input",autoComplete:"off",value:l,onChange:o,name:"title"}),Object(Y.jsx)("textarea",{placeholder:"What happend today",className:"notes__textarea",value:u,name:"body",onChange:o}),t.url&&Object(Y.jsx)("div",{className:"notes__image",children:Object(Y.jsx)("img",{src:t.url,alt:"Perro"})})]}),Object(Y.jsx)("button",{class:"btn btn-danger",onClick:function(){e(function(e){return function(){var t=Object(A.a)(I.a.mark((function t(n,a){var c;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,t.next=3,U.doc("".concat(c,"/journal/notes/").concat(e)).delete();case 3:n(K(e));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(d))},children:"Delete"})]})},ee=function(){return Object(Y.jsxs)("div",{className:"nothing__main-content",children:[Object(Y.jsxs)("p",{children:["Select something",Object(Y.jsx)("br",{}),"or create an entry!"]}),Object(Y.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},te=function(e){return{type:j,payload:e}},ne=function(){return{type:f}},ae=function(e,t){return function(n){n({type:p}),F.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n(ce(t.uid,t.displayName)),n(ne())})).catch((function(e){n(ne()),B.a.fire("Error",e.message,"error")}))}},ce=function(e,t){return{type:l,payload:{uid:e,displayName:t}}},re=function(){return{type:d}},oe=n(64),se=n.n(oe),ie=function(e){var t=e.id,n=e.date,a=e.title,c=e.body,r=e.url,o=se()(n),i=Object(s.b)();return Object(Y.jsxs)("div",{className:"journal__entry pointer",onClick:function(){i(z(t,{date:n,title:a,body:c,url:r}))},children:[r&&Object(Y.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(r,")")}}),Object(Y.jsxs)("div",{className:"journal__entry-body",children:[Object(Y.jsx)("p",{className:"journal_entry-title",children:a}),Object(Y.jsx)("p",{className:"journal_entry-content",children:c})]}),Object(Y.jsxs)("div",{className:"journal__entry-date-box",children:[Object(Y.jsx)("span",{children:o.format("dddd")}),Object(Y.jsx)("h4",{children:o.format("Do")})]})]})},ue=function(){var e=Object(s.c)((function(e){return e.notes})).notes;return Object(Y.jsx)("div",{className:"journal__entries",children:e.map((function(e){return Object(Y.jsx)(ie,Object(y.a)({},e),e.id)}))})},le=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})).name;return Object(Y.jsxs)("aside",{className:"journal__sidebar",children:[Object(Y.jsxs)("div",{className:"jorunal__sidebar-navbar",children:[Object(Y.jsxs)("h3",{className:"mt-5",children:[Object(Y.jsx)("i",{className:"far fa-moon"}),Object(Y.jsxs)("span",{children:[" ",t," "]})]}),Object(Y.jsx)("button",{className:"btn",onClick:function(){e(function(){var e=Object(A.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.auth().signOut();case 2:t(re()),t({type:g});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"LogOut"})]}),Object(Y.jsxs)("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(A.a)(I.a.mark((function e(t,n){var a,c,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,c={title:"",body:"",date:(new Date).getTime()},e.next=4,U.collection("".concat(a,"/journal/notes")).add(c);case 4:r=e.sent,t(z(r.id,c)),t(J(r.id,c));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(Y.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(Y.jsx)("p",{className:"mt-5",children:"New entry"})]}),Object(Y.jsx)(ue,{})]})},de=function(){var e=Object(s.c)((function(e){return e.notes})).active;return Object(Y.jsxs)("div",{className:"journal__main-content animate__animated animate__fadeIn animate__faster",children:[Object(Y.jsx)(le,{}),Object(Y.jsx)("main",{children:e?Object(Y.jsx)($,{}):Object(Y.jsx)(ee,{})})]})},je=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).loading,n=H({email:"juan@gamil.com",password:"123456"}),a=Object(P.a)(n,2),c=a[0],r=a[1],o=c.email,i=c.password;return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)("h3",{className:"auth__title",children:"Login"}),Object(Y.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(ae(o,i))},className:"animate__animated animate__fadeIn animate__faster",children:[Object(Y.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:o,onChange:r}),Object(Y.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",autoComplete:"off",value:i,onChange:r}),Object(Y.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t,children:"Login"}),Object(Y.jsxs)("div",{className:"auth__social-networks",children:[Object(Y.jsx)("p",{children:"Login with social networks"}),Object(Y.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){F.a.auth().signInWithPopup(R).then((function(t){var n=t.user;e(ce(n.uid,n.displayName))}))}))},children:[Object(Y.jsx)("div",{className:"google-icon-wrapper",children:Object(Y.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(Y.jsx)("p",{className:"btn-text",children:Object(Y.jsx)("b",{children:"Sign in with google"})})]})]}),Object(Y.jsx)(D.b,{to:"/auth/register",className:"link",children:"Create new account"})]})]})},be=n(65),pe=n.n(be),fe=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).msError,n=H({name:"Juan",email:"juan@gamil.com",password:"123456",password2:"123456"}),a=Object(P.a)(n,2),c=a[0],r=a[1],o=c.name,i=c.email,u=c.password,l=c.password2,d=function(){return 0===o.trim().length?(e(te("Nombre no valido")),!1):pe.a.isEmail(i)?u!==l||u.length<5?(e(te("Passoword debe tener 6 o mas caracteres")),!1):(e({type:b}),!0):(e(te("Email no valido")),!1)};return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)("h3",{className:"auth__title",children:"Register"}),Object(Y.jsxs)("form",{onSubmit:function(t){t.preventDefault(),d()&&e(function(e,t,n){return function(a){F.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(A.a)(I.a.mark((function e(t){var c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,c.updateProfile({displayName:n});case 3:console.log(c),a(ce(c.uid,c.displayName));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){B.a.fire("Error",e.message,"error")}))}}(i,u,o))},className:"animate__animated animate__fadeIn animate__faster",children:[t&&Object(Y.jsx)("div",{className:"auth__alert-error",children:t}),Object(Y.jsx)("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:o,onChange:r}),Object(Y.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:i,onChange:r}),Object(Y.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",autoComplete:"off",value:u,onChange:r}),Object(Y.jsx)("input",{type:"password",placeholder:"Confirm",name:"password2",className:"auth__input",autoComplete:"off",value:l,onChange:r}),Object(Y.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-5",disabled:!1,children:"Register"}),Object(Y.jsx)(D.b,{to:"/auth/login",className:"link",children:"Already Register"})]})]})},he=function(){return Object(Y.jsx)("div",{className:"auth__main",children:Object(Y.jsx)("div",{className:"auth__box-container",children:Object(Y.jsxs)(L.d,{children:[Object(Y.jsx)(L.b,{exact:!0,path:"/auth/login",component:je}),Object(Y.jsx)(L.b,{exact:!0,path:"/auth/register",component:fe}),Object(Y.jsx)(L.a,{to:"/auth/login"})]})})})},me=n(35),Oe=["isAuthenticated","component"],xe=function(e){var t=e.isAuthenticated,n=e.component,a=Object(me.a)(e,Oe);return Object(Y.jsx)(L.b,Object(y.a)(Object(y.a)({},a),{},{component:function(e){return t?Object(Y.jsx)(n,Object(y.a)({},e)):Object(Y.jsx)(L.a,{to:"/auth/login"})}}))},ve=["isAuthenticated","component"],ge=function(e){var t=e.isAuthenticated,n=e.component,a=Object(me.a)(e,ve);return Object(Y.jsx)(L.b,Object(y.a)(Object(y.a)({},a),{},{component:function(e){return t?Object(Y.jsx)(L.a,{to:"/"}):Object(Y.jsx)(n,Object(y.a)({},e))}}))},_e=function(){var e=Object(s.b)(),t=Object(a.useState)(!0),n=Object(P.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(!1),i=Object(P.a)(o,2),u=i[0],l=i[1];return Object(a.useEffect)((function(){F.a.auth().onAuthStateChanged(function(){var t=Object(A.a)(I.a.mark((function t(n){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===n||void 0===n?void 0:n.uid)?(e(ce(n.uid,n.displayName)),e(V(n.uid)),l(!0)):l(!1),r(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,r,l]),c?Object(Y.jsx)("h1",{children:"Espere Por favor...."}):Object(Y.jsx)(D.a,{children:Object(Y.jsx)("div",{children:Object(Y.jsxs)(L.d,{children:[Object(Y.jsx)(ge,{isAuthenticated:u,path:"/auth",component:he}),Object(Y.jsx)(xe,{isAuthenticated:u,exact:!0,path:"/",component:de}),Object(Y.jsx)(L.a,{to:"/auth/login"})]})})})},ye=function(){return Object(Y.jsx)(s.a,{store:E,children:Object(Y.jsx)(_e,{})})};n(168);r.a.render(Object(Y.jsx)(ye,{}),document.getElementById("root")),o()}},[[169,1,2]]]);
//# sourceMappingURL=main.2beccb22.chunk.js.map