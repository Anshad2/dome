function degreeToFh(){

    let tempInDegree=+deg_box.value

    let fh=(tempInDegree*(9/5))+32;

    document.querySelector("#fh_box").value=fh
}


function fhToDegree(){

    let temInFh=+fh_box.value

    let degree=(temInFh-32)*(5/9)

    deg_box.value=degree
}