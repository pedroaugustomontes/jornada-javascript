function tabuada() {
    let numero = document.getElementById('txtnumero')
    let tabuada = document.getElementById('select-tab')

    if (numero.value.length == 0) {
        window.alert('Digita um número ae caraio')
    } else {
        let n = Number(numero.value)
        let c = 1
        tabuada.innerHTML = ''

        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            //da um valor a cada tab selecionada
            item.value = `tab${c}`
            //adicionar um filho que será o elemento item
            tabuada.appendChild(item)
            c++
        }

    }
}