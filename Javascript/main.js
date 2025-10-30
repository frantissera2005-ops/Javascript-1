const productos = [
{ nombre: "Base Liquida" , precio: 5500 }, 
{ nombre: "Labial" , precio: 3500 }, 
{ nombre: "Rimel" , precio: 4000 }, 
{ nombre: "Rubor" , precio: 3800 }, 
{ nombre: "Sombra" , precio: 3000 }, 
]; 

function mostrarProductos() {
    console.log("Productos Disponibles:"); 
    productos.forEach((producto , index) => { 
        console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
  });
}

function calcularTotal() { 
    let total = 0;
    let seguir = true;
    while(seguir) { 
        mostrarProductos();
        let opcion = parseInt(prompt("ingrese el numero del producto que desee agregar (1-5):")); 
        if(opcion >= 1 && opcion <= productos.length) { 
            total += productos[opcion - 1]. precio; 
               alert(`Agregaste ${productos[opcion - 1].nombre}. Total actual: $${total}`);
     } else { 
        alert("opcion invalida, intente de nuevo");   
     }
     seguir = confirm("Desea agregar otro producto?");
    }
    return total; 
} 

function calcularCuotas(total) {
  let cuotas = parseInt(prompt("Ingrese en cuántas cuotas desea pagar (3, 6 o 12):"));
  let totalCuota = total / cuotas;
  alert(`El total a pagar es $${total} en ${cuotas} cuotas de $${totalCuota.toFixed(2)}.`);
}

alert("¡Bienvenida a Francesca Makeup!");
let totalCompra = calcularTotal();
calcularCuotas(totalCompra);
alert("Gracias por tu compra ");