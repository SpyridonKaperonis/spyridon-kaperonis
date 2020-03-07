
function fn(){
    var number = document.getElementById("text").value;
    console.log("The number is:"+ number);

    mystorage = window.localStorage();
    document.getElementById("output").innerHTML = number;
    window.localStorage.setItem("1", JSON.stringify(number));


    
};

funtion laugh(){
var request = new XMLHttpRequest();
request.open('GET', 'https://asciiart.website/index.php?art=places/maps');
request.onload = function(){
    console.log(request.responseText);
}
request.send;
};

const getData = async () => {
    try{
        const URL = 'https://asciiart.website/index.php?art=places/maps'
        const response = await axios.get(JSON)
        const json = response.getData
        console.log(`Fetched. Response JSON ${json}`)
        return json
    } catch (error) {console.error(error)}

}

document.addEventListener('click', event =>{
    if(event.target && event.target.id === 'btn1'){
        updateWith
    }
})



var map;
function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
}

  

