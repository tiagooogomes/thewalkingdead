document.body.style.fontSize = 30 + "px";

function alterarFonteSize() {

    let tamanhoDaFonte = 30;

    function aumentarFonte() {
        tamanhoDaFonte += 10;
        document.body.style.fontSize = tamanhoDaFonte + "px";

        if(tamanhoDaFonte >= 100) {
            alert("Tamanho Limite alcançado");
            tamanhoDaFonte = 100;
        }

        return tamanhoDaFonte;
    }

    function diminuirFonte() {
        tamanhoDaFonte -= 10;
        document.body.style.fontSize = tamanhoDaFonte + "px";

        return tamanhoDaFonte;
    }

    return {
        aumentarFonte: aumentarFonte,
        diminuirFonte: diminuirFonte
    };
}

let funcao = alterarFonteSize();

function aumentar() {
    funcao.aumentarFonte();
}

function diminuir() {
    funcao.diminuirFonte();
}