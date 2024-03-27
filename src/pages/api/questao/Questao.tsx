import Respota from "./Respota"
export default class Questao{
  #id:number
    #perguntas:string
    #acertou: boolean
  #Respotas:Respota[]
  //respondidas:bolean
constructor(id:number,perguntas:string,Respota:any ,acertou:boolean,Respotas:Respota){
this.#perguntas=perguntas
this.#acertou=acertou
this.#id=id
this.#Respotas=Respota
}



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
   for(let Respotas of this.#Respotas){
      if(Respotas.revelada) return true
   }
   return false
}
}
