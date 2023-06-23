(this.webpackJsonpfuelmap=this.webpackJsonpfuelmap||[]).push([[0],{29:function(e,t,a){},30:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(13),i=a.n(s),r=a(2),l=(a(29),a(30),a(54)),o=a(55),d=a(57),u=a(58),j=a(56),b=a(0);function f(e){var t=e.stationID,a=e.editableField,n=e.fuelData,c=e.avgPrices;return Object.entries(n).map((function(e){var n=Object(r.a)(e,2),s=n[0],i=n[1];return i>0&&null!==i?Object(b.jsxs)("div",{className:"circle circle".concat(s),children:[Object(b.jsx)("svg",{height:"30",width:"30",children:Object(b.jsx)("circle",{cx:"15",cy:"15",r:"15"})}),Object(b.jsx)("h4",{className:"iconText",children:E[s]}),Object(b.jsxs)("div",{contentEditable:a===t?"true":"false",className:"price ".concat(c[s]>i?"priceGreen":"priceRed"),children:[Object(b.jsx)("span",{contentEditable:"false",children:"\u20ac"}),"\xa0",i]})]}):Object(b.jsx)(b.Fragment,{})}))}var h=a(6),p=a.n(h),m=a(14),O=a(24),x=a.n(O);function v(e){return g.apply(this,arguments)}function g(){return(g=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.getElementById("Loading").style.display="block",e.next=3,x.a.get("".concat(A,"/fuelstations?sortBy=").concat(t[0],"&sortOrder=").concat(t[1])).then((function(e){200===e.status?k(e.data):I(e.status)})).catch((function(e){I(500)}));case 3:return document.getElementById("Loading").style.display="none",e.abrupt("return");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return D.apply(this,arguments)}function D(){return D=Object(m.a)(p.a.mark((function e(t){var a,n,c,s,i,l,o,d,u,j,b,f,h=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=h.length>1&&void 0!==h[1]?h[1]:"popup",n=t.ID,c=t.fuelData,"popup"===a?(s=document.querySelectorAll("#s".concat(n," .price")),i=document.querySelector("#LoadEditP".concat(n)),l=document.querySelector("#EditIconP".concat(n))):(s=document.querySelectorAll("#t".concat(n," .price")),i=document.querySelector("#LoadEdit".concat(n)),l=document.querySelector("#EditIcon".concat(n))),console.log(i),console.log(l),i.style.display="block",l.style.opacity=0,o={},s.forEach((function(e){var t=parseFloat(e.innerHTML.split("&nbsp;")[1]),a=e.parentElement.classList[1].replace("circle","");o[a]=t})),d=!1,u=0,j=Object.entries(o);u<j.length;u++)b=Object(r.a)(j[u],2),f=b[0],b[1]!==c[f]&&(d=!0);if(!d){e.next=17;break}return e.next=15,fetch(A+"/editfuelstation",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ID:n,A95:o.A95,A98:o.A98,D:o.D,LPG:o.LPG})}).then(function(){var e=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==t.status){e.next=5;break}return e.next=3,v();case 3:e.next=6;break;case 5:console.log("Kainos nepakeistos");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 15:e.next=18;break;case 17:console.log("Kainos nepakeistos");case 18:i.style.display="none",l.style.opacity=1,console.log("Edit handled");case 21:case"end":return e.stop()}}),e)}))),D.apply(this,arguments)}function N(e){var t=e.location,a=e.avgPrices;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"StationInfo",children:[Object(b.jsx)("h2",{className:"StationName",children:t.name}),Object(b.jsx)("h4",{className:"address",children:t.address})]}),Object(b.jsx)("div",{className:"prices",id:"s".concat(t.ID),children:Object(b.jsx)(f,{fuelData:t.fuelData,avgPrices:a})}),Object(b.jsxs)("div",{style:{position:"relative"},children:[Object(b.jsx)("a",{className:"ChangeLink",id:"EditIconP".concat(t.ID),onClick:function(){return y(t)},children:"Keisti Kain\u0105"}),Object(b.jsx)("div",{className:"lds-dual-ring small blue",id:"LoadEditP".concat(t.ID)})]}),Object(b.jsx)("h4",{className:"updated",children:t.updated})]})}function P(e){var t=e.avgPrices,a=e.minPriceStations,n=e.sortBy;return Object.entries(t).map((function(t,c){var s=Object(r.a)(t,2),i=s[0],l=s[1];return Object(b.jsxs)("div",{className:"circleDisplay",children:[Object(b.jsx)("div",{className:"sideCircle BG".concat(i," ").concat(n[0]===i?"ASC"===n[1]?"green":"red":""),onClick:function(){return e.setSortBy([i,n[0]===i&&"ASC"===n[1]?"DESC":"ASC"])},children:Object(b.jsx)("h4",{className:"iconTextDisplay",children:E[i]})}),Object(b.jsxs)("div",{className:"fuelPricesDiv",children:[Object(b.jsxs)("h4",{children:["VID: ",l.toFixed(2),"\u20ac"]}),Object(b.jsxs)("h4",{className:"minPrice",onClick:function(){return e.setPos([a[i].latitude,a[i].longitude])},children:["MIN: ",a[i].fuelData[i].toFixed(2),"\u20ac"]})]})]},c)}))}function S(e){var t=Object(n.useState)(-1),a=Object(r.a)(t,2),c=a[0],s=a[1],i=e.FuelStationData,l=e.averagePrices,o=e.quantity;return Object(b.jsxs)(b.Fragment,{children:[i.map((function(t,a){return Object.values(t.fuelData).some((function(e){return e>0&&null!=e}))?Object(b.jsxs)("div",{className:"stationRow ".concat(c===t.ID?"editable":""),style:a>o?{display:"none"}:{display:"block"},children:[Object(b.jsxs)("div",{className:"stationHeaders",onClick:function(){return e.setPos([t.latitude,t.longitude])},children:[Object(b.jsx)("div",{className:"stationName",children:t.name}),Object(b.jsxs)("div",{className:"stationAddress",children:[t.address,Object(b.jsx)("div",{className:"stationUpdated",children:t.updated})]})]}),Object(b.jsx)("div",{className:"stationPrices",id:"t".concat(t.ID),children:Object(b.jsx)(f,{fuelData:t.fuelData,avgPrices:l,stationID:t.ID,editableField:c})}),Object(b.jsxs)("div",{className:"stationEdit",onClick:c===t.ID?function(){s(-1),y(t,"table")}:function(){return s(t.ID)},children:[Object(b.jsx)("div",{className:"lds-dual-ring small",id:"LoadEdit".concat(t.ID)}),Object(b.jsx)("i",{className:"fa-solid fa-pen-to-square",id:"EditIcon".concat(t.ID)})]})]},t.ID):Object(b.jsx)(b.Fragment,{})})),Object(b.jsx)("a",{className:"aeffect",onClick:function(){return e.setDisplayedTableStations(o+12)},children:"LOAD MORE"})]})}var k,I,E={A95:"95",A98:"98",D:"D",LPG:"LPG"},C=["A95","A98","D","LPG"],A="https://fuelapi.ignuxas.com";var F=function(){var e,t=!1,a=Object(n.useState)([]),c=Object(r.a)(a,2),s=c[0],i=c[1],f=Object(n.useState)(["A95","ASC"]),h=Object(r.a)(f,2),p=h[0],m=h[1],O=Object(n.useState)(12),x=Object(r.a)(O,2),g=x[0],y=x[1],D=Object(n.useState)(200),E=Object(r.a)(D,2),A=E[0],F=E[1];function T(e){for(var t=0,a=0,n=0;n<e.length;n++)null!==e[n]&&e[n]>.4&&e[n]<3&&(t+=1,a+=e[n]);return a/t}Object(n.useEffect)((function(){I=F,k=i,v(p)}),[]),Object(n.useEffect)((function(){v(p)}),[p]);var L=function(t){var a=Object(l.a)();return e=a,Object(b.jsx)(b.Fragment,{})};function w(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.getZoom();e.flyTo(t,a)}if(0!==s.length){for(var B={},M=0;M<C.length;M++){for(var q=[],G=0;G<s.length;G++)q.push(s[G].fuelData[C[M]]);B[C[M]]=T(q)}for(var K={},R=function(e){K[C[e]]=function(e,t){for(var a=99,n=0,c=0;c<e.length;c++)null!==e[c]&&e[c]>t-.3&&e[c]<a&&(a=e[c],n=c);return s[n]}(s.map((function(t){return t.fuelData[C[e]]})),B[C[e]])},z=0;z<C.length;z++)R(z)}return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("div",{className:"lds-dual-ring",id:"Loading"}),Object(b.jsxs)("div",{id:"ErrorDiv",style:200!==A?{display:"block"}:{display:"none"},children:[Object(b.jsxs)("h2",{children:["Error ",A]}),"The server is currently down, please try again later or contact me at ",Object(b.jsx)("a",{className:"aeffect",href:"mailto:mikolaitis.ignas@gmail.com",children:"mikolaitis.ignas@gmail.com"})]}),s[0]?Object(b.jsxs)("div",{id:"Menu",children:[Object(b.jsxs)("div",{id:"StationPanel",children:[Object(b.jsx)("p",{id:"Title",children:"KURAS"}),Object(b.jsx)("div",{id:"StationTable",children:Object(b.jsx)(S,{FuelStationData:s,averagePrices:B,quantity:g,setDisplayedTableStations:y,setPos:w})}),Object(b.jsxs)("footer",{children:[Object(b.jsxs)("p",{children:["Fuel Map made by: ",Object(b.jsx)("a",{className:"aeffect",href:"https://ignuxas.com",target:"_blank",rel:"noreferrer",children:"Ignas Mikolaitis"})]}),Object(b.jsx)("p",{className:"betaText",children:"OPEN BETA: This project is still in development and anything can change, there may be some bugs and unfinished features."}),Object(b.jsx)("p",{className:"redText",children:"Note: The prices are crowd sourced and may be inaccurate or outdated."})]})]}),Object(b.jsxs)("div",{id:"PricePanel",children:[Object(b.jsx)("i",{className:"fas fa-bars",onClick:function(){return function(){var e=document.querySelector("#Menu");!1===t?(e.style.left="0px",t=!0):(e.style.left="-320px",t=!1)}()}}),Object(b.jsx)("div",{className:"avgFuelPrices",children:Object(b.jsx)(P,{avgPrices:B,minPriceStations:K,setPos:w,setSortBy:m,sortBy:p})})]})]}):Object(b.jsx)(b.Fragment,{}),Object(b.jsx)("div",{id:"map",children:Object(b.jsxs)(o.a,{whenCreated:function(t){e=t},center:[55.14952486735533,23.992860624307255],zoom:8,zoomControl:!1,preferCanvas:!0,children:[Object(b.jsx)(L,{}),Object(b.jsx)(d.a,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors \xa9 <a href="https://carto.com/attributions">CARTO</a>',url:"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",subdomains:"abcd",maxZoom:"20"}),s.map((function(e){return Object.values(e.fuelData).some((function(e){return e>0&&null!=e}))?Object(b.jsx)(u.a,{center:[e.latitude,e.longitude],radius:9,pathOptions:{color:e.fuelData[p[0]]<B[p[0]]?"#00AC2B":"#ac0000",fillOpacity:1,fillColor:e.fuelData[p[0]]<B[p[0]]?"#57FF71":"#ff5757",bubblingMouseEvents:!1,weight:2.5},class:"Marker",children:Object(b.jsx)(j.a,{children:Object(b.jsx)(N,{location:e,avgPrices:B})})}):Object(b.jsx)(b.Fragment,{})}))]})})]})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,59)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(F,{})}),document.getElementById("root")),T()}},[[51,1,2]]]);
//# sourceMappingURL=main.155caf87.chunk.js.map