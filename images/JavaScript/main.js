var long, lat, sum;

document.getElementById('btn1').addEventListener('click', function(){
    long = parseInt(document.getElementById('long').value);
    lat = parseInt(document.getElementById('lat').value);

    sum = long + lat;


    localStorage.setItem("addition", sum);

    document.getElementById('output').innerHTML = localStorage.getItem("addition");

});


