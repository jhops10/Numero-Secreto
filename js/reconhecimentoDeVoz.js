const elementoChute = document.querySelector('#chute');


const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.start();


recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);

    verificaChute (chute);
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>
    <p class="p-mensagem">Você disse:</p>
    </div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start());