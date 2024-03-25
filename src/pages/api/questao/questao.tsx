import Respota from "./Respota"
export default class questão{
    #id: String
    #perguntas: boolean
    #Respota: Respota[]

   #acertou: boolean
constructor(id:string,perguntas:boolean,Respota:Respota[],acertou:boolean){
this.#id=id
this.#perguntas=perguntas
this.#acertou=acertou
this.#Respota=Respota
}
get valor(){
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