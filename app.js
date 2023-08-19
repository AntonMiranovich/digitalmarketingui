const btn1 = document.querySelector(".btn-plus1");
let flag1 = true;

btn1.addEventListener("click", function () {
  const pDiv = document.querySelector(".div1 p");
  if (flag1 === true) {
    pDiv.style = "  display: flex";
    flag1 = false;
  } else {
    pDiv.style = "display: none";
    flag1 = true;
  }
});

const btn2 = document.querySelector(".btn-plus2");
let flag2 = true;

btn2.addEventListener("click", function () {
  const pDiv = document.querySelector(".div2 p");
  if (flag2 === true) {
    pDiv.style = "  display: flex";
    flag2 = false;
  } else {
    pDiv.style = "display: none";
    flag2 = true;
  }
});

const btn3 = document.querySelector(".btn-plus3");
let flag3 = true;

btn3.addEventListener("click", function () {
  const pDiv = document.querySelector(".div3 p");
  if (flag3 === true) {
    pDiv.style = "  display: flex";
    flag3 = false;
  } else {
    pDiv.style = "display: none";
    flag3 = true;
  }
});

const btn4 = document.querySelector(".btn-plus4");
let flag4 = true;

btn4.addEventListener("click", function () {
  const pDiv = document.querySelector(".div4 p");
  if (flag4 === true) {
    pDiv.style = "  display: flex";
    flag4 = false;
  } else {
    pDiv.style = "display: none";
    flag4 = true;
  }
});
