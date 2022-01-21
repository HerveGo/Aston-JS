/**
 * Call the main function when the document is fully loaded
 */
document.addEventListener("load", main());

/**
 * Called when the document is loaded
 */
function main() {
    const container = document.getElementById("container");
    container.appendChild(makeElements());
}

/**
 * Creates the HTML elements that will go into the container.
 * @returns the HTMLDivElement created
 */
function makeElements() {
    const div = document.createElement("div");
    div.setAttribute("class","navigate");
    const h1 = document.createElement("h1");
    h1.id = "result";
    h1.innerText = "Result";
    div.appendChild(h1);
    const num = document.createElement("div");
    num.id = "number";
    num.innerText = "0";
    div.appendChild(num);
        const divBtn = document.createElement("div");
        divBtn.setAttribute("class","buttons-container");
        divBtn.appendChild(makeButton("btnPrev","Prev", previous));
        divBtn.appendChild(makeButton("btnNext","Next", next));
    div.appendChild(divBtn);

    return div;
}

/**
 * Return a button#id with innerHtml = textHtml, and attach fn() to the event click.
 * @param {string} id 
 * @param {string} textHtml 
 * @param {function} fn 
 * @returns the HTMLButtonElement created
 */
function makeButton(id, textHtml, fn) {
    const button = document.createElement("button");
    button.id = id;
    button.setAttribute("class","button");
    button.innerHTML = textHtml;
    button.addEventListener("click",fn);
    return button;
}

/**
 * Change the value and display FizzBuzz
 * @param {number} x the integer value you want to add (or substract if negative)
 */
function changeNumber(x) {
    const num = document.getElementById("number");
    const h1 = document.getElementById("result");
    let n = 0
    if( num.innerText!=="" ) { n = parseInt(num.innerText); }
    if( n <= 1 && x < 0 ) x = 0; //don't fo into negative numbers
    n += x;
    num.innerText = "" + n;
    h1.innerText = fizzBuzz(n);
}

function next() {
    changeNumber(1);
}

function previous() {
    changeNumber(-1);
}