/*1. Acessando Propriedades de Objetos
O Objetivo: Crie um objeto carro com propriedades como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console.
*/

const carro = {
  marca: "Nissan",
  modelo: "Versa",
  ano: 2020,
  cor: "preto",
};

//O "X" representa o indice dos objetos
for (const x in carro) {
  //console.log(carro)
  console.log(carro[x]);
}
