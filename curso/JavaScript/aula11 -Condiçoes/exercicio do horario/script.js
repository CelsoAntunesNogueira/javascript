function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12){
        // Imagem do dia 
        // && = 'e'
        img.src ='manha.png'
        document.body.style.background='#F5DEB3'
    }else if(hora >= 12 && hora <= 18){
        //Tarde
        img.src="tard.png"
        document.body.style.background='#F0E68C'
    }else{
        //Noite
        img.src='noit.png'
        document.body.style.background='#F0F8FF'
    }
}

