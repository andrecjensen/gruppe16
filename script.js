console.log("Spillet som er udarbejdet af Gruppe 16");

window.addEventListener("load", showStart);

let showSettingsSFXSound = true;
let showSettingsMusic = true;

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

    // De to QSE herunder toggler hide class fra på settingsskærm og toggler blur class til på startskærm
    document.querySelector("#settings").classList.toggle("hide");
    document.querySelector("#start").classList.toggle("blur");

    // LUK-KNAP OG TOGGLES
    document.querySelector("#toggle_sound").addEventListener("click", toggleSound);
    document.querySelector("#toggle_music").addEventListener("click", toggleMusic);
    document.querySelector("#close_settings").addEventListener("click", hideSettings);
}

function hideSettings() {
    console.log("Indstillinger skjules");

    // De to QSE herunder toggler hide class til på settingsskærm og toggler blur class fra på startskærm
    document.querySelector("#settings").classList.toggle("hide");
    document.querySelector("#start").classList.toggle("blur");
}

// SFX toggle funktioner

function toggleSound() {
    console.log("Toggle på SFX lyde");

    // ## DER SKAL TILFØJES DOC QSE TIL SOUNDON OG SOUNDOFF

    if (showSettingsSFXSound == false) {
        //her slår vi SFX lyde på
        showSettingsSFXSound = true;
        soundsOn();

    } else {
        //her slår vi SFX lyde fra
        showSettingsSFXSound = false;
        soundsOff();
    }
}

function soundsOff() {
    console.log("SFX lyde slået fra. soundsOff funktionens værdi er " + showSettingsSFXSound);

    // SFX lyde slås fra
    document.querySelector(".sfx").muted = true;
}

function soundsOn() {
    console.log("SFX lyde slået til. soundsOn funktionens værdi er " + showSettingsSFXSound);

    // SFX lyde slås til
    document.querySelector(".sfx").muted = false;
}

// Musik toggle funktioner

function toggleMusic() {
    console.log("Toggle på Musik");

    // ## DER SKAL TILFØJES DOC QSE TIL MUSICON OG MUSICOFF

    if (showSettingsMusic == false) {
        // her slår vi Musik på
        showSettingsMusic = true;
        musicOn();

    } else {
        // her slår vi musik fra
        showSettingsMusic = false;
        musicOff();
    }
}

function musicOff() {
    console.log("Musik slået fra. musicOff funktionens værdi er " + showSettingsMusic);

    // Musik slås fra
    document.querySelector("#music").muted = true;
}

function musicOn() {
    console.log("Musik slået til. musicOn funktionens værdi er " + showSettingsMusic);

    // Musik slås til
    document.querySelector("#music").muted = false;
}

// Toggle funktioner slut

function hideStart() {
    console.log("Skjuler startskærmen");

    // Denne QSE vælger startlyden og spiller den
    document.querySelector("#startsound").play();

    // Denne QSE vælger startknappen og fjerner dens animation, så ikke spillet bliver for tungt. Man kommer til at se den mens man spiller alligevel.
    document.querySelector("#start .start_knap").classList.remove("pulse");

    // Denne QSE starter fade animationen på startskærmen
    document.querySelector("#start").classList.add("hide_start");

    // Denne QSE viderefører til startStory når fade animationen er færdigt
    document.querySelector("#start").addEventListener("animationend", startStory);
}

function startStory() {
    console.log("Starter historien");

    // Her skal indsættes forskellige QSE der vælger figure der skal animeres

    document.querySelector("#pigekjole").classList.add("pige_animation");
    document.querySelector("#vind").classList.add("vind_animation");
    document.querySelector("#silhuetter").classList.add("silhuetter_animation");
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
