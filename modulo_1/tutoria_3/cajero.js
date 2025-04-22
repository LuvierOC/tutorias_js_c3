// Simular el funcionamiento de un cajero real

let saldo = 1000.;

let historial = [];
const maxHistorial = 5;

function guardarTransaccion(texto){
    if (historial.length < maxHistorial) {
        historial.push(texto)
    }else{
        historial.shift();
        historial.push(texto)
    }
}

while(true){
    let opcion = prompt(
        "---- Cajero automatico ----\n" + 
        "1 . Consultar saldo\n" +
        "2 . Depositar saldo\n" +
        "3 . Retirar saldo\n" +
        "4 . Salir\n" +   
        "Seleccione una opcion: "
    )

    switch (opcion) {
        case "1":
            let mensaje = `Su Saldo actual es: $${saldo.toFixed(2)} \n\nUltimas transacciones:\n`;
            if(historial.length === 0){
                mensaje += "No hay transacciones registradas.\n";
            }else{
                for (let i = 0; i < historial.length; i++) {
                    mensaje += "- " + historial[i] + "\n";
                }
            }
            console.log(mensaje)
        break;

        case "2":
            let deposito = parseFloat(prompt("Ingrese la cantidad a depositar:"));
            if(!isNaN(deposito) && deposito > 0){
                saldo +=deposito;
                guardarTransaccion(`Deposito de $${deposito.toFixed(2)}`)
                console.log(`Deposito exitoso nuevo saldo $${saldo.toFixed(2)}`)
            }else{
                console.log("Cantidad invalida.")
            }

            break;

        case "3":

        let retiro = parseFloat(prompt("Ingrese la cantidad a depositar:"));
        if(!isNaN(retiro) && retiro > 0 && retiro <=saldo){
            saldo -= retiro;

            guardarTransaccion(`Retiro de $${retiro.toFixed(2)}`)
            console.log(`Retiro exitoso nuevo saldo ${saldo.toFixed(2)}`)

        }else{
            console.log("Fondos insufientes.")
        }

        break;

        case "4":
            console.log("Gracias por el cajero")
        
        break;

        default:
            console.log("opcion no valida, intente nuevamente")

            continue
    }

    if (opcion === "4") {
        break;
    }
}