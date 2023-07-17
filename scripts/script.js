const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let pages = document.querySelectorAll(".page");
let activePageArr = [16, 17];
let width700 = window.matchMedia("(max-width: 700px)");

function pagesDisplayNone() {
  pages.forEach((element) => element.classList.add("displayNone"));
}

function prevPush() {
  if (activePageArr.length === 1) {
    if (activePageArr[0] === 1) return;
    pagesDisplayNone();
    activePageArr[0] -= 1;
    document.getElementById(activePageArr[0]).classList.remove("displayNone");
  }
  if (activePageArr.length === 2) {
    if (activePageArr[0] === 0) return;
    pagesDisplayNone();
    activePageArr[0] -= 2;
    activePageArr[1] -= 2;
    document.getElementById(activePageArr[0]).classList.remove("displayNone");
    document.getElementById(activePageArr[1]).classList.remove("displayNone");
  }
}

function nextPush() {
  pagesDisplayNone();
  if (activePageArr.length === 1) {
    activePageArr[0] += 1;
    document.getElementById(activePageArr[0]).classList.remove("displayNone");
    console.log(999999);
  }
  if (activePageArr.length === 2) {
    activePageArr[0] += 2;
    activePageArr[1] += 2;
    document.getElementById(activePageArr[0]).classList.remove("displayNone");
    document.getElementById(activePageArr[1]).classList.remove("displayNone");
  }
}

function myFunction(x) {
  if (x.matches) {
    document.getElementById(activePageArr[0]).classList.add("displayNone");
    activePageArr.shift();
  } else {
    if (activePageArr[0] === 0 || activePageArr[0] % 2 === 0) {
      activePageArr[1] = activePageArr[0] + 1;
    } else {
      activePageArr[0] -= 1;
      activePageArr[1] = activePageArr[0] + 1;
    }
    document.getElementById(activePageArr[0]).classList.remove("displayNone");
    document.getElementById(activePageArr[1]).classList.remove("displayNone");
  }
}

myFunction(width700);
width700.addListener(myFunction);

prev.addEventListener("click", () => {
  prevPush();
});

next.addEventListener("click", () => {
  nextPush();
});

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 37) prevPush();
  if (event.keyCode === 39) nextPush();
});