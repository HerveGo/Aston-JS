class Link {
    /**
     * Informations used for a link in the navbar
     * @param {string} icon the name of the font-awesome to use (fas style)
     * @param {string} title the title for the link
     * @param {string} text the text displayed
     */
    constructor(icon, title, text) {
        this.icon = icon;
        this.title = title;
        this.text = text;
    }
}

/**
 * Call the main function when the document is fully loaded
 */
document.addEventListener("load", createNav());

/**
 * Starts filling the navbar (when document is ready)
 */
function createNav() {
    const mapNav = new Map();
    fillMap(mapNav);
    const nav = document.getElementById("nav");
    const currentPath = document.location.pathname;
    mapNav.forEach( (value, key) => {
        nav.appendChild( navElement(value, key, currentPath) );
    });
}

/**
 * 
 * @param {Link} value the datas for the link.
 * @param {string} key the path of the html.
 * @param {string} currentPath the active path in the navbar.
 * @returns <p> for the current link, <a> for the others.
 */
function navElement(value, key, currentPath) {
    let navElem;
    if( "/" + key === currentPath ) {
        navElem = document.createElement("p");
        navElem.setAttribute("class", "navactive");
    } else {
        navElem = document.createElement("a");
        navElem.href = key;
    }
    navElem.title = value.title;
    navElem.innerHTML = `<i class="fas ${value.icon}"></i> <span class="xs-hide">${value.text}</span>`;
    return navElem;
}

/**
 * Fill the Map with the informations needed for it to be created.
 * @param {Map} mapNav an empty map
 */
function fillMap(mapNav) {
    mapNav.set("index.html", new Link(icon="fa-home", title="La page qui vous accueille chaleureusement.", text="Accueil"));
    mapNav.set("friendship.html", new Link(icon="fa-horse", title="Mon petit poney !", text="Friendship is Magic"));
    mapNav.set("clock.html", new Link(icon="fa-clock", title="Une fabuleuse Horloge muette.", text="Horloge"));
    mapNav.set("fizzbuzz.html", new Link(icon="fa-glass-cheers", title="Un Fizz Buzz traditionnel et ennuyeux.", text="Fizz Buzz"));
    mapNav.set("fizzbuzzplus.html", new Link(icon="fa-plus", title="Un Fizz Buzz interactif extraordinaire !", text="Fizz Buzz +"));
}
