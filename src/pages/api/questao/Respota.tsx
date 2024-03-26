export default class Respota{
     #valor: string
     #certa: boolean
    #revelada: boolean
constructor(valor:string,certa:boolean,revelada=false){
this.#valor=valor
this.#certa=certa
this.#revelada=revelada
}
static certa (valor:string){
    return new Respota(valor,true)
}
static errado (valor:string){
    return new Respota(valor,false) 
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
}