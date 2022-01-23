/**
 * Call the main function when the document is fully loaded
 */
document.addEventListener("load", main());

/**
 * Called when the document is loaded
 */
function main() {
    const container = document.getElementById("container");
    container.appendChild(createClock());
    const clock = document.getElementById("clock");
    setInterval(() => updateClock(clock), 1000);
}

/**
 * Creates the clock container, and the clock display.
 * @returns HTMLDivElement the div containing the clock
 */
function createClock() {
    const div = document.createElement("div");
    div.setAttribute("class", "clock-container");
        const clock = document.createElement("div");
        clock.setAttribute("class",  "clock");
        clock.id = "clock";
        div.appendChild(clock);
        updateClock(clock);
    return div;
}

/**
 * Updates the clock inner text.
 * @param {HTMLDivElement} clock the div containing the clock
 */
function updateClock(clock) {
    let now = new Date();
    clock.innerText = `${twoDigits(now.getHours())}:${twoDigits(now.getMinutes())}:${twoDigits(now.getSeconds())}`;
}

/**
 * Convert a number in a fixed 2 digits string.
 * @param {number} n an integer between 0 and 99
 * @returns a string with two digits
 */
function twoDigits(n) {
    return ("0" + n).slice(-2);
}

