Estudando JavaScript
Pedro Augusto Montes


Introdução ao JAVAScript
Como comentar código
// este é um comentário de uma só linha

/* este é um comentário de várias linhas */

Primeira mensagem no console
// Imprimindo no console uma string

console.log(“Estudando JavaScript!!!”);

Convenções de nomenclatura
Quando cria uma variável, você escreve o nome da variável utilizando camelCase (a primeira palavra em minúsculo e as palavras seguintes, em maiúsculo). Também tente utilizar um nome de variável que, de maneira precisa, porém sucinta, descreve do que aquele dado se trata.

var totalAfterTax = 53.03; // utiliza camelCase se o nome da variável tiver múltimas palavras

var tip = 8; // utiliza letras minúsculas se o nome da variável tiver somente uma palavra

Fazendo o “escape” de caracteres
Em JavaScript, você utiliza a barra invertida para fazer o escape de outros caracteres.

Fazer o escape um caractere significa dizer ao JavaScript para ignorar o significado especial do caractere e somente utilizar seu valor literal. Isso é útil para caracteres que possuem significados especiais, como em nosso exemplo anterior, com aspas “…”.

Devido ao fato de as aspas serem utilizadas para indicar o início e término de uma string, você pode utilizar a barra invertida para fazer o uso de aspas com o intuito de acessar o real caractere de aspas.

“The man whispered, "please speak to me."”

Retorna: The man whispered, “please speak to me.”

Criando uma variável
nome = “Marcelo” sobrenome = “Pereira” consolo.log(nome + “ “ + sobrenome); /* Concatenando strings */

Quebra de linha
// Aqui vamos testar o “\n”

“Aqui vamos testar uma \n quebra de linha em uma string do JavaScript.”

Null, undefined e NaN
var x = null

console.log(x) // null

** var b**

console.log(b) // undefined

=> null refere-se ao “valor de nada”, enquanto undefined refere-se à “ausência de valor”.

O que é NaN?
NaN significa “Not-A-Number” e é constantemente retornado indicando um erro com operações numéricas. Por exemplo, se você escreveu um código que fez um cálculo matemático e o cálculo falhou ao produzir um número válido, NaN provavelmente será retornado.

// calcular a raiz quadrada de um número negativo retornará NaN

Math.sqrt(-10)

// tentar dividir uma string por 5 retornará NaN

“hello”/5
