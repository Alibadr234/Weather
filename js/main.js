let inputCountry=document.getElementById("submit")
let Submit= document.getElementById("input-country")
inputCountry .addEventListener("click" , function(){
    let valueSearch = Submit.value
    getDay(valueSearch)
})
    // first dady 
let numDay = document .getElementById("num-day")
let numMonth = document .querySelectorAll(".num-month")
let Country = document .getElementById("countrys")
let DegreeNum = document .getElementById("degree-num")
let IconDay = document .getElementById("con-day")
let StatOne = document .getElementById("stat-one")


        // secound day 
let NumSeceondDay = document.getElementById("num-second-day")
let IconScounDay = document.getElementById("icon-scound-day")
let hightDeg = document .getElementById("hight-deg")
let lowDeg =document . getElementById("low-deg")
let statTwo =document .getElementById("stat-two")



        // third day

let numThirdDay =document .getElementById("num-third-day")
let iconThirdDay = document.getElementById("icon-third-day")
let hightThird = document.getElementById("hight-third")
let lowThird = document .getElementById("low-third")
let statThree = document.getElementById("stat-three")

let data=[];
async function getDay(value = "cairo"){
    let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=7117a750550d4cd293e92921242609&q=${value}&days=3`)
    let fainalresponse =await response.json();
    let data = fainalresponse.forecast;
    console.log(data)
    console.log(fainalresponse)
    seachData(fainalresponse)
}
getDay()
   
function seachData(dataone){
    Country.innerHTML = dataone.location.name;
    DegreeNum.innerHTML = dataone.current.temp_c +"  C";
    StatOne.innerHTML = dataone.current.condition.text;
    // IconDay.setAttribute("src", dataone.current.condition.icon);
    // numDay=new Date(dataone.current.last_updated)
    hightDeg.innerHTML= dataone.forecast.forecastday[1].day.maxtemp_c+"  C"
    lowDeg.innerHTML= dataone.forecast.forecastday[1].day.mintemp_c+"  C"
    statTwo.innerHTML=dataone.forecast.forecastday[1].day.condition.text;
    IconScounDay.setAttribute("src", dataone.forecast.forecastday[1].day.condition.icon)
    NumSeceondDay=new Date(dataone.forecast.forecastday[1].day)
    hightThird.innerHTML = dataone.forecast.forecastday[2].day.maxtemp_c+"  C"
    lowThird.innerHTML= dataone.forecast.forecastday[2].day.mintemp_c+"  C"
    statThree.innerHTML=dataone.forecast.forecastday[2].day.condition.text
    iconThirdDay.setAttribute("src",dataone.forecast.forecastday[2].day.condition.icon)
    numThirdDay=new Date(dataone.forecast.forecastday[2].day)

}