//Variáveis
/* 
Resposáveis por guardar dados na memória.
Inicia com a palavra var, let ou const.
*/
var nome = 'Pedro';
let idade = 28;
const possuiFaculdade = true;
console.log(`Meu nome é ${nome} e tenho ${idade} anos, estou cursando faculdade? ${possuiFaculdade}`);

//Vírgula
/*
É possivel usar a vírgula para criar mais de uma váriavel, sem precisar repetir a palavra chave var várias vezes.
*/
var sobrenome = 'Augusto', cidade = 'Uberlândia', estado = 'Minas Gerais';
console.log(`Com o sobrenome ${sobrenome}, ${nome} mora na cidade de ${cidade} que fica no estado de ${estado}`)

//Sem Valor
/*
Pode-se declarar uma variável e não atribuir valor a ela inicialmente, assim ela retorna o valor undefined
*/
var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;
console.log(`Comprei ${totalComprado} camisetas no valor de R$${preco} cada, acabei gastando R$${totalPreco} no total`);

//Hoisting
/*
Variáveis criadas são movidas para o topo do código, porém o valor atribuído não é movido, retornando undefined até o momento em que chega na sua linha de origem
*/
console.log(profissao);
var profissao = 'Designer'; // <- retorna undefined
var comida =  'Arroz com Feijão';
console.log(comida); // <- retorna Arroz com Feijão