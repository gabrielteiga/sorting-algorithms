function getIndexCheapest(livros, posicaoInicial){
    let atual = posicaoInicial;
    let maisBarato = posicaoInicial;

    while (atual < livros.length) {
      if (livros[atual].preco < livros[maisBarato].preco) {
        maisBarato = atual;
      }
      atual++;
    }
    
    return maisBarato;
}

module.exports = getIndexCheapest;