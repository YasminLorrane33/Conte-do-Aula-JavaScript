//  Exercicio 5: Escreva um algoritmo para ler um valor (do teclado) e escrever (na tela) o seu antecessor. 

alert("Antecessor");

let valor =parseFloat(prompt("Informe o  valor do seu tecladi para retornar o seu antecessor: "));

let antecessor = (valor - 1);

alert("O antecessor de " + valor + "é" + antecessor);