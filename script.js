// const imgs = document.getElementById("img");
// const img = document.querySelectorAll("#img img");

// let idx = 0;

// function carrosel() {
//   idx++;

//   if (idx > img.length - 1) {
//     idx = 0;
//   }

//   // imgs.style.transform = `translateX(${-idx *550}px)`;
//   imgs.style.transform = `translateX(${-idx * img[0].clientWidth}px)`;
// }

// setInterval(carrosel, 1800);

// script.js
window.addEventListener("scroll", function () {
  const cabecalho = document.querySelector(".cabecalho");
  if (window.scrollY > 50) {
    cabecalho.style.backgroundColor = "rgba(30, 111, 192, 0.5)";
  } else {
    cabecalho.style.backgroundColor = "rgba(30, 111, 192, 1)";
  }
});
