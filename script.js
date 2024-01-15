const textBox = document.getElementById("textBox");
const toFahren = document.getElementById("toFahren");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;



function convert(){

    if(toFahren.checked){

        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = `${temp.toFixed(1)} Fahrenheit`;
    }
    else if(toCelsius.checked){
        
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = `${temp.toFixed(0)} Celsius`;
    }
    else{
        result.textContent = "Select a uni";
    }
}