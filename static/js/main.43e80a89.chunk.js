(this.webpackJsonphoroscope=this.webpackJsonphoroscope||[]).push([[0],{132:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n.n(i),c=n(21),a=n.n(c),r=n(13),o=n.n(r),l=n(12),u=n(18),d=n(16),j=n(14),p=n.n(j),h=n(4),b=(n(130),n(26)),m=n.n(b),g=(n(25),n(136)),f=n(137),O=n(138),x=n(139),y=n(140),v=n(141),k=n(2),w=function(e){var t=e.id,n=(e.go,e.Settings),c=e.setSettings,a=e.fetchedUser,r=e.signes,j=e.setsignes,b=e.setPopout,w=Object(i.useState)(0),_=Object(d.a)(w,2),S=_[0],C=_[1],A=Object(i.useState)("now"),P=Object(d.a)(A,2),V=P[0],N=P[1],T=Object(i.useState)(null),B=Object(d.a)(T,2),W=(B[0],B[1],[{date:"\u0433\u043e\u0440\u043e\u0441\u043a\u043e\u043f",name:"\u041e\u0431\u0449\u0438\u0439",en_name:"all",img:"https://i.imgur.com/C4y4lT8.png",id:0,love:58,lucky:78,family:36},{date:"21 \u043c\u0430\u0440\u0442\u0430 \u2013 20 \u0430\u043f\u0440\u0435\u043b\u044f",name:"\u041e\u0432\u0435\u043d",en_name:"aries",img:"https://i.imgur.com/EBbvwVl.png",id:1,love:88,lucky:38,family:89},{date:"21 \u0430\u043f\u0440\u0435\u043b\u044f \u2013 20 \u043c\u0430\u044f",name:"\u0422\u0435\u043b\u0435\u0446",en_name:"taurus",img:"https://i.imgur.com/vgwtTRj.png",id:2,love:99,lucky:62,family:31},{date:"21 \u043c\u0430\u044f \u2013 21 \u0438\u044e\u043d\u044f",name:"\u0411\u043b\u0438\u0437\u043d\u0435\u0446\u044b",en_name:"gemini",img:"https://i.imgur.com/vIitufq.png",id:3,love:49,lucky:12,family:39},{date:"22 \u0438\u044e\u043d\u044f - 23 \u0438\u044e\u043b\u044f",name:"\u0420\u0430\u043a",en_name:"cancer",img:"https://i.imgur.com/9R5DAxf.png",id:4,love:13,lucky:64,family:58},{date:"24 \u0438\u044e\u043b\u044f - 23 \u0430\u0432\u0433\u0443\u0441\u0442\u0430",name:"\u041b\u0435\u0432",en_name:"leo",img:"https://i.imgur.com/saOAuga.png",id:5,love:69,lucky:90,family:75},{date:"24 \u0430\u0432\u0433\u0443\u0441\u0442\u0430 - 23 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f",name:"\u0414\u0435\u0432\u0430",en_name:"virgo",img:"https://i.imgur.com/YUZhyob.png",id:6,love:28,lucky:18,family:90},{date:"24 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f - 23 \u043e\u043a\u0442\u044f\u0431\u0440\u044f",name:"\u0412\u0435\u0441\u044b",en_name:"libra",img:"https://i.imgur.com/3KMfryW.png",id:7,love:96,lucky:14,family:58},{date:"24 \u043e\u043a\u0442\u044f\u0431\u0440\u044f - 22 \u043d\u043e\u044f\u0431\u0440\u044f",name:"\u0421\u043a\u043e\u0440\u043f\u0438\u043e\u043d",en_name:"scorpio",img:"https://i.imgur.com/VBIBSX8.png",id:8,love:79,lucky:12,family:57},{date:"23 \u043d\u043e\u044f\u0431\u0440\u044f - 21 \u0434\u0435\u043a\u0430\u0431\u0440\u044f",name:"\u0421\u0442\u0440\u0435\u043b\u0435\u0446",en_name:"sagittarius",img:"https://i.imgur.com/PbZLU1m.png",id:9,love:53,lucky:59,family:70},{date:"22 \u0434\u0435\u043a\u0430\u0431\u0440\u044f - 20 \u044f\u043d\u0432\u0430\u0440\u044f",name:"\u041a\u043e\u0437\u0435\u0440\u043e\u0433",en_name:"capricorn",img:"https://i.imgur.com/ITZZ2jQ.png",id:10,love:50,lucky:29,family:86},{date:"21 \u044f\u043d\u0432\u0430\u0440\u044f - 19 \u0444\u0435\u0432\u0440\u0430\u043b\u044f",name:"\u0412\u043e\u0434\u043e\u043b\u0435\u0439",en_name:"aquarius",img:"https://i.imgur.com/53qLabe.png",id:11,love:13,lucky:84,family:58},{date:"20 \u0444\u0435\u0432\u0440\u0430\u043b\u044f - 20 \u043c\u0430\u0440\u0442\u0430",name:"\u0420\u044b\u0431\u044b",en_name:"pisces",img:"https://i.imgur.com/hGnVBB8.png",id:12,love:78,lucky:45,family:76}]);function K(){return(K=Object(u.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(Object(k.jsx)(h.q,{})),e.prev=1,e.next=4,o.a.send("VKWebAppShowOrderBox",{type:"item",item:"love"});case 4:e.sent.success&&z()?(b(null),a.love_pay=!0):b(null),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),b(null);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function L(){b(Object(k.jsx)(h.a,{onClose:function(){return b(null)},children:Object(k.jsx)(h.l,{style:{width:"100%"},header:"\u041b\u044e\u0431\u043e\u0432\u043d\u044b\u0439 \u0433\u043e\u0440\u043e\u0441\u043a\u043e\u043f",subheader:"\u041f\u0440\u0438\u043e\u0431\u0440\u0435\u0442\u0438\u0442\u0435 \u043b\u044e\u0431\u043e\u0432\u043d\u044b\u0439 \u0433\u043e\u0440\u043e\u0441\u043a\u043e\u043f \u0437\u0430 7 \u0433\u043e\u043b\u043e\u0441\u043e\u0432 \u0438 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0435\u0433\u043e \u0432 \u043b\u044e\u0431\u043e\u0435 \u0432\u0440\u0435\u043c\u044f!",onClose:function(){return b(null)},actions:Object(k.jsxs)(s.a.Fragment,{children:[Object(k.jsx)(h.e,{onClick:function(){return function(){return K.apply(this,arguments)}()},size:"m",children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(k.jsx)(h.e,{onClick:function(){return b(null)},size:"m",mode:"secondary",children:"\u041d\u0435\u0442, \u0441\u043f\u0430\u0441\u0438\u0431\u043e"})]}),icon:Object(k.jsx)("img",{src:"https://i.imgur.com/NLdCupp.png",style:{width:72,height:72,marginRight:8}})})}))}function R(){return(R=Object(u.a)(p.a.mark((function e(){var t,n,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=btoa(window.location.search),e.next=3,fetch("https://h154851.srv11.test-hf.su/horoscope/api.php?type=weekly&key="+t);case 3:if(!(n=e.sent).ok){e.next=11;break}return e.next=7,n.json();case 7:i=e.sent,j(Object(l.a)(Object(l.a)({},r),{},{weekly:i.weekly})),e.next=13;break;case 11:b(Object(k.jsx)(h.r,{onClose:function(){return b(null)},children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f!"})),N("now");case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return U.apply(this,arguments)}function U(){return(U=Object(u.a)(p.a.mark((function e(){var t,n,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=btoa(window.location.search),e.next=3,fetch("https://h154851.srv11.test-hf.su/horoscope/api.php?type=love&key="+t);case 3:return n=e.sent,e.next=6,n.json();case 6:if(!(i=e.sent).error){e.next=12;break}j(Object(l.a)(Object(l.a)({},r),{},{love:i.love})),setTimeout((function(){return z()}),1e3),e.next=14;break;case 12:return j(Object(l.a)(Object(l.a)({},r),{},{love:i.love})),e.abrupt("return",!0);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(u.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(Object(k.jsxs)(h.a,{onClose:function(){return b(null)},children:[Object(k.jsx)(h.b,{style:{marginLeft:8,marginRight:8,marginTop:8},autoclose:!0,before:Object(k.jsx)(g.a,{fill:"white"}),onClick:function(){o.a.send("VKWebAppShowStoryBox",{background_type:"image",url:"https://h154851.srv11.test-hf.su/horoscope/share.php?sign="+S,locked:!0,attachment:{text:"view",type:"url",url:"https://vk.com/app8061753"}})},children:"\u0412 \u0438\u0441\u0442\u043e\u0440\u0438\u0438"}),Object(k.jsx)(h.b,{style:{marginLeft:8,marginRight:8},autoclose:!0,before:Object(k.jsx)(f.a,{fill:"white"}),onClick:function(){o.a.send("VKWebAppShowWallPostBox",{message:r[S].description,attachments:"https://vk.com/app8061753"})},children:"\u041d\u0430 \u0441\u0442\u0435\u043d\u0435"}),Object(k.jsx)(h.b,{style:{marginLeft:8,marginRight:8},autoclose:!0,mode:"destructive",children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"})]}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(k.jsxs)(h.m,{id:t,className:"MainPanel",children:[Object(k.jsx)(m.a,{className:"particles",params:{particles:{number:{value:50,density:{enable:!0,value_area:2500}},line_linked:{enable:!0,opacity:.05},move:{direction:"right",speed:.2},size:{value:2},opacity:{anim:{enable:!0,speed:1,opacity_min:.05}}}}}),Object(k.jsxs)(h.h,{children:[Object(k.jsxs)("center",{children:[Object(k.jsx)(h.y,{level:"2",weight:"heavy",children:W[S].name}),Object(k.jsx)(h.s,{weight:"regular",style:{color:"#C996CC",marginBottom:32},children:W[S].date})]}),Object(k.jsx)(h.z,{text:"\u0422\u044b \u043c\u043e\u0436\u0435\u0448\u044c \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u0432\u043e\u0439 \u0437\u043d\u0430\u043a \u0437\u043e\u0434\u0438\u0430\u043a\u0430 \u0442\u0443\u0442",alignX:"center",isShown:1===n.guide_step,onClose:function(){return c(Object(l.a)(Object(l.a)({},n),{},{guide_step:2}))},children:Object(k.jsx)("div",{children:Object(k.jsx)(h.k,{showArrows:!0,getScrollToLeft:function(e){return e-120},getScrollToRight:function(e){return e+120},style:{marginRight:8},children:Object(k.jsx)("div",{style:{display:"flex"},children:W.map((function(e){return Object(k.jsx)(h.j,{hidden:"now"!=V&&0==e.id,style:{marginLeft:0==S&&0==e.id?8:0},className:S==e.id?"selected_sign":"",header:e.name,onClick:function(){C(e.id)},children:Object(k.jsx)("img",{size:56,src:e.img,style:{width:56,height:56}})},e.id)}))})})})})]}),!r&&Object(k.jsx)(h.n,{}),r&&Object(k.jsxs)(h.h,{children:[Object(k.jsx)(h.z,{text:"\u0422\u0443\u0442 \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0433\u043e\u0440\u043e\u0441\u043a\u043e\u043f \u043d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u0438\u043b\u0438 \u043d\u0435\u0434\u0435\u043b\u044e",alignX:"right",isShown:2===n.guide_step,onClose:function(){return c(Object(l.a)(Object(l.a)({},n),{},{guide_step:3}))},children:Object(k.jsx)("div",{children:Object(k.jsxs)(h.v,{children:[Object(k.jsx)(h.w,{onClick:function(){return N("now")},selected:"now"===V,children:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f"}),Object(k.jsx)(h.w,{onClick:function(){0==S&&C(1),null!==r&&void 0!==r&&r.love||!a.love_pay||z(),1==n.bage_love&&c(Object(l.a)(Object(l.a)({},n),{},{bage_love:!1})),N("love")},selected:"love"===V,children:"\u041b\u044e\u0431\u043e\u0432\u043d\u044b\u0439"}),Object(k.jsx)(h.w,{onClick:function(){0==S&&C(1),N("week"),r.weekly||function(){R.apply(this,arguments)}()},selected:"week"===V,children:"\u041d\u0435\u0434\u0435\u043b\u044c\u043d\u044b\u0439"})]})})}),"love"!=V&&Object(k.jsx)(h.f,{children:Object(k.jsxs)(h.x,{weight:"semibold",style:{color:"white"},className:"font",children:["now"==V&&r[S].description,"week"==V&&(null===r||void 0===r?void 0:r.weekly)&&(null===r||void 0===r?void 0:r.weekly[S-1].description),"week"==V&&!(null!==r&&void 0!==r&&r.weekly)&&Object(k.jsx)(h.n,{})]})}),"love"==V&&!(null!==r&&void 0!==r&&r.love)&&1==a.love_pay&&Object(k.jsx)(h.n,{}),"love"==V&&(null===r||void 0===r?void 0:r.love)&&1==a.love_pay&&Object(k.jsx)(h.f,{children:Object(k.jsx)(h.x,{weight:"semibold",style:{color:"white"},className:"font",children:null===r||void 0===r?void 0:r.love[S-1].description})}),"love"==V&&0==a.love_pay&&Object(k.jsx)(h.f,{children:Object(k.jsxs)(h.o,{icon:Object(k.jsx)(O.a,{}),header:"\u041b\u044e\u0431\u043e\u0432\u043d\u044b\u0439 \u0433\u043e\u0440\u043e\u0441\u043a\u043e\u043f",action:Object(k.jsx)(h.e,{before:Object(k.jsx)(x.a,{}),size:"m",onClick:function(){return L()},children:"\u0414\u0430, \u0445\u043e\u0447\u0443!"}),children:["\u0425\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043b\u044e\u0431\u043e\u0432\u043d\u044b\u0439 \u0433\u043e\u0440\u043e\u0441\u043a\u043e\u043f?",Object(k.jsx)("br",{})]})}),"now"==V&&Object(k.jsxs)(h.t,{children:[Object(k.jsx)(h.u,{id:"like_button",selected:!0,before:Object(k.jsx)(y.a,{id:"like_ico",fill:1==r[S].me_like?"red":"black"}),onClick:Object(u.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(Object(k.jsx)(h.q,{})),t=btoa(window.location.search),e.next=4,fetch("https://h154851.srv11.test-hf.su/horoscope/like.php?sign="+S+"&key="+t);case 4:if(!((n=e.sent).status>=200&&n.status<=299)){e.next=13;break}return e.next=8,n.json();case 8:1==e.sent.response?(r[S].likes?r[S].likes+=1:r[S].likes=1,r[S].me_like,r[S].me_like=1):(r[S].likes?r[S].likes-=1:r[S].likes=0,r[S].me_like,r[S].me_like=0),b(null),e.next=15;break;case 13:console.log(123),b(Object(k.jsx)(h.r,{onClose:function(){return b(null)},children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f!"}));case 15:case"end":return e.stop()}}),e)}))),children:r[S].likes?r[S].likes:0}),Object(k.jsx)(h.z,{text:"\u041d\u0435 \u0437\u0430\u0431\u0443\u0434\u044c \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0441\u0435\u0433\u043e\u0434\u043d\u044f\u0448\u043d\u0438\u043c \u0433\u043e\u0440\u043e\u0441\u043a\u043e\u043f\u043e\u043c \u270c\ufe0f",alignX:"left",isShown:3===n.guide_step,onClose:function(){return c(Object(l.a)(Object(l.a)({},n),{},{guide_step:4}))},children:Object(k.jsx)(h.u,{selected:!0,before:Object(k.jsx)(v.a,{}),onClick:function(){return function(){return I.apply(this,arguments)}()},children:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f"})})]})]}),r&&0!=W[S].id&&"love"!=V&&Object(k.jsx)(h.h,{header:Object(k.jsxs)(h.i,{style:{color:"#916BBF"},children:['\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0430 \u0437\u043d\u0430\u043a\u0430 "',W[S].name,'"']}),style:{marginTop:0},children:Object(k.jsxs)("div",{class:"parent",children:[Object(k.jsxs)("div",{class:"div2",style:{display:"block"},children:[Object(k.jsx)(h.p,{value:W[S].love,className:"progress",style:{marginTop:6}}),Object(k.jsx)(h.p,{value:W[S].lucky,className:"progress",style:{marginTop:16}}),Object(k.jsx)(h.p,{value:W[S].family,className:"progress",style:{marginTop:16}})]}),Object(k.jsxs)("div",{class:"div1",style:{marginLeft:8},children:[Object(k.jsx)(h.x,{weight:"regular",children:"\u041b\u044e\u0431\u043e\u0432\u044c"}),Object(k.jsx)(h.x,{weight:"regular",style:{marginTop:8},children:"\u0423\u0434\u0430\u0447\u0430"}),Object(k.jsx)(h.x,{weight:"regular",style:{marginTop:8},children:"\u0421\u0435\u043c\u044c\u044f"})]})]})})]})},_=n.p+"static/media/logo.d0c1cb4b.png",S=(n(30),function(e){return Object(k.jsx)(h.m,{id:e.id,className:"MainPanel",children:Object(k.jsx)("img",{className:"Persik",src:_,style:{width:"350%",height:"350%"}})})}),C=n(142),A=function(e){return Object(k.jsx)(h.m,{id:e.id,className:"MainPanel",children:Object(k.jsx)(h.o,{icon:Object(k.jsx)(C.a,{fill:"white"}),stretched:!0,children:"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043e \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435."})})},P=n(143),V=function(e){return Object(k.jsxs)(h.m,{id:e.id,className:"MainPanel",children:[Object(k.jsxs)(h.o,{icon:Object(k.jsx)("img",{src:"https://i.imgur.com/l95P9rm.png",style:{width:"50%",height:"50%"}}),stretched:!0,className:"font",children:["\u041f\u0440\u0438\u0432\u0435\u0442, ",e.fetchedUser.first_name,"!",Object(k.jsx)("br",{}),"\u041c\u044b \u0441\u043e\u0441\u0442\u0430\u0432\u0438\u043b\u0438 \u0434\u043b\u044f \u0442\u0435\u0431\u044f \u0433\u043e\u0440\u043e\u0441\u043a\u043e\u043f.",Object(k.jsx)("br",{}),"\u0414\u0430\u0432\u0430\u0439 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u043c?"]}),Object(k.jsx)(h.g,{vertical:"bottom",children:Object(k.jsx)(h.e,{before:Object(k.jsx)(P.a,{}),onClick:function(){e.setActivePanel("home"),e.GetSignes(),e.setSettings(Object(l.a)(Object(l.a)({},e.Settings),{},{guide_step:1}))},size:"l",stretched:!0,style:{margin:8,width:"95%"},children:"\u0412\u043f\u0435\u0440\u0435\u0434!"})})]})},N=function(){var e=Object(i.useState)("persik"),t=Object(d.a)(e,2),n=t[0],s=t[1],c=Object(i.useState)(null),a=Object(d.a)(c,2),r=a[0],j=a[1],b=Object(i.useState)(null),m=Object(d.a)(b,2),g=m[0],f=m[1],O=Object(i.useState)(null),x=Object(d.a)(O,2),y=x[0],v=x[1],_=Object(i.useState)(null),C=Object(d.a)(_,2),P=(C[0],C[1],Object(i.useState)({bage_love:!0,guide_step:0})),N=Object(d.a)(P,2),T=N[0],B=N[1];Object(i.useEffect)((function(){var e=document.createAttribute("scheme");e.value="space_gray",document.body.attributes.setNamedItem(e),o.a.subscribe((function(e){var t=e.detail,i=t.type;t.data;"VKWebAppViewRestore"===i&&n()})),o.a.supports("VKWebAppSetViewSettings")&&o.a.send("VKWebAppSetViewSettings",{status_bar_style:"light",action_bar_color:"#1C0C5B",navigation_bar_color:"#1C0C5B"});var t=new URLSearchParams(window.location.search).get("vk_platform");function n(){return i.apply(this,arguments)}function i(){return(i=Object(u.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.send("VKWebAppGetUserInfo");case 2:return t=e.sent,e.next=5,o.a.send("VKWebAppStorageGet",{keys:["guide"]});case 5:n=e.sent,j(t),f(null),n&&"guide"==n.keys[0].key?c():(o.a.send("VKWebAppStorageSet",{key:"guide",value:"true"}),s("guide"));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(){return a.apply(this,arguments)}function a(){return(a=Object(u.a)(p.a.mark((function e(){var t,n,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=btoa(window.location.search),e.next=3,fetch("https://h154851.srv11.test-hf.su/horoscope/api.php?type=dayly&key="+t);case 3:return n=e.sent,e.next=6,n.json();case 6:i=e.sent,v(i.dayly),j(Object(l.a)(Object(l.a)({},r),{},{love_pay:i.love_pay})),setTimeout((function(){return s("home")}),1e3);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}"iOS"==function(){var e=navigator.userAgent||navigator.vendor||window.opera;return/windows phone/i.test(e)?"Windows Phone":/android/i.test(e)?"Android":/iPad|iPhone|iPod/.test(e)&&!window.MSStream?"iOS":"unknown"}()&&"mobile_web"!=t?s("ios"):n()}),[]);var W=function(){var e=Object(u.a)(p.a.mark((function e(){var t,n,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=btoa(window.location.search),e.next=3,fetch("https://h154851.srv11.test-hf.su/horoscope/api.php?type=dayly&key="+t);case 3:return n=e.sent,e.next=6,n.json();case 6:i=e.sent,v(i.dayly),j(Object(l.a)(Object(l.a)({},r),{},{love_pay:i.love_pay}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(e){s(e.currentTarget.dataset.to)};return Object(k.jsx)(h.c,{children:Object(k.jsx)(h.d,{children:Object(k.jsxs)(h.A,{activePanel:n,popout:g,children:[Object(k.jsx)(w,{id:"home",Settings:T,setSettings:B,fetchedUser:r,go:K,signes:y,setsignes:v,setPopout:f}),Object(k.jsx)(S,{id:"persik",go:K}),Object(k.jsx)(V,{id:"guide",go:K,setActivePanel:s,fetchedUser:r,GetSignes:W,setSettings:B,Settings:T}),Object(k.jsx)(A,{id:"ios",go:K})]})})})};o.a.send("VKWebAppInit"),a.a.render(Object(k.jsx)(N,{}),document.getElementById("root"))},25:function(e,t,n){},30:function(e,t,n){}},[[132,1,2]]]);