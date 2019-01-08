window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    //nulstil alting
    showStart();
}

function showStart() {
    console.log("showStart");

    //ved klik på 1
    document.querySelector(".button1").addEventListener("click", skiftBillede1);

    //ved klick på 2
    document.querySelector(".button2").addEventListener("click", skiftBillede2);

    //ved klick på 3
    document.querySelector(".button3").addEventListener("click", skiftBillede3);

    //ved klick på 4
    document.querySelector(".button4").addEventListener("click", skiftBillede4);

    //få hund til at bevæge sig

    document.querySelector(".hund").classList.add("hund_svaev");




}

function skiftBillede1() {
    console.log("skift til billede 1");
    document.querySelector(".image1").classList.remove("hide");
    document.querySelector(".image1").classList.add("show");

    document.querySelector(".image2").classList.add("hide");

    document.querySelector(".image3").classList.add("hide");

    document.querySelector(".image4").classList.add("hide");

}


function skiftBillede2() {
    console.log("skift til billede 2");
    document.querySelector(".image1").classList.add("hide");

    document.querySelector(".image2").classList.remove("hide");
    document.querySelector(".image2").classList.add("show");

    document.querySelector(".image3").classList.add("hide");

    document.querySelector(".image4").classList.add("hide");
}


function skiftBillede3() {
    console.log("skift til billede 3");
    document.querySelector(".image1").classList.add("hide");

    document.querySelector(".image2").classList.add("hide");

    document.querySelector(".image3").classList.remove("hide");
    document.querySelector(".image3").classList.add("show");

    document.querySelector(".image4").classList.add("hide");
}

function skiftBillede4() {
    console.log("skift til billede 3");
    document.querySelector(".image1").classList.add("hide");

    document.querySelector(".image2").classList.add("hide");

    document.querySelector(".image3").classList.add("hide");

    document.querySelector(".image4").classList.remove("hide");
    document.querySelector(".image4").classList.add("show");
}
