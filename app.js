function ZmenStranku1() {
    document.getElementById("strana").className = "page";
    document.getElementById("strana1").className = "page_visible";
}

function ZmenStranku2() {
    document.getElementById("strana").className = "page_visible";
    document.getElementById("strana1").className = "page";
}

function Uloz() {
    let ciltext = document.getElementById("cilInput").value.trim();
    let delkaCile = document.getElementById("delkaCile").value;

    let cilArray = ciltext.split(',').map(item => item.trim());

    if (cilArray.length > 0) {
        if (delkaCile === "1") {
            sessionStorage.setItem("cil1", JSON.stringify(cilArray));
        } else if (delkaCile === "2") {
            sessionStorage.setItem("cil2", JSON.stringify(cilArray));
        } else if (delkaCile === "3") {
            sessionStorage.setItem("cil3", JSON.stringify(cilArray));
        }
    }

    ZobrazCile();
}

function ZobrazCile() {
    let cil1 = JSON.parse(sessionStorage.getItem("cil1")) || [];
    let cil2 = JSON.parse(sessionStorage.getItem("cil2")) || [];
    let cil3 = JSON.parse(sessionStorage.getItem("cil3")) || [];

    document.getElementById("cil1").querySelector('p').textContent = cil1.length > 0 ? cil1.join(', ') : "Žádný cíl nebyl nastaven.";
    document.getElementById("cil2").querySelector('p').textContent = cil2.length > 0 ? cil2.join(', ') : "Žádný cíl nebyl nastaven.";
    document.getElementById("cil3").querySelector('p').textContent = cil3.length > 0 ? cil3.join(', ') : "Žádný cíl nebyl nastaven.";
}

function UpravitCil(cilId) {
    let cilKey = "cil" + cilId;
    let cilText = JSON.parse(sessionStorage.getItem(cilKey));

    if (cilText && cilText.length > 0 && confirm("Chceš upravit tento cíl?")) {
        document.getElementById("cilInput").value = cilText.join(', ');
        document.getElementById("delkaCile").value = cilId;
        ZmenStranku1();
    } else {
        alert("Pro tuto kategorii není žádný cíl nastaven.");
    }
}

function SmazatCil(cilId) {
    let cilKey = "cil" + cilId;

    if (sessionStorage.getItem(cilKey)) {
        if (confirm("Opravu chcete tento cíl smazat?")) {
            sessionStorage.removeItem(cilKey);
            ZobrazCile();
        }
    } else {
        alert("Pro tuto kategorii není žádný cíl nastaven.");
    }
}

window.onload = function() {
    ZobrazCile();
}
