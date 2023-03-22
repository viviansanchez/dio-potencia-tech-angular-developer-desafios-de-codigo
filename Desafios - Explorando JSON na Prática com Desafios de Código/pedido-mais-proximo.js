//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const pedidos = [
  { 
    nome: gets(), 
    tipo: gets(), 
    distancia: parseFloat(gets())
  },
  { 
    nome: gets(), 
    tipo: gets(), 
    distancia: parseFloat(gets())
  },
  { 
    nome: gets(), 
    tipo: gets(), 
    distancia: parseFloat(gets())
  }
];

//TODO: Usando o array acima identifique o pedio mais próximo (menor distância).
//Dica: Explore o conceito de "reduce" em seu array, ele pode muito útil neste desafio.
//Referência: https://stackoverflow.com/a/34087850/3072570

const minDistance = pedidos.reduce(function(previous, current) {
  return (previous.distancia < current.distancia) ? previous : current
})

//TODO: Imprima a saída de acordo com o enunciado deste desafio.

print(`O pedido mais próximo é o de ${minDistance.nome}, do tipo ${minDistance.tipo}`)