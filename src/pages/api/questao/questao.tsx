export default class Questaomodelo{
    #id:number
    #enunciado:string
    #respotas:any[]
        #acertou:boolean[]
constructor(id:number,enunciado:string,respotas:any[],acertou:boolean[])
this.#id=id
this.enunciado#=enunciado
this.respotas#=respotas
this.acertou#=acertou
}
get id(){
    return this.#id
}
get enunciado(){
    return this.#enunciado
}
}
get respotas(){
    return this.#respotas
}



