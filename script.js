
let abrir = true;

document.querySelector('#abrir-sidebar').addEventListener('click', abrirFechar)
function abrirFechar() {
  if(abrir) {
    document.querySelector('.container').style.display = 'none';
    abrir = false;
  } else {
    document.querySelector('.container').style.display = 'flex';
    abrir = true;
  }
}
