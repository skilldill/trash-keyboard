(this["webpackJsonptrash-keyboard"]=this["webpackJsonptrash-keyboard"]||[]).push([[0],{162:function(e,t,a){e.exports=a(253)},250:function(e,t,a){},251:function(e,t,a){},252:function(e,t,a){},253:function(e,t,a){"use strict";a.r(t);a(163),a(189),a(191),a(192),a(194),a(195),a(196),a(197),a(198),a(199),a(200),a(201),a(203),a(204),a(205),a(206),a(207),a(208),a(209),a(210),a(211),a(212),a(214),a(215),a(216),a(217),a(218),a(219),a(220),a(221),a(222),a(223),a(224),a(225),a(226),a(227),a(228),a(229),a(230),a(231);var n=a(0),c=a.n(n),r=a(85),l=a.n(r),u=a(31),o=a.n(u),i=(a(239),a(10)),s=Object(n.createContext)({activePanel:"gameArea",params:{},setActivePanel:function(e){},setParams:function(e){}}),v=a(11),y=function(e){var t=e.children,a=Object(n.useState)("start"),r=Object(v.a)(a,2),l=r[0],u=r[1],o=Object(n.useState)({}),i=Object(v.a)(o,2),y=i[0],h=i[1];return c.a.createElement(s.Provider,{value:{activePanel:l,setActivePanel:u,params:y,setParams:h}},t)},h="initialRandom",p="dinamycRandom",m="roulletKeyboard",f="default",b=function(e){var t=e.id,a=Object(n.useContext)(s),r=a.setActivePanel,l=a.setParams,u=function(e){r(J.gameArea),l({gameType:e})};return c.a.createElement(i.d,{id:t},c.a.createElement(i.e,null,"\u0412\u044b\u0431\u043e\u0440 \u044d\u0442\u0430\u043f\u0430"),c.a.createElement(i.b,null,c.a.createElement(i.c,null,"\u0412\u0438\u0434 \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u044b"),c.a.createElement(i.g,{onClick:function(){return u(p)},expandable:!0},"\u0414\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0430\u044f (\u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438)"),c.a.createElement(i.g,{onClick:function(){return u(h)},expandable:!0},"\u0414\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0430\u044f (\u043f\u0440\u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438)"),c.a.createElement(i.g,{onClick:function(){return u(m)},expandable:!0},"\u0420\u0443\u043b\u0435\u0442\u043a\u0430"),c.a.createElement(i.g,{onClick:function(){return u(f)},expandable:!0},"\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0430\u044f")))},d=a(40),k=a.n(d),E=(a(250),function(e){var t=e.onClick,a=e.children,r=Object(n.useState)(null),l=Object(v.a)(r,2),u=l[0],o=l[1];return c.a.createElement("button",{className:"keyboard-key",onClick:t,onTouchStart:function(){o(c.a.createElement("span",null,a))},onTouchEnd:function(){o(null)}},u,a)}),j=function(e){var t=e.onChange,a=e.value,r=e.show,l=e.keyboardLayout,u=Object(n.useMemo)((function(){return k()({keyboard:!0,"keyboard-show":r})}),[r]),o=function(e){if("char"===e.type)return t(a+e.value);if("action"!==e.type);else switch(e.actionType){case"backSpace":var n=a.slice(0,a.length-1);t(n)}};return c.a.createElement("div",{className:u},l.map((function(e,t){return c.a.createElement("div",{className:"keyboard-row",key:"row-".concat(t)},e.map((function(e,t){return c.a.createElement(E,{onClick:function(){return o(e)},key:"".concat(e.value,"-").concat(e.type,"-").concat(t)},e.value)})))})),c.a.createElement("div",{className:"keyboard-row keyboard-row-bottom"},c.a.createElement("div",{className:"keyboard-key keyboard-key-mock"}),c.a.createElement("div",{className:"keyboard-key keyboard-key-mock"}),c.a.createElement(E,{onClick:function(){return o({type:"char",value:","})}},","),c.a.createElement("button",{className:"keyboard-key keyboard-key-space",onClick:function(){return o({type:"char",value:" "})}}),c.a.createElement(E,{onClick:function(){return o({type:"char",value:"."})}},"."),c.a.createElement("div",{className:"keyboard-key keyboard-key-mock"}),c.a.createElement("div",{className:"keyboard-key keyboard-key-mock"})))},O=(a(251),a(252),a(60)),g=function(e){var t=e.layout,a=e.onClick,r=e.startPos,l=function(e){var t={startX:0,startY:0,translateX:0,translateY:0,transition:!1};e&&(t=Object(O.a)(Object(O.a)({},t),e));var a=t,c=a.startX,r=a.startY,l=a.translateX,u=a.translateY,o=a.transition,i=Object(n.useState)(c),s=Object(v.a)(i,2),y=s[0],h=s[1],p=Object(n.useState)(r),m=Object(v.a)(p,2),f=m[0],b=m[1],d=Object(n.useState)(l),k=Object(v.a)(d,2),E=k[0],j=k[1],g=Object(n.useState)(u),T=Object(v.a)(g,2),S=T[0],C=T[1],P=Object(n.useState)(o),w=Object(v.a)(P,2),M=w[0],N=w[1],Y=Object(n.useCallback)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:400,c=new Promise((function(c){N(!0),C(a),j(t),e&&e();var r=setTimeout((function(){c(r)}),n)}));c.then((function(e){clearTimeout(e),N(!1)}))}),[]);return{handleTouchStart:Object(n.useCallback)((function(e){return function(t){var a=t.touches[0],n=a.clientX,c=a.clientY;e&&e(),h(n),b(c)}}),[h,b]),handleTouchMove:Object(n.useCallback)((function(e){return function(t){var a=t.touches[0],n=a.clientX,c=a.clientY-f;j(E+(n-y)),C(S+c),e&&e()}}),[y,f,j,C]),handleTouchEnd:function(e){return function(t){e&&e()}},addTransitionAnimation:Y,setStateTranslateX:j,setStateTranslateY:C,setStateTransition:N,stateStartX:y,stateStartY:f,stateTranslateX:E,stateTranslateY:S,stateTransition:M}}({startY:84}),u=l.stateTranslateY,o=l.stateTransition,i=l.setStateTranslateY,s=l.addTransitionAnimation,y=l.handleTouchStart,h=l.handleTouchMove,p=l.handleTouchEnd,m=Object(n.useState)(84),f=Object(v.a)(m,2),b=f[0],d=f[1];Object(n.useEffect)((function(){i(r?84-62*r:84)}),[]);var k=Object(n.useMemo)((function(){return 62*(t.length-1)-84}),[t]),E=Object(n.useMemo)((function(){return{transform:"translateY(".concat(u,"px)"),transition:o?"all .3s":"none"}}),[u]),j=function(e,t){t===-(u-84)/62&&a(e)};return c.a.createElement("div",{className:"roullete",style:E,onTouchStart:y(),onTouchMove:h(),onTouchEnd:p((function(){if(u>-k&&u<84){var e=(u-84)%62;if(b>u)return d(u-(e+84)),s(),i(u-(e+62));if(b<u)return d(u-e),s(),i(u-e)}return u>84?(d(84),s(),i(84)):u<-k?(d(-k),s(),i(-k)):void 0}))},t.map((function(e,t){return c.a.createElement("div",{className:"roullete-key",key:"".concat(e.value,"-").concat(t),onClick:function(){return j(e,t)}},c.a.createElement("span",null,e.value))})))},T=function(e){var t=e.layouts,a=e.onChange,r=e.value,l=e.show,u=function(e){if("char"===e.type)return a(r+e.value.replace("_"," "));if("action"!==e.type);else switch(e.actionType){case"backSpace":var t=r.slice(0,r.length-1);a(t)}},o=Object(n.useMemo)((function(){return k()({"roullete-keyboard":!0,"roullete-keyboard-show":l})}),[l]);return c.a.createElement("div",{className:o},c.a.createElement("div",{className:"line line-top"}),c.a.createElement("div",{className:"line line-bottom"}),t.map((function(e,t){return c.a.createElement(g,{key:t,layout:e.keys,onClick:u,startPos:e.startPos?e.startPos:0})})))},S=a(35),C=a(90),P=a.n(C),w=a(91),M=a.n(w),N=c.a.createElement("img",{src:P.a,alt:"shift"}),Y=c.a.createElement("img",{src:M.a,alt:"backspace"}),x=[{value:"\u0430",type:"char"},{value:"\u0431",type:"char"},{value:"\u0432",type:"char"},{value:"\u0433",type:"char"},{value:"\u0434",type:"char"},{value:"\u0435",type:"char"},{value:"\u0451",type:"char"},{value:"\u0436",type:"char"},{value:"\u0437",type:"char"},{value:"\u0438",type:"char"},{value:"\u0439",type:"char"},{value:"\u043a",type:"char"},{value:"\u043b",type:"char"},{value:"\u043c",type:"char"},{value:"\u043d",type:"char"},{value:"\u043e",type:"char"},{value:"\u043f",type:"char"},{value:"\u0440",type:"char"},{value:"\u0441",type:"char"},{value:"\u0442",type:"char"},{value:"\u0443",type:"char"},{value:"\u0444",type:"char"},{value:"\u0445",type:"char"},{value:"\u0446",type:"char"},{value:"\u0447",type:"char"},{value:"\u0448",type:"char"},{value:"\u0449",type:"char"},{value:"\u044a",type:"char"},{value:"\u044b",type:"char"},{value:"\u044c",type:"char"},{value:"\u044d",type:"char"},{value:"\u044e",type:"char"},{value:"\u044f",type:"char"}];function A(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}var X=function(e,t){var a=setTimeout((function(){t(),clearTimeout(a)}),e)},I=function(e){var t=e.id,a=Object(n.useContext)(s),r=a.setActivePanel,l=a.params.gameType,u=Object(n.useState)(!0),o=Object(v.a)(u,2),y=o[0],f=o[1],b=Object(n.useState)(""),d=Object(v.a)(b,2),k=d[0],E=d[1],O=Object(n.useState)(0),g=Object(v.a)(O,2),C=g[0],P=g[1],w=Object(n.useState)(0),M=Object(v.a)(w,2),I=M[0],K=M[1],L=Object(n.useState)(""),R=Object(v.a)(L,2),_=R[0],B=R[1];Object(n.useEffect)((function(){var e=A(1,5);P(e)}),[]),Object(n.useEffect)((function(){l===p&&X(1e3,(function(){I%2===0&&P(A(1,5)),K(I+1)})),l===h&&(0===C&&P(A(1,5)),X(1e3,(function(){K(I+1)}))),l===m&&X(1e3,(function(){K(I+1)}))}),[I]),Object(n.useEffect)((function(){"\u043f\u0440\u0438\u0432\u0435\u0442"===k&&0===_.length&&(B('\u0412\u044b \u043d\u0430\u043f\u0438\u0441\u0430\u043b\u0438 "\u043f\u0440\u0438\u0432\u0435\u0442" \u0437\u0430 '.concat(I," \u0441\u0435\u043a\u0443\u043d\u0434")),f(!1))}),[k,I]);var V=Object(n.useMemo)((function(){return function(e){var t=[[{type:"char",value:"\u0439"},{type:"char",value:"\u0446"},{type:"char",value:"\u0443"},{type:"char",value:"\u043a"},{type:"char",value:"\u0435"},{type:"char",value:"\u043d"},{type:"char",value:"\u0433"},{type:"char",value:"\u0448"},{type:"char",value:"\u0449"},{type:"char",value:"\u0437"},{type:"char",value:"\u0445"}],[{type:"char",value:"\u0444"},{type:"char",value:"\u044b"},{type:"char",value:"\u0432"},{type:"char",value:"\u0430"},{type:"char",value:"\u043f"},{type:"char",value:"\u0440"},{type:"char",value:"\u043e"},{type:"char",value:"\u043b"},{type:"char",value:"\u0434"},{type:"char",value:"\u0436"},{type:"char",value:"\u044d"}],[{type:"action",actionType:"shift",value:N},{type:"char",value:"\u044f"},{type:"char",value:"\u0447"},{type:"char",value:"\u0441"},{type:"char",value:"\u043c"},{type:"char",value:"\u0438"},{type:"char",value:"\u0442"},{type:"char",value:"\u044c"},{type:"char",value:"\u0431"},{type:"char",value:"\u044e"},{type:"action",actionType:"backSpace",value:Y}]];if(0===e)return t;if(1===e)return t.reverse();if(2===e)return t.map((function(e){return e.reverse()})).reverse();if(3===e){var a=t[0];return[t[1],t[2],a]}if(4===e){var n=t[0],c=t[1],r=t[2];return[c.reverse(),r,n.reverse()]}if(5===e){var l=t[0],u=t[1],o=t[2];return[[].concat(Object(S.a)(l.splice(0,6)),Object(S.a)(o.splice(6,o.length))),[].concat(Object(S.a)(o),Object(S.a)(l)),u]}}(C)}),[C]),W=Object(n.useMemo)((function(){return!!_.length&&c.a.createElement(i.b,{header:c.a.createElement(i.c,{mode:"secondary"},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442")},c.a.createElement(i.a,null,_))}),[_.length]),q=Object(n.useMemo)((function(){return l===m?c.a.createElement(T,{show:y,onChange:E,value:k,layouts:[{keys:[{value:"_",type:"char"}]},{keys:x,startPos:A(0,x.length-1)},{keys:x,startPos:A(0,x.length-1)},{keys:x,startPos:A(0,x.length-1)},{keys:[{type:"action",actionType:"backSpace",value:Y}]}]}):c.a.createElement(j,{onChange:E,value:k,keyboardLayout:V,show:y})}),[E,k,V,y,l]);return c.a.createElement(i.d,{id:t},c.a.createElement(i.e,{left:c.a.createElement(i.f,{onClick:function(){r(J.start)}})},"\u0418\u0433\u0440\u0430"),c.a.createElement(i.b,{header:c.a.createElement(i.c,{mode:"secondary"},'\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 "\u043f\u0440\u0438\u0432\u0435\u0442"')},c.a.createElement(i.a,null,k)),W,q)},J={start:"start",gameArea:"gameArea"},K=function(){var e=Object(n.useContext)(s).activePanel;return c.a.createElement(i.h,{activePanel:e},c.a.createElement(b,{id:J.start}),c.a.createElement(I,{id:J.gameArea}))},L=function(){return c.a.createElement(y,null,c.a.createElement(K,null))},R=function(){return c.a.createElement(L,null)};o.a.send("VKWebAppInit"),l.a.render(c.a.createElement(R,null),document.getElementById("root"))},90:function(e,t,a){e.exports=a.p+"static/media/shift.bd2e35ad.svg"},91:function(e,t,a){e.exports=a.p+"static/media/backSpace.b50f4f19.svg"}},[[162,1,2]]]);
//# sourceMappingURL=main.d5a73197.chunk.js.map