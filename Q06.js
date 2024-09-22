/*
6. Filtrando Arrays de Objetos
O Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico.
 */

const employees = [
    { name: "emerald", position: "electrician", salary: 4000 },
    { name: "begween", position: "teacher", salary: 3800 },
    { name: "loca", position: "software developer", salary: 5800 },
    { name: "goia", position: "anything", salary: 1400 },
  ];
  
  function baseSalary(base, employees) {
    for (const employee of employees) {
      if (employee.salary > base) {
        console.log(employee.salary);
      }
    }
  }
  
baseSalary(2000, employees);
  