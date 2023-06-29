const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let pages = document.querySelectorAll(".page");
let activePageArr = [0, 1];

function activePages() {}

function pagesDisplayNone() {
  pages.forEach((element) => element.classList.add("displayNone"));
}

prev.addEventListener("click", () => {
  if (activePageArr[0] === 0) return;
  pagesDisplayNone();
  activePageArr[0] -= 2;
  activePageArr[1] -= 2;
  document.getElementById(activePageArr[0]).classList.remove("displayNone");
  document.getElementById(activePageArr[1]).classList.remove("displayNone");
});
next.addEventListener("click", () => {
  pagesDisplayNone();
  activePageArr[0] += 2;
  activePageArr[1] += 2;
  document.getElementById(activePageArr[0]).classList.remove("displayNone");
  document.getElementById(activePageArr[1]).classList.remove("displayNone");
});
