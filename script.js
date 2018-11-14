console.log("Spillet som er udarbejdet af Gruppe 16");

window.addEventListener("load", showStart);

function sidenVises() {
    console.log("Siden er loadet");
    showStart();
}

function showStart() {
    console.log("Startskærm vises");

    // KNAPPER

    // Giver Start-knappen en pulse-effekt
    document.querySelector("#start .start_knap").classList.add("pulse");

    // Ved klik på start-knap føres man videre til spillet
    document.querySelector("#start .start_knap").addEventListener("click", hideStart);

    // Ved klik på indstillinger vises indstillinger
    document.querySelector("#start .settings-knap").addEventListener("click", showSettings);
}

function showSettings() {
    console.log("Indstillinger vises");

    document.querySelector("#settings").classList.remove("hide");

    // FORTSÆT HERFRA §§§§§§§§§§§§§§§§

    document.querySelector(".close").addEventListener("click", hideSettings);
}

function hideSettings() {
    console.log("Indstillinger skjules");
}

function toggleSound() {
    console.log("Toggle på SFX lyde");

}

function soundsOff() {
    console.log("SFX lyde slået fra");
}

function soundsOn() {
    console.log("SFX lyde slået til");

}

function toggleMusic() {
    console.log("Toggle på Musik");

}

function musicOff() {
    console.log("Musik slået fra");

}

function musicOn() {
    console.log("Musik slået til");

}

function hideStart() {
    console.log("Skjuler startskærmen");
}

function startStory() {
    console.log("Starter historien");
}

function startGame() {
    console.log("Spillet startes");
}

function clickGood() {
    console.log("Klikket på god ting. Der trækkes et liv.");
}

function clickPrivate() {
    console.log("Privat foto stoppet");
}

function gameOver() {
    console.log("Game over");

}

function showFakta() {
    console.log("Fakta vises");

}

function showEndscreen() {
    console.log("Sidste screen. Link til PrivatSnak.dk");
}
