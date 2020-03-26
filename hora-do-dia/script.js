// Criando a função 
const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

var interval = setInterval(carregar);

setInterval(() => {
   let day = new Date();
   let hh = day.getHours() * 30;
   let mm = day.getMinutes() * deg;
   let ss = day.getSeconds() * deg;

   hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
   mn.style.transform = `rotateZ(${mm}deg)`;
   sc.style.transform = `rotateZ(${ss}deg)`;
})

function carregar() {

    // Criando vaiáveis
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    
    // Pegando hora atual
    var data = new Date()
    var hora = data.getHours() // + ":" + data.getMinutes() para adicionar os minutos
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()

    msg.innerHTML = `<br>Agora são <br>${hora} horas ${minutos} minutos <br>${segundos} segundos`

    if (hora >= 0 && hora < 5) {
        document.body.className = 'bg bg-dawn'
        img.src = './img/dawn-peq.png'
        periodo.innerHTML = '<strong>Madrugada na area!</strong>'
    } else if (hora >= 5 && hora < 12) {
        img.src = './img/manha-peq.png'
        periodo.innerHTML = '<strong>Bom dia!</strong>'
        document.body.className = 'bg bg-manha'
    } else if (hora >= 12 && hora < 18) {
        document.body.className = 'bg bg-tarde'
        img.src = './img/tarde-peq.png'
        periodo.innerHTML = '<strong>Boa tarde!</strong>'
    } else {
        img.src = './img/noite-peq.png'
        periodo.innerHTML = '<strong>Boa noite!</strong>'
        document.body.className = 'bg bg-noite'
    }
}

