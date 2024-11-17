const temperaturField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dateandTimefield = document.querySelector(".time_location span");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");
const form = document.querySelector("form");

form.addEventListener('submit', searchForLocation);

let target = 'Mumbai';
const fetchResults = async (targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=c7c0eb7ee9e04e9aad2172422240611&q=${targetLocation}&aqi=no`;

    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    let locationName = data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;

    updateDetails(temp, locationName, time, condition);
};

function updateDetails(temp, locationName, time, weatherCondition) {
    temperaturField.innerText = temp;
    locationField.innerText = locationName;
    dateandTimefield.innerText = time;
    conditionField.innerText = weatherCondition;
}

function searchForLocation(e) {
    e.preventDefault();

    target = searchField.value.trim();
    if (target) {
        fetchResults(target);
    } else {
        alert("Please enter a valid location.");
    }
}

fetchResults(target);
