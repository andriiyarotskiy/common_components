(this["webpackJsonphome-work"]=this["webpackJsonphome-work"]||[]).push([[0],[,,,,function(e,t,a){e.exports={juniorPage:"Junior_juniorPage__2sl0B",styleTitleTasks:"Junior_styleTitleTasks__14rkm",homeWorkNine__wrapper:"Junior_homeWorkNine__wrapper__3sPyK",homeWorkNine:"Junior_homeWorkNine__3cBGc",middleEditable:"Junior_middleEditable__3RUoC",block:"Junior_block__2mbmU",blockHidden:"Junior_blockHidden__3rke9",blockVisible:"Junior_blockVisible__YTKfR"}},,function(e,t,a){e.exports={navBurger:"Menu_navBurger__2O77m",active:"Menu_active__2dDyj",overlay:"Menu_overlay__378d0",open:"Menu_open__lsbcZ",fadeInRight:"Menu_fadeInRight__3FeeT",overlayMenu:"Menu_overlayMenu__PireW",locked:"Menu_locked__3KdG4"}},,,,,function(e,t,a){e.exports={message:"Mymessage_message__21_xl",message__text:"Mymessage_message__text__TY9ws",message__textInner:"Mymessage_message__textInner__3QKym"}},function(e,t,a){e.exports={wrapper:"InputNya_wrapper__LcwpD",inputNya:"InputNya_inputNya__UoWwU",container:"InputNya_container__VAQSR",error:"InputNya_error__3EN3f"}},,,,function(e,t,a){e.exports={wrapper:"Todoapp_wrapper__3V8i-",container:"Todoapp_container__clZt3",wrapperBtn:"Todoapp_wrapperBtn__1PyCd"}},,function(e,t,a){e.exports={message__avaIcon:"User_message__avaIcon__2LTyK",text:"User_text__ml2yI"}},function(e,t,a){e.exports={text__item:"Message_text__item__1NL8y",time__item:"Message_time__item__3l1F7"}},,,,,,,function(e,t,a){e.exports={btn:"ButtonNya_btn__3gugF"}},function(e,t,a){e.exports={wrapperInputtask:"InputTask_wrapperInputtask__iQYc-"}},function(e,t,a){e.exports=a.p+"static/media/preloader3.f01061ce.svg"},,,,function(e,t,a){e.exports=a(45)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),c=a.n(l),i=(a(37),a(38),a(8)),o=a(1),u=a(15),m=a(2),s=a(46),d=a(18),p=a.n(d),E=function(e){return r.a.createElement("div",{className:p.a.message__avaIcon},e.logo&&r.a.createElement("img",{src:e.logo,alt:"avatar"}))},_=function(e){return r.a.createElement("div",{className:p.a.text},r.a.createElement(E,{logo:e.logo?e.logo:""}),r.a.createElement("span",null,e.name))},v=a(19),f=a.n(v);var g=function(e){return r.a.createElement("div",{className:f.a.text__item},e.text,r.a.createElement("div",{className:f.a.time__item},r.a.createElement("span",null,"13:20")))},b=a(11),y=a.n(b);var k=function(){return r.a.createElement("div",{className:y.a.message},r.a.createElement(_,{logo:"https://img.pngio.com/person-icon-png-download-10241024-free-transparent-avatar-png-png-avatar-900_900.jpg"}),r.a.createElement("div",{className:y.a.message__text},r.a.createElement("div",{className:y.a.message__textInner},r.a.createElement("div",{className:y.a.text},r.a.createElement(_,{name:"\u042f\u0440\u043e\u0446\u043a\u0438\u0439 \u0410\u043d\u0434\u0440\u0435\u0439"}),r.a.createElement(g,{text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamu "})))))},h=a(16),j=a.n(h),N=a(26),O=a.n(N),w=function(e){var t=Object.assign({},e);return r.a.createElement("div",null,r.a.createElement("button",Object.assign({className:O.a.btn},t)))},S=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,e.title),r.a.createElement("div",{className:j.a.wrapper},e.task.map((function(t){return r.a.createElement("div",{className:j.a.container,key:t.id},r.a.createElement("p",null,t.title),r.a.createElement(w,{onClick:function(){return e.removeTask(t.id)}},"remove"))}))),r.a.createElement("div",{className:j.a.wrapperBtn},r.a.createElement(w,{onClick:function(){return e.changeFilter("very bad")}},r.a.createElement("p",null,"very bad")),r.a.createElement(w,{onClick:function(){return e.changeFilter("low")}},r.a.createElement("p",null,"low")),r.a.createElement(w,{onClick:function(){return e.changeFilter("medium")}},r.a.createElement("p",null,"medium")),r.a.createElement(w,{onClick:function(){return e.changeFilter("high")}},r.a.createElement("p",null,"high")),r.a.createElement(w,{onClick:function(){return e.changeFilter("all")}},r.a.createElement("p",null,"ALL"))))},x=function(){var e=Object(n.useState)([{id:1,title:"Work",priority:"low"},{id:2,title:"Game",priority:"high"},{id:3,title:"Lessons React",priority:"medium"},{id:4,title:"Lessons Native JS",priority:"low"},{id:5,title:"Family",priority:"high"},{id:6,title:"Chill",priority:"very bad"}]),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),i=Object(m.a)(c,2),o=i[0],u=i[1],s=a;return"low"===o&&(s=a.filter((function(e){return"low"===e.priority}))),"high"===o&&(s=a.filter((function(e){return"high"===e.priority}))),"medium"===o&&(s=a.filter((function(e){return"medium"===e.priority}))),"very bad"===o&&(s=a.filter((function(e){return"very bad"===e.priority}))),r.a.createElement("div",null,r.a.createElement(S,{title:"I'm so fool",task:s,removeTask:function(e){var t=a.filter((function(t){return t.id!==e}));l(t)},changeFilter:function(e){u(e)}}))},I=a(30),T=a(12),C=a.n(T),A=function(e){var t=e.onEnter,a=e.error,n=Object(I.a)(e,["onEnter","error"]);return r.a.createElement("div",{className:C.a.wrapper},r.a.createElement("div",{className:C.a.container},r.a.createElement("input",Object.assign({className:C.a.inputNya},n,{type:"text",onKeyPress:function(e){n.clearInputAfterPress&&n.clearInputAfterPress(),"Enter"===e.key&&t&&t()},placeholder:a}))),r.a.createElement("div",{className:C.a.error},a))},J=a(27),F=a.n(J),H=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),l=a[0],c=a[1];return r.a.createElement("div",{className:F.a.wrapperInputtask},r.a.createElement(A,{value:l,onChange:function(e){c(e.currentTarget.value)},onEnter:function(){e.onEnter(l),e.addName(l),c("")},error:e.error,clearInputAfterPress:function(){return e.clearInputAfterPress(l)}}),r.a.createElement(w,{onClick:function(){e.onEnter(l),e.addName(l),c("")}},"BTN"),r.a.createElement("span",null,e.arr.length))};var P=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),i=Object(m.a)(c,2),o=i[0],d=i[1];return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(x,null),r.a.createElement(H,{arr:o,addName:function(e){if(e){var t={name:e,id:Object(s.a)()},a=[].concat(Object(u.a)(o),[t]);d(a)}},onEnter:function(e){""!==e.trim()?alert("Hello "+e.trim()):l("Please add text to the form")},error:a,clearInputAfterPress:function(e){e||l("")}}))},M=a(7),B=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),l=a[0],c=a[1];return l?r.a.createElement(A,{value:e.value,autoFocus:!0,onBlur:function(){c(!1)},onChange:e.changeValueInput}):r.a.createElement("span",{onClick:function(){c(!0)}},e.value)},R=a(4),V=a.n(R);var L=function(e){var t=e.optionValue.map((function(e){return r.a.createElement("option",{key:e.id},e.title)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("select",{value:e.title,onChange:function(t){e.setSelected(t.currentTarget.value)}},t))},W=function(e){var t=e.radioArr.map((function(t){return r.a.createElement("div",{key:t.id},r.a.createElement("label",{htmlFor:t.id},t.value),r.a.createElement("input",{type:"radio",value:t.value,name:t.name,checked:t.status,onChange:function(){e.changeStatus(t.id)}}))}));return r.a.createElement(r.a.Fragment,null,t)},U=function(e,t){switch(t.type){case"SORT":var a=Object(u.a)(e);return"up"===t.payload&&a.sort((function(e,t){return e.age-t.age})),"down"===t.payload&&a.sort((function(e,t){return t.age-e.age})),a;case"CHECK":return e.filter((function(e){return e.age>t.payload}))}return[]},D=a(13),K=a.n(D),G=a(28),Q=a.n(G),Y=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:Q.a,alt:""}))},X={loading:!1},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOADING":return Object(M.a)(Object(M.a)({},e),{},{loading:t.loading})}return e},z=function(e){return{type:"SET_LOADING",loading:e}},$=[{id:Object(s.a)(),title:"REACT"},{id:Object(s.a)(),title:"REDUX"},{id:Object(s.a)(),title:"JAVASCRIPT"}];var q=function(){var e={fontSize:"30px",textAlign:"center",fontWeight:"bold",marginBottom:"20px"},t=Object(n.useState)("Enter value for save"),a=Object(m.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)("REDUX"),o=Object(m.a)(i,2),u=o[0],d=o[1],p=Object(n.useState)([{id:Object(s.a)(),name:"radio",value:"one",status:!1},{id:Object(s.a)(),name:"radio",value:"two",status:!0},{id:Object(s.a)(),name:"radio",value:"three",status:!1}]),E=Object(m.a)(p,2),_=E[0],v=E[1],f=Object(n.useState)([{id:"1",name:"Vika",age:10},{id:"2",name:"Sveta",age:18},{id:"3",name:"Valera",age:17},{id:"4",name:"Ira",age:35},{id:"5",name:"Ignat",age:25},{id:"6",name:"Alina",age:50}]),g=Object(m.a)(f,2),b=g[0],y=g[1],k=Object(n.useState)(0),h=Object(m.a)(k,2),j=h[0],N=h[1],O=Object(n.useState)(K()().format("HH:mm:ss")),S=Object(m.a)(O,2),x=S[0],I=S[1],T=K()().format("LLLL"),C=Object(n.useState)({loading:!1}),A=Object(m.a)(C,2),J=A[0],F=A[1];return r.a.createElement("div",{className:V.a.juniorPage},J.loading?r.a.createElement("div",{style:e},r.a.createElement(Y,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{style:e},"Junior"),r.a.createElement("div",{className:V.a.styleTitleTasks},"Home work \u21166"),r.a.createElement("div",{className:V.a.middleEditable},r.a.createElement(B,{value:l,changeValueInput:function(e){c(e.currentTarget.value)}})),r.a.createElement("div",{className:V.a.middleEditable},r.a.createElement(w,{onClick:function(){!function(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}("inputValue",{x:l})}},"SAVE"),r.a.createElement(w,{onClick:function(){var e=function(e,t){var a=localStorage.getItem(e);return null!==a&&(t=JSON.parse(a)),t}("inputValue",{x:""});c(e.x)}},"RESTORE")),r.a.createElement("div",{className:V.a.styleTitleTasks},"Home work \u21167"),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(L,{optionValue:$,title:u,setSelected:d}),r.a.createElement(W,{radioArr:_,changeStatus:function(e){var t=_.map((function(t){return t.id===e?Object(M.a)(Object(M.a)({},t),{},{status:!0}):Object(M.a)(Object(M.a)({},t),{},{status:!1})}));v(t)}})),r.a.createElement("div",{className:V.a.styleTitleTasks},"Home work \u21168"),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},b.map((function(e){return r.a.createElement("p",{key:e.id,style:{padding:"15px"}},e.name," : ",e.age)}))),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(w,{onClick:function(){y(U(b,{type:"SORT",payload:"up"}))}},"Sort Up"),r.a.createElement(w,{onClick:function(){y(U(b,{type:"SORT",payload:"down"}))}},"Sort Down"),r.a.createElement(w,{onClick:function(){y(U(b,{type:"CHECK",payload:18}))}},"Sort Age")),r.a.createElement("div",{className:V.a.homeWorkNine__wrapper},"Home work \u21169"),r.a.createElement("div",{className:V.a.homeWorkNine},r.a.createElement("div",{className:V.a.block},r.a.createElement("div",{className:V.a.blockHidden},T),r.a.createElement("div",{className:V.a.blockVisible},x)),r.a.createElement("div",null,"ID \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430 : ",j),r.a.createElement(w,{onClick:function(){var e=setInterval((function(){var e=K()().format("HH:mm:ss");I(e)}),1e3);N(e)}},"Start Timer"),r.a.createElement(w,{onClick:function(){clearInterval(j);var e=setInterval((function(){return I(K()().format("HH:mm:ss"))}),1e3);N(e)}},"Stop Prev Timer"),r.a.createElement(w,{onClick:function(){return clearInterval(j)}},"Stopping time update")),r.a.createElement("div",{className:V.a.styleTitleTasks},"Home work \u211610"),r.a.createElement(w,{onClick:function(){F(Z(J,z(!0))),setTimeout(F,3e3,Z(J,z(!1)))}},"start loading")))};var ee=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"JuniorPlus"))},te=a(6),ae=a.n(te),ne=function(){var e=Object(n.useState)(!0),t=Object(m.a)(e,2),a=t[0],l=t[1];function c(){l(!a)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a?ae.a.overlay:"".concat(ae.a.overlay," ").concat(ae.a.open)},r.a.createElement("nav",{className:ae.a.overlayMenu},r.a.createElement("ul",{className:ae.a.menu},r.a.createElement("li",null,r.a.createElement(i.b,{to:"/prejunior",onClick:c,role:"menuitem"},"PreJunior")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/junior",onClick:c,role:"menuitem"},"Junior")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/juniorplus",onClick:c,role:"menuitem"},"Junior +"))))),r.a.createElement("div",{className:a?ae.a.navBurger:"".concat(ae.a.navBurger," ").concat(ae.a.active),role:"navigation",onClick:c}))};var re=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(ne,null),r.a.createElement(o.a,{path:"/prejunior",component:P}),r.a.createElement(o.a,{path:"/junior",component:q}),r.a.createElement(o.a,{path:"/juniorplus",component:ee})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[32,1,2]]]);
//# sourceMappingURL=main.3281fa8d.chunk.js.map