export default class Respota{
 #valor:String
 #certa:Boolean
 #respotas:any[]
 #revelada:Boolean
 constructor(valor:String,respotas:any[] ,certa:Boolean,revelada:Boolean){
this.#valor=valor
this.#certa=certa
this.#revelada=revelada
this.#respotas=respotas
 } 
 get valor(){
    return this.#valor
 }
 get certa(){
    return this.#certa
 }
 get revelada(){
   return this.#revelada
 }
 get respotas(){
    for (let respotas of this.#respotas){
    if (respotas.revelada)return true
    }
    return false
 }
}
