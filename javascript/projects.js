async function loadMarkdownFiles() {
    console.log("Lade Markdown-Dateien...");
    const projectContainer = document.getElementById("projects-list");
    if (!projectContainer) {
        console.error("Fehler: #projects-list wurde nicht gefunden!");
        return;
    }

    projectContainer.innerHTML = ""; 

    // Liste der Markdown-Dateien
    const markdownFiles = [
        "/projects/1projectlist.md",
        "/projects/booktracker.md",
        "/projects/console_chess.md",
        "/projects/number_converter.md"
    ];

    for (const file of markdownFiles) {
        try {
            const response = await fetch(file);
            if (!response.ok) throw new Error(`Fehler beim Laden: ${file}`);

            const markdown = await response.text();
            const html = marked.parse(markdown); 

            const projectElement = document.createElement("div");
            projectElement.classList.add("project-item");
            projectElement.innerHTML = html;

            projectContainer.appendChild(projectElement);
        } catch (error) {
            console.error(error);
        }
    }

    document.querySelectorAll("ul").forEach(ul => {
        const isChecklist = ul.querySelector('input[type="checkbox"]');
        if (isChecklist) {
        ul.classList.add("checklist");
        }
    });

}


  