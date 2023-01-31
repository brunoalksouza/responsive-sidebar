// Objectivo

// Adicionar funcionalidade de abrir e fechar a sidebar quando se clica no botão
// Sugestão: Mudar propriedade 'display'

let abrir = true;
/*
document.querySelector('#abrir-sidebar').addEventListener('click', (e) => {
    document.querySelector('.container').style.display = 'none';
}, false);

document.querySelector('#abrir-sidebar').addEventListener('click', (e) => {
    document.querySelector('.container').style.display = 'flex';
}, true);*/

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

// Adicionar dia de hoje e hora à sidebar
// Sugestão: usar Date

const d = new Date();
let day = d.getUTCDate();

let month = (d.getUTCMonth() <= 9) ? "" + d.getUTCMonth() : d.getUTCMonth();
let monthM = month + 1;
let year = d.getUTCFullYear();
let hour = d.getUTCHours();
let minutes = d.getUTCMinutes() <= 9 ? "0" + d.getUTCMinutes() : d.getUTCMinutes();

document.getElementById("dia").innerHTML = day + "/" + monthM + "/" + year
document.getElementById("hora").innerHTML = hour + ":" + minutes