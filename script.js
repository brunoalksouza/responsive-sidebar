document.querySelector("#abrir-sidebar").addEventListener("click", abrirFechar);

const container = document.querySelector(".container");

function abrirFechar() {
  container.classList.toggle("openContainer");
}

