document.addEventListener("DOMContentLoaded", () => {
    // Debugging: Log, um sicherzustellen, dass das Script geladen wurde
    console.log("projects.js wurde geladen!");
  
    // Versuche, die JSON-Daten zu laden
    fetch("data/projects.json")
      .then(response => response.json())
      .then(data => {
        console.log("Projekte erfolgreich geladen:", data);  // Zeige die geladenen Daten in der Konsole an
  
        // Sicherstellen, dass der projects-container existiert
        const container = document.getElementById("projects-container");
        if (!container) {
          console.error("Kein Container gefunden!");
          return;
        }
  
        // Projekte durchlaufen und in den Container einfügen
        data.forEach(project => {
          console.log("Projekt:", project);  // Zeigt jedes Projekt in der Konsole an
  
          const projectDiv = document.createElement("div");
          projectDiv.classList.add("project-entry");
  
          // HTML-Inhalt für das Projekt erstellen
          projectDiv.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <a href="${project.github}" target="_blank">Mehr erfahren</a>
          `;
  
          // Projekt in den Container einfügen
          container.appendChild(projectDiv);
        });
      })
      .catch(error => {
        console.error("Fehler beim Laden der Projekte:", error);
      });
  });
  