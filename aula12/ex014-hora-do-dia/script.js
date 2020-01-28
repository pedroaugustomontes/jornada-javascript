function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() // + ":" + data.getMinutes() para adicionar os minutos
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()

    msg.innerHTML = `Agora são: <br /> ${hora} horas ${minutos} minutos e ${segundos} segundos`

    if (hora >= 0 && hora < 5) {
        document.body.style.background = '#b0dbca'
        img.src = './img/dawn.png'
        periodo.innerHTML = 'Madrugada na area!'
    } else if (hora >= 5 && hora < 13) {
        img.src = './img/manha.png'
        periodo.innerHTML = 'Bom dia!'
        document.body.style.background = '#056b00'
    } else if (hora >= 13 && hora < 18) {
        img.src = './img/tarde.png'
        periodo.innerHTML = 'Boa tarde!'
        document.body.style.background = '#fdb978'
    } else {
        img.src = './img/noite.png'
        periodo.innerHTML = 'Boa noite!'
        document.body.style.background = '#01435d'
    }
}