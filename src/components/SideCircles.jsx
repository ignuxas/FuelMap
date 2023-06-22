import {circleText} from "../App";

export default function FuelTypeCircles(props) {
    const averagePrices = props.avgPrices;
    const minPriceStations = props.minPriceStations;
    const sortBy = props.sortBy;
    
    return (
        Object.entries(averagePrices).map(([fuelType, price], index) => (
            <div className={`circleDisplay`} key={index}>
                <div className={`sideCircle BG${fuelType} ${sortBy[0] === fuelType ? (sortBy[1] === "ASC" ? "green":"red"):""}`}  
                    onClick={() => props.setSortBy([fuelType, (sortBy[0] === fuelType && sortBy[1] === "ASC" ? "DESC":"ASC")])}>
                    <h4 className="iconTextDisplay">{circleText[fuelType]}</h4>
                </div>
                <div className="fuelPricesDiv">
                    <h4 >VID: {price.toFixed(2)}€</h4>
                    <h4 className="minPrice" 
                        onClick={() => props.setPos([minPriceStations[fuelType].latitude, minPriceStations[fuelType].longitude])}> 
                        MIN: {minPriceStations[fuelType].fuelData[fuelType].toFixed(2)}€</h4>
                </div>
            </div>
        ))
    )
}