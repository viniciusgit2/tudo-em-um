export default class produto {
  #id;
  #nome;
  #preco;
  constructor(id, nome, preco) {
    this.#id = id;
    this.#nome = nome;
    this.#preco = preco;
  }
  get preco() {
    return this.#preco;
  }
  get nome() {
    return this.#nome;
  }
  get id() {
    return this.#id;
  }
}
