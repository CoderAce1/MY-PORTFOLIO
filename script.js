// Typing effect for About Me section
const textElement = document.querySelector(".typewriter");
const text = "Hi, I’m [Your Name], Web Developer";
let index = 0;
function typeWriter() {
  if (index < text.length) {
    textElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// Modal for Projects (optional)
const projectCards = document.querySelectorAll(".project-card");
const modal = document.createElement("div");
modal.classList.add("modal");
modal.innerHTML =
  "<div class='modal-content'><span class='close'>&times;</span><p>Project details</p></div>";
document.body.appendChild(modal);

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    modal.classList.add("open");
  });
});

document.querySelector(".close").addEventListener("click", () => {
  modal.classList.remove("open");
});
