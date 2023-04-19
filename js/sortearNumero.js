const menorValor = 1;
const maiorValor = 100;
const numSecreto = gerarNumero ();


function gerarNumero () {
    return parseInt(Math.random() * maiorValor + 1);
}
console.log(numSecreto);

const elementoMenorValor = document.querySelector('#numero-menor');
elementoMenorValor.innerHTML = menorValor;


const elementoMaiorValor = document.querySelector('#numero-maior');
elementoMaiorValor.innerHTML = maiorValor;