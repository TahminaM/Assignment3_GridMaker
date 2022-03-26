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

        numCols++;
        numRows++;

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

    table.removeChild(table.lastChild);

    numRows--;

    if (numRows === 0) {

        while (table.hasChildNodes()) {
            table.removeChild(table.lastChild);
        }
        numCols = 0;
    }
}

// Remove a column
function removeC() {

    if (numCols === 0) return;

    const table = document.querySelector("#grid");
    const rows = document.querySelectorAll("tr");

    for (let i = 0; i < numRows; i++) {
        rows[i].removeChild(rows[i].lastChild);
    }

    numCols--;

    if (numCols === 0) {

        while (table.hasChildNodes()) {
            table.removeChild(table.lastChild);
        }

        numRows = 0;
    }
}


// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}


// Fill all uncolored cells
function fillU(){
    let row = document.getElementsByTagName("td"); //get array of all cells  
    for (let i = 0; i < row.length; i++){
        if(!row[i].style.backgroundColor){ //if the cell has no color then we set the color to the colorselected
            row[i].style.backgroundColor = colorSelected;
        }
    }
}


// Fill all cells
function fillAll(){
    let row = document.getElementsByTagName("td"); //get array of all cells   
    for (let i = 0; i < row.length; i++) {
        row[i].style.backgroundColor = colorSelected; // fills the cell with the color selected 
    }    
}


// Clear all cells
function clearAll(){
    let row = document.getElementsByTagName("td"); //get array of all cells
    for (let i = 0; i < row.length; i++) {
        row[i].style.removeProperty("background-color"); // remove the backgroundColor 
    }
}  



