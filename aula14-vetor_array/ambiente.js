let vetor = [4,2,7,3,9]

vetor.push(1)   // adiciona o numero 1 no final do vetor
console.log(vetor)
console.log(`O vetor tem ${vetor.length} posições`)

for (let pos = 0; pos < vetor.length; pos++){
    console.log(`A posição ${pos} tem o valor ${vetor[pos]}`)
}

console.log('')
vetor.sort()    // coloca o vetor em ordem crescente
for (let pos in vetor) {
    console.log(`A posição ${pos} tem o valor ${vetor[pos]}`)
}

console.log('')
let pos = vetor.indexOf(9)
if (pos == -1) {
    console.log('Número Inválido!')
} else {
    console.log(`O número do IndexOf está na posição ${pos}`)
}
