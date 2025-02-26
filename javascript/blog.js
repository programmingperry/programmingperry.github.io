async function loadBlogPosts() {
    console.log("Loading...");
    const blogContainer = document.getElementById("blog-list");
    if (!blogContainer) {
        console.error("Fehler: #blog-list wurde nicht gefunden!");
        return;
    }

    blogContainer.innerHTML = ""; // Vorherigen Inhalt löschen

    // Liste der Blogpost-Dateien
    const blogFiles = [
        "blogposts/2025-02-22-test-blog.md"
    ];

    for (const file of blogFiles) {
        try {
            const response = await fetch(file);
            if (!response.ok) throw new Error(`Fehler beim Laden: ${file}`);

            const markdown = await response.text();
            const html = marked.parse(markdown); // Markdown zu HTML umwandeln

            // Extrahiere den Titel (erste Zeile) und die Vorschau (erste 100 Zeichen)
            const lines = markdown.split("\n");
            const title = lines[0].replace("# ", ""); // Entferne Markdown-Header `#`
            const previewText = lines.slice(1).join(" ").substring(0, 100) + "..."; // Vorschau

            // Erstelle ein Blogpost-Element mit Vorschau
            const blogElement = document.createElement("div");
            blogElement.classList.add("blog-item");
            blogElement.innerHTML = `
                <h3>${title}</h3>
                <p>${previewText}</p>
                <button onclick="openBlogPost('${file}')">More</button>
            `;

            blogContainer.appendChild(blogElement);
        } catch (error) {
            console.error(error);
        }
    }
}

// Funktion zum Öffnen eines Blogposts
async function openBlogPost(file) {
    const response = await fetch(file);
    if (!response.ok) {
        console.error(`Fehler beim Laden des Blogposts: ${file}`);
        return;
    }

    const markdown = await response.text();
    const html = marked.parse(markdown);

    // Blog-Inhalt in ein spezielles Modal oder Bereich laden
    const blogContent = document.getElementById("blog-content");
    blogContent.innerHTML = `
        <div class="blog-full">
            ${html}
            <button onclick="closeBlogPost()">Schließen</button>
        </div>
    `;

    // Blog-Beitrag sichtbar machen
    blogContent.style.display = "block";
}

// Funktion zum Schließen des Blogposts
function closeBlogPost() {
    document.getElementById("blog-content").style.display = "none";
}
