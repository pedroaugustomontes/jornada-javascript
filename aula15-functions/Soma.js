/* o "= 0" dentro da função soma serve para utilizar o numero 0 caso nenhum
 valor seja informado no parametro da chamada */
function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(5,9))