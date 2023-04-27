function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 8 (variavel para manipular a hora e testar as imagens)
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'manha.jpg'
        document.body.style.background = '#B7D4E6'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background = '#FDE4C0'
    } else {
        //Boa noite
        img.src = 'noite.jpg'
        document.body.style.background = '#20273E'
    }
}





