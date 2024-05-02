
function evaluateColor(event){

    let color = event.target.value;

    let root = document.querySelector("#root")

    root.removeAttribute("class")

    root.style.Bacgroundcolor="red"

}