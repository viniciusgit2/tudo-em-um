import Respotamodel from "./Respota"

export default class Questaomodel{
#id:number
#perguntas:string
#respotas:Respotamodel[]
#acertou:boolean
//#respondida:boolean

constructor(id:number,perguntas:string,respotas:Respotamodel[],acertou=false){
this.#id=id
this.#perguntas=perguntas
this.#respotas=respotas
this.#acertou=acertou
}
get id(){
    return this.#id
}
get perguntas(){
    return this.#perguntas
}get respotas(){
    return this.#respotas
}
get acertou(){
    return this.#acertou
}
get respondidas(){
   
    for(let respotas of this.#respotas){
    if (respotas.revelada)return true
    }
    return false

}
paraobjeto(){
    return{
        id:this.#id,
        perguntas:this.#perguntas,
        respotas:this.#respotas.map(Respotamodel =>Respotamodel.paraobjeto()),
        acertou:this.#acertou
    }
}
}