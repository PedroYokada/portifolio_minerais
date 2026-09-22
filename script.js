const cabecalho = document.querySelector(".cabecalho");

function atualizarEstadoCabecalho() {
  if (!cabecalho) return;
  cabecalho.classList.toggle("scrolled", window.scrollY > 50);
}

function atualizarAlturaCabecalho() {
  if (!cabecalho) return;
  document.documentElement.style.setProperty(
    "--header-height",
    `${cabecalho.offsetHeight}px`
  );
}

function atualizarCabecalho() {
  atualizarEstadoCabecalho();
  atualizarAlturaCabecalho();
}

window.addEventListener("scroll", atualizarEstadoCabecalho, { passive: true });
window.addEventListener("resize", atualizarAlturaCabecalho);
window.addEventListener("load", atualizarCabecalho);

document.addEventListener("DOMContentLoaded", atualizarCabecalho);

if (cabecalho && "ResizeObserver" in window) {
  const observadorCabecalho = new ResizeObserver(atualizarAlturaCabecalho);
  observadorCabecalho.observe(cabecalho);
}
