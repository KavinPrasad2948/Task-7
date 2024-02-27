const req = new XMLHttpRequest();
//req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function() {
    const data = JSON.parse(req.responseText);
    const AsiaCountries = data.filter(country => country.region === 'Asia');
    AsiaCountries.sort((a,b)=>a.name.common.localeCompare(b.name.common));
    console.log("The Countries in Asia :",AsiaCountries.map(country => country.name.common));
}