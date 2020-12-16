(this["webpackJsonpweather-app-3"]=this["webpackJsonpweather-app-3"]||[]).push([[0],{31:function(t,n,e){},57:function(t,n,e){},59:function(t,n,e){"use strict";e.r(n);var r=e(0),o=e(1),c=e.n(o),i=e(19),a=e.n(i),u=(e(31),e(25)),d=e(7),s=e.n(d),l=e(13),h=e(5),f=e(4),p=e(14),x=e(17),g=e(3);function b(){var t=Object(f.a)(["\n\tbackground-color: #d47a7a;\n\tpadding: 5px;\n\tcolor: #611616;\n\tborder-radius: 5px;\n\tborder: 1px #611616 solid;\n"]);return b=function(){return t},t}var j=g.c.div(b()),m=function(t){return Object(r.jsx)(j,{children:Object(r.jsx)("p",{children:"Sorry, we couldn't find this city. Please try again."})})};function O(){var t=Object(f.a)(["\n\tbackground-color: ",";\n\tborder: none;\n\toutline: none;\n\twidth: 30px;\n\theight: 35px;\n\tpadding: 5px;\n\tcolor: #fff;\n\tborder-radius: 0 4px 4px 0;\n"]);return O=function(){return t},t}function v(){var t=Object(f.a)(["\n\tbackground-color: ",";\n\tborder: none;\n\toutline: none;\n\twidth: 30px;\n\theight: 35px;\n\tpadding: 5px;\n\tcolor: #fff;\n\tborder-radius: 4px 0 0 4px;\n"]);return v=function(){return t},t}function y(){var t=Object(f.a)(["\n\twidth: 100%;\n\tmax-width: 350px;\n\theight: 35px;\n\tpadding: 12px 20px 12px 12px;\n\tbox-shadow: inset 0px 0px 10px\n\t\t",";\n\tbackground: transparent;\n\toutline: none;\n\tborder: none;\n\tcolor: white;\n\t&::placeholder {\n\t\tcolor: #fff;\n\t}\n"]);return y=function(){return t},t}function w(){var t=Object(f.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin: 10px;\n"]);return w=function(){return t},t}function k(){var t=Object(f.a)(["\n\tfont-size: 1.5em;\n\ttext-shadow: 3px 3px 5px rgba(0, 0, 0, 0.26);\n\tmargin: 5px;\n"]);return k=function(){return t},t}function C(){var t=Object(f.a)(["\n\twidth: 10vw;\n\tmax-width: 60px;\n\tmin-width: 45px;\n\theight: 3vh;\n\tposition: absolute;\n\tright: 5%;\n\ttop: 3.5%;\n\tborder: none;\n\tcolor: ",";\n\tbackground-color: ",";\n\toutline: none;\n\tborder-radius: 5px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"]);return C=function(){return t},t}function S(){var t=Object(f.a)(["\n\tcolor: #fff;\n\tbackground-color: ",";\n\n\theight: 15vh;\n\tmax-height: 155px;\n\tmin-height: 110px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n"]);return S=function(){return t},t}var F=g.c.div(S(),(function(t){return t.theme.colors.headerBackgroundColor})),B=g.c.button(C(),(function(t){return t.theme.colors.buttonTextColor}),(function(t){return t.theme.colors.toggleButtonBackground})),D=g.c.h1(k()),E=g.c.form(w()),N=g.c.input.attrs({type:"text",placeholder:"City, Country",id:"userSearch"})(y(),(function(t){return t.theme.colors.buttonBackground})),L=g.c.button(v(),(function(t){return t.theme.colors.buttonBackground})),M=g.c.button(O(),(function(t){return t.theme.colors.buttonBackground})),I=function(t){return Object(r.jsxs)(F,{children:[Object(r.jsx)(D,{children:"Weather App"})," ",Object(r.jsx)(B,{onClick:t.toggleMode,children:"Light"===t.themeMode?"Dark":"Light"}),Object(r.jsxs)(E,{children:[Object(r.jsx)(L,{onClick:function(n){return t.submit(n)},children:Object(r.jsx)(p.a,{icon:x.b})}),Object(r.jsx)(N,{onChange:function(n){return t.handleChange(n)}}),Object(r.jsx)(M,{onClick:function(n){return t.getCurrentLocation(n)},children:Object(r.jsx)(p.a,{icon:x.a})})]}),t.error?Object(r.jsx)(m,{}):Object(r.jsx)("div",{})]})},W=e(23),T=e.n(W),J=function(t){return Object(r.jsxs)("label",{id:"toggleUnits",children:[Object(r.jsx)("input",{type:"checkbox",onClick:t.toggle}),Object(r.jsx)("span",{className:"slider",children:Object(r.jsxs)("div",{className:"tempUnits",children:[Object(r.jsx)("span",{children:"F"}),Object(r.jsx)("span",{children:"C"})]})})]})},P={colors:{background:"#ECEFF4",displayBackgroundColor:"white",buttonBackground:"#446491",toggleButtonBackground:"#446491",buttonTextColor:"#fff",textColor:"#2E3440",buttonColor:"#ECEFF4",headerBackgroundColor:"#6291d3"}},U={colors:{background:"#2E3440",displayBackgroundColor:"#3B4252",buttonBackground:"#3B4252",toggleButtonBackground:"#3B4252",buttonTextColor:"#fff",textColor:"#ECEFF4",borderColor:"#2E3440",headerBackgroundColor:"#252a35"}};function z(){var t=Object(f.a)(["\n\twidth: 10em;\n\tborder: 1px "," solid;\n\tcolor: ",";\n\tbackground-color: ",";\n\theight: 2.5em;\n\tpadding: 5px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttransition: 0.3s;\n\n\t&:hover {\n\t\tcursor: pointer;\n\t\tcolor: white;\n\t\tbackground-color: ",";\n\t\tborder: 1px "," solid;\n\t}\n\t@media only screen and (max-height: 675px) {\n\t\theight: 1.5em;\n\t}\n"]);return z=function(){return t},t}function A(){var t=Object(f.a)(["\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\tmargin-bottom: 5%;\n\t@media only screen and (max-height: 675px) {\n\t\tmargin-bottom: 2%;\n\t}\n"]);return A=function(){return t},t}function H(){var t=Object(f.a)(["\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tmargin: 7px;\n\n\t& > strong {\n\t\tmargin-left: 5px;\n\t}\n\t@media only screen and (max-height: 675px) {\n\t\tmargin: 3px;\n\t}\n"]);return H=function(){return t},t}function _(){var t=Object(f.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 2%;\n\t@media only screen and (max-height: 767px) {\n\t\tpadding: 2%;\n\t}\n"]);return _=function(){return t},t}function q(){var t=Object(f.a)(["\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n\t@media only screen and (max-height: 675px) {\n\t\theight: 25px;\n\t}\n"]);return q=function(){return t},t}function Y(){var t=Object(f.a)(["\n\tmargin: 20px;\n\t@media only screen and (max-height: 767px) {\n\t\tmargin: 5px;\n\t}\n"]);return Y=function(){return t},t}function G(){var t=Object(f.a)(["\n\tmargin: 0 5% 5% 5%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\t@media only screen and (max-height: 675px) {\n\t\tmargin: 0 2% 2% 2%;\n\t}\n"]);return G=function(){return t},t}function K(){var t=Object(f.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: ",";\n\tcolor: ",";\n\tbox-shadow: 0 0 5px rgba(0, 0, 0, 0.26);\n\tborder-radius: 10px;\n\twidth: 40%;\n\theight: 60vh;\n\tmax-height: 540px;\n\tmin-width: 305px;\n\tmax-width: 450px;\n\t","\n\t@media only screen and (max-height: 867px) {\n\t\tfont-size: 0.8em;\n\t}\n"]);return K=function(){return t},t}function Q(){var t=Object(f.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin: 5% 2% 5% 2%;\n"]);return Q=function(){return t},t}var R=g.c.div(Q()),V=g.c.div(K(),(function(t){return t.theme.colors.displayBackgroundColor}),(function(t){return t.theme.colors.textColor}),""),X=g.c.div(G()),Z=g.c.div(Y()),$=g.c.div(q()),tt=g.c.div(_()),nt=g.c.p(H()),et=g.c.div(A()),rt=g.c.button(z(),(function(t){return t.theme.colors.textColor}),(function(t){return t.theme.colors.textColor}),(function(t){return t.theme.colors.displayBackgroundColor}),(function(t){return t.theme.colors.buttonBackground}),(function(t){return t.theme.colors.buttonBackground})),ot=function(t){return Object(r.jsx)(T.a,{type:"ThreeDots",color:"Light"===t.theme?"#6291d3":"#252a35",height:"100",width:"100"})},ct=function(t){var n,e,c=Object(o.useState)("F"),i=Object(h.a)(c,2),a=i[0],u=i[1],d=function(t){var n=t-273.15,e=9*n/5+32;return Math.round(Math.round(100*("C"===a?n:e))/100)};return Object(r.jsx)(g.a,{theme:"Light"===t.themeMode?P:U,children:Object(r.jsx)(R,{children:t.isLoading?Object(r.jsx)(V,{children:Object(r.jsx)(ot,{theme:t.themeMode})}):Object(r.jsxs)(V,{children:[Object(r.jsx)($,{children:Object(r.jsx)(J,{toggle:function(){u((function(t){return"F"===t?"C":"F"}))}})}),Object(r.jsxs)(tt,{children:[Object(r.jsxs)("h1",{className:"mainContent",id:"location",children:[t.weatherData.city,", ",t.weatherData.country]}),Object(r.jsx)("img",{className:"mainContent",id:"weatherIcon",src:"https://openweathermap.org/img/wn/".concat(t.weatherData.icon,"@2x.png"),alt:t.weatherData.description+" Icon"}),Object(r.jsx)(Z,{children:Object(r.jsx)("strong",{children:Object(r.jsxs)(r.Fragment,{children:[d(t.weatherData.temp),"\xb0",a," "]})})}),Object(r.jsx)(Z,{children:Object(r.jsx)("strong",{children:t.weatherData.description})})]}),Object(r.jsxs)(X,{children:[Object(r.jsxs)(nt,{id:"feelsLike",children:["Feels Like:"," ",Object(r.jsx)("strong",{children:Object(r.jsxs)(r.Fragment,{children:[d(t.weatherData.temp),"\xb0",a]})})]}),Object(r.jsxs)(nt,{id:"humidity",children:["Humidity: ",Object(r.jsxs)("strong",{children:[t.weatherData.humidity,"%"]})]}),Object(r.jsxs)(nt,{id:"windDirection",children:["Wind Direction:"," ",Object(r.jsx)("strong",{children:Object(r.jsx)(r.Fragment,{children:(e=t.weatherData.windDirection,["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"][Math.floor(e/22.5+.5)%16])})})]}),Object(r.jsxs)(nt,{id:"windSpeed",children:["Wind Speed:"," ",Object(r.jsx)("strong",{children:Object(r.jsxs)(r.Fragment,{children:[(n=t.weatherData.windSpeed,Math.round(2.23694*n*10)/10)," MPH"]})})]})]}),Object(r.jsx)(et,{children:Object(r.jsx)(rt,{onClick:function(){return t.addToFavorites(t.weatherData)},children:"+ Add To Favorites"})})]})})})};function it(){var t=Object(f.a)(["\n\twidth: 100%;\n"]);return it=function(){return t},t}function at(){var t=Object(f.a)(["\n\twidth: 100%;\n\tpadding: 0 5% 0 5%;\n\tdisplay: flex;\n"]);return at=function(){return t},t}function ut(){var t=Object(f.a)(["\n\tdisplay: flex;\n\tjustify-self: center;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 90%;\n\tmin-width: 175px;\n\theight: 90%;\n\tbackground-color: ",";\n\tcolor: ",";\n\tbox-shadow: 0 0 5px rgba(0, 0, 0, 0.26);\n\tborder-radius: 10px;\n\tpadding: 2%;\n\ttransition: 0.3s;\n\t&:hover {\n\t\tcursor: pointer;\n\n\t\tbox-shadow: 0 0 5px rgba(0, 0, 0, 5);\n\t}\n"]);return ut=function(){return t},t}var dt=g.c.div(ut(),(function(t){return t.theme.colors.displayBackgroundColor}),(function(t){return t.theme.colors.textColor})),st=g.c.div(at()),lt=g.c.h3(it()),ht=function(t){return Object(r.jsx)(dt,{onClick:function(){return t.displayFavorites()},children:Object(r.jsxs)(st,{children:[Object(r.jsxs)(lt,{children:[t.element.city,", ",t.element.country]}),Object(r.jsx)("i",{className:"fa fa-close",onClick:function(){return t.deleteFromFavorites(t.index)}})]})})},ft=e(24),pt=e.n(ft);e(57);function xt(){var t=Object(f.a)(["\n\tdisplay: grid;\n\tbackground: ",";\n\tflex-wrap: wrap;\n\tgrid-template-columns: repeat(4, 24vw);\n\tgrid-template-rows: repeat(5, 9vh);\n\tcolumn-gap: 1%;\n\trow-gap: 3%;\n\tjustify-self: center;\n\tmargin-bottom: 5%;\n\theight: 60vh;\n\t@media only screen and (max-width: 650px) {\n\t\tgrid-template-columns: repeat(3, 32.5vw);\n\t}\n\t@media only screen and (max-width: 510px) {\n\t\tgrid-template-columns: repeat(2, 48vw);\n\t}\n\t@media only screen and (max-width: 350px) {\n\t\tgrid-template-columns: repeat(1, 98vw);\n\t}\n"]);return xt=function(){return t},t}function gt(){var t=Object(f.a)(["\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n\ttransition: 0.2s;\n}\n\nbody {\n\theight: 100vh;\n\tbackground-color: ",";\n\t\n}\nbutton {\n\t&:hover  {\n\t\tcursor: pointer;\n\t}\n}\n\n"]);return gt=function(){return t},t}var bt=Object(g.b)(gt(),(function(t){return t.theme.colors.background})),jt=g.c.div(xt(),(function(t){return t.theme.colors.background})),mt=function(){var t=Object(o.useState)("New York City, US"),n=Object(h.a)(t,2),e=n[0],c=n[1],i=Object(o.useState)(!1),a=Object(h.a)(i,2),d=a[0],f=a[1],p=Object(o.useState)((function(){return localStorage.getItem("favorites")?JSON.parse(localStorage.getItem("favorites")):[]})),x=Object(h.a)(p,2),b=x[0],j=x[1],m=Object(o.useState)((function(){return localStorage.getItem("themeMode")?localStorage.getItem("themeMode"):"Light"})),O=Object(h.a)(m,2),v=O[0],y=O[1],w=Object(o.useState)(!1),k=Object(h.a)(w,2),C=k[0],S=k[1],F=Object(o.useState)(""),B=Object(h.a)(F,2),D=B[0],E=B[1],N=Object(o.useState)({icon:"",city:"",country:"US",temp:"",description:"",feelsLike:"",humidity:"",windDirection:"",windSpeed:""}),L=Object(h.a)(N,2),M=L[0],W=L[1];Object(o.useEffect)((function(){T()}),[e]),Object(o.useEffect)((function(){localStorage.setItem("favorites",JSON.stringify(b))}),[b]),Object(o.useEffect)((function(){localStorage.setItem("themeMode",v)}),[v]);var T=function(){var t=Object(l.a)(s.a.mark((function t(){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&APPID=b388badf2ea8d6a1b0fc28f7d99e0ccc"),{mode:"cors"});case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,W({city:r.name,icon:r.weather[0].icon,country:r.sys.country,temp:r.main.temp,description:r.weather[0].description,feelsLike:r.main.feels_like,humidity:r.main.humidity,windDirection:r.wind.deg,windSpeed:r.wind.speed}),S(!1),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),S(!0),E(t.t0.toString());case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}(),J=function(){var t=Object(l.a)(s.a.mark((function t(n,e){var r,o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(n,"&lon=").concat(e,"&appid=b388badf2ea8d6a1b0fc28f7d99e0ccc"),{mode:"cors"});case 3:return r=t.sent,t.next=6,r.json();case 6:o=t.sent,W({city:o.name,icon:o.weather[0].icon,country:o.sys.country,temp:o.main.temp,description:o.weather[0].description,feelsLike:o.main.feels_like,humidity:o.main.humidity,windDirection:o.wind.deg,windSpeed:o.wind.speed}),f(!1),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),S(!0),E(t.t0.toString());case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(n,e){return t.apply(this,arguments)}}();return Object(r.jsxs)(g.a,{theme:"Light"===v?P:U,children:[Object(r.jsx)(bt,{}),Object(r.jsxs)("div",{id:"appContainer",children:[Object(r.jsx)(I,{submit:function(t){var n=document.getElementById("userSearch").value;t.preventDefault(),void 0!==n&&""!==n&&null!==n&&c(n)},handleChange:function(t){t.preventDefault(),S(!1)},toggleMode:function(){y((function(t){return"Light"===t?"Dark":"Light"}))},getCurrentLocation:function(t){f(!0),t.preventDefault();var n=function(t){S(!0),E(t.message)};try{navigator.geolocation.getCurrentPosition((function(t){var n=t.coords.latitude,e=t.coords.longitude;S(!1),J(n,e)}),(function(t){S(!0),E(t.message)}))}catch(n){S(!0),E(n.toString())}},themeMode:v,error:C,errorMessage:D}),Object(r.jsx)(ct,{isLoading:d,addToFavorites:function(t){var n=JSON.parse(JSON.stringify(b));n.find((function(n){return n.city===t.city&&n.country===t.country}))||j([].concat(Object(u.a)(n),[t]))},weatherData:M,themeMode:v}),Object(r.jsx)(jt,{themeMode:v,children:b.map((function(t,n){return Object(r.jsx)(ht,{element:t,index:n,displayFavorites:function(){return function(t){c("".concat(t.city,",").concat(t.country))}(t)},deleteFromFavorites:function(){return function(t){var n=JSON.parse(JSON.stringify(b));n.splice(t,1),console.log(t),j(n)}(n)}},pt()())}))})]})]})},Ot=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,60)).then((function(n){var e=n.getCLS,r=n.getFID,o=n.getFCP,c=n.getLCP,i=n.getTTFB;e(t),r(t),o(t),c(t),i(t)}))};e(58);a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(mt,{})}),document.getElementById("root")),Ot()}},[[59,1,2]]]);
//# sourceMappingURL=main.cd614f3e.chunk.js.map