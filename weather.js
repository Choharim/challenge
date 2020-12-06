const weather = document.querySelector(".weather");

const API_KEY = "0447da692cbea035a1448e596d3213f5";
const LOCATION = "location";

function getWeather(latitude,longitude){

}

function requestError(err){
  alert(err.message);
}

function requestSuccesss(location){
  const latitude = location.coords.latitude;
  const longitude = location.coords.longitude;
  getWeather(latitude,longitude);
}

function askLocation(){
 navigator.geolocation.getCurrentPosition(requestSuccesss, requestError);
}

function init(){
  const location_LS = localStorage.getItem(LOCATION);
  if( location_LS !== null){
    showLocation();
  }else{
    askLocation();
  }
}
init();