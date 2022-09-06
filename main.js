// EJEMPLO DESAFÍO ENTREGABLE

const tiempoTareas = () => {
    let tarea;
    let cantidad = 0;
    let tiempo = 0;
    let total = 0;
    let agregarNuevaTarea = false;

    do {
        tarea = prompt ("¿Tu nueva tarea es: 1. trabajo, 2. estudio, 3. metas personales, 4. hogar?", "Ej: 1/2/3/4");
        cantidad = parseInt(prompt ("¿Cuántas tareas querés agregar?"));

        while (isNaN(cantidad)) {
            cantidad = parseInt(prompt ("¿Cuántas tareas querés agregar?"));
        }

    switch (tarea) {
        case "1":
            tiempo = 30;
            break;
        case "2":
            tiempo = 30;
            break;
        case "3":
            tiempo = 10;
            break;
        case "4":
            tiempo =20;
            break;
        default:
            alert("Alguno de los datos ingresados no es correcto");
            tiempo= 0;
            cantidad= 0;
    }

    total += tiempo * cantidad;
    agregarNuevaTarea = confirm("¿Querés agregar otra tarea?");

    } while (agregarNuevaTarea)

    return total;
}


const tiempoTotal = (total) => {

    if (total >= 600) {
        alert("Tenés un dia muy cargado, te recomiendo respetar las horas pactadas. El tiempo total de tus tareas es de " + total + " minutos");
    } else if (total < 600 && total != 0) {
        alert("Tenes un dia tranquilo, tomate tiempo para realizar cada accion y aprovechar al maximo. El tiempo total de tus tareas es de " + total + " minutos");
    }

    return total;
}

tiempoTotal(tiempoTareas());