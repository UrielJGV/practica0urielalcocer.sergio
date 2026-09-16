
let contador = 0;

const boton = document.getElementById("botonContador");
const aviso = document.getElementById("aviso");
const modo = document.getElementById("modonoche");

if (boton) {
    boton.addEventListener("click", function() {
        contador++;

        aviso.textContent =
            "Has pulsado " + contador + " veces";
    });
}

if (modo) {
    modo.addEventListener("click", function() {
        document.body.classList.toggle("tema-noche");
    });
}