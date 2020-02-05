function fatorial(n) {
    let fat = 1
    for(let contador = n; contador > 1; contador--) {
        fat *= contador
    }
    return fat
}
console.log(fatorial(5))

/* 
5! = 5 x 4 x 3 x 2 x 1 = 120 
5! = 5 x 4! 

o fatorial de um número pode ser calculado
com base no fatorial de outro número

n! = n x (n-1)!
1! = 1
*/