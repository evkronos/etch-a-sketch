const container = document.querySelector("#container");



let qntQuadrados = 16;
for (let i = 0; i < Math.pow(qntQuadrados, 2); i++) {
    const div = document.createElement("div")
    div.classList.add("square")
    container.appendChild(div)
}

function getWidth() {
    return qntQuadrados / 950
}

