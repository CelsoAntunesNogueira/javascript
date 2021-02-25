//Funções são ações executadas assim que são chamadas ou em decorrência de algum evento.

//Uma função pode receber parâmetros e retornar um resultado 


function parimp(n){       // JOGANDO PAR OU IMPAR
    if(n%2 ==0){
        return `PAR!`

    }else{
        return `IMPAR`
    }
}
console.log(parimp(451))

///////////////////////////////

function soma(n1=0,n2=0){    //SOMANDO NÚMEROS
    return n1 +n2
}
console.log(soma(2,9))
console.log(soma(4))   //Colando um valor só ,substitui apenas o n1 e o n2 terá o valor de 0
/////////////////////////////////

let v = function(x){  //Multiplicando
    return x*3
}
console.log(v(8))
////////////////////////////////////


function fatorial(n){    //FATORIAL
    let fat = 1
    for(let c =n; c>1 ; c--){   //C é igual a N e enquanto ele for menor do que 1 ,diminua por 1,até chegar a 0 
        fat *= c
    }
    return fat
}console.log(fatorial(8))

function fatoriall(x){          ///FATORIAL EM RECURSIVIDADE
    if (x == 1){
        return 1
    }else {
        return x * fatoriall (x-1)
    }
}
console.log(fatoriall(8))
