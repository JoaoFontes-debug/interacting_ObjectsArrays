/*
9. Contabilizando Elementos com uma Condição
O Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.
 */

const client = [
    {name:'Gerson', age: 23, city:'Lauro De Freitas'},
    {name:'keyla', age: 29, city:'Salvador'},
    {name:'Eraldo', age: 47, city:'Camaçari'}
]
let olderAge = 0;

client.forEach(client =>{
    if(client.age > 30){
       olderAge++
    }
})

console.log(olderAge)