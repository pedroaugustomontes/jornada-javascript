/* 
5! = 5 x 4 x 3 x 2 x 1 = 120 
5! = 5 x 4! 

o fatorial de um número pode ser calculado
com base no fatorial de outro número

n! = n x (n-1)!
1! = 1
*/

/* RECURSIVIDADE OU FUNÇÃO RECURSIVA É QUANDO
 A FUNÇÃO É CHAMADA DENTRO DELA MESMA */
 function fatorial_recursivo(n) {
    if(n == 1) {
        return 1
    } else {
        return n * fatorial_recursivo(n-1)  
    }
}