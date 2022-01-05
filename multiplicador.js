function funcaoMultiplicadora(x) {
    let valor;

    function multiplocacao (y) {
        valor = y * x;

        return valor;
    }

    return multiplocacao;
}

let tendo23ComoBase = funcaoMultiplicadora(23);
let tendo12ComoBase = funcaoMultiplicadora(12)

console.log("Base 12");
console.log(`Resultado: ${tendo12ComoBase(11)}`);
console.log(`Resultado: ${tendo12ComoBase(8)}`);
console.log(`Resultado: ${tendo12ComoBase(100)}`);

console.log("Base 23");
console.log(`Resultado: ${tendo23ComoBase(22)}`);
console.log(`Resultado: ${tendo23ComoBase(60)}`);
console.log(`Resultado: ${tendo23ComoBase(5)}`);