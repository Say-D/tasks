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

    // Get all the countries from Asia continent / “region” using Filter method
    var newArr = countryData.filter((x) => x.region=='Asia')
    console.log(newArr);

    // Get all the countries with population of less than 2 lacs using Filter method 
    var newArr1 = countryData.filter((y)=>y.population < 200000)
    console.log(newArr1);

    // Print the following details name, capital, flag using forEach. 
    countryData.forEach((item)=>{
        console.log(item.name);
        console.log(item.capital);
        console.log(item.flag);
    })

    // Print the total population of countries using the reduce method.
    var newArr2 = countryData.reduce(function(result,item,index){
        return result+item.population;
    },0)
    console.log("Total Population :" +newArr2);

    //  Print the country which uses US Dollars as currency.
    var us_country = countryData.filter(function(item){
        for(i=0;i<item.currencies.length;i++){
            if(item.currencies[i].code ==="USD"){
                console.log(item);
            return item 
            }
        }
        })
        console.log("Country which uses US Dollars: "+us_country);
}