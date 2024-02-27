const req = new XMLHttpRequest();
//req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function() {
    const data = JSON.parse(req.responseText);
    data.forEach(country => {
        console.log('Name:', country.name.common);
        console.log('Capital:', country.capital);
        console.log('Flag:', country.flags.svg);
      });
}