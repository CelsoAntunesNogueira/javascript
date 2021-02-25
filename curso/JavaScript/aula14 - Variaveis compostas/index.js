/*Uma variavél composta possui varios elementos,cada um deles é composto por seu valor e por uma chave de identificação 

<!-- E se usam colchete:
EX:
let num = [8 , 6,  2]

    Vetor = num         
    valores = 8,6,2 
    elementos = 0,1,2
*/

let nume = []
console.log(`Nosso vetor é o ${nume} `)

                    /* FORMAS DE ADICIONAR NA VARIAVEL COMPOSTA */
let num = [5,8,4]
num [1] = 1        /* Aqui você coloca ele num local especifico,se for numa posição já existente você substitui o valor */
console.log(num)
 
num.push(7)         /*Aqui você põe na ultima posição do vetor */
console.log(num)

num.length          /* Ele conta quantos elementos tem na variavel */
console.log(num.length)

num.sort()          /* Arruma em ordem crescente*/
console.log(num.sort())

num[2]               /*Aqui seleciono um valor da variavel em especifico */
console.log(num[2])   

num.indexOf(4)             //BUSCANDO VALORES NO VETOR
console.log(num.indexOf(4))
                        /* Se você procurar por algum valor que não tenha no vetor vai dar um valor de -1,para contornar isso veja abaixo */
let pos = num.indexOf(9)                        
if(pos == -1){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor está na posição ${pos}`)
}
