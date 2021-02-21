// 1. Create a request variable from XMLHttpRequest(inbuild class in JS)
var request = new XMLHttpRequest();

// 2. Create a new connection 
request.open('GET','https://restcountries.eu/rest/v2/all',true)
// 3. send the request 
request.send();
// 4. load the Data
request.onload = function (){
    var countryData = JSON.parse(this.response);
    console.log(countryData);

    // for(i in countryData){
    //     console.log(countryData[i].capital);
    // }

    //Extract and print the total population of all the countries in the console
    var sum =0;
    for(i=0;i<countryData.length;i++){
        //console.log(countryData[i].population);
        sum = sum + countryData[i].population;
    }
    console.log("Total population of all Countries: "+sum);
}