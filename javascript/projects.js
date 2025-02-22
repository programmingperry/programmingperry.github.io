console.log("Versuche, die JSON-Datei zu laden...");

fetch("data/projects.json")
    .then(response => {
        console.log("Antwort Status:", response.status); // Gibt den Status der Anfrage aus
        if (!response.ok) {
            throw new Error("Fehler beim Laden von projects.json: " + response.status); // Fehlerbehandlung
        }
        return response.json();
    })
    .then(projects => {
        console.log("Projekte geladen:", projects);  // Ausgabe der geladenen Projekte
        const container = document.getElementById("projects-container");

        projects.forEach(project => {
            const projectDiv = document.createElement("div");
            projectDiv.classList.add("project-entry");

            projectDiv.innerHTML = `
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <a href="${project.github}" target="_blank">Mehr erfahren</a>
            `;

            container.appendChild(projectDiv);
        });
    })
    .catch(error => {
        console.error("Fehler beim Laden der Projekte:", error);  // Hier bekommst du Fehlermeldungen aus der fetch() Anfrage
    });
