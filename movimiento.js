const canvas = document.getElementById("areaDibujo");
const ctx = canvas.getContext("2d");
const sectionVerMapa = document.getElementById("ver-mapa");
const mapa = document.getElementById("mapa");

let intervalo

let pacman = new Image("Pacman", "/images/pacman.png");
let perro = new Image("perro", "/images/pacman.png");



pacman.onload = function () {
  pintarPacman();
};
perro.onload = function () {
  píntarPerro();
};
function pintarCanvas() {
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
      mapaBackground,
      0,
      0,
      mapa.width,
      mapa.height
    );
    mascotaJugadorObjeto.pintarMokepon();
    hipodogeEnemigo.pintarMokepon();
    capipepoEnemigo.pintarMokepon();
    ratigueyaEnemigo.pintarMokepon();
}

function moverDerecha() {
  mascotaJugadorObjeto.velocidadX = 5;
}
function moverIzquierda() {
  mascotaJugadorObjeto.velocidadX = -5;
}
function moverAbajo() {
  mascotaJugadorObjeto.velocidadY = 5;
}
function moverArriba() {
  mascotaJugadorObjeto.velocidadY = -5;
}
function detenerMovimiento() {
  mascotaJugadorObjeto.velocidadX = 0;
  mascotaJugadorObjeto.velocidadY = 0;
}
function sePresionoUnaTecla(event) {
  switch (event.key) {
    case "w":
      moverArriba();
      break;
    case "s":
      moverAbajo();
      break;
    case "a":
      moverIzquierda();
      break;
    case "d":
      moverDerecha();
      break;
    default:
      break;
  }
}

function iniciarMapa() {
  mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador);
  intervalo = setInterval(pintarCanvas, 50);
  window.addEventListener("keydown", sePresionoUnaTecla);
  window.addEventListener("keyup", detenerMovimiento);
}

detenerMovimiento();
clearInterval(intervalo);
