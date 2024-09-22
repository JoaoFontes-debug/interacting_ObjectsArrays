/*
 5. Calculando Valores em Arrays de Objetos
O Objetivo: Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média.
*/

const students = [
    { name: "emerald", score1: 7, score2: 8 },
    { name: "begween", score1: 7, score2: 8 },
    { name: "loca", score1: 7, score2: 8 },
    { name: "goia", score1: 7, score2: 8 },
  ];
  
  for (const student of students) {
    console.log(
      "the average of student ",
      student.name,
      " is ",
      (student.average = (student.score1 + student.score2) / 2)
    );
    }

