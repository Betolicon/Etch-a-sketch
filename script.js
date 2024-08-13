const gridSide = 500;
let currentMode = 'normal'
let currentColor = "black"
let defaultSize = 8;

const grid = document.querySelector('.grid');
const containerSlider = document.querySelector('#containerSlider')
const slider = document.querySelector('#slider')
const Normal = document.querySelector('#Normal')
const Rainbow = document.querySelector('#Rainbow')
const Color = document.querySelector('#Color')
const Eraser = document.querySelector('#Eraser')
let value = document.querySelector('#containerValue')

Color.oninput = (e) => setColor(e.target.value)
Rainbow.onclick = () => setMode('rainbow')
slider.onchange = (e) => updateGrid(e.target.value)
slider.onmousemove = (e) => updateValue(e.target.value)
Normal.onclick = () => setMode('normal')
Eraser.onclick = () => setMode('eraser')
grid.style.width = grid.style.height = `${gridSide}px`;

const setColor = (newColor) =>{
    currentColor = newColor
    currentMode = 'normal'
    activeMode(mode)
}

const setMode = (mode) =>{
    activeMode(mode)
    currentMode = mode
}

const activeMode = (newMode) =>{
    if (newMode === 'rainbow') {
        Rainbow.classList.add('active')
      } else if (newMode === 'color') {
        Normal.classList.add('active')
      } else if (newMode === 'eraser') {
        Eraser.classList.add('active')
      }
}

const updateGrid = newValue =>{    
    clearGrid()
    createGrid(newValue)
    updateValue(newValue)
}

const clearGrid = () =>{
    grid.innerHTML = ''
}

const updateValue = newValue => {
    value.textContent = `${newValue} x ${newValue}`
}

function changeColor () {
    if (currentMode == "normal")
        this.style.backgroundColor = currentColor;
    else if (currentMode == "rainbow"){
        const randomR = Math.floor(Math.random()*256)
        const randomG = Math.floor(Math.random()*256)
        const randomB = Math.floor(Math.random()*256)
        this.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }
    else if (currentMode == "eraser")
        this.style.backgroundColor = "white"
}

const createGrid = (squares) =>{
        let numSquares = (squares * squares);
        let widthOrHeight = `${(gridSide/squares)-2}px`
    for(let i=0; i< numSquares; i++){
        let gridElement = document.createElement("div")
        gridElement.style.height = gridElement.style.width = widthOrHeight
        gridElement.classList.add('box');
        grid.appendChild(gridElement);
        gridElement.addEventListener("mouseover", changeColor);
    }
}

createGrid(defaultSize);