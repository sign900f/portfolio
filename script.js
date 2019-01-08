window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    //nulstil alting
    showStart();
}

function showStart() {
    console.log("showStart");

    //baggrund snurrer
    document.querySelector("#middelground").classList.add("background_spin");



}
