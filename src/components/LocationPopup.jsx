import FuelTypeCircles from "./FuelTypeCircles";

import { handleEdit } from "./Handlers";

export default function LocationPopup(props) {
    const location = props.location;
    const averagePrices = props.avgPrices;

    return (
    <>
        <div className="StationInfo">
            <h2 className="StationName">{location.name}</h2>
            <h4 className="address">{location.address}</h4>
        </div>

        <div className="prices" id={`s${location.ID}`}>
            <FuelTypeCircles 
                fuelData={location.fuelData}
                avgPrices={averagePrices}>
            </FuelTypeCircles>
        </div>

        <div style={{position:"relative"}}>
            <a className="ChangeLink" id={`EditIconP${location.ID}`} onClick={() => handleEdit(location)}>
                Keisti Kainą
            </a>
            <div className="lds-dual-ring small blue" id={`LoadEditP${location.ID}`} />
        </div>

        <h4 className="updated">{location.updated}</h4>
    </>
    )
}