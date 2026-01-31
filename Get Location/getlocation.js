const button = document.getElementById('get-location-button');
async function getData(lat,long){
const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=f01cfa2f2eea486da9c200504261501&q=${lat},${long}&aqi=yes`);
return await promise.json();
}
async function gotLocation(position) {
   const result = await getData(position.coords.latitude, position.coords.longitude);
   console.log(result);
}

function notGotLoction(){
    console.log("Could not get location");
}
button.addEventListener('click', async() => {
    navigator.geolocation.getCurrentPosition(gotLocation, notGotLoction);
});