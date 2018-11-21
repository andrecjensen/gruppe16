console.log("Delbart eller strafbart");

window.addEventListener("load", sidenVises);

// Disse fortæller at værdien på SFX lyde og musik er true. Ved toggle funktionerne
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
    document.querySelector("#start_knap").classList.add("pulse");

    // Ved klik på start-knap føres man videre til spillet
    document.querySelector("#start_knap").addEventListener("click", hideStart);

    // Ved klik på indstillinger vises indstillinger
    document.querySelector("#settings_knap").addEventListener("click", showSettings);
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

    document.querySelector("#settings").classList.remove("hide");
    document.querySelector("#settings").classList.add("show");
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

    // Denne QSE vælger startknappen og fjerner dens animation, så ikke spillet bliver for tungt. Man kommer til at se den mens man spiller alligevel.
    document.querySelector("#start_knap").classList.remove("pulse");

    // Denne QSE starter fade animationen på startskærmen
    document.querySelector("#start").classList.add("hide_start");

    // Denne QSE viderefører til startStory når fade animationen er færdigt
    document.querySelector("#start").addEventListener("animationend", startStory);
}

function startStory() {
    console.log("Starter historien");

    document.querySelector("#game").classList.remove("hide");

    // if/then herunder fortæller at hvis musik er slået fra, spilles det ikke. Hvis det er slået til, spilles det.
    if (showSettingsMusic == false) {

        console.log("Musik startes ikke");


    } else {
        console.log("Musik startes");
        document.querySelector("#music").play();
    }

    // Her skal indsættes forskellige QSE der vælger figure der skal animeres

    document.querySelector("#pige_kjole").classList.add("pige_animation");
    document.querySelector("#vind").classList.add("vind_animation");
    document.querySelector("#silhuetter").classList.add("silhuetter_animation");
    document.querySelector("#skyer").classList.add("skyer_glide");

    document.querySelector("#pige_kjole").addEventListener("animationend", startGame);
}

function startGame() {
    console.log("Spillet startes");

    // Disse to QSE giver billederne upload classen som får billeder til at flyve mod skyen
//    document.querySelector("#privatfoto").classList.add("upload");
//    document.querySelector("#godfoto").classList.add("upload");


    // timeout funktionen herunder angiver nedtælling til slut
    setTimeout(gameOver, 50000);

    // alle gode beskeder/billeder gøres klikbare. Ved klik igangsættes clickGood

    document.querySelector(".godfoto").addEventListener("click", clickGood);

    // alle private billeder gøres klikbare. Ved klik igangsættes clickPrivate

    document.querySelector(".privatfoto").addEventListener("click", clickPrivate);
}

let liv = 3;

function clickGood() {
    console.log("Klikket på god ting. Der trækkes et liv.");


    // Dette if/then afspiller lyd, hvis SFX er slået til.
    if (showSettingsSFXSound == false) {
        console.log("Lyd er slået fra = ingen lyd");

    } else {
        console.log("Mist liv lyd afspilles");
        document.querySelector("#sfx1").play();
    }

    // Dette if/then fortæller at der stadig er liv tilbage så fjernes det valgte samt fjerner et liv. Ellers gameover
    if (liv > 0) {

        // nedenstående vælger det valgte at forsvinde med disappear class
        console.log(this);
        this.classList.add("disappear");

        let livstal = "#liv" + liv;

        document.querySelector(livstal).classList.add("hide");
        console.log("#liv" + liv);

        liv--;
        console.log(liv);
    } else {
        gameOver();
    }
}

let counter = 0;

function clickPrivate() {
    console.log("Privat foto stoppet");

    // Dette if/then afspiller lyd, hvis SFX er slået til.
    if (showSettingsSFXSound == false) {
        console.log("Lyd er slået fra = ingen lyd");

    } else {
        console.log("God lyd afspilles");
        document.querySelector("#sfx2").play();
    }

    //nedenstående vælger det valgte at forsvinde med disappear class
    console.log(this);
    this.classList.add("disappear");

    // Dette siger at antallet af tallet i "counter" skal plusses med 1.
    counter++;

    //Dette ændrer indholdet af "counter" div'et til det aktuelle tal
    document.querySelector("#counter").innerHTML = counter;
}

function gameOver() {
    console.log("Game over");

    // Spilskærmen skjules og stoppes for animation
    document.querySelector("#game").classList.add("hide");
    document.querySelector("#game").classList.add("animation_pause");
    document.querySelector("#gameover").classList.remove("hide");

    // pigen i hjørnet får en kørende animation hvor hun græder
    document.querySelector("#pigetrist").classList.add("show");

    // denne knap fører til endscreen siden
    document.querySelector("#videre_knap").addEventListener("click", showEndscreen);
}

function showEndscreen() {
    console.log("Sidste screen. Link til PrivatSnak.dk");

    // Fakta skærm skjules og endscreen vises
    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#gameover").classList.add("animation_pause");
    document.querySelector("#endscreen").classList.remove("hide");

    // ved klik på replay startes "startOver"
    document.querySelector("#replay").addEventListener("click", startOver);
}

function startOver() {
    console.log("klik replay");

    window.location.reload(false);
}
