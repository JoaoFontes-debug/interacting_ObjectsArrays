//11. Agrupando Elementos com forEach
// ○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.


order = [
    {client:'jose', product:'pao', quantity: 15},
    {client:'jose', product:'pao', quantity: 15},
    {client:'joao', product:'queijo', quantity: 15},
    {client:'maria', product:'salsiche', quantity: 15},
    {client:'maria', product:'salsiche', quantity: 15}
]

let totalForClient = {};


order.forEach(info =>{
    if (totalForClient[info.client]) {
        totalForClient[info.client] += info.quantity;
    } else {
        
        totalForClient[info.client] = info.quantity;
    }
})

console.log(totalForClient);