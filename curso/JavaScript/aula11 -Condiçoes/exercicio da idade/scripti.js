function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.Number) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    
    }else{
        var fsex= document.getElementsByName('radsex')
        var idade= ano - Number(fano.value)
        //res.innerHTML= `Idade calculada: ${idade}`   - Para testar se não teve erro
        var gen= ""
        var img=document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            gen='Homem'
        
            if(idade >=0 && idade <10 ){
                //kid
                img.setAttribute('src', 'kidm.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'jm.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adulto.png')
            }else{
                //idoso
                img.setAttribute('src', 'idoso.png')
            }


        }else if (fsex[1].checked){
            gen='Girl'
            
            if(idade >= 0 && idade < 10){
                //kid
                img.setAttribute('src', 'kidf.png')
            }else if (idade < 21 ){
                //jovem
                img.setAttribute('src', 'jf.png')
            }else if(idade <50){
                //adulta
                img.setAttribute('src','adulta.png')
            }else{
                //coroa
                img.setAttribute('src', 'idosa.png')
            }
        }    
    }
    res.style.textAlgin='center'
    res.innerHTML= `Detectamos ${gen} com ${idade} anos.`
    res.appendChild(img)
}
/* */

num =8
console.log(num ** 2)