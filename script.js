// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    if (numRows === 0 && numCols === 0) {

        const table = document.querySelector("#grid");

        let addRow = document.createElement("tr");
        let addCell = document.createElement("td");

        table.appendChild(addRow);

        const row = document.querySelector("tr");

        row.appendChild(addCell);

        numRows++;
        numCols++;

    } else {

        const table = document.querySelector("#grid");

        let addRow = document.createElement("tr");

        table.appendChild(addRow);

        const row = document.querySelectorAll("tr");

        for (let i = 0; i < numCols; i++) {

            let cell = document.createElement("td");
            row[numRows].appendChild(cell);
        }

        numRows++;

    }
}

// Add a column
function addC() {
    if (numRows === 0 && numCols === 0) {

        const table = document.querySelector("#grid");

        let addRow = document.createElement("tr");
        let addCell = document.createElement("td");

        table.appendChild(addRow);

        const row = document.querySelector("tr");

        row.appendChild(addCell);

        numRows++;
        numCols++;

    } else {

        const row = document.querySelectorAll("tr");

        for (let i = 0; i < numRows; i++) {
            
            let cell = document.createElement("td");
            row[i].appendChild(cell);
        }

        numCols++;

    }
}

// Remove a row
function removeR() {

    if (numRows === 0) return;

    const table = document.querySelector("#grid");

    table.removeChild(document.getElementById("grid").lastChild);

    numRows--;

}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}