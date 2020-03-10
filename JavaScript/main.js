
const addT = (x, y) => {return x+y}
const substractT = (x,y) => {return x-y}
const mult = (x,y) => {return x*y}
const division = (x,y)=>{return x/y}



const calculate = async (event) => {
  
    document.getElementById('output').innerHTML = '';
    const first = parseInt(document.getElementById('first').value);
    const second = parseInt(document.getElementById('second').value);
    var select = document.getElementById('operation').options;
    var selected = document.getElementById('operation').selectedIndex;
    if(select[selected].text == "Addition"){
        document.getElementById('output').innerHTML= addT(first, second);
    }else
    if(select[selected].text == "Subtraction"){
        document.getElementById('output').innerHTML= substractT(first,second);

    }else if(select[selected].text == "Multiplication"){
        document.getElementById('output').innerHTML= mult(first,second);
    }
    
    
    else{
        document.getElementById('output').innerHTML= division(first, second);

    }
    
    
 
}


document.addEventListener('click', event => {
    if (event.target && event.target.id === 'btn1') { calculate(event) }
  })





