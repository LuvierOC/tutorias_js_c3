//// Gestion de notas

let notas = [4.5, 3.8, 4.2, 5.0, 2.0];

let opcion = 8;

console.log("Menu de Gestion de notas.");
console.log("1. Mostrar notas");
console.log("2. Calcular el promedio");
console.log("3. Buscar una nota");
console.log("4. Salir");

if (opcion == 2) {
  //// si el if es verdadero, va a ejecutar este codigo.
  console.log("Entro al condicional if\n");
}

switch (opcion) {
  case 1:
    console.log("Notas del estudiante: " + notas);
    break;

  case 2:
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
      suma += notas[i];
    }

    console.log("Promedio: " + suma / notas.length);

    break;

  case 3:
    let notaBuscada = 0.5;

    let encontrada = false;

    for (let i = 0; i < notas.length; i++) {
      if (notas[i] == notaBuscada) {
        encontrada = true;
        break;
      }

      console.log("iteracion posicion: " + (i + 1));
    }
    /*
        if (encontrada) {
        console.log("Nota encontrada");
            
        }else{
            console.log("Nota no encontrada");
        }
    */

    console.log(encontrada ? "Nota encontrada" : "Nota no encontrada");

    break;

    case 4: 
    console.log("Saliendo de la aplicacion...")

  default:
    console.log("Opcion no Valida :(")
        
    break;
}
