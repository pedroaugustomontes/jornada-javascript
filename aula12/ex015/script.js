// iniciamos a funcao ao clicar no botao verificar, cuja a funcao é 
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value <= 1900 || Number(fano.value > ano)  ) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''

        // criamos o elemento img e atribuimos a ele um id chamado foto
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            var genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //CRIANÇA!
                img.setAttribute('src', 'bebe-homem.png')
            }else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'jovem-homem.png')
            }else if (idade < 50) {
                // ADULTO
                img.setAttribute('src', 'adulto-homem.png')
            }else {
                // IDOSO
                img.setAttribute('src', 'idoso-homem.png')
            }
            
        } else if (sexo[1].checked) {
            var genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                //CRIANÇA!
                img.setAttribute('src', 'bebe-mulher.png')
            }else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'jovem-mulher.png')
            }else if (idade < 50) {
                // ADULTO
                img.setAttribute('src', 'adulto-mulher.png')
            }else {
                // IDOSO
                img.setAttribute('src', 'idoso-mulher.png')
            }
  
        }
        // selecionamos uma div com o id#res e mudamos o textAlign para centerz
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} de ${idade} anos`
        // adicionamos um elemento img com appendChild
        res.appendChild(img)
        
    }
}

