import Respota from "./Respota"
export default class Questao{
    #id:number
    #perguntas:string
    #acertou: boolean
    #Respota: Respota[]
  
constructor(id:number,perguntas:string   ,Respota:Respota[],acertou:boolean){
this.#id=id
this.#perguntas=perguntas
this.#acertou=acertou
this.#Respota=Respota
}
get id(){
return this.#id

}
get acertou(){
  
   return this.#acertou
}get Respotas(){
 
 for(let Respota of this.#Respota){
 if(Respota.revelada)return true}

 return false
 }
get perguntas(){
  
   return this.#perguntas
}
}