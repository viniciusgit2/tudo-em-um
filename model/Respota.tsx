export default class Respotamodel{

#valor:string
#certa:boolean

#revelada:boolean

constructor(valor:string,certa:boolean,revelada=false){
this.#valor=valor
this.#certa=certa
this.#revelada=revelada
}
static certa(valor: string){
return new Respotamodel(valor,true)
}
static errada(valor: string){
    return new Respotamodel(valor,false)
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
paraobjeto(){
    return{
     valor:this.valor,
     certa:this.certa,
     revelada:this.revelada
           
    }
}
}
