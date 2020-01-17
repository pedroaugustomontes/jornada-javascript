var agora = new Date()
var hora = agora.getHours() // + ":" + agora.getMinutes() para adicionar os minutos
if ( hora < 2) {
    console.log (`Agora é ${hora} hora, boa madrugada!`)
} else if ( hora < 5) {
    console.log (`Agora são ${hora} horas, boa madrugada!`)
} else if (hora < 13) {
    console.log (`Agora são ${hora} horas, bom dia!`)
} else if (hora < 18) {
    console.log (`Agora são ${hora} horas, boa tarde!`)
} else {
    console.log (`Agora são ${hora} horas, boa noite!`)
} 