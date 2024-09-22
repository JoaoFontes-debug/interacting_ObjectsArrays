

// 12. Atualizando um Array de Objetos
// ○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.


const stock = [
    {product:'mouse', quantity:6, minimum:15 },
    {product:'teclado', quantity:68, minimum:42 },
    {product:'monitor', quantity:35, minimum:50 }
];
  
stock.forEach( element =>{
    if(element.quantity < element.minimum){
        element.quantity *= 2;
    }

    console.log(`Product: ${element.product}, Mininum: ${element.minimum}, Current quantity: ${element.quantity}`);
});



  