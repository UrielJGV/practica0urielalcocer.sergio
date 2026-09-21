
const videojuegos = [
    {
        nombre: "Minecraft",
        compania: "Mojang",
        plataforma: "PC",
        valoracion: 9,
        precio: 29.99
    },
    {
        nombre: "GTA V",
        compania: "Rockstar Games",
        plataforma: "PC",
        valoracion: 9,
        precio: 39.99
    },
    {
        nombre: "EA Sports FC 26",
        compania: "EA Sports",
        plataforma: "PC",
        valoracion: 8,
        precio: 69.99
    },
    {
        nombre: "Call of Duty",
        compania: "Activision",
        plataforma: "PC",
        valoracion: 8,
        precio: 69.99
    },
    {
        nombre: "God of War",
        compania: "Santa Monica Studio",
        plataforma: "PC",
        valoracion: 9,
        precio: 59.99
    }
];

// Seleccionar el cuerpo de la tabla
const cuerpoTabla = document.getElementById("cuerpoTabla");

// Función para pintar la tabla
function pintarTabla() {

    cuerpoTabla.innerHTML = "";

    videojuegos.forEach(function(juego) {

        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${juego.nombre}</td>
            <td>${juego.compania}</td>
            <td>${juego.plataforma}</td>
            <td>${juego.valoracion}/10</td>
            <td>${juego.precio.toFixed(2)} €</td>
        `;

        cuerpoTabla.appendChild(fila);

    });

}

// Pintar la tabla al cargar
pintarTabla();

// Seleccionar el botón
const botonAnadir = document.getElementById("botonAnadir");

// Escuchar el clic
botonAnadir.addEventListener("click", function(event) {

    event.preventDefault();

    // Recoger los datos
    const nombre = document.getElementById("nombre").value.trim();
    const compania = document.getElementById("compania").value.trim();
    const plataforma = document.getElementById("plataforma").value;
    const valoracionTexto = document.getElementById("valoracion").value;
    const precioTexto = document.getElementById("precio").value;

    // Comprobar campos vacíos
    if (
        nombre === "" ||
        compania === "" ||
        plataforma === "" ||
        valoracionTexto === "" ||
        precioTexto === ""
    ) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Convertir a números
    const valoracion = parseFloat(valoracionTexto);
    const precio = parseFloat(precioTexto);

    // Validar los números
    if (
        isNaN(valoracion) ||
        isNaN(precio) ||
        valoracion < 0 ||
        valoracion > 10 ||
        precio < 0
    ) {
        alert("Introduce una valoración entre 0 y 10 y un precio válido.");
        return;
    }

    // Crear el objeto
    const nuevoJuego = {
        nombre: nombre,
        compania: compania,
        plataforma: plataforma,
        valoracion: valoracion,
        precio: precio
    };

    // Añadir al array
    videojuegos.push(nuevoJuego);

    // Volver a pintar la tabla
    pintarTabla();

    // Limpiar el formulario
    document.getElementById("formularioJuego").reset();

    // Aviso de éxito
    alert("¡Videojuego añadido correctamente!");

});