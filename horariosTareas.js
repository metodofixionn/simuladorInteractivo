function planificacion(horario, dia, tareas, delegaciones){

    let nombreEjecutor = prompt("Ingrese el nombre del ejecutor de las tareas");

    const hora = horario;
    const dias = dia;
    const tarea = tareas;
    const delegacion= delegaciones;
    

    alert("Tarea completa: \n" + nombreEjecutor + " se le asigno una tarea " + delegacion + " de " + tarea + " a las " + hora + " del dia " + dias);
}

planificacion(horario(), dia(), tareas(), delegaciones());

function horario(){

    const hora1 = "8:00";
    const hora2 = "9:00";
    const hora3 = "10:00";
    const hora4 = "11:00";
    const hora5 = "12:00";
    const hora6 = "13:00";
    const hora7 = "14:00";
    const hora8 = "15:00";
    const hora9 = "16:00";
    const hora10= "17:00";
    const hora11= "18:00";

    let horario = Number(prompt("Digite el numero correspondiente al horario " + "que desea agregar una tarea: \n1. " + hora1 + "\n2. " + hora2 + "\n3. " + hora3 + "\n4. " + hora4 + "\n5. " + hora5 + "\n6. " + hora6+ "\n7. " + hora7+ "\n8. " + hora8+ "\n9. " + hora9+ "\n10. " + hora10+ "\n11. " + hora11));
    
    switch (horario) {
        case 1:
            alert("El horario seleccionado es: " + hora1);
            return horario = hora1;
        case 2:
            alert("El horario seleccionado es: " + hora2);
            return horario = hora2;
        case 3:
            alert("El horario seleccionado es: " + hora3);
            return horario = hora3;
        case 4:
            alert("El horario seleccionado es: " + hora4);
            return horario = hora4;
        case 5:
            alert("El horario seleccionado es: " + hora5);
            return horario = hora5;
        case 6:
            alert("El horario seleccionado es: " + hora6);
            return horario = hora6;
        case 7:
            alert("El horario seleccionado es: " + hora7);
            return horario = hora7;
        case 8:
            alert("El horario seleccionado es: " + hora8);
            return horario = hora8;
        case 9:
            alert("El horario seleccionado es: " + hora9);
            return horario = hora9;
        case 10:
            alert("El horario seleccionado es: " + hora10);
            return horario = hora10;
        case 11:
            alert("El horario seleccionado es: " + hora11);
            return horario = hora11;    
        default:
            alert("El horario seleccionado no existe");
            return horario = "No existe";
    }
}

function dia(){

    const dia1 = "lunes";
    const dia2 = "martes";
    const dia3 = "miercoles";
    const dia4 = "jueves";
    const dia5 = "viernes";
    const dia6 = "sabado";
    const dia7 = "domingo";
    

    let dia = Number(prompt("Digite el numero correspondiente al dia " + "que desea agregar una tarea: \n1. " + dia1 + "\n2. " + dia2 + "\n3. " + dia3 + "\n4. " + dia4 + "\n5. " + dia5 + "\n6. " + dia6+ "\n7. " + dia7));
    
    switch (dia) {
        case 1:
            alert("El dia seleccionado es: " + dia1);
            return dia = dia1;
        case 2:
            alert("El dia seleccionado es: " + dia2);
            return dia = dia2;
        case 3:
            alert("El dia seleccionado es: " + dia3);
            return dia = dia3;
        case 4:
            alert("El dia seleccionado es: " + dia4);
            return dia = dia4;    
        case 5:
            alert("El dia seleccionado es: " + dia5);
            return dia = dia5;
        case 6:
            alert("El dia seleccionado es: " + dia6);
            return dia = dia6;
        case 7:
            alert("El dia seleccionado es: " + dia7);
            return dia = dia7;
        default:
            alert("El dia seleccionado no existe");
            return horario = "No existe";
    }
}

function tareas(){

    const tarea1 = "trabajo";
    const tarea2 = "estudio";
    const tarea3 = "metas personales";
    const tarea4 = "hogar";
    
    let tareas = Number(prompt("Digite el numero correspondiente a la tarea" + ": \n1. " + tarea1 + "\n2. " + tarea2 + "\n3. " + tarea3 + "\n4. " + tarea4));

    switch (tareas) {
        case 1:
            alert("La tarea seleccionada es: " + tarea1);
            return tareas = tarea1;
        case 2:
            alert("La tarea seleccionada es: " + tarea2);
            return tareas = tarea2;
        case 3:
            alert("La tarea seleccionada es: " + tarea3);
            return tareas = tarea3;
        case 4:
            alert("La tarea seleccionada es: " + tarea4);
            return tareas = tarea4;
        default:
            alert("La tarea seleccionada no existe");
            return tareas = "No existe";   
    }
}

function delegaciones(){

    const delegacion1 = "propia";
    const delegacion2 = "de supervisión";
    const delegacion3 = "de trabajo conjunto";

    let delegaciones = Number(prompt("Digite el numero correspondiente para el tipo de delegacion" + ": \n1. " + delegacion1 + "\n2. " + delegacion2 + "\n3. " + delegacion3));

    switch (delegaciones) {
        case 1:
            alert("El tipo de delegacion seleccionada es: " + delegacion1);
            return delegaciones = delegacion1;
        case 2:
            alert("El tipo de delegacion seleccionada es: " + delegacion2);
            return delegaciones = delegacion2;
        case 3:
            alert("El tipo de delegacion seleccionada es: " + delegacion3);
            return delegaciones = delegacion3;
        default:
            alert("La delegacion seleccionada no existe");
            return delegaciones = "No existe";
    }
}