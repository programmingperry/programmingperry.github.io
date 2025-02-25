const projects = [
  {
      title: "Number Converter",
      description: "A python program to convert numbers between the decimal, binary and hexadecimal systems in the console. The program is only accessible with a login, which is executed via a MySQL database. Additional the program should be working on a Raspberry Pie. For this reason it was a team assignment with a system integrator.",
      github: "https://github.com/username/portfolio"
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
          <a href="${project.github}" target="_blank">GitHub Repository</a>
      `;
      projectContainer.appendChild(projectElement);
  });

  console.log("Projekte erfolgreich geladen!"); // <-- Testausgabe
}
