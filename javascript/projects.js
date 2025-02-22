console.log("Projects-Seite wurde geladen!");

fetch("data/projects.json") // JSON mit Projekten laden
    .then(response => response.json())
    .then(projects => {
        const container = document.getElementById("projects-container");

        projects.forEach(project => {
            const projectDiv = document.createElement("div");
            projectDiv.classList.add("project-entry");

            projectDiv.innerHTML = `
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">Mehr erfahren</a>
            `;

            container.appendChild(projectDiv);
        });
    })
    .catch(error => console.error("Fehler beim Laden der Projekte:", error));
