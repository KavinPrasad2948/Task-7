const req = new XMLHttpRequest();
//req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function() {
    const data = JSON.parse(req.responseText);
usDollar= data.filter(country => {
        const currencies = country.currencies;
        return currencies && Object.values(currencies).some(currency => currency.name === 'United States dollar');
        
    
});
usDollar.sort((a,b)=>a.name.common.localeCompare(b.name.common));
console.log('Countries using US dollar ',usDollar.map(country => country.name.common));
}

