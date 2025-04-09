async function loadBlogPosts() {
    console.log("Loading...");
    const blogContainer = document.getElementById("blog-list");
    if (!blogContainer) {
        console.error("Fehler: #blog-list wurde nicht gefunden!");
        return;
    }

    blogContainer.innerHTML = ""; 

    // Liste der Blogpost-Dateien
    const blogFiles = [
        "blogposts/24_04_02_logicisaskill.md",
        "blogposts/24_02_20_aiandlearning.md"
    ];

    for (const file of blogFiles) {
        try {
            const response = await fetch(file);
            if (!response.ok) throw new Error(`Fehler beim Laden: ${file}`);

            const markdown = await response.text();
            const html = marked.parse(markdown); 

            const blogElement = document.createElement("div");
            blogElement.classList.add("blog-item");
            blogElement.innerHTML = html;

            blogContainer.appendChild(blogElement);
        } catch (error) {
            console.error(error);
        }
    }
}

document.addEventListener("DOMContentLoaded", loadBlogPosts);
