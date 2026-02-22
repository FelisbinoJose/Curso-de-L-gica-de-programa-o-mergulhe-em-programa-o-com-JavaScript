alert("Bem vindo ao jogo do número segreto");

let numeroSecreto = 5;

let chute = prompt("Informe um número entre 1 e 10");

if (chute == numeroSecreto) {
    alert(`Parabéns!! Você acertou o número secreto (${numeroSecreto})`);
} else {
    alert("Você errou!");
}