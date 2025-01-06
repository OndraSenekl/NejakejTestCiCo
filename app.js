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

    if (ciltext) {
        if (delkaCile === "1") {
            sessionStorage.setItem("cil1", ciltext); // Krátkodobé
        } else if (delkaCile === "2") {
            sessionStorage.setItem("cil2", ciltext); // Střednědobé
        } else if (delkaCile === "3") {
            sessionStorage.setItem("cil3", ciltext); // Dlouhodobé
        }
    }

    // Zobrazíme cíl na stránce pro každou kategorii
    document.getElementById("cil1").textContent = sessionStorage.getItem("cil1") || "Žádný cíl nebyl nastaven.";
    document.getElementById("cil2").textContent = sessionStorage.getItem("cil2") || "Žádný cíl nebyl nastaven.";
    document.getElementById("cil3").textContent = sessionStorage.getItem("cil3") || "Žádný cíl nebyl nastaven.";
}

function UpravitCil(cilId) {
    let cilKey = "cil" + cilId;
    let cilText = sessionStorage.getItem(cilKey);

    if (cilText && confirm("Chceš upravit tento cíl?")) {
        // Načteme existující cíl do formuláře
        document.getElementById("cilInput").value = cilText;
        document.getElementById("delkaCile").value = cilId; // Nastavíme odpovídající délku cíle
        ZmenStranku1(); // Přejdeme na stránku pro zadání nového cíle
    } else {
        alert("Pro tuto kategorii není žádný cíl nastaven.");
    }
}

function SmazatCil(cilId) {
    let cilKey = "cil" + cilId;

    if (sessionStorage.getItem(cilKey)) {
        if (confirm("Opravu chcete tento cíl smazat?")) {
            // Smažeme cíl
            sessionStorage.removeItem(cilKey);
            // Aktualizujeme zobrazení na stránce
            document.getElementById(cilKey).textContent = "Žádný cíl nebyl nastaven.";
        }
    } else {
        alert("Pro tuto kategorii není žádný cíl nastaven.");
    }
}

window.onload = function() {
    // Načteme a zobrazíme uložené cíle při načtení stránky
    document.getElementById("cil1").textContent = sessionStorage.getItem("cil1") || "Žádný cíl nebyl nastaven.";
    document.getElementById("cil2").textContent = sessionStorage.getItem("cil2") || "Žádný cíl nebyl nastaven.";
    document.getElementById("cil3").textContent = sessionStorage.getItem("cil3") || "Žádný cíl nebyl nastaven.";
}
