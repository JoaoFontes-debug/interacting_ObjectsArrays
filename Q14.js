
// 14. Manipulando Objetos Complexos
// ○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
// que é um array de objetos. Cada departamento tem um nome e uma lista
// de funcionarios. Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.

empresa = {
    departamentos: departamento = [
        {nome: 'rh', funcionarios: ['carlos', 'eduardo', 'ana', 'jessica']},
        {nome: 'operacao', funcionarios: ['carlos02', 'eduardo02', 'ana02']},
        {nome: 'financeiro', funcionarios: [ 'ana03', 'jessica03']}


    ],

    infoFuncionario: () => {
        for(dep of empresa.departamentos){ 
           for (const info in dep) {
            console.log(`${info} - ${dep[info]}`)

           }     
        }
    }

}

empresa.infoFuncionario();