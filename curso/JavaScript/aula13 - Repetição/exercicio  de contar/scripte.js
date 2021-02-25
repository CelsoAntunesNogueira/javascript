alert("Boa noite,Bruno")
function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let seq = document.getElementById('txtp')
    var desc= document.getElementById('desc')

    if(ini.value.length ==0 ||  fim.value.length == 0 || seq.value.length == 0){
        desc.innerHTML('Impossivel contar ! \u{1F9BC}')
        window.alert('ERRO - Faltam dados para contagem') /*Teste de erro se não deixar de colocar algum dado */
        
    }else{  
        desc.innerHTML = 'Contando '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let s = Number(seq.value) 
     /* Aqui acima eu converti de string para numero os dados que serão colocados*/
        
        if(s <= 0){ /*Para quando alguem comentar na sequencia algo menor que 0 */
            window.alert ('Assim tu quer me fuder né,malandragem!Vou considerar como 1 ')
            s = 1
        }
        
     
        if(i < f) {/* Contagem crescente */
            for(let c=i;  c <= f; c+=s ){
                desc.innerHTML += `${c} \u{1F449}`
            }
        }else { /*Contagem regressiva */
            for(let c = i ; c>= f;c -= s) {  
                desc.innerHTML += `${c} \u{1F449}`       
            }
            
        }
        desc.innerHTML += `\u{1F645}`
            
    } 
}