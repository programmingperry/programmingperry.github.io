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

            // Blog-Script laden, wenn Blog-Seite geöffnet wird
            if (page.includes('dev_log_content.html')) {
                loadBlogJS();
            }
            // Typing Script nachladen
            if (page.includes('index_content.html')) {
                loadTypingJS();
    }
        })
        .catch(error => console.error("Fehler beim Laden:", error));
}

function loadProjectsJS() {
    // Prüfen, ob marked schon geladen wurde
    if (typeof marked === "undefined") {
        const markedScript = document.createElement("script");
        markedScript.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
        markedScript.type = "text/javascript";
        markedScript.onload = function () {
            console.log("marked.js geladen!");
            loadProjectsScript();  // Erst wenn marked.js fertig ist, dann projects.js laden
        };
        document.body.appendChild(markedScript);
    } else {
        loadProjectsScript(); // Falls marked schon existiert, direkt projects.js laden
    }
}

function loadProjectsScript() {
    const script = document.createElement("script");
    script.src = "javascript/projects.js";
    script.type = "text/javascript";
    script.onload = function () {
        console.log("projects.js geladen!");
        loadMarkdownFiles(); // Markdown-Projekte laden
    };
    document.body.appendChild(script);
}

document.addEventListener("DOMContentLoaded", function () {
    const defaultTab = document.getElementById("defaultOpen");
    if (defaultTab) {
        defaultTab.click(); // Simuliert einen Klick auf den Standard-Tab
    } else {
        console.error("Fehler: Der Default-Tab (#defaultOpen) wurde nicht gefunden!");
    }
});

function loadBlogJS() {
    if (typeof marked === "undefined") {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
        script.onload = function() {
            console.log("marked.js geladen!");
            loadBlogScript();
        };
        document.body.appendChild(script);
    } else {
        loadBlogScript();
    }
}

function loadBlogScript() {
    const script = document.createElement("script");
    script.src = "javascript/blog.js";
    script.onload = function() {
        loadBlogPosts(); // Blogposts laden
    };
    document.body.appendChild(script);
}

function loadTypingJS() {
    const script = document.createElement("script");
    script.src = "javascript/typinganimation.js";
    script.onload = function () {
        console.log("typinganimation.js geladen!");
        typeLoop(); // <- Funktion in typinganimation.js
    };
    document.body.appendChild(script);
}

