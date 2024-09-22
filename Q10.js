// 10. Criando Relatórios com Objetos e Arrays
// ○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.


const sales = [
    {product:'garrafa', quantity:3, price:10},
    {product:'pelicula', quantity:7, price:10},
    {product:'mochila', quantity:4, price:10}
]
let totalSales = 0;
  
sales.forEach(element => {
    totalSales += (element.quantity * element.price);
})

console.log(totalSales);
  