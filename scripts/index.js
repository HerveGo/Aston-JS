/**
 * Call the main function when the document is fully loaded
 */
document.addEventListener("load", main());

/**
 * Starts filling the container with cards (when document is ready)
 */
function main() {
    const exercices = new Map();
    const container = document.getElementById("container");
    fillExercices(exercices);
    container.appendChild(createCards(exercices));
}

/**
 * Create, fill and return the div containing the cards.
 * @param {Map<string,string>} exo the Map of exercices to do.
 * @returns a HTMLUListElement
 */
function createCards(exo) {
    const div = document.createElement("div");
    div.setAttribute("class","flex-grid");
    exo.forEach( (description, title) => {
        const card = document.createElement("div");
        card.setAttribute("class","list-card");
        //will have a span title
        const spanTitle = document.createElement("span");
        spanTitle.setAttribute("class","list-title");
        spanTitle.innerText = title;
        card.appendChild(spanTitle);
        //followed by the description
        const spanDescription = document.createElement("span");
        spanDescription.setAttribute("class","list-description");
        spanDescription.innerHTML = description;
        card.appendChild(spanDescription);
        //and a button to go to the html
        const button = document.createElement("button");
        button.setAttribute("class","list-button");
        button.innerText = title;
        button.addEventListener("click", () => navigateTo(title) );
        card.appendChild(button);

        div.appendChild(card);
    });
    return div;
}

/**
 * Go to the correct url from the title of the exercise.
 * @param {string} title 
 */
function navigateTo(title) {
    switch (title) {
        case "Friendship is Magic":
            window.location.href = "friendship.html";
            break;
        case "Horloge":
            window.location.href = "clock.html";
            break;
        case "FizzBuzz":
            window.location.href = "fizzbuzz.html";
            break;
        case "FizzBuzz++":
            window.location.href = "fizzbuzzplus.html";
            break;
        default:
            console.error("Something went wrong with navigateTo "+url);
    }
}

/**
 * Fill the Map exercices with fixed data
 * @param {Map} exercices a Map<String,String>
 */
function fillExercices(exercices) {
    exercices.set("Friendship is Magic",`Vous intégrerez une page qui listera les noms des principaux personnages de la série "Friendship is magic",
    sous forme de liste non ordonnée. Le texte sera écrit en blanc sous un fond "arc-en-ciel" (gradient) du rose vers le violet.<br>
    L'affichage sera ENTIEREMENT géré par le script JS de la page : votre page HTML ne doit contenir aucune information si ce n'est un "H1".<br>
    Vous insérerez un minimum de style afin que ce soit au moins agréable à regarder.<br>
    Point de compensation : une image !`);

    exercices.set("Horloge",`Vous créerez une page qui affichera l'heure actuelle sous forme : "hh:mm:ss" au centre de la page. 
    Vous insérerez un minimum de style afin que ce soit au moins agréable à regarder.`);

    exercices.set("FizzBuzz",`Vous créerez une page qui affichera un champs de texte un compteur allant de 0 à 100. Il affichera :
    <ul>
        <li>Le nombre en question,</li> 
        <li>Fizz si c'est un multiple de 3,</li>
        <li>Buzz si c'est un multiple de 5,</li>
        <li>FizzBuzz si c'est un multiple de 3 et de 5.</li>
    </ul>
    Tout votre code sera géré exclusivement par des fonctions.`);

    exercices.set("FizzBuzz++",`Vous créerez un nouveau FizzBuzz, sauf que : 
    <ul>
        <li>Une case affichera le chiffre,</li> 
        <li>Fizz, Buzz ou FizzBuzz s'afficheront au dessus du chiffre, en grand,</li>
        <li>Les valeurs s'afficheront une à une,</li>
        <li>Un bouton "next" permettra de passer à la valeur suivante,</li>
        <li>Un bouton "prev" permettra d'afficher la valeur précédente.</li>
    </ul>
    Recyclage de script : 1 point de récup <3`);
}
