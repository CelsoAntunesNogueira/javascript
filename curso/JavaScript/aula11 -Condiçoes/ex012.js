var agora = new Date()       /*Para poder usar a hora atual */
var hora = agora.getHours() /*        //        //    */
console.log(`São ${hora} horas!`) /* Console.log é o print do Node*/
if ( hora < 12){
    console.log(`Bom dia,corno!`)
}else if( hora <= 18 ){
    console.log(`Boa tarde,corno!`)
}else if(hora <= 24){
    console.log(`Boa noite,corno!`)
}else{
    console.log(`Ta madrugando,corno?!`)
}

