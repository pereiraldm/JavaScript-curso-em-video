function carregar(){
    var saudacao = document.getElementById('saudacao')
    var msg = document.getElementById('msg')
    var foto = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        // BOM DIA!
        foto.src = 'imagens/manha.png'
        document.body.style.background = '#FEB648'
    }else if (hora >= 12 && hora <= 18){
        // BOA TARDE!
        foto.src = 'imagens/tarde.png'
        document.body.style.background = '#AE5201'
        saudacao.innerHTML = 'Boa tarde! &#x1F306'
    }else{
        // BOA NOITE
        foto.src = 'imagens/noite.png'
        document.body.style.background = '#142341'
        saudacao.innerHTML = 'Boa noite! &#x1F303'
    }
}