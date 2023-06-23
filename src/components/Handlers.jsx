import { api } from "../App";

import { SetFuelStationDataFunc, SetErrorCodeFunc, sortByS } from "../App";
import Axios from "axios";

export async function getFuelStations(order=["A95", "ASC"], showLoading=true) {
    if(showLoading) 
    document.getElementById("Loading").style.display = "block"; // could use refs instead

    await Axios.get(`${api}/fuelstations?sortBy=${order[0]}&sortOrder=${order[1]}`).then((response) => {
      if(response.status === 200){ SetFuelStationDataFunc(response.data) } 
      else { SetErrorCodeFunc(response.status) }
    }).catch((error) => { SetErrorCodeFunc(500) });

    document.getElementById("Loading").style.display = "none"; // could use refs instead
    return;
};

export async function handleEdit(location, type="popup"){
    const lID = location.ID;

    const currentPrices = location.fuelData;

    var changedPricesDivs;

    var loadingIcon;
    var editIcon;
    
    if(type === "popup"){
        changedPricesDivs = document.querySelectorAll(`#s${lID} .price`);
        loadingIcon = document.querySelector(`#LoadEditP${lID}`);
        editIcon = document.querySelector(`#EditIconP${lID}`);
    } else {
        changedPricesDivs = document.querySelectorAll(`#t${lID} .price`);
        loadingIcon = document.querySelector(`#LoadEdit${lID}`);
        editIcon = document.querySelector(`#EditIcon${lID}`); // todo: code below depends on a class, should be changed
    }

    console.log(loadingIcon);
    console.log(editIcon);

    loadingIcon.style.display = "block"; // show loading animation
    editIcon.style.opacity = 0; // hide edit icon

    var changedPrices = {};

    changedPricesDivs.forEach((priceDiv) => {
        // todo: code below depends on a class, should be changed
        const price = parseFloat(priceDiv.innerHTML.split("&nbsp;")[1]);
        const fuelType = priceDiv.parentElement.classList[1].replace("circle", "");

        changedPrices[fuelType] = price;
    });

    // check if any prices were changed
    var changed = false;
    for (const [key, value] of Object.entries(changedPrices)) {
        if(value !== currentPrices[key]){
            changed = true;
        }
    }


    console.log(changedPrices);
    console.log(currentPrices);
    console.log(changed);

    // if any prices were changed, send a post request to the server
    if(changed){
        await fetch(api+"/editfuelstation" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ID: lID,
                    ...changedPrices
                })
            })
            .then(async (data) => {
                if(data.status === 200){
                    await getFuelStations(sortByS, false);
                } else {
                    console.log("Kainos nepakeistos");
                }
            }
        );
    } else {
        console.log("Kainos nepakeistos");
    }

    loadingIcon.style.display = "none"; // hide loading animation
    editIcon.style.opacity = 1; // show edit icon

    console.log("Edit handled");
}