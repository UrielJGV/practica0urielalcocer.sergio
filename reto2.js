// Array con las tareas del día
let tareas = [
    "Estudiar JavaScript",
    "Hacer los ejercicios de DWEC",
    "Practicar Java",
    "Subir el trabajo a GitHub"
];

// Número de horas disponibles
let horasDisponibles = 4;

// Recorremos las tareas y las mostramos numeradas
for (let i = 0; i < tareas.length; i++) {
    console.log((i + 1) + ". " + tareas[i]);
}

// Comprobamos las horas disponibles
if (horasDisponibles > 5) {
    console.log("Día tranquilo");
} else if (horasDisponibles >= 3) {
    console.log("Día normal");
} else {
    console.log("Día ajustado");
}