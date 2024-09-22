/*
Manipulação de Arrays de Objetos com forEach
7. Modificando Objetos em um Array
O Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.
 */

const object = [
    { name: "hat", price: 200, discount: 0.1 },
    { name: "shorts", price: 300, discount: 0.1 },
    { name: "shirt", price: 700, discount: 0.1 },
  ];
  
  object.forEach(element => {
    let newPrice = element.price - (element.price * element.discount);
    console.log(newPrice);
  });
  