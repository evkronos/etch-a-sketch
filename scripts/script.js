const container = document.querySelector("#container");
const square = document.querySelector("#square");


let gridCode = "";

for (let i = 0; i < 2700; i++) {
    gridCode += "<div id='square'></div>"
}


container.innerHTML = gridCode;