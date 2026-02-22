alert('Boas vindas ao jogo do número secreto');

let chute = prompt('Escolha um número entre 1 e 10');
console.log('Valor do chute:', chute);

let numeroSecreto = 4;

console.log('Resultado da comparação:', chute == numeroSecreto);

if (chute == numeroSecreto) {
    alert('Acertou');
} else {
    
    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`);
    }
}