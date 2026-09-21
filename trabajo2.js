
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

const cuerpoTabla = document.getElementById("cuerpoTabla");

videojuegos.forEach(function(juego) {

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${juego.nombre}</td>
        <td>${juego.compania}</td>
        <td>${juego.plataforma}</td>
        <td>${juego.valoracion}/10</td>
        <td>${juego.precio} €</td>
    `;

    cuerpoTabla.appendChild(fila);

});