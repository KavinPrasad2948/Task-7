const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function() {
    const data = JSON.parse(req.responseText);
    const SmallPopulationCountries = data.filter(country => country.population < 200000);
    SmallPopulationCountries.sort((a,b)=>a.name.common.localeCompare(b.name.common));
    console.log('Countries with population less than 2 lakhs:', SmallPopulationCountries.map(country => country.name.common));
    
}