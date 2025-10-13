const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrosel() {
  idx++;

  if (idx > img.length - 1) {
    idx = 0;
  }

  // imgs.style.transform = `translateX(${-idx *550}px)`;
  imgs.style.transform = `translateX(${-idx * img[0].clientWidth}px)`;
}

setInterval(carrosel, 1600);
