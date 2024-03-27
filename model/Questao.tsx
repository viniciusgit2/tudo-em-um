export default class Questaomodel{
#id:number
#perguntas:string
#respotas:any[]
#acertou:boolean
//#respondida:boolean

constructor(id:number,perguntas:string,respotas:any,acertou=false){
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
}
get acertou(){
    return this.#acertou
}
get respondidas(){
    //implementar
    return false
}
}