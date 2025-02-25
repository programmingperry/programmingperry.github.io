function loadPage(page, element) {
    console.log("Lade Seite:", page);

    fetch(page)
        .then(response => {
            if (!response.ok) throw new Error("Seite nicht gefunden: " + page);
            return response.text();
        })
        .then(data => {
            // Inhalte in #content einfügen
            document.getElementById("content").innerHTML = data;

            // Aktiven Tab markieren
            document.querySelectorAll(".tablink").forEach(tab => tab.classList.remove("active-tab"));
            if (element) element.classList.add("active-tab");

            // Wenn projects_content.html geladen wurde, lade und führe projects.js aus
            if (page.includes('projects_content.html')) {
                loadProjectsJS();  // Lade das Script für projects.js
            }
        })
        .catch(error => console.error("Fehler beim Laden:", error));
}

function loadProjectsJS() {
    const script = document.createElement("script");
    script.src = "javascript/projects.js";
    script.type = "text/javascript";
    script.onload = function() {
        // Wenn das Skript geladen ist, rufe displayProjects() auf
        displayProjects();  
    };
    document.body.appendChild(script);  // Das Script wird jetzt dynamisch hinzugefügt
}

document.addEventListener("DOMContentLoaded", function() {
    // Direkt beim Laden die "Index"-Seite laden
    loadPage('Unterseiten/index_content.html', document.getElementById("defaultOpen"));
});
