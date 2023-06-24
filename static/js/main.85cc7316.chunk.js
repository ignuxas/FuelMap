(this.webpackJsonpfuelmap=this.webpackJsonpfuelmap||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(12),i=c.n(s),r=c(4),l=(c(27),c(28),c(51)),o=c(52),d=c(54),j=c(55),u=c(53),b=c(22),h=c.n(b),m=c(0);function p(e){var t=e.fuelTypes,c=e.avgPrices;return t.map((function(t,a){return t>0&&null!==t?Object(m.jsxs)("div",{className:"circle ".concat(v[a]),children:[Object(m.jsx)("svg",{height:"30",width:"30",children:Object(m.jsx)("circle",{cx:"15",cy:"15",r:"15"})}),Object(m.jsx)("h4",{className:"iconText",children:y[a]}),Object(m.jsxs)("div",{contenteditable:e.editableField===e.stationID?"true":"false",className:"price ".concat(c[a]>t?"priceGreen":"priceRed"),children:[Object(m.jsx)("span",{contentEditable:"false",children:"\u20ac"}),"\xa0",t]})]}):Object(m.jsx)(m.Fragment,{})}))}function O(e){var t,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"popup",a=e.ID,n={A95:e.A95,A98:e.A98,D:e.D,LPG:e.LPG};t="popup"===c?document.querySelectorAll("#s".concat(a," .price")):document.querySelectorAll("#t".concat(a," .price"));var s={A95:0,A98:0,D:0,LPG:0};console.log(t),t.forEach((function(e){var t=parseFloat(e.innerHTML.split("&nbsp;")[1]),c=e.parentElement.classList[1].replace("circle","");s[c]=t}));for(var i=!1,l=0,o=Object.entries(s);l<o.length;l++){var d=Object(r.a)(o[l],2),j=d[0],u=d[1];u!==n[j]&&(i=!0,console.log(j,u,"|",n[u]))}i?fetch(P+"/editfuelstation",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ID:a,A95:s.A95,A98:s.A98,D:s.D,LPG:s.LPG})}).then((function(e){200===e.status?alert("Kainos pakeistos"):alert("Kain\u0173 pakeisti nepavyko")})):alert("Kainos nepakeistos")}function f(e){var t=e.location,c=e.averagePrices;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"StationInfo",children:[Object(m.jsx)("h2",{className:"StationName",children:t.name}),Object(m.jsx)("h4",{className:"address",children:t.address})]}),Object(m.jsx)("div",{className:"prices",id:"s".concat(t.ID),children:Object(m.jsx)(p,{fuelTypes:[t.A95,t.A98,t.D,t.LPG],avgPrices:c})}),Object(m.jsx)("a",{className:"ChangeLink",onClick:function(){return O(t)},children:"Keisti Kain\u0105"}),Object(m.jsx)("h4",{className:"updated",children:t.updated})]})}function x(e){var t=e.averagePrices,c=e.minPriceStations,a=e.minPrices;return t.map((function(t,n){return Object(m.jsxs)("div",{className:"circleDisplay ".concat(v[n]),children:[Object(m.jsx)("svg",{height:"60",width:"60",children:Object(m.jsx)("circle",{cx:"30",cy:"30",r:"30"})}),Object(m.jsx)("h4",{className:"iconTextDisplay",children:y[n]}),Object(m.jsxs)("div",{className:"fuelPricesDiv",children:[Object(m.jsxs)("h4",{children:["VID: ",t.toFixed(2),"\u20ac"]}),Object(m.jsxs)("h4",{className:"minPrice",onClick:function(){return e.setPos([c[n].latitude,c[n].longitude])},children:["MIN: ",a[n].toFixed(2),"\u20ac"]})]})]})}))}function g(e){var t=Object(a.useState)(-1),c=Object(r.a)(t,2),n=c[0],s=c[1],i=e.FuelStationData,l=e.averagePrices,o=e.quantity;return Object(m.jsxs)(m.Fragment,{children:[i.map((function(t,c){return t.A95||t.A98||t.D||t.LPG?Object(m.jsxs)("div",{className:"stationRow ".concat(n===t.ID?"editable":""),style:c>o?{display:"none"}:{display:"block"},children:[Object(m.jsxs)("div",{className:"stationHeaders",onClick:function(){return e.setPos([t.latitude,t.longitude])},children:[Object(m.jsx)("div",{className:"stationName",children:t.name}),Object(m.jsx)("div",{className:"stationAddress",children:t.address})]}),Object(m.jsx)("div",{className:"stationPrices",id:"t".concat(t.ID),children:Object(m.jsx)(p,{fuelTypes:[t.A95,t.A98,t.D,t.LPG],avgPrices:l,stationID:t.ID,editableField:n})}),Object(m.jsx)("div",{className:"stationUpdated",children:t.updated}),Object(m.jsx)("div",{className:"stationEdit",onClick:n===t.ID?function(){s(-1),O(t,"table")}:function(){return s(t.ID)},children:Object(m.jsx)("i",{class:"fa-solid fa-pen-to-square"})})]},t.ID):Object(m.jsx)(m.Fragment,{})})),Object(m.jsx)("a",{className:"aeffect",onClick:function(){return e.setDisplayedTableStations(o+12)},children:"LOAD MORE"})]})}var v=["circleA95","circleA98","circleD","circleLPG"],y=["95","98","D","LPG"],P="https://fuelapi.ignuxas.com";var D=function(){var e,t=!1,c=Object(a.useState)([]),n=Object(r.a)(c,2),s=n[0],i=n[1],b=Object(a.useState)(12),p=Object(r.a)(b,2),O=p[0],v=p[1],y=Object(a.useState)(200),D=Object(r.a)(y,2),N=D[0],A=D[1];function L(e,t){for(var c=99,a=0,n=0;n<e.length;n++)null!==e[n]&&e[n]>t-.3&&e[n]<c&&(c=e[n],a=n);return console.log("Min Price: "+c),s[a]}function S(e){for(var t=0,c=0,a=0;a<e.length;a++)null!==e[a]&&e[a]>.4&&e[a]<3&&(t+=1,c+=e[a]);return c/t}Object(a.useEffect)((function(){h.a.get(P+"/fuelstations").then((function(e){200===e.status?(i(e.data),console.log("Got Data"),document.getElementById("Loading").style.display="none"):(A(e.status),document.getElementById("Loading").style.display="none")})).catch((function(e){A(500),document.getElementById("Loading").style.display="none"}))}),[]);var F=function(t){var c=Object(l.a)();return e=c,Object(m.jsx)(m.Fragment,{})};function T(t){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.getZoom();e.flyTo(t,c)}if(0!==s.length){for(var k=[],I=[],C=[],E=[],G=0;G<s.length;G++)k.push(s[G].A95),I.push(s[G].A98),C.push(s[G].D),E.push(s[G].LPG);var w=S(k),M=S(I),B=S(C),q=S(E),K=[w,M,B,q],R=L(k,w),z=L(I,M),J=L(C,B),H=L(E,q),U=[R,z,J,H]}return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("div",{className:"lds-dual-ring",id:"Loading"}),Object(m.jsxs)("div",{id:"ErrorDiv",style:200!==N?{display:"block"}:{display:"none"},children:[Object(m.jsxs)("h2",{children:["Error ",N]}),"The server is currently down, please try again later or contact me at ",Object(m.jsx)("a",{className:"aeffect",href:"mailto:mikolaitis.ignas@gmail.com",children:"mikolaitis.ignas@gmail.com"})]}),s[0]?Object(m.jsxs)("div",{id:"Menu",children:[Object(m.jsxs)("div",{id:"StationPanel",children:[Object(m.jsx)("p",{id:"Title",children:"KURAS"}),Object(m.jsx)("div",{id:"StationTable",children:Object(m.jsx)(g,{FuelStationData:s,averagePrices:K,quantity:O,setDisplayedTableStations:v,setPos:T})}),Object(m.jsxs)("footer",{children:[Object(m.jsxs)("p",{children:["Fuel Map made by: ",Object(m.jsx)("a",{className:"aeffect",href:"https://ignuxas.com",target:"_blank",rel:"noreferrer",children:"Ignas Mikolaitis"})]}),Object(m.jsx)("p",{className:"betaText",children:"OPEN BETA: This project is still in development and anything can change, there may be some bugs and unfinished features."}),Object(m.jsx)("p",{className:"redText",children:"Note: The prices are crowd sourced and may be inaccurate or outdated."})]})]}),Object(m.jsxs)("div",{id:"PricePanel",children:[Object(m.jsx)("i",{className:"fas fa-bars",onClick:function(){return function(){var e=document.querySelector("#Menu");!1===t?(e.style.left="0px",t=!0):(e.style.left="-320px",t=!1)}()}}),Object(m.jsx)("div",{className:"avgFuelPrices",children:Object(m.jsx)(x,{averagePrices:K,setPos:T,minPriceStations:U,minPrices:[R.A95,z.A98,J.D,H.LPG]})})]})]}):Object(m.jsx)(m.Fragment,{}),Object(m.jsx)("div",{id:"map",children:Object(m.jsxs)(o.a,{whenCreated:function(t){e=t},center:[55.14952486735533,23.992860624307255],zoom:8,zoomControl:!1,preferCanvas:!0,children:[Object(m.jsx)(F,{}),Object(m.jsx)(d.a,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors \xa9 <a href="https://carto.com/attributions">CARTO</a>',url:"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",subdomains:"abcd",maxZoom:"20"}),s.map((function(e){return e.A95||e.A98||e.D||e.LPG?Object(m.jsx)(j.a,{center:[e.latitude,e.longitude],radius:9,pathOptions:{color:"#00AC2B",fillOpacity:1,fillColor:"#57FF71",bubblingMouseEvents:!1,weight:2.5},class:"Marker",children:Object(m.jsx)(u.a,{children:Object(m.jsx)(f,{location:e,averagePrices:K})})}):Object(m.jsx)(m.Fragment,{})}))]})})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,56)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(D,{})}),document.getElementById("root")),N()}},[[48,1,2]]]);
//# sourceMappingURL=main.85cc7316.chunk.js.map