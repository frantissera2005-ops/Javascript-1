const productos = [
  { nombre: "Base Líquida", precio: 5500 },
  { nombre: "Labial", precio: 3500 },
  { nombre: "Rímel", precio: 4000 },
  { nombre: "Rubor", precio: 3800 },
  { nombre: "Sombra", precio: 3000 }
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || []

function mostrarProductos(lista) {
  const contenedor = document.getElementById("productos");
  contenedor.innerHTML = "";

  lista.forEach((producto, index) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio}</p>
      <button onclick="agregarAlCarrito(${index})">Agregar</button>
    `;
    contenedor.appendChild(div);
  });
}

function agregarAlCarrito(indice) {
  carrito.push(productos[indice]);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

function mostrarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const total = document.getElementById("total");
  lista.innerHTML = "";

  let suma = 0;
  carrito.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio}`;
    lista.appendChild(li);
    suma += item.precio;
  });

  total.textContent = `Total: $${suma}`;
  localStorage.setItem("total", suma);
}

function calcularCuotas(total, cuotas) {
  return total / cuotas;
}

document.getElementById("btnCalcular").addEventListener("click", () => {
  const cuotas = parseInt(document.getElementById("cuotas").value);
  const total = carrito.reduce((acc, p) => acc + p.precio, 0);
  const montoCuota = calcularCuotas(total, cuotas);

  const detalle = document.getElementById("detalle-cuotas");
  detalle.textContent = `Total a pagar: $${total} en ${cuotas} cuotas de $${montoCuota.toFixed(2)}.`;
});

mostrarProductos(productos);
mostrarCarrito();
