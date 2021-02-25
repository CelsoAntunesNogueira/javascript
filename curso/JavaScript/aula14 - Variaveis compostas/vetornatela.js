let valores = [8 , 6, 5, 4, 1, 81,]

            //FORMA DE MOSTRAR A POSIÇÃO DE CADA VALOR NO VETOR 
 
/*
let pos = 0 : O inicio 

pos < valores.lenght : Até onde vai parar , que no caso,o 'valores.lenght' ja te diz o ultimo elemento da variavel,aí ele vai se repetindo até o 'pos' não ser menor que o 'valores.lenght'

pos++ : é a fomra de como ele avança durante a repetição,que no caso vai somando +1 a cada repetição
*/            

                //PERCURSO PARA MOSTRAR O VETOR


for(let pos = 0;pos < valores.length ;pos++ ){
    console.log(`À posição ${pos} tem o valor ${valores[pos]}`)
}

                    //OUTRA FORMA DE FAZER (MAIS SIMPLIFICADA)

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

                   
