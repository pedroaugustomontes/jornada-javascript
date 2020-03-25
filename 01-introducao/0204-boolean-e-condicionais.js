// Condicionais IF e ELSE 
/* Verificar se uma expressão é verdadeira com if, caso contrário o else será ativado */
console.log(x);
var possuiGraduacao = false;
if (possuiGraduacao) {
   console.log('Possui graduação');
}else {
   console.log('Não possui graduação');
   var x = 10;
   console.log(x);
}
/* retorna Possui Graduação e não executa o else */

// Condicionais Else IF
/* Se o IF não for verdadeiro, ele testa o ELSE IF*/
var possuiGraduacao = true;
var possuiDoutorado = false;
if (possuiDoutorado) {
   console.log('Possui graduação e doutorado');
} else if (possuiGraduacao) {
   console.log('Possui graduação, mas não possui doutorado')
}  else {
   console.log('Não possui graduação')
}
// retorna Possui graduação, mas não possui doutorado


// Truthy e Falsy
/* Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana */

//Falsy
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if(''); // ou ""  ou ``

/* Todo o resto é Truthy */
if(true)
if(1)
if(' ')
if('pedro')
if(-5)
if({})

var nome =  6 - -'5'
if (nome) {
   console.log(nome);
} else {
   console.log('Não existe')
}

// Operador Lógico de Negação!
// O operador !, nega uma operação booleana. Ou seja, !true é igual a false, ou vice versa
if(!true) // false
if(!1) // false
if(!'') //true
if(!undefined) //true
if(!!' ') //true
if(!!''); //false
/* Dica, você pode utilizar o !! para verificar se uma expressão é Truthy ou Falsy */

// Operadores de Comparação
/* O == faz uma comparação não tao estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos === */
10 == '10'; //true
10 == 10; //true
10 === '10' //false
10 === 10 //true
10 != 15 //true
10 != '10' //false
10 !== '10' //true

// Operadores Lógicos &&
/* && compara se uma expressão E a outra é verdade */
true && true; //true
true && false; //false
false && true; //false
'Gato' && 'Cão'; //'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); //true
/* se ambos os valores forem true ele irá retornar o último valor verificado, Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos */


// Operadores Lógicos ||
/* || compara se uma expressão OU a outra é verdade */
true || true; //true
true || false; //true
false || true; //true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); //true
/* retorna o primeiro valor verdadeiro */


// Switch
/* Com o SWITCH você pode verificar se uma variável é igual à diferentes valores utilizando o CASE. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave BREAK; para cancelar a continuação. O valor de DEFAULT ocorrerá caso nenhuma das anteriores seja verdadeira */
var corFavorita = 'Azul';

switch (corFavorita) {
   case 'Azul':
      console.log('Olhe para o céu.');
      break;
   case 'Vermelho':
      console.log('Olhe para rosas.');
      break;
   case 'Amarelo':
      console.log('Olhe para o sol.');
      break;
   default:
      console.log('Feche os olhos.');
}

// EXERCICIO
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 25
var idadeMae = 53

if (minhaIdade > idadeMae) {
   console.log('Sua idade é maior que de sua mãe');
} else if (minhaIdade === idadeMae) {
   console.log('Sua idade é igual a de sua mãe');
} else {
   console.log('Sua idade é menor que de sua mãe');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - 's') && (5 - 2);
console.log(expressao); //Falso pois (5 - 's') retorna NaN

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
   console.log('Brasil tem mais habitantes que a China')
} else {
   console.log('Brasil tem menos habitantes que a China')
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
var corFavorita = '';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.')
    break;
  case 'Verde':
    console.log('Olhe para a floresta')
    break;
  default:
    console.log('Feche os olhos.')
}