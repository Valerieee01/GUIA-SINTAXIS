const IVA = 0.20;

let productos = [];
for (let i = 0; i < 5; i++) {
    let producto = parseFloat(prompt(`Ingrese el valor del producto ${i+1}`));
    productos.push(producto)
}

let total_iv = productos[0]*IVA + productos[1]*IVA + productos[2]*IVA + productos[3]*IVA + productos[4]*IVA;
let sub_total = productos[0] + productos[1] + productos[2] + productos[3] + productos[4];
let total = productos[0] + productos[1] + productos[2] + productos[3] + productos[4] + total_iv;
alert(`- El IVA de los productos es de: ${total_iv}  
    - El subtotal es: ${sub_total} 
    - El total: ${total}`)