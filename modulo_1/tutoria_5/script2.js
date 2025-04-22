const contenedor = document.getElementById("contenedor-productos");

document.getElementById("btnAgregar").addEventListener("click", agregarProducto);

function agregarProducto() {
    let nombre = prompt("nombre del producto: ");
    if (!nombre) return;
    let precio = prompt("precio del producto: ");
    if (!precio) return;
    let categoria = prompt("categoria del producto: ");
    if (!categoria) return;
    let enOferta = prompt("¿Está en oferta el producto? SI/NO");

    let estaEnOferta = enOferta && enOferta.toUpperCase()=== "SI";

    const tarjeta = document.createElement("div");
    tarjeta.className = "card" + (estaEnOferta ? " oferta" : "");

    // Crear elementos manualmente
    const btnEliminar = document.createElement("button");
    btnEliminar.className = "eliminar-btn";
    btnEliminar.textContent = "X";
    btnEliminar.addEventListener("click", () => tarjeta.remove());

    const nombreElem = document.createElement("h3");
    nombreElem.textContent = nombre;

    const precioElem = document.createElement("p");
    precioElem.textContent = `Precio: $${precio}`;

    const categoriaElem = document.createElement("p");
    categoriaElem.textContent = `Categoría: ${categoria}`;

    tarjeta.append(btnEliminar, nombreElem, precioElem, categoriaElem);

    if (estaEnOferta) {
        const oferta = document.createElement("strong");
        oferta.textContent = "¡Está en oferta!";
        tarjeta.append(oferta);
    }

    contenedor.append(tarjeta);
}