var long, lat, sum;


const add = (x, y) => {return x+y}

const addValues = async (event) => {
    try{
    document.getElementById('output').innerHTML = '';
    const regex = /[^a-zA-Z_]/g;
    const first = parseInt(document.getElementById('lat').value);
    const second = parseInt(document.getElementById('long').value);
    const ans = `Your sum is ${add(first, second)}.`;
    document.getElementById('output').innerHTML = ans;
    }catch(error){
        console.error(error)
    }
}




