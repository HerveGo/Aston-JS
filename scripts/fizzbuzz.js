/**
 * Call the main function when the document is fully loaded
 */
document.addEventListener("load", main());

/**
 * Called when the document is loaded
 */
function main() {
    const container = document.getElementById("container");
    var numbers = [];
    fillArray(numbers, 100);
    console.log("length="+numbers.length);
    container.appendChild(displayArray(numbers));
}

/**
 * Fill an array with integers from 0 to upperLimit included.
 * @param {number[]} arr an array (will be emptied)
 * @param {number} upperLimit the upper limit of the array.
 */
function fillArray(arr, upperLimit) {
    arr.length = 0; //and don't do arr = [] because it creates a new array :/
    for(let i = 0; i <= upperLimit; i++) {
        arr.push(i);
    }
}

/**
 * Test every array element with FizzBuzz rules.
 * Creates rows of 5 elements.
 * @param {number[]} arr an array of integers.
 * @returns HTMLDivElement the div to be displayed.
 */
function displayArray(arr) {
    let div = document.createElement("div");
    for( let r = 0; r < (arr.length-1) / 5; r++ ) {
        let row = document.createElement("div");
        row.setAttribute("class","flex-grid");
        for( let i = r * 5 + 1; i < r * 5 + 6; i++) {
            let elem = document.createElement("div");
            elem.setAttribute("class","col");
            if( i % 2 === 0 ) {
                elem.classList.add("even");
            } else {
                elem.classList.add("odd");
            }
            //FizzBuzz test
            elem.innerText = arr[i] + " : " + fizzBuzz(arr[i]);

            row.appendChild(elem);
        }
        div.appendChild(row);
    }
    return div;
}
