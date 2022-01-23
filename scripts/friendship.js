class Pony {
    /**
     * 
     * @param {string} infos description of the character
     * @param {string} image filename.ext of the image
     */
    constructor(infos, image, wiki) {
        this.infos = infos;
        this.image = image;
        this.wiki = wiki;
    }

    /**
     * Full path for the character image.
     * @returns full path of the image.
     */
    imagePath() {
        return "../img/" + this.image;
    }
}

/**
 * Call the main function when the document is fully loaded
 */
 document.addEventListener("load", main());

/**
 * Called when the document is loaded
 */
function main() {
    const container = document.getElementById("container");
    const characters = new Map();
    fillCharacters(characters);
    container.appendChild(createList(characters));
}

/**
 * Creates the div containing the characters' cards.
 * @param {Map<string, Pony>} characters 
 * @returns the div to be inserted.
 */
function createList(characters) {
    let i = 0;
    const div = document.createElement("div");
    div.id = "list";
    let flexgrid = document.createElement("div");
    characters.forEach( (description, name) => {
        i++;
        //card element
        flexgrid.className = "flex-grid-pony";
            const card = document.createElement("div");
            card.className = "pony-card";
            //will have a span title (name of the character)
            const spanTitle = document.createElement("span");
            spanTitle.className = "pony-title";
            spanTitle.innerText = name;
            card.appendChild(spanTitle);
            //followed by the image, which is a link to the wiki
            const anchor = document.createElement("a");
            anchor.className = "pony-a";
            anchor.href = description.wiki;
            anchor.title = "Cliquez pour accéder au wiki."
            anchor.target = "_blank";
            anchor.rel = "noreferrer noopener";
                const img = document.createElement("img");
                img.className = "pony-img";
                img.src = description.imagePath();
                img.alt = "Pony " + name;
                anchor.appendChild(img);
            card.appendChild(anchor);
            //followed by the description
            const spanDescription = document.createElement("span");
            spanDescription.className = "pony-description";
            spanDescription.innerHTML = description.infos;
            card.appendChild(spanDescription);
            flexgrid.appendChild(card);
            //no more than 3 cards by row
            if( i % 3 === 0 ) {
                div.appendChild(flexgrid);
                flexgrid = document.createElement("div");
            }
    });
    div.appendChild(flexgrid);
    return div;
}

function fillCharacters(characters) {
    characters.set("Twilight Sparkle",
        new Pony(infos=`Twilight Sparkle est le personnage principal de la série, c’est une licorne violette avec une crinière rose,
        indigo et violette ; sa marque de beauté est une étoile à 6 branches rose avec cinq autres petites étoiles blanches.`,
        image="twilight-sparkle.png",
        wiki="https://mlp.fandom.com/fr/wiki/Twilight_Sparkle"));
    characters.set("Rainbow Dash",
        new Pony(infos=`Rainbow Dash est une pégase bleue avec une crinière de couleur d’arc-en-ciel, sa marque de beauté est un
        éclair rouge jaune et bleu sortant d’un nuage blanc. Elle s’occupe du ciel de ponyville et peut le nettoyer en dix secondes.`,
        image="rainbow-dash.png",
        wiki="https://mlp.fandom.com/fr/wiki/Rainbow_Dash"));
    characters.set("Spike",
        new Pony(infos=`C'est un bébé dragon violet et vert et l'un des personnages principaux de la série. Il est le meilleur ami
        et l'assistant numéro un de Twilight Sparkle. Il a la capacité de livrer des lettres à la Princesse Celestia par magie
        en soufflant dessus.`,
        image="spike.png",
        wiki="https://mlp.fandom.com/fr/wiki/Spike"));
    characters.set("Applejack",
        new Pony(infos=`Applejack est un pony terrestre orange aux crins blonds avec une marque de beauté qui a la forme de trois
        pommes rouges, elle porte toujours un chapeau de cowgirl. Elle s’occupe des récoltes de pommes, du tri et de la cuisine à la
        ferme de la Douce Pomme avec son grand frère Big McIntosh, sa petite sœur Apple Bloom et sa grand-mère Granny Smith.`,
        image="applejack.png",
        wiki="https://mlp.fandom.com/fr/wiki/Applejack"));
    characters.set("Fluttershy",
        new Pony(infos=`Fluttershy est une pégase jaune avec une crinière et une queue rose, et une marque de beauté qui représente
         trois papillons ; elle est timide et peureuse, mais se montre en colère lorsque les animaux ou ses amies sont en danger.`,
        image="fluttershy.png",
        wiki="https://mlp.fandom.com/fr/wiki/Fluttershy"));
    characters.set("Rarity",
        new Pony(infos=`Rarity est une licorne blanche avec une crinière violette et une marque de beauté en forme de trois diamants
        bleus, elle est la sœur aînée de Sweetie Belle. Rarity vit et travaille dans son propre magasin, la Boutique Carrousel
        où elle crée, fabrique et vend des habits.`,
        image="rarity.png",
        wiki="https://mlp.fandom.com/wiki/Rarity"));
    characters.set("Pinkie Pie",
        new Pony(infos=`Pinkie Pie est une ponette terrestre rose, sa marque de beauté représente trois ballons symbolisant son
        talent pour organiser les fêtes les plus réussies de ponyville. Elle travaille comme pâtissière dans la boutique SugarCube Corner.`,
        image="pinkie-pie.png",
        wiki="https://mlp.fandom.com/fr/wiki/Pinkie_Pie"));
    characters.set("Apple Bloom",
        new Pony(infos=`Apple Bloom est un pony terrestre d'âge scolaire et membre de la famille Apple. Elle est l'une des membres
        fondatrices des Chercheuses de talent avec Sweetie Belle et Scootaloo.`,
        image="apple-bloom.png",
        wiki="https://mlp.fandom.com/fr/wiki/Apple_Bloom"));
    characters.set("Big McIntosh",
        new Pony(infos=`Big McIntosh, ou Big Mac, est un pony terrestre mâle. Il est le frère aîné d'Applejack et Apple Bloom.
        Applejack l'introduit au cours de la réunion de la famille Apple. Il a la voix douce et laconique, et répond souvent par un
        simple "ouaip" ou "nope"`,
        image="big-mcintosh.png",
        wiki="https://mlp.fandom.com/fr/wiki/Big_McIntosh"));
}
