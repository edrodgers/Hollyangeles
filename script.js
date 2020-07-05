//menu hide/show
document.querySelector(".btn").onclick = function () {
  if (
    this.classList.contains("not-active") ||
    this.classList.contains("change")
  ) {
    this.classList.toggle("change");
    this.classList.toggle("not-active");
  } else {
    this.classList.toggle("change");
  }
  document.querySelector("nav").classList.toggle("nav-open");
};

//header hide/show
let startPos = window.pageYOffset;

window.onscroll = function () {
  console.log("working");
  let currentPos = window.pageYOffset;

  if (startPos > currentPos) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-100px";
  }
  startPos = currentPos;
};
