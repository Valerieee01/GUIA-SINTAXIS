while (true) {
    let saldo = parseInt(prompt("Ingresa tu saldo de banco: "));
    calcularDescuento(saldo);
}


function calcularDescuento(saldo) {
    let TipoInteres, TipoInteres_pagado, total;
    if(saldo < 100000){
        TipoInteres = 0.03;
        TipoInteres_pagado = saldo * TipoInteres;
        total = saldo + TipoInteres_pagado;
        alert(`Pagas un interes de: ${TipoInteres_pagado} 
            Total: ${total}`)
    } else if(saldo >= 100000){
        TipoInteres = 0.04;
        TipoInteres_pagado = saldo * TipoInteres;
        total = saldo + TipoInteres_pagado;
        alert(`Pagas un interes de: ${TipoInteres_pagado} 
            Total: ${total}`)
    } else{
        alert("El saldo es invalido")
    }
}