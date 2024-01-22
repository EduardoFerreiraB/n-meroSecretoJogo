let numerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = randomNum();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function msgInicial() {
    exibirTextoNaTela('h1', 'Número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

msgInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function randomNum() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);

    if (numerosSorteados.length == numeroLimite) {
        numerosSorteados = [];
    }
    if (numerosSorteados.includes(numeroEscolhido)) {
        return randomNum();
    } else {
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = randomNum();
    limparCampo();
    tentativas = 1;
    msgInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}







