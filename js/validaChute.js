function verificaChute () {
    const numero = +chute;

    if(chuteForInvalido(numero)) {
        elementoChute.innerHTML += `<div class="novaDiv">Valor Inválido</div>`;
        return
    }

    if(numeroMaiorMenor (numero)) {
        elementoChute.innerHTML += `<div class="novaDiv">Valor Inválido o número precisa estar entre ${menorValor} e ${maiorValor}.</div>`;;
        return
    }

    if(numero === numSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!!</h2>
        <h3>O número secreto era ${numSecreto}.<br>
        <button id="jogarNovamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numSecreto) {
        elementoChute.innerHTML += `<p class="chute-mensagem">O número secreto é menor <i class="fa-solid fa-xmark"></i></p>`
    } else {
        elementoChute.innerHTML += `<p class="chute-mensagem">O número secreto é maior <i class="fa-solid fa-xmark"></i></p>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorMenor (numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogarNovamente') {
        window.location.reload();
    }
})