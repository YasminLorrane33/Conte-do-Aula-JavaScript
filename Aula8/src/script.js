// Utilização do método padStart()
let texto ='5';
texto = texto.padStart(10, '9');

console.log(texto);

// Utilização do método padEnd()
let texto2 = '7';
texto2 = texto2.padEnd(3, '0');

console.log(texto2);

// Utilização do método repeat()
let fruta = 'Laranja';
let repeticao = fruta.repeat(4);

console.log(repeticao);

// Utilizção do método replace()
let carro = 'Impala';
let novoCarro = carro.replace('Impala', 'Supra');

console.log(novoCarro);

// Utilização do método replaceALL()
let frase = 'Eu amo carros. Carros são muito legais. Carros de corrida me encantam.';

frase = frase.replaceAll('Carros', 'Motos');
frase = frase.replaceAll('carros', 'motos');

console.log(frase);

// Utilização do método split()
let saudacao = 'Olá, seja bem-vindo';
let exSplit = saudacao.split("0")

console.log(exSplit);

// Utilização do método indexOF(), lastIndexOF() e search()
let exemplo = "Porfavor localize onde 'localiza' ocorre.";

let exIndexOF = exemplo.indexOf('localiza');

let exLastIndexOF = exemplo.lastIndexOf('localize');

let exSearch = exemplo.search('favor');

console.log(exIndexOF);
console.log(exLastIndexOF);
console.log(exSearch);

// Utilização do método includes()
let olaMundo = 'Olá, mundo. Bem-Vinde ao universo.';
let exIncludes = olaMundo.includes('mundo');

console.log(exIncludes);