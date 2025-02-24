const projects = [
  {
      title: "Portfolio Website",
      description: "Meine persönliche Portfolio-Website.",
      link: "https://github.com/username/portfolio"
  },
  {
      title: "Blog System",
      description: "Ein Markdown-basiertes Blog-System.",
      link: "https://github.com/username/blog"
  },
  {
      title: "Cooles JavaScript Projekt",
      description: "Ein kleines Projekt zum Lernen von JavaScript.",
      link: "https://github.com/username/cool-js-project"
  }
];

function displayProjects() {
  console.log("displayProjects() wurde aufgerufen!"); // <-- Testausgabe in der Konsole
  const projectContainer = document.getElementById("projects-list");
  if (!projectContainer) {
      console.error("Fehler: #projects-list wurde nicht gefunden!");
      return;
  }
  projectContainer.innerHTML = ""; // Vorherigen Inhalt löschen

  projects.forEach(project => {
      const projectElement = document.createElement("div");
      projectElement.classList.add("project-item");
      projectElement.innerHTML = `
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">Mehr erfahren</a>
      `;
      projectContainer.appendChild(projectElement);
  });

  console.log("Projekte erfolgreich geladen!"); // <-- Testausgabe
}
