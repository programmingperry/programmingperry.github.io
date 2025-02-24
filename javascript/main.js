function loadPage(page, element) {
    console.log("Lade Seite:", page);

    fetch(page)
        .then(response => {
            if (!response.ok) throw new Error("Seite nicht gefunden: " + page);
            return response.text();
        })
        .then(data => {
            document.getElementById("content").innerHTML = data;

            document.querySelectorAll(".tablink").forEach(tab => tab.classList.remove("active-tab"));
            if (element) element.classList.add("active-tab");

            // Dynamische Inhalte laden
            if (page.includes('projects_content.html')) {
                displayProjects();
            }
            if (page.includes('dev_log_content.html')) {
                displayBlogPosts();
            }
        })
        .catch(error => console.error("Fehler beim Laden:", error));
}

function loadProjectsJS() {
    if (!document.querySelector("script[src='/javascript/projects.js']")) {
        const script = document.createElement("script");
        script.src = "/javascript/projects.js";
        script.type = "text/javascript";
        script.onload = () => displayProjects(); // Sobald das Skript geladen ist, rufe die Funktion auf
        document.body.appendChild(script);
    } else {
        displayProjects();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("defaultOpen").click();
});
