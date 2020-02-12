let numero = document.querySelector('#txtnumero')
let resultado = document.querySelector('#resultado')
let erros = document.querySelector('#erros')
let listaNumeros = []

function adicionarNumero() {
    if (!validarNumero(Number(numero.value))) {
        erros.innerHTML = ''
        listaNumeros.length == 0 ? resultado.innerHTML = '' : ''
        listaNumeros.push(Number(numero.value))
        resultado.innerHTML += `<span>${numero.value}</span>`
    } limparInput()
}

function validarNumero(num) {
    if (num < 1 || num > 100 ) {
        erros.innerHTML = `Número inválido`
        limparInput()
        listaNumeros.length == 0 ? resultado.innerHTML = '' : ''
        return true
    }
    else if (listaNumeros.includes(num)) {
        erros.innerHTML = `Número já cadastrado`
        limparInput()
        return true
    }
}

function analisarNumero() {
    erros.innerHTML = ''
    if (listaNumeros.length == 0) {
        resultado.innerHTML = ''
        erros.innerHTML = 'Nenhum número cadastrado'
    } else {
        let maior = Math.max(...listaNumeros)
        let menor = Math.min(...listaNumeros)
        let soma = listaNumeros.reduce((accum, curr) => accum + curr )
        let media = soma / listaNumeros.length
        resultado.innerHTML += `<br>Lista com <strong>${listaNumeros.length}</strong> números<br>`
        resultado.innerHTML += `O maior valor é <strong>${maior}</strong><br>`
        resultado.innerHTML += `O menor valor é <strong>${menor}</strong><br>`
        resultado.innerHTML += `A soma dos valores é <strong>${soma}</strong><br>`
        resultado.innerHTML += `A média dos valores é <strong>${Math.round(media)}</strong><br>`
        listaNumeros = []
    } limparInput()
}

function limparInput() {
    numero.value = '' 
    numero.focus()
}

document.addEventListener('keypress', function(e){
    if(e.which == 13){adicionarNumero()}
  }, false);