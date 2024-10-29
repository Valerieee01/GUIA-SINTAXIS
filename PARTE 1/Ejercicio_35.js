
function cuantoDineroTenia(llaves,bomba,pernos) {
    return llaves + bomba + pernos + 91000;
}

let llavesHexagonales = 11500*5;
let bomba = 1168000;
let cajasPernos = 87000 * 3;
alert(`El dinero que tenia era de  ${cuantoDineroTenia(llavesHexagonales,bomba,cajasPernos)}`)
