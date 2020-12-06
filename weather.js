const weather = document.querySelector(".weather");

const API_KEY = "0447da692cbea035a1448e596d3213f5";
const LOCATION = "location";

function getWeather(latitude,longitude){
  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
  .then(res => res.json())
  .then((out) => {
        console.log('Output: ', out);
      weather.innerText = `${out.main.temp}°C at ${out.name}`;})
  .catch(err => console.error(err));
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