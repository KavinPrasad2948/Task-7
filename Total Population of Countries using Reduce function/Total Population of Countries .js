const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function() {
    const data = JSON.parse(req.responseText);
const TotalPopulation = data.reduce((acc,country)=>acc + country .population,0);
console.log("Total Population of the Countries Using reduce Function :", TotalPopulation);
}
