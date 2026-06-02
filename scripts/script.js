let totalPedidos = 0;
let faturamento = 0;

function fazerPedido (produto, preco) {
    totalPedidos++;
    faturamento += preco;

    const contadorElement = document.getElementById('contador');
    const faturamentoElement = document.getElementById('faturamento');

    faturamentoElement.innerText = `Faturamento: R$${faturamento.toFixed(2)}`;
    contadorElement.innerHTML = totalPedidos;
    contadorElement.innerText = `Total de Pedidos: ${totalPedidos}`;
    console.log(`Pedido feito: ${produto} - Preço: R$${preco.toFixed(2)}`);
}