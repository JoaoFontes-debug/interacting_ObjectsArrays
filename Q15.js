
// 15. Filtrando e Somando Valores
// O Objetivo: Crie um array de objetos transacoes, onde cada transação tem
// tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
// somando as entradas e subtraindo as saídas.


const transacoes = [
    {tipo: 'entrada', valor: 2},
    {tipo: 'saida', valor: 1},
    {tipo: 'entrada', valor: 7},
    {tipo: 'saida', valor: 15}
]


let saldo = 0;

transacoes.forEach(transacao => {
    if (transacao.tipo === "entrada") {
        saldo += transacao.valor;  
    } else if (transacao.tipo === "saida") {
        saldo -= transacao.valor;  
    }
});

console.log("Saldo final:", saldo);