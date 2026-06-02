let totalPedidos = 0;
let faturamento = 0;

function fazerPedido (produto, preco) {
    totalPedidos++;
    faturamento += preco;

    document.getElementById('contador').innerText = `Total de Pedidos: ${totalPedidos}`;
    document.getElementById('faturamento').innerText = `Faturamento: R$${faturamento.toFixed(2)}`;
    console.log(`Pedido feito: ${produto} - Preço: R$${preco.toFixed(2)}`);
}