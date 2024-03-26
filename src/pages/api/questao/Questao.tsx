import Respota from "./Respota"
export default class Questao{
  #id:string
   #valor:string
    #perguntas:string
    #acertou: boolean
  #Respotas:any[]
constructor(valor:string,id:string,perguntas:string,Respota:any ,acertou:boolean){
this.#valor=valor
this.#perguntas=perguntas
this.#acertou=acertou
this.#id=id
this.#Respotas=Respota
}
get valor(){
   return this.#valor}


get id(){
   return this.#id
}

get perguntas(){
   return this.#perguntas
}
get acertou(){
   return this.#acertou
}
get Respotas(){
   for(let respotas of this.#Respotas){
      if(respotas.revelada) return true
   }
   return false
}
}
