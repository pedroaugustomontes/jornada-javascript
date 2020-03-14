// Operadores Aritméticos Unários
// O + e - tenta transformar o seguinte valor em número
var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '25';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 30

var possuiFaculdade = false;
console.log(+possuiFaculdade); // 0

// Exercicio
//Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total);

//Crie duas expressões que retornem NaN
var nan = +'Oi amiguinho';
console.log(nan);
var nan = -'Teste' / 2;
console.log(nan);

//Somando a string '200' com o número 50 e depois retornando 250
var soma = +'200' + 50;
console.log(soma) // 250

//Incrementando o número 5 e retornando o seu valor incrementado
var x = 5
console.log(++x)

//Dividindo um peso por 2
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'

console.log(peso)