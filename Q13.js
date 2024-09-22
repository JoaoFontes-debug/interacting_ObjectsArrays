/*13. Implementando um Carrinho de Compras
○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho.
*/

const carrinho = {
    itens: itens = [
        {nome:"", quantidade:5, precoUnitario:10.2},
        {nome:"", quantidade:2, precoUnitario:25.5},
        {nome:"", quantidade:1, precoUnitario:4.15},
        {nome:"", quantidade:1, precoUnitario:16.7}
    ]
}

let totalCarrinho = 0;
let totalReal = 0;


carrinho.itens.forEach(produtos => {
 
    totalCarrinho += (produtos.precoUnitario * produtos.quantidade);
    totalReal = totalCarrinho.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
})


console.log(totalReal)




