
export default class questão{
    #id: String
    #perguntas: boolean
   #acertou: boolean
constructor(id:string,perguntas:boolean,acertou:boolean){
this.#id=id
this.#perguntas=perguntas
this.#acertou=acertou
}
get valor(){
return this.#id

}
get acertou(){
  
   return this.#acertou
}
get perguntas(){
  
   return this.#perguntas
}
}