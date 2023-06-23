import FuelTypeCircles from "./FuelTypeCircles";
import { useState } from "react";
import { handleEdit } from "./Handlers";
import { sortByS } from "../App";

export default function StationsTable(props) {
    const [editableField, setEditableField] = useState(-1);
    const FuelStationData = props.FuelStationData;
    const averagePrices = props.averagePrices;
    const quantity = props.quantity;

    console.log(sortByS)

    return (
        <>
        {FuelStationData.map((location, index) => (
            Object.values(location.fuelData).some((price) => (price > 0 && price != null)) && location.fuelData[sortByS[0]] !== 0 ? ( // check if any price is not null
            <div className={`stationRow ${editableField === location.ID ? "editable":""}`} key={location.ID} 
                style={index > quantity ? {display:"none"}:{display:"block"}}
            >
                <div className="stationHeaders" onClick={() => props.setPos([location.latitude, location.longitude])}>
                    <div className="stationName">{location.name}</div>
                    <div className="stationAddress">
                        {location.address}
                        <div className="stationUpdated">{location.updated}</div>
                    </div>
                </div>
                <div className="stationPrices" id={`t${location.ID}`}>
                    <FuelTypeCircles
                        fuelData={location.fuelData}
                        avgPrices={averagePrices}
                        stationID={location.ID}
                        editableField={editableField}
                    ></FuelTypeCircles>
                </div>
                <div className="stationEdit" onClick={ // cancel editing if already editing
                    editableField === location.ID ? 
                        () => {setEditableField(-1); handleEdit(location, "table")} : // if already editing
                        () => setEditableField(location.ID)}
                    >
                    <div className="lds-dual-ring small" id={`LoadEdit${location.ID}`}/>
                    <i className="fa-solid fa-pen-to-square" id={`EditIcon${location.ID}`}></i>
                </div>
            </div>
        ) : (<></>)))}
        <button onClick={
            () => props.setDisplayedTableStations(quantity + 6)
            }>LOAD MORE</button>
        </>
    )
}