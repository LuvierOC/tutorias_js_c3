const contenedor = document.getElementById("contenedor-productos")

function agregarProducto() {
    let nombre = prompt("nombre del producto: ")
    if (!nombre) return
    let precio = prompt("precio del producto: ")
    if (!precio) return
    let categoria = prompt("categoria del producto: ")
    if (!categoria) return
    let enOferta = prompt("¿Esta en Oferta el producto? SI/NO")
    
    let estaEnOferta = enOferta && enOferta.toUpperCase() === "SI";

    const tarjeta = document.createElement("div")
    tarjeta.className = "card" + (estaEnOferta ? " oferta" : "")

    tarjeta.innerHTML = `
        <button class= "eliminar-btn" onclick="this.parentElement.remove()">X</button>
        <h3>${nombre}</h3>
        <p>Precio: $${precio} </p>
        <p>Categoria: ${categoria} </p>
        ${estaEnOferta ? "<strong>!Esta en oferta!</strong>": ""}
    `;
    contenedor.append(tarjeta)
}