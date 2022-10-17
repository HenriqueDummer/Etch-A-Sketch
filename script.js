const screen = document.querySelector("#screen");
const display_pixels = document.querySelector("#display_pixels");
const color = document.querySelector("#color");
const rainbow_btn = document.querySelector("#rainbow");
const eraser = document.querySelector("#eraser");

screen.style.gridTemplateColumns = `repeat(${display_pixels.value}, 1fr)`;
screen.style.gridTemplateRows = `repeat(${display_pixels.value}, 1fr)`;


let current_color = "#000000";
let display_size = 256;

color.addEventListener("change", () => {
    current_color = color.value;
})

eraser.addEventListener("click", () => {
    current_color = "#ffffff";
})

rainbow_btn.addEventListener("click", () => {
    current_color = "rainbow";
})

display_pixels.addEventListener("change", () => {
    display_size = display_pixels.value * display_pixels.value;
    screen.style.gridTemplateColumns = `repeat(${display_pixels.value}, 1fr)`;
    screen.style.gridTemplateRows = `repeat(${display_pixels.value}, 1fr)`;
    console.log(display_size)

    
})

for(let i = 0; i < display_size ; i++){
    const sqr = document.createElement("div");

    sqr.classList.add("square");
    sqr.style.backgroundColor = "white";
    screen.appendChild(sqr);
}



const square = document.querySelectorAll(".square")

square.forEach(sqr => {
    
        sqr.addEventListener("mouseover", () => {
            if(current_color != "rainbow"){
                event.target.style.backgroundColor = current_color
            } else {
                console.log("diajsdasd")
                event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
            }
        })
    })



