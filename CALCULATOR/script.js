

function displayNumber(event){

    let val = event.target.value; // string

    let opertaor =["+","-","*","/","."]

    let currentExpressionLastChar = result.value.slice(-1);

    if(opertaor.includes(currentExpressionLastChar) && opertaor.includes(val)){

        result.value=result.value.slice(0,-1)
        
        return result.value+=val
    
    }

    result.value += val;
}


function clearBox(){

    result.value = "";
}

function evaluateExpr(){

    let currentExpression = result.value;

    let outPut = eval(currentExpression)

    result.value = outPut

}

function backSpace(){

    let val =result.value.slice(0,-1) // slice(0,n) used to cut elemnts and exclude last elemnts(that is n :-1)

    result.value=val

}

