function loadPage(page, element) {
    console.log("Lade Seite:", page);

    fetch(page)
        .then(response => {
            if (!response.ok) throw new Error("Seite nicht gefunden: " + page);
            return response.text();
        })
        .then(data => {
            document.getElementById("content").innerHTML = data;

            // Aktiven Tab markieren
            document.querySelectorAll(".tablink").forEach(tab => tab.classList.remove("active-tab"));
            if (element) element.classList.add("active-tab");
        })
        .catch(error => console.error("Fehler beim Laden:", error));
}

// Standardseite beim Laden der Website anzeigen
document.addEventListener("DOMContentLoaded", function () {
    let defaultTab = document.getElementById("defaultOpen");
    if (defaultTab) {
        loadPage("Unterseiten/index_content.html", defaultTab);
    }
});
