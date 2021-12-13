var map = L.map('map', {zoomControl: false}).setView([55.14952486735533, 23.992860624307255], 8);
menu = document.querySelector('.menu');
mapcss = document.querySelector('#map');

menuOpen = false;

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20,
}).addTo(map);

var myIcon = L.icon({
	iconUrl: "fuel.png",
	iconSize: [15, 15],
	popupAnchor: [0, -7],
});

var myYellowIcon = L.icon({
	iconUrl: "fuelyellow.png",
	iconSize: [15, 15],
	popupAnchor: [0, -7],
});

var myBlueIcon = L.icon({
	iconUrl: "fuelblue.png",
	iconSize: [15, 15],
	popupAnchor: [0, -7],
});

function openMenu(){
	if(menuOpen == false){
		mapcss.style.left = "400px";
		menu.style.left = "0px";
		menuOpen = true;
	}
	else{
		mapcss.style.left = "75px";
		menu.style.left = "-325px";
		menuOpen = false;
	}
}

eel.expose(getAvgPrices);
function getAvgPrices(avgPricesa, minPricesa){
	avgPrices = avgPricesa
	minPrices = minPricesa
	WriteAvg(avgPrices['B95'], '-', '-', avgPrices['D'], avgPrices['Dk'], '-', avgPrices['LPG']);
	WriteMin(minPrices['B95'], '-', '-', minPrices['D'], minPrices['Dk'], '-', minPrices['LPG']);
}


eel.expose(AddMarker);
function AddMarker(verified, name, address, lat, long, Bprice, B98price, Dprice, DkPrice, GasPrice, Updated){
	Background95 = 'style="background-color: rgba(255, 0, 0, 0.2)"';
	BackgroundD = 'style="background-color: rgba(255, 0, 0, 0.2)"';
	BackgroundDk = 'style="background-color: rgba(255, 0, 0, 0.2)"';
	BackgroundLPG = 'style="background-color: rgba(255, 0, 0, 0.2)"';

	if(avgPrices['B95'] >= parseFloat(Bprice)){Background95 = 'style="background-color: rgba(0, 255, 0, 0.2)"';}
	if(avgPrices['D'] >= parseFloat(Dprice)){BackgroundD = 'style="background-color: rgba(0, 255, 0, 0.2)"';}
	if(avgPrices['Dk'] >= parseFloat(DkPrice)){BackgroundDk = 'style="background-color: rgba(0, 255, 0, 0.2)"';}
	if(avgPrices['LPG'] >= parseFloat(GasPrice)){BackgroundLPG = 'style="background-color: rgba(0, 255, 0, 0.2)"';}
	if(Bprice == "-"){Background95 = ''}
	if(Dprice == "-"){BackgroundD = ''}
	if(DkPrice == "-"){BackgroundDk = ''}
	if(GasPrice == "-"){BackgroundLPG = ''}

	var BpriceElement = '<div class="circle circle95"><svg height="30" width="30"><circle cx="15" cy="15" r="15"/><h4 class="iconText">95</h4></svg><div class="price" '+Background95+'>'+String(Bprice)+' €</div></div>'
	var BPlusElement = '<div class="circle circle95p"><svg height="30" width="30"><circle cx="15" cy="15" r="15"/><h4 class="iconText">95+</h4></svg><div class="price">'+'-'+' €</div></div>'
	var B98PlusElement = '<div class="circle circle95p"><svg height="30" width="30"><circle cx="15" cy="15" r="15"/><h4 class="iconText">98+</h4></svg><div class="price">'+'-'+' €</div></div>'
	var DpriceElement = '<div class="circle circleDK"><svg height="30" width="30"><circle cx="15" cy="15" r="15"/><h4 class="iconText">D</h4></svg><div class="price" '+BackgroundD+'>'+String(Dprice)+' €</div></div>'
	var DpluspriceElement = '<div class="circle circleDplus"><svg height="30" width="30"><circle cx="15" cy="15" r="15"/><h4 class="iconText">D+</h4></svg><div class="price" '+BackgroundDk+'>'+String(DkPrice)+' €</div></div>'
	var GasPriceElement = '<div class="circle circleGas"><svg height="30" width="30"><circle cx="15" cy="15" r="15"/><h4 class="iconText">LPG</h4></svg><div class="price" '+BackgroundLPG+'>'+String(GasPrice)+' €</div></div>'

	L.marker([lat, long], {icon: myIcon}).addTo(map)
    .bindPopup('<h2 class="StationName">'+String(name)+'</h2><h4 class="address">'+String(address)+'</h4><div class="prices">'+BpriceElement+BPlusElement+B98PlusElement+DpriceElement+DpluspriceElement+GasPriceElement+'</div><h4 class="updated">'+Updated+"</h4><a href='https://www.kuro-kainos.lt/' target='_blank'class='hrefs' id='changeHref'>Pridėti/Keisti Kainą</a>")
}


eel.expose(AddYellowMarker);
function AddYellowMarker(verified, name, address, lat, long, Bprice, B98price, Dprice, DkPrice, GasPrice, Updated){
	Background95 = 'style="background-color: rgba(255, 0, 0, 0.2)"';
	BackgroundD = 'style="background-color: rgba(255, 0, 0, 0.2)"';
	BackgroundDk = 'style="background-color: rgba(255, 0, 0, 0.2)"';
	BackgroundLPG = 'style="background-color: rgba(255, 0, 0, 0.2)"';

	if(avgPrices['B95'] >= parseFloat(Bprice)){Background95 = 'style="background-color: rgba(0, 255, 0, 0.2)"';}
	if(avgPrices['D'] >= parseFloat(Dprice)){BackgroundD = 'style="background-color: rgba(0, 255, 0, 0.2)"';}
	if(avgPrices['Dk'] >= parseFloat(DkPrice)){BackgroundDk = 'style="background-color: rgba(0, 255, 0, 0.2)"';}
	if(avgPrices['LPG'] >= parseFloat(GasPrice)){BackgroundLPG = 'style="background-color: rgba(0, 255, 0, 0.2)"';}
	if(Bprice == "-"){Background95 = ''}
	if(Dprice == "-"){BackgroundD = ''}
	if(DkPrice == "-"){BackgroundDk = ''}
	if(GasPrice == "-"){BackgroundLPG = ''}

	var BpriceElement = '<div class="circle circle95"><svg height="30" width="30"><circle cx="15" cy="15" r="15"/><h4 class="iconText">95</h4></svg><div class="price" '+Background95+'>'+String(Bprice)+' €</div></div>'
	var BPlusElement = '<div class="circle circle95p"><svg height="30" width="30"><circle cx="15" cy="15" r="15"/><h4 class="iconText">95+</h4></svg><div class="price">'+'-'+' €</div></div>'
	var B98PlusElement = '<div class="circle circle95p"><svg height="30" width="30"><circle cx="15" cy="15" r="15"/><h4 class="iconText">98+</h4></svg><div class="price">'+'-'+' €</div></div>'
	var DpriceElement = '<div class="circle circleDK"><svg height="30" width="30"><circle cx="15" cy="15" r="15"/><h4 class="iconText">D</h4></svg><div class="price" '+BackgroundD+'>'+String(Dprice)+' €</div></div>'
	var DpluspriceElement = '<div class="circle circleDplus"><svg height="30" width="30"><circle cx="15" cy="15" r="15"/><h4 class="iconText">D+</h4></svg><div class="price" '+BackgroundDk+'>'+String(DkPrice)+' €</div></div>'
	var GasPriceElement = '<div class="circle circleGas"><svg height="30" width="30"><circle cx="15" cy="15" r="15"/><h4 class="iconText">LPG</h4></svg><div class="price" '+BackgroundLPG+'>'+String(GasPrice)+' €</div></div>'

	L.marker([lat, long], {icon: myYellowIcon}).addTo(map)
    .bindPopup('<h2 class="StationName">'+String(name)+'</h2><h4 class="address">'+String(address)+'</h4><div class="prices">'+BpriceElement+BPlusElement+B98PlusElement+DpriceElement+DpluspriceElement+GasPriceElement+'</div><h4 class="updated">'+Updated+"</h4><a href='https://www.kuro-kainos.lt/' target='_blank'class='hrefs' id='changeHref'>Pridėti/Keisti Kainą</a>")
}

eel.expose(AddBlue)
function AddBlue(lat, long, address, fuel, extras){
	var markerCircleK = L.marker([lat, long], {icon: myBlueIcon}).addTo(map)
    .bindPopup('<div class="NoPrice"><h2 class="StationName">Circle K</h2><h4 class="address">'+address+'</h4>'+fuel+"<br><br>"+extras+"</div>")
    L.DomUtil.addClass(markerCircleK._icon, 'CircleKMarker');
}

function WriteAvg(Benz, BenzP, Benz98, Dyze, DyzeP, Dz, LPG,){
	document.getElementById('avg95').innerHTML = 'VID: ' + Benz + ' €';
	document.getElementById('avg95plus').innerHTML = 'VID: ' + BenzP + ' €';
	document.getElementById('avg98').innerHTML = 'VID: ' + Benz98 + ' €';
	document.getElementById('avgD').innerHTML = 'VID: ' + Dyze + ' €';
	document.getElementById('avgDplus').innerHTML = 'VID: ' + DyzeP + ' €';
	document.getElementById('avgDz').innerHTML = 'VID: ' + Dz + ' €';
	document.getElementById('avgLPG').innerHTML = 'VID: ' + LPG + ' €';
}

function WriteMin(Benz, BenzP, Benz98, Dyze, DyzeP, Dz, LPG,){
	document.getElementById('min95').innerHTML = 'MIN: ' + Benz + ' €';
	document.getElementById('min95plus').innerHTML = 'MIN: ' + BenzP + ' €';
	document.getElementById('min98').innerHTML = 'MIN: ' + Benz98 + ' €';
	document.getElementById('minD').innerHTML = 'MIN: ' + Dyze + ' €';
	document.getElementById('minDplus').innerHTML = 'MIN: ' + DyzeP + ' €';
	document.getElementById('minDz').innerHTML = 'MIN: ' + Dz + ' €';
	document.getElementById('minLPG').innerHTML = 'MIN: ' + LPG + ' €';
}

eel.expose(DrawChart)
function DrawChart(chartData)
{
	var Dprices=[];
	var E95prices=[];
	var E98prices=[];
	var Dates=[];

	for (var i = 0; i < chartData['D'].length; i++) {
	    Dprices.push(chartData['D'][i][1]);
	    E95prices.push(chartData['E95'][i][1]);
	    E98prices.push(chartData['E98'][i][1]);
	    Dates.push(chartData['D'][i][3]);
	}

	var options = {
          series: [{
          name: 'Dyzelinas',
          data: Dprices
        }, {
          name: 'E95',
          data: E95prices
        }, {
          name: 'E98',
          data: E98prices
        }],
          chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          categories: Dates
        },
    };

	var chart = new ApexCharts(document.querySelector("#chart"), options);
	chart.render();
}

var HideMarkersBool = true;
document.getElementById("showNoPrice").addEventListener("click", HideMarkers);

function HideMarkers(){
	var circleKMarkers = document.getElementsByClassName("CircleKMarker");
	if(HideMarkersBool == false){
		for(var i = 0; i < circleKMarkers.length; i++){
			circleKMarkers[i].style.opacity = "0";
			circleKMarkers[i].style.pointerEvents = "none";
		}
		HideMarkersBool = true;
	}
	else{
		for(var i = 0; i < circleKMarkers.length; i++){
			circleKMarkers[i].style.opacity = "1";
			circleKMarkers[i].style.pointerEvents = "all";
		}
		HideMarkersBool = false;
	}
}

//eel.Jozita();
//eel.GetPrices();
eel.GetPricesSent();
eel.GetCircleK();
eel.GetChartData();