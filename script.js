
// ============================================
// GRAND LINE – THE WORLD ATLAS
// ============================================

const islands = {

    dawn: {
        name: "Dawn Island",
        icon: "🌅",
        region: "East Blue",
        climate: "Gemässigt",
        famous: "Goa Kingdom",
        special: "Königreich und Gray Terminal",
        description: "Dawn Island liegt im East Blue. Auf ihr befindet sich das Königreich Goa. Die Insel besitzt eine grosse Stadt, Wälder und eine wilde Küstenregion. Auch das Gray Terminal gehört zu ihrer Umgebung.",
        fact: "Das Gray Terminal ist eine riesige Müllhalde ausserhalb der Hauptstadt."
    },

    shells: {
        name: "Shells Town",
        icon: "⚓",
        region: "East Blue",
        climate: "Gemässigt",
        famous: "Marinebasis",
        special: "Schwertkämpfer Zoro",
        description: "Shells Town ist eine kleine Stadt im East Blue. Besonders bekannt ist sie für ihre Marinebasis und den grossen Stützpunkt der Marine.",
        fact: "Die Stadt ist ein früher Schauplatz der Geschichte von One Piece."
    },

    orange: {
        name: "Orange Town",
        icon: "🍊",
        region: "East Blue",
        climate: "Mild",
        famous: "Zirkus und Häuser",
        special: "Buggy",
        description: "Orange Town ist eine kleine Stadt im East Blue. Sie besitzt zahlreiche Gebäude, kleine Geschäfte und einen Marktplatz. Die Stadt wurde durch die Ereignisse rund um Buggy bekannt.",
        fact: "Buggy und seine Piratenbande machten die Stadt zu ihrem Schauplatz."
    },

    syrup: {
        name: "Syrup Village",
        icon: "🌳",
        region: "East Blue",
        climate: "Mild",
        famous: "Dorf und Villa",
        special: "Malerische Landschaft",
        description: "Syrup Village ist ein ruhiges Dorf im East Blue. Die Umgebung ist grün und hügelig. Eine grosse Villa liegt auf einem Hügel oberhalb des Dorfes.",
        fact: "Das Dorf wirkt friedlich, obwohl sich dort eine gefährliche Intrige ereignete."
    },

    baratie: {
        name: "Baratie",
        icon: "🍽️",
        region: "East Blue",
        climate: "Meeresklima",
        famous: "Schwimmendes Restaurant",
        special: "Kochkunst",
        description: "Baratie ist ein aussergewöhnliches Restaurant mitten auf dem Meer. Das Gebäude ist wie ein riesiger Fisch gestaltet und besitzt mehrere Decks. Es ist ein beliebter Ort für Reisende und Seeleute.",
        fact: "Das Restaurant kann auf dem Meer unterwegs sein."
    },

    logue: {
        name: "Loguetown",
        icon: "🏙️",
        region: "East Blue",
        climate: "Mild",
        famous: "Hinrichtungsplatz",
        special: "Geschichte des Piratenkönigs",
        description: "Loguetown ist eine bedeutende Stadt im East Blue. Sie wird auch die Stadt des Anfangs und des Endes genannt. Hier wurde Gol D. Roger geboren und hingerichtet.",
        fact: "Die Stadt liegt in der Nähe des Eingangs zur Grand Line."
    },

    ohara: {
        name: "Ohara",
        icon: "📚",
        region: "West Blue",
        climate: "Gemässigt",
        famous: "Baum der Erkenntnis",
        special: "Archäologie",
        description: "Ohara war eine Insel im West Blue, die für ihre Gelehrten und ihre riesige Bibliothek berühmt war. Die Bewohner erforschten die Geschichte der Welt und alte Schriften.",
        fact: "Der Baum der Erkenntnis beherbergte eine gewaltige Bibliothek."
    },

    west: {
        name: "West Blue",
        icon: "🌊",
        region: "West Blue",
        climate: "Unterschiedlich",
        famous: "Viele Inselstaaten",
        special: "Westliches Meer",
        description: "Der West Blue ist eines der vier grossen Meere der Welt. Er besteht aus zahlreichen Inseln und verschiedenen Königreichen. Über viele seiner Inseln sind nur wenige Informationen bekannt.",
        fact: "Die vier Blues liegen ausserhalb der Grand Line."
    },

    flevance: {
        name: "Flevance",
        icon: "❄️",
        region: "North Blue",
        climate: "Kühl",
        famous: "Weisses Bernsteinblei",
        special: "Weisse Stadt",
        description: "Flevance war eine Stadt im North Blue. Sie wurde wegen ihres ungewöhnlich weissen Aussehens auch die Weisse Stadt genannt. Die Bewohner bauten das wertvolle Mineral Bernsteinblei ab.",
        fact: "Das Mineral Bernsteinblei verlieh der Stadt ihr besonderes Aussehen."
    },

    minion: {
        name: "Minion Island",
        icon: "🌲",
        region: "North Blue",
        climate: "Kühl",
        famous: "Winterliche Landschaft",
        special: "Historische Ereignisse",
        description: "Minion Island liegt im North Blue. Die Insel ist vor allem durch Ereignisse aus der Vergangenheit von Trafalgar Law und Donquixote Rosinante bekannt.",
        fact: "Die Insel spielt in einer wichtigen Rückblende der Geschichte eine Rolle."
    },

    torino: {
        name: "Torino Kingdom",
        icon: "🦜",
        region: "South Blue",
        climate: "Tropisch",
        famous: "Riesige Vögel",
        special: "Ungewöhnliche Tierwelt",
        description: "Torino Kingdom ist eine Insel im South Blue. Sie ist bekannt für ihre ungewöhnliche Tierwelt und die riesigen Vögel, die dort leben. Auch eine grosse Bibliothek befindet sich auf der Insel.",
        fact: "Die riesigen Vögel und die Menschen auf der Insel haben eine besondere Beziehung."
    },

    baterilla: {
        name: "Baterilla",
        icon: "🌴",
        region: "South Blue",
        climate: "Warm",
        famous: "Inselstadt",
        special: "Vergangenheit von Gol D. Roger",
        description: "Baterilla ist eine Insel im South Blue. Sie ist mit der Vergangenheit von Portgas D. Ace und Gol D. Roger verbunden.",
        fact: "Die Insel ist ein wichtiger Ort in der Geschichte von Ace."
    },

    reverse: {
        name: "Reverse Mountain",
        icon: "🌋",
        region: "Grand Line",
        climate: "Gebirgig",
        famous: "Vier Meeresströmungen",
        special: "Eingang zur Grand Line",
        description: "Der Reverse Mountain ist ein gewaltiger Berg, an dem die Strömungen der vier Blues nach oben fliessen. Auf der anderen Seite treffen sie zusammen und führen in die Grand Line.",
        fact: "Die Schiffe müssen gegen die Strömung den Berg hinauffahren."
    },

    whiskey: {
        name: "Whiskey Peak",
        icon: "🌵",
        region: "Grand Line",
        climate: "Trocken",
        famous: "Kakteenberge",
        special: "Kopfgeldjäger",
        description: "Whiskey Peak ist eine Insel mit einer Stadt, die von riesigen Kakteenbergen umgeben ist. Die Stadt wirkt zunächst freundlich, doch ihre Bewohner haben ein Geheimnis.",
        fact: "Die Kakteenberge sind mit zahlreichen Grabsteinen bedeckt."
    },

    little: {
        name: "Little Garden",
        icon: "🦖",
        region: "Grand Line",
        climate: "Urzeitlich",
        famous: "Dinosaurier",
        special: "Riesenkrieger",
        description: "Little Garden ist eine prähistorische Insel. Dinosaurier und andere urzeitliche Tiere leben dort. Die Insel ist von einem dichten Dschungel bedeckt.",
        fact: "Zwei Riesen namens Dorry und Brogy kämpfen dort schon seit hundert Jahren."
    },

    drum: {
        name: "Drum Island",
        icon: "❄️",
        region: "Grand Line",
        climate: "Eisig",
        famous: "Schneebedeckte Berge",
        special: "Medizin und Ärzte",
        description: "Drum Island ist eine kalte Insel mit hohen, schneebedeckten Bergen. Sie ist besonders für ihre Medizin und ihre Ärzte bekannt. Das ehemalige Königreich besitzt viele ungewöhnlich geformte Berge.",
        fact: "Die Berge von Drum Island erinnern an grosse Trommeln."
    },

    alabasta: {
        name: "Alabasta",
        icon: "🏜️",
        region: "Grand Line",
        climate: "Wüstenklima",
        famous: "Sand und Paläste",
        special: "Königreich",
        description: "Alabasta ist ein riesiges Wüstenkönigreich. Es gibt trockene Landschaften, Oasen, Städte und einen grossen Königspalast. Das Land wird von einer langen Dürre geprägt.",
        fact: "Alabasta gehört zu den Mitgliedern der Weltregierung."
    },

    jaya: {
        name: "Jaya",
        icon: "🌴",
        region: "Grand Line",
        climate: "Tropisch",
        famous: "Mock Town",
        special: "Verlorene Geschichte",
        description: "Jaya ist eine tropische Insel mit dichtem Dschungel und einer bekannten Piratenstadt namens Mock Town. Ein Teil der ursprünglichen Insel wurde einst in den Himmel geschleudert.",
        fact: "Die Insel ist eng mit dem Geheimnis von Skypiea verbunden."
    },

    skypiea: {
        name: "Skypiea",
        icon: "☁️",
        region: "Grand Line · Himmelsinsel",
        climate: "Himmlisch",
        famous: "Wolkenmeer",
        special: "Upper Yard",
        description: "Skypiea ist eine Insel im Himmel. Sie liegt hoch über dem Meer und besteht aus besonderen Wolkenformationen. Es gibt Wälder, Städte und das geheimnisvolle Upper Yard.",
        fact: "Die Bewohner bewegen sich teilweise auf Wolkenstrassen fort."
    },

    water7: {
        name: "Water 7",
        icon: "🚢",
        region: "Grand Line",
        climate: "Feucht",
        famous: "Wasserstadt",
        special: "Schiffbau",
        description: "Water 7 ist eine beeindruckende Stadt, die von Kanälen durchzogen ist. Sie ist weltweit für ihre Schiffswerften und ihre talentierten Schiffbauer bekannt.",
        fact: "Die Stadt wird regelmässig von einer gewaltigen Flutwelle namens Aqua Laguna bedroht."
    },

    enies: {
        name: "Enies Lobby",
        icon: "⚖️",
        region: "Grand Line",
        climate: "Ungewöhnlich hell",
        famous: "Gerichtsinsel",
        special: "Weltregierung",
        description: "Enies Lobby ist eine Gerichtsinsel der Weltregierung. Sie besteht aus gewaltigen Gebäuden und liegt über einem riesigen Abgrund. Die Insel ist fast immer hell.",
        fact: "Enies Lobby besitzt einen ungewöhnlichen Tag-Nacht-Zyklus."
    },

    sabaody: {
        name: "Sabaody Archipel",
        icon: "🌳",
        region: "Grand Line · Nähe Red Line",
        climate: "Warm und feucht",
        famous: "Riesige Mangroven",
        special: "Blasen",
        description: "Das Sabaody Archipel besteht aus vielen miteinander verbundenen Mangroveninseln. Die Bäume produzieren besondere Blasen, die für zahlreiche ungewöhnliche Transportmöglichkeiten genutzt werden.",
        fact: "Die Blasen können Häuser, Fahrzeuge und sogar Menschen tragen."
    },

    fishman: {
        name: "Fischmenscheninsel",
        icon: "🫧",
        region: "Unter der Red Line",
        climate: "Unterwasser",
        famous: "Korallen und Palast",
        special: "Fischmenschen und Meerjungfrauen",
        description: "Die Fischmenscheninsel liegt tief unter dem Meer, direkt unter der Red Line. Eine riesige Luftblase schützt die Insel vor dem Wasser. Dort befinden sich ein Palast und verschiedene Unterwasserlandschaften.",
        fact: "Die Insel liegt ungefähr 10'000 Meter unter dem Meeresspiegel."
    },

    punk: {
        name: "Punk Hazard",
        icon: "☣️",
        region: "New World",
        climate: "Eisig und heiss",
        famous: "Zwei extreme Klimazonen",
        special: "Forschungslabore",
        description: "Punk Hazard ist eine ungewöhnliche Insel in der New World. Eine Seite ist von Eis bedeckt, während die andere Seite von Feuer und Lava geprägt ist. Auf der Insel befinden sich alte Forschungseinrichtungen.",
        fact: "Die extrem unterschiedlichen Klimazonen entstanden durch einen gewaltigen Kampf."
    },

    dressrosa: {
        name: "Dressrosa",
        icon: "🌹",
        region: "New World",
        climate: "Mediterran",
        famous: "Blumen und Kolosseum",
        special: "Spielzeug",
        description: "Dressrosa ist ein sonniges Königreich mit mediterranem Flair. Die Insel besitzt eine schöne Stadt, viele Blumen und ein berühmtes Kolosseum. Spielzeuge nehmen im Alltag eine besondere Rolle ein.",
        fact: "Die Insel wird auch als das Land der Liebe, Leidenschaft und Spielzeuge bezeichnet."
    },

    zou: {
        name: "Zou",
        icon: "🐘",
        region: "New World",
        climate: "Wechselhaft",
        famous: "Wandelnder Elefant",
        special: "Mink-Stamm",
        description: "Zou ist keine gewöhnliche Insel: Sie befindet sich auf dem Rücken des gewaltigen Elefanten Zunesha. Dort leben die Minks, eine Gemeinschaft menschenähnlicher Tierwesen.",
        fact: "Zunesha wandert seit Jahrhunderten durch die Meere."
    },

    wholecake: {
        name: "Totto Land",
        icon: "🍰",
        region: "New World",
        climate: "Vielfältig",
        famous: "Süssigkeiten-Inseln",
        special: "Big Mom",
        description: "Totto Land ist ein Gebiet aus vielen Inseln, die jeweils eigene Themen und Landschaften besitzen. Viele davon sind von Süssigkeiten, Kuchen und essbaren Dingen geprägt.",
        fact: "Die Inseln von Totto Land haben jeweils ganz unterschiedliche Spezialitäten."
    },

    wano: {
        name: "Wano Kuni",
        icon: "⛩️",
        region: "New World",
        climate: "Verschiedene Regionen",
        famous: "Samurai und Kirschblüten",
        special: "Japanisch inspiriertes Land",
        description: "Wano Kuni ist ein abgeschottetes Land mit einer Kultur, die stark an das historische Japan erinnert. Es gibt Samurai, traditionelle Häuser, Kirschblüten und beeindruckende Landschaften.",
        fact: "Das Land ist von hohen Wasserfällen und starken Strömungen umgeben."
    },

    egghead: {
        name: "Egghead",
        icon: "🤖",
        region: "New World",
        climate: "Mild",
        famous: "Futuristische Technik",
        special: "Dr. Vegapunk",
        description: "Egghead ist eine futuristische Insel mit hochentwickelter Technologie. Es gibt Roboter, riesige Maschinen, Labore und Gebäude, die wie aus einer weit entfernten Zukunft wirken.",
        fact: "Egghead wird als Insel der Zukunft bezeichnet."
    }
};


// ============================================
// INSELKARTE UND REGISTER ERSTELLEN
// ============================================

const cardsContainer = document.getElementById("island-cards");
const searchInput = document.getElementById("island-search");
const filterButtons = document.querySelectorAll(".filter");

let activeFilter = "all";
let discovered = new Set();
let secretClicks = 0;

function createIslandCards() {

    cardsContainer.innerHTML = "";

    const search = searchInput.value.toLowerCase();

    Object.entries(islands).forEach(([id, island]) => {

        const matchesSearch =
            island.name.toLowerCase().includes(search) ||
            island.region.toLowerCase().includes(search) ||
            island.description.toLowerCase().includes(search);

        const matchesFilter =
            activeFilter === "all" ||
            island.region.includes(activeFilter);

        if (!matchesSearch || !matchesFilter) return;

        const card = document.createElement("article");
        card.className = "island-card";

        card.innerHTML = `
            <div class="card-region">${island.region.toUpperCase()}</div>
            <h3>${island.icon} ${island.name}</h3>
            <p>${island.description.slice(0, 105)}...</p>
            <span class="card-open">INSEL-AKTE ÖFFNEN →</span>
        `;

        card.addEventListener("click", () => openIsland(id));

        cardsContainer.appendChild(card);
    });

    if (cardsContainer.innerHTML === "") {
        cardsContainer.innerHTML =
            "<p>Keine Insel gefunden. Versuche einen anderen Suchbegriff.</p>";
    }
}

searchInput.addEventListener("input", createIslandCards);

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        activeFilter = button.dataset.filter;

        createIslandCards();
    });

});


// ============================================
// INSEL ÖFFNEN
// ============================================

const modal = document.getElementById("island-modal");

function openIsland(id) {

    const island = islands[id];

    if (!island) return;

    document.getElementById("modal-icon").textContent = island.icon;
    document.getElementById("modal-region").textContent = island.region.toUpperCase();
    document.getElementById("modal-name").textContent = island.name;
    document.getElementById("modal-description").textContent = island.description;

    document.getElementById("info-region").textContent = island.region;
    document.getElementById("info-climate").textContent = island.climate;
    document.getElementById("info-famous").textContent = island.famous;
    document.getElementById("info-special").textContent = island.special;

    document.getElementById("modal-fact").textContent = island.fact;

    modal.classList.add("show");
    document.body.style.overflow = "hidden";

    if (!discovered.has(id)) {

        discovered.add(id);

        document.getElementById("island-count").textContent =
            discovered.size;

        showToast("✦ Neue Insel entdeckt: " + island.name + " ✦");

    }
}


// ============================================
// MODAL SCHLIESSEN
// ============================================

function closeIsland() {

    modal.classList.remove("show");
    document.body.style.overflow = "";

}

document.getElementById("modal-close").addEventListener("click", closeIsland);
document.getElementById("modal-done").addEventListener("click", closeIsland);

modal.addEventListener("click", event => {

    if (event.target === modal) {
        closeIsland();
    }

});

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeIsland();
    }

});


// ============================================
// KARTEN-PINS AKTIVIEREN
// ============================================

document.querySelectorAll(".island-pin").forEach(pin => {

    pin.addEventListener("click", () => {

        const id = pin.dataset.island;

        openIsland(id);

    });

});


// ============================================
// GEHEIME ÜBERRASCHUNG
// ============================================

function showToast(message) {

    const toast = document.getElementById("treasure-toast");

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(window.treasureTimer);

    window.treasureTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2600);

}


// 5-mal auf den Titel klicken ...

document.querySelector(".map-title").addEventListener("click", () => {

    secretClicks++;

    if (secretClicks >= 5) {

        secretClicks = 0;

        showToast("☠️ Du hast das Geheimnis der Grand Line entdeckt!");

        document.querySelector(".map-paper").classList.toggle("secret-map");

    } else {

        showToast("Noch " + (5 - secretClicks) + " Klicks bis zum Geheimnis ...");

    }

});


// ============================================
// START
// ============================================

createIslandCards();

console.log("☠ GRAND LINE ATLAS erfolgreich geladen!");
console.log("Geheime Nachricht: Die Welt ist grösser, als du denkst.");
