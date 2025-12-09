const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const cloas = document.getElementById("cloas");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (cloas) {
  cloas.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
