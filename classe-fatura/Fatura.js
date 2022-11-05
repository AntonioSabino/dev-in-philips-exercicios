export default class Fatura {
  constructor(id, descricao, quantidade, preco) {
    this.id = id;
    this.descricao = descricao;
    this.quantidade = quantidade > 0 ? quantidade : 0;
    this.preco = preco > 0 ? preco : 0;
  }

  obterValorTotal() {
    return this.quantidade * this.preco;
  }

  get valorTotal() {
    return this.obterValorTotal();
  }
}