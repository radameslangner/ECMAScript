/*

Função construtora para produto

nome, preco, desconto ( entre )

precoFinal 

criar duas instâncias de produto

*/ 

function Produto(nome, preco, desconto = 0){

    this.nome = nome
    this.preco = preco
    this.desconto = desconto

    this.exibirProdutoPrecoFinal = function(){
        let precoFinal = this.preco * (1 - this.desconto  )

        return `${this.nome}: ${precoFinal}`
    }

}

produto1 = new Produto('Tênis', 166.60, 0.1)
produto2 = new Produto('Bota', 222.20, 0.1)


console.log(produto1.exibirProdutoPrecoFinal())
console.log(produto2.exibirProdutoPrecoFinal())
