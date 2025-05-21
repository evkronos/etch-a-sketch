const container = document.querySelector("#container");

for (let i = 0; i < 2700; i++) {
    const div = document.createElement("div")
    div.setAttribute("id", "square")
    container.appendChild(div)
}

const square = document.querySelector("#square")

square.addEventListener('mouseon', () => {
})