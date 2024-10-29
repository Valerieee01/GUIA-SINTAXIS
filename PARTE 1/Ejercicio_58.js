let mes = prompt("Ingrese el mes de nacimiento: ");
let dia = parseInt(prompt("Ingrese el día de nacimiento: "));
if (mes == "enero"){
    if(dia >= 1 && dia <= 20){
        alert("CAPRICORNIO")
    }
    if(dia > 21 && dia <= 31){
        alert("ACUARIO")
    }
} else{
    if (mes == "febrero"){
        if(dia >= 1 && dia <= 20){
            alert("ACUARIO")
        }
        if(dia > 21 && dia <= 29){
            alert("PISCIS")
        }
    }
    else{
        if (mes == "marzo"){
            if(dia >= 1 && dia <= 20){
                alert("PISCIS")
            }
            if(dia > 21 && dia <= 31){
                alert("ARIES")
            }
        }
        else{
            if (mes == "abril"){
                if(dia >= 1 && dia <= 20){
                    alert("ARIES")
                }
                if(dia > 21 && dia <= 29){
                    alert("TAURO")
                }
            }
            else{
                if (mes == "mayo"){
                    if(dia >= 1 && dia <= 20){
                        alert("TAURO")
                    }
                    if(dia > 21 && dia <= 31){
                        alert("GEMINIS")
                    }
                }
                else{
                    if (mes == "junio"){
                        if(dia >= 1 && dia <= 20){
                            alert("GEMINIS")
                        }
                        if(dia > 21 && dia <= 29){
                            alert("CANCER")
                        }
                    }
                    else{
                        if (mes == "julio"){
                            if(dia >= 1 && dia <= 20){
                                alert("CANCER")
                            }
                            if(dia > 21 && dia <= 31){
                                alert("LEO")
                            }
                        }
                        else{
                            if (mes == "agosto"){
                                if(dia >= 1 && dia <= 20){
                                    alert("LEO")
                                }
                                if(dia > 21 && dia <= 29){
                                    alert("VIRGO")
                                }
                            }
                            else{
                                if (mes == "septiembre"){
                                    if(dia >= 1 && dia <= 20){
                                        alert("VIRGO")
                                    }
                                    if(dia > 21 && dia <= 31){
                                        alert("LIBRA")
                                    }
                                }
                                else{
                                    if (mes == "octubre"){
                                        if(dia >= 1 && dia <= 20){
                                            alert("LIBRA")
                                        }
                                        if(dia > 21 && dia <= 29){
                                            alert("ESCORPIO")
                                        }
                                    }
                                    else{
                                        if (mes == "noviembre"){
                                            if(dia >= 1 && dia <= 20){
                                                alert("ESCORPIO")
                                            }
                                            if(dia > 21 && dia <= 31){
                                                alert("SAGITARIO")
                                            }
                                        }
                                        else{
                                            if (mes == "diciembre"){
                                                if(dia >= 1 && dia <= 20){
                                                    alert("SAGITARIO")
                                                }
                                                if(dia > 21 && dia <= 31){
                                                    alert("CAPRICORNIO")
                                                }
                                            }
                                            else{
                                                alert("MES O DIA INVALIDO")
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}