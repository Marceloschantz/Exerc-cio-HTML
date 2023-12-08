function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 15
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12 ) {
    //Bom dia
    img.src = 'fotomanha.jpg'
    document.body.style.background = '#F2CDAF'
    
} else if (hora >= 12 && hora < 18) {
    //Boa tarde
    img.src = 'fototarde.jpg'
    document.body.style.background = '#B04628'
    
}  else {
    //Boa noite
    img.src = 'fotonoite.jpg'
    document.body.style.background = '#2F77B3'

}
}