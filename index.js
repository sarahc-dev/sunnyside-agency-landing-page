const menuBtn = document.getElementById("hamburger");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  if (menuBtn.getAttribute("aria-expanded") === "false") {
    menuBtn.setAttribute("aria-expanded", true);
    menuBtn.classList.add("opacity-50");
    nav.classList.add("h-screen");
  } else {
    menuBtn.setAttribute("aria-expanded", false);
    menuBtn.classList.remove("opacity-50");
    nav.classList.remove("h-screen");
  }
});
