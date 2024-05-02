
function convertToFahrenheit() {

    let celsius = +document.querySelector("#box1").value;

    let fahrenheit = (celsius * 9/5) + 32;

    document.querySelector("#root").innerHTML = `Temperature in Fahrenheit: ${fahrenheit}°F`;
}

function convertToCelsius() {
    
    let fahrenheit = +document.querySelector("#box1").value;

    let celsius = (fahrenheit - 32) * 5/9;

    document.querySelector("#root").innerHTML = `Temperature in Celsius: ${celsius}°C`;
}
