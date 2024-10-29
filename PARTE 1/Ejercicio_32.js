
function descuento(p1,p2,p3,p4,p5) {
    let totalp1 = p1 - (p1 * 0.05);
    let totalp2 = p2 - (p2 * 0.05);
    let totalp4 = p4 - (p4 * 0.02);
    let totalp5 = p5 - (p5 * 0.02);
    let totalFinal = p1 + p2 + p3 + p4 + p5;
    alert(`Total Final: ${totalFinal} \n el producto 1 costó: ${totalp1} \n el producto 2 costó: ${totalp2} \n el producto 3 costó: ${p3} \n el producto 4 costó: ${totalp4} \n el producto 5 costó: ${totalp5} `)
    
}

let p1 = (prompt("Ingrese el valor del 1 producto: "));
let p2 = (prompt("Ingrese el valor del 2 producto: "));
let p3 = (prompt("Ingrese el valor del 3 producto: "));
let p4 = (prompt("Ingrese el valor del 4 producto: "));
let p5 = (prompt("Ingrese el valor del 5 producto: "));
descuento(p1,p2,p3,p4,p5);