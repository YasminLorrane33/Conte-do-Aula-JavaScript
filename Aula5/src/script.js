// Calculadora com swit
let numero1 = parseFloat(prompt("Informe o primeiro valor: "));

let numero2 = parseFloat(prompt("Informe o segundo valor: "));

let opcoes = prompt(
    "Selecione a operação: \n \n" + 
    "+: Soma \n" +
    "-: Subtração \n" +
    "*: Multiplicação \n" +
    "/: Divisão \n"
);

switch (opcoes) {
    case "+":
        alert("O resultado da operação é: " + (numero1 + numero2));
    break;
    
    case "-":
        alert("O resultado da operação é: " + (numero1 - numero2))
}