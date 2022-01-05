document.body.style.fontSize = 30 + "px";

function alterarFonteSize() {

    let tamanhoDaFonte = 30;

    function aumentarFonte() {
        tamanhoDaFonte += 5;
        document.body.style.fontSize = tamanhoDaFonte + "px";

        if(tamanhoDaFonte >= 60) {
            alert("Tamanho Limite alcançado");
            tamanhoDaFonte = 60;
        }
    }

    function diminuirFonte() {
        tamanhoDaFonte -= 5;
        document.body.style.fontSize = tamanhoDaFonte + "px";

        if(tamanhoDaFonte <= 15) {
            alert("Tamanho Limite alcançado");
            tamanhoDaFonte = 15;
        }
    }

    return {
        aumentar: aumentarFonte,
        diminuir: diminuirFonte
    };
}

let funcao = alterarFonteSize();

function executarAumento() {
    funcao.aumentar();
}

function executarDiminuicao() {
    funcao.diminuir();
}