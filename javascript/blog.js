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
        "blogposts/test.md",
        "blogposts/2025-02-22-test-blog.md",
        "blogposts/2test-blog.md"
    ];

    for (const file of blogFiles) {
        try {
            const response = await fetch(file);
            if (!response.ok) throw new Error(`Fehler beim Laden: ${file}`);

            const markdown = await response.text();
            const html = marked.parse(markdown); // Markdown zu HTML umwandeln

            // Erstelle ein Blogpost-Element mit vollständigem Inhalt
            const blogElement = document.createElement("div");
            blogElement.classList.add("blog-item");
            blogElement.innerHTML = html;

            blogContainer.appendChild(blogElement);
        } catch (error) {
            console.error(error);
        }
    }
}

// Lade die Blogposts beim Laden der Seite
document.addEventListener("DOMContentLoaded", loadBlogPosts);
