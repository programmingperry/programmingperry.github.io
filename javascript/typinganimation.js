let words = ["developer",  "pixelpusher", "nerd", "designer", "dreamer", "bookworm", "chaotic", "coder"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const typedWordEl = document.getElementById("typed-text");
  if (!typedWordEl) return;

  const currentWord = words[wordIndex];
  let displayedText = currentWord.substring(0, charIndex);
  typedWordEl.textContent = displayedText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeLoop, 150);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeLoop, 100);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeLoop, 1000);
    } else {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeLoop, 300);
    }
  }
}
