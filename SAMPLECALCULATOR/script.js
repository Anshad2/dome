
function add(){

    let num1 = +document.querySelector("#box1").value

    let num2 = +document.querySelector("#box2").value

    let result = num1+num2

    document.querySelector("#root").innerHTML=`addition result = ${result}`

}

// value = to take the value in the box
// + used to change the number or else string can be concatnated
// onclick = name of the function

function sub(){
    let num1 = +box1.value

    let num2 = +box2.value

    let result = num1-num2

    document.querySelector("#root").innerHTML = `substarction result = ${result}`

}

function evaluateExp(event){

    let operation = event.target.value;

    let num1 = +box1.value;

    let num2 = +box2.value;

    let result = 0;

    if(operation=="/"){

        result = num1/num2;
    }
    else if(operation=="*"){

        result = num1*num2;
    }
    document.querySelector("#root").innerHTML = result
}
