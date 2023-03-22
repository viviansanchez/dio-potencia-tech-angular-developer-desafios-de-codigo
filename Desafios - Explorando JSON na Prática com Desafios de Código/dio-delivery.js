//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

//Aqui cria-se o objeto pedido com as informações do cliente, endereço, itens do pedido e taxa:
const pedido = {
  cliente: gets(),
  endereco: gets(),
  itens: [],
  taxaEntrega: 5.0
};

// Para popular o array de itens, criamos a seguinte estrutura de repetição:
const quantidadeItens = parseInt(gets());

while (pedido.itens.length < quantidadeItens) {
  const nomeItem = gets();
  const precoItem = parseFloat(gets());
  pedido.itens.push({ nome: nomeItem, preco: precoItem });
  
}

//TODO: Percorra o array de itens do pedido e calcule o seu valor total.

//forma 1
// let totalCalculado = 0
//for (item of pedido.itens) {
//  totalCalculado = totalCalculado + item.preco
//}

//forma 2
// let totalCalculado = 0
//for (let i = 0; i < pedido.itens.length; i++) {
//  totalCalculado = totalCalculado + pedido.itens[i].preco
//}

let totalPrecoItem = pedido.itens.reduce((prev,curr) => prev + curr.preco, 0)
let valorTotal = pedido.taxaEntrega + totalPrecoItem;

//TODO: Imprima a saída no padrão descrito neste desafio.

print(`Pedido: ${pedido.cliente} \nEndereco de entrega: ${pedido.endereco} \nTotal: R$ ${valorTotal.toFixed(2)}`)
