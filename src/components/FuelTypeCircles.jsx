import { circleText } from "../App";

export default function FuelTypeCircles(props) {

    const stationID = props.stationID;
    const editableField = props.editableField;
    const fuelData = props.fuelData;
    const averagePrices = props.avgPrices;

    return (
        Object.entries(fuelData).map(([fuelType, price]) => (
            price > 0 && price !== null ? (
                <div className={`circle circle${fuelType}`}>
                    <svg height="30" width="30">
                        <circle cx="15" cy="15" r="15" />
                    </svg>
                    <h4 className="iconText">{circleText[fuelType]}</h4>
                    <div contentEditable={editableField === stationID ? "true":"false"  /* todo: fix warnings */}
                            className={`price ${averagePrices[fuelType] > price ? ("priceGreen") : ("priceRed")}`}>
                            <span contentEditable="false">€</span>&nbsp;{price}
                        </div>
                </div>
            ) : (<></>)
            )
        )
    )
}