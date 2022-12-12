//GPS referenciamos de index
let startPos;
const buttonGetLocation = document.getElementById('get-location');
const outLat = document.getElementById('out-lat');
const outLog = document.getElementById('out-log');


const geoSuccess = (position) => {
    startPos = position;
    outLat.innerHTML = startPos.coords.latitude;
    outLog.innerHTML = startPos.coords.longitude;
};

//por si pasa un error
const geoError = (error) => {
    console.log('Error occurred. Error code: ' + error.code);

};


buttonGetLocation.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

});