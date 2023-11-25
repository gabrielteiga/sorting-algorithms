/**
 * @author Gabriel Teiga
 * @description Algoritmo de ordenação Selection Sort
 * 
 * O Selection Sort irá sempre pegar o menor valor de um array e colocar na primeira posição, depois o segundo menor valor e colocar na segunda posição, e assim por diante.
 * Obs.: A sua implementação é simples, mas ele tem uma complexidade O(n²) e não é recomendado para arrays muito grandes.
 */

const livros = require("./listaLivros.js");
const getIndexCheapest = require('./menorValor.js');

function selectionSort(livros) {
    let atual = 0;
    
    while (atual < livros.length) {
        let menor = getIndexCheapest(livros, atual);
        
        let livroAtual = livros[atual];
        let livroMenorPreco = livros[menor];

        livros[atual] = livroMenorPreco;
        livros[menor] = livroAtual;

        atual++;
    }
}

console.log('Antes da ordenação: ', livros);
selectionSort(livros);
console.log('Depois da ordenação: ', livros);