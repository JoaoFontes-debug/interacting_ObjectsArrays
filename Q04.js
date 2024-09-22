/**
Manipulação de Arrays de Objetos com for of
4. Iterando Sobre Arrays de Objetos
O Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console. 
 */

const people = [
    { name: "JimHalpert", age: 25, city: "Scranton" },
    { name: "PamBeesly", age: 25, city: "Scranton" },
    { name: "DwightSchrute", age: 35, city: "Scranton" },
  ];
  
  for (const OnePeople of people) {
    for (Prop in OnePeople) {
      console.table(OnePeople[Prop]);
    }
}