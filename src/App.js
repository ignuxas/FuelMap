import "./App.css";
import "./styles/StationsTables.css";
import { useState } from "react";
import React, { useEffect } from "react";
import { MapContainer, TileLayer, Popup, CircleMarker, useMap} from "react-leaflet";

import LocationPopup from "./components/LocationPopup";
import SideCirles from "./components/SideCircles";
import StationsTable from "./components/StationsTable";

import { getFuelStations } from "./components/Handlers";

export const circleText= {
  "A95": "95",
  "A98": "98",
  "D": "D",
  "LPG": "LPG"
}

// If I made this not hard coded, I would have to make a new request 
// to the server to get the fuel types which I could do, but I don't want to ¯\_(ツ)_/¯
export const fuelTypes = ["A95", "A98", "D", "LPG"] // and this is faster anyway

export const api = "https://fuelapi.ignuxas.com"

export var SetFuelStationDataFunc, SetErrorCodeFunc, sortByS;

function App() {
  var Map;
  var menuOpen = false;

  const [FuelStationData, SetFuelStationData] = useState([]);
  const [sortBy, setSortBy] = useState(["A95", "ASC"]);
  const [DisplayedTableStations, setDisplayedTableStations] = useState(12);
  const [ErrorCode, setErrorCode] = useState(200);

  useEffect(() => {
    // there is a better way to do this, will re-write sometime
    SetErrorCodeFunc = setErrorCode;
    SetFuelStationDataFunc = SetFuelStationData;

    getFuelStations(sortBy);
  }, []);

  useEffect(() => { getFuelStations(sortBy) }, [sortBy]);

  function getMinStation(array, average) {
    var minNum = 99;
    var stationNum = 0;

    for (var i = 0; i < array.length; i++) {
      if (array[i] !== null && array[i] > average - 0.3) { // filter out troll and null data
        if (array[i] < minNum) {
          minNum = array[i];
          stationNum = i;
        }
      }
    }

    return FuelStationData[stationNum];
  }

  function averagePrice(array){
    var trueLength = 0;
    var value = 0

    for (var i = 0; i < array.length; i++) {
      if (array[i] !== null && array[i] > 0.4 && array[i] < 3) { // filter out troll and null data
        trueLength += 1
        value += array[i]
      }
    }
    return (value / trueLength)
  }

  const MapController = () => {
    const map = useMap();
    Map = map;
    return <></>;
  };

  function setPos(position, zoom=Map.getZoom(), offset=[30000,0]) {
    Map.flyTo(position, zoom);
  }

  if (FuelStationData.length !== 0) {
    // ---- AVERAGE PRICES ----
    var averagePrices = {};

    for (let fType = 0; fType < fuelTypes.length; fType++) { // for each fuel type
      var prices = [];
      for (let station = 0; station < FuelStationData.length; station++) { // for each station
        prices.push(FuelStationData[station].fuelData[fuelTypes[fType]]);
      }

      averagePrices[fuelTypes[fType]] = averagePrice(prices);
    }

    // ---- MIN PRICE STATIONS ----
    var minPriceStations = {};

    for (let fType = 0; fType < fuelTypes.length; fType++) { // for each fuel type
      minPriceStations[fuelTypes[fType]] = 
        getMinStation(FuelStationData.map(x => x.fuelData[fuelTypes[fType]]), averagePrices[fuelTypes[fType]]);
    }
  }

  function openMenu(){
    var menu = document.querySelector("#Menu");
    if(menuOpen === false){ // OPEN menu
      menu.style.left = "0px";
      menuOpen = true;
    }
    else{
      menu.style.left = "-320px";
      menuOpen = false;
    }
  }


  return (
    <div className="App">
      <div className="lds-dual-ring" id="Loading"/>
      <div id="ErrorDiv" style={ErrorCode !== 200 ? {display:"block"}:{display:"none"}}>
        <h2>Error {ErrorCode}</h2>
        The server is currently down, please try again later or contact me at <a className="aeffect" href="mailto:mikolaitis.ignas@gmail.com">mikolaitis.ignas@gmail.com</a>
      </div>
      {FuelStationData[0] ? (
      <div id="Menu">
        <div id="StationPanel">
            <p id="Title">KURAS</p>
            <div id="StationTable">
              <StationsTable 
                FuelStationData={FuelStationData}
                averagePrices={averagePrices}
                quantity={DisplayedTableStations}
                setDisplayedTableStations={setDisplayedTableStations}
                setPos={setPos}
              ></StationsTable>
            </div>
            <footer>
                <p>Fuel Map made by: <a className="aeffect" href="https://ignuxas.com" target="_blank" rel="noreferrer">Ignas Mikolaitis</a></p>
                <p className="betaText">OPEN BETA: This project is still in development and anything can change, there may be some bugs and unfinished features.</p>
                <p className="redText">Note: The prices are crowd sourced and may be inaccurate or outdated.</p>
            </footer>
        </div>
        <div id="PricePanel">
            <i className="fas fa-bars" onClick={() => openMenu()} />
            <div className="avgFuelPrices">
                <SideCirles 
                    avgPrices={averagePrices} 
                    minPriceStations={minPriceStations}
                    setPos={setPos} 
                    setSortBy={setSortBy}
                    sortBy={sortBy}
                ></SideCirles>
            </div>
        </div>
    </div>
    ) : (<></>)
    }

      <div id="map">
        <MapContainer
          whenCreated={(map) => {
              Map = map
          }}
          center={[55.14952486735533, 23.992860624307255]} // Kaunas
          zoom={8}
          zoomControl={false}
          preferCanvas={true}
        >
          <MapController></MapController>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            subdomains="abcd"
            maxZoom="20"
          />
          {FuelStationData.map((location) => (
            Object.values(location.fuelData).some((price) => (price > 0 && price != null)) ? ( // if any of the prices are not null
              <CircleMarker
                center={[location.latitude, location.longitude]}
                radius={9}
                pathOptions={{
                  color: location.fuelData[sortBy[0]] < averagePrices[sortBy[0]] ? "#00AC2B" : "#ac0000",
                  fillOpacity: 1,
                  fillColor: location.fuelData[sortBy[0]] < averagePrices[sortBy[0]] ? "#57FF71" : "#ff5757",
                  bubblingMouseEvents: false,
                  weight: 2.5,
                }}
                class="Marker"
              >
                <Popup>
                  <LocationPopup 
                    location={location} 
                    avgPrices={averagePrices}>
                  </LocationPopup>
                </Popup>
              </CircleMarker>
            ) : (<></>)
            )).reverse() /* reverso so the under averge icons are on top when needed */}
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
