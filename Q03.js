/*
3. Filtrando Propriedades de Objetos
O Objetivo: Dado um objeto produto com várias propriedades, crie uma
função que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades.
*/

const product = {
    name: "Watermelon",
    price: 45.2,
    weight: 20,
    supplier: "lofifruits",
    expiration: 80,
  };
  
  const returnGreaterProp = (product, value) => {
    let newObject = {};
  
    for (let prop in product) {
      if (product[prop] > value) {
        newObject[prop] = product[prop];
      }
    }
    return newObject;
};
  
console.log(returnGreaterProp(product, 38));
  