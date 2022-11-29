const container = document.querySelectorAll(".container");
const msgContainer = document.querySelectorAll(".msg-container");
const redDot = document.querySelectorAll(".red-dot");
const num = document.querySelector("#num");
const markAll = document.getElementById("markAll");

markAll.addEventListener("click", () => {
  container.forEach((container) => (container.style.backgroundColor = "white"));
  redDot.forEach((redDot) => redDot.remove());
  num.textContent = "0";
});

container.forEach((container) =>
  container.addEventListener("click", () => {
    container.style.backgroundColor = "white";
    // console.log(container.children[1].children.length);
    if (container.children[1].children.length > 3) {
      container.children[1].children[2].remove();
    }
    num.textContent = num.textContent - 1;
    num.textContent < 0 ? (num.textContent = 0) : num.textContent;
  })
);
