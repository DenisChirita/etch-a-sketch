const table = document.getElementById("table");
const eraserColor = "lightgray";
const resetButton = document.getElementById("reset-button");
const eraserButton = document.getElementById("eraser-button");
const rainbowButton = document.getElementById("rainbow-button");
const sliderParagraph = document.getElementById("slider-paragraph");
const slider = document.getElementById("slider");
const colorPicker = document.getElementById("color-picker");
const colorButton = document.getElementById("color-button");
let currentColor = colorPicker.value;
let tableSize = 52;
let rainbow = false;
table.style.setProperty('--number-of-row-squares', tableSize);

function createTable() {
    for (let i = 0; i < tableSize * tableSize; ++i) {
        let tableEntry = document.createElement("div");
        tableEntry.classList.add("table-entry");
        tableEntry.addEventListener("mouseover", function () {
            if (rainbow === false) {
                tableEntry.style.setProperty("background-color", currentColor);
            }
            else {
                tableEntry.style.setProperty("background-color", generateRandomColor());
            }
        });
        table.appendChild(tableEntry);
    }
}

function generateRandomColor() {
    let r = Math.round(255 * Math.random());
    let g = Math.round(255 * Math.random());
    let b = Math.round(255 * Math.random());
    return "rgb(" + r + "," + g + "," + b + ")";
}

function reset() {
    let cells = document.querySelectorAll(".table-entry");
    cells.forEach(cell => {
        cell.style.setProperty("background-color", eraserColor);
    });
    rainbow = false;
    currentColor = colorPicker.value;
}

function resetSize() {
    table.style.setProperty('--number-of-row-squares', tableSize);
    reset();
    createTable();
}

resetButton.addEventListener('click', function () {
    reset();
});

eraserButton.addEventListener('click', function () {
    currentColor = eraserColor;
    rainbow = false;
});

rainbowButton.addEventListener('click', function () {
    rainbow = !rainbow;
});

colorButton.addEventListener('click', function () {
    currentColor = colorPicker.value;
    rainbow = false;
});

slider.onchange = function () {
    sliderParagraph.textContent = this.value + " x " + this.value;
    tableSize = this.value;
    resetSize();
}

colorPicker.onchange = function () {
    currentColor = this.value;
}
    createTable();
