
const calcularVentaLibros = function (cantLibros, cantCuadernos, cantLapiceros) {
    const precioLibros = 10000;
    const precioCuadernos = 7550;
    const PrecioLapiceros = 5550
    let totalLibros = precioLibros * cantLibros;
    let totalCuadernos =  precioCuadernos * cantCuadernos;
    let totalLapiceros = PrecioLapiceros * cantLapiceros;
    return totalCuadernos + totalLapiceros + totalLibros;
}

let cantLibros = parseInt(prompt("Cuantos libros vas a comprar: "));
let cantCuadernos = parseInt(prompt("Cuantos cuadernos vas a comprar: "));
let cantLapiceros = parseInt(prompt("Cuantos cuadernos vas a comprar: "));
alert(`El total de tu compra es de: 
    ${calcularVentaLibros(cantLibros, cantCuadernos, cantLapiceros)}
    teniendo en cuenta los siguientes precios:
    - Cuaderno = $7.550
    - Libro    = $10.000
    - Lapicero = $5.550`)