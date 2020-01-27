function contar() {
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar, preencha todos os dados!'
        //window.alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value) //pega o valor dentro de inicio e transforma em numero
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO = 1')
            p = 1
        }

        if (i < f){
            //c recebe i, enquanto c for menor ou igual a f, o c recebe ele mesmo + p
            for (let c = i; c <= f; c += p) {
                //recebe oq ele ja tem concatenado (+=) com c
                res.innerHTML += `${c} \u{1F449} `
            }
            res.innerHTML += `FIM \u{1F3C1}`
        }else {
            //c recebe i, enquanto c for maior ou igual a f, o c recebe ele mesmo + p
            //serve para quando o numero inicial foi maior que o número final
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
            res.innerHTML += `FIM \u{1F3C1}`

        }

    }
}