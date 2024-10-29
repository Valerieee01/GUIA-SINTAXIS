function pizzaVegetariana() {
    while (true) {
        
        let op = prompt(`MENU PARA LA PIZZA VEGETARIANA \n 
         1. Pimiento\n
         2. Tofu\n
         Elige un ingrediente ( 1 | 2 ): `);
         if (op == 1){
             alert(`Tu pizza es vegetariana \n
                 - Mozzarella\n
                 - Tomate\n
                 - Pimiento`);
            break;
         } else if(op == 2){
             alert(`Tu pizza es vegetariana \n
                 - Mozzarella\n
                 - Tomate\n
                 - Tofu`);
            break;
         } else{
             alert("Opción invalida");
         }   
    }

}

function pizzaNoVegetariana() {
 
    while (true) {
        let op = prompt(`MENU PARA LA PIZZA VEGETARIANA \n 
                1. Peperoni\n
                2. Jamón\n
                3. Salmón\n
                Elige un ingrediente ( 1 | 2 | 3 ): `);
            if (op == 1){
                alert(`Tu pizza es vegetariana \n
                    - Mozzarella\n
                    - Tomate\n
                    - Peperoni`);
                break;
            } else if(op == 2){
                alert(`Tu pizza es vegetariana \n
                    - Mozzarella\n
                    - Tomate\n
                    - Jamón`);
                break;
            } else if(op == 3){
                alert(`Tu pizza es vegetariana \n
                    - Mozzarella\n
                    - Tomate\n
                    - Salmón`);
                break;
            }else{
                alert("Opción invalida");
                
            }
            
        }
}

let respuesta = "si";
while(respuesta != "salir"){
     respuesta = prompt("Deseas pizza vegetariana (si | no | salir): ").toLowerCase();
    if(respuesta === "si"){
        pizzaVegetariana();
    } else if(respuesta === "no"){
        pizzaNoVegetariana();
    }
}