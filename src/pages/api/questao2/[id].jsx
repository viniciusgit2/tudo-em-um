// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Questoesx from "../bd/questoes/Questoesx"

export default (req, res)=> {
  const idselecionado =+req.query.id
 const Questselecionada= Questoesx.filter(Quest =>Quest.id ===idselecionado)
 if (Questselecionada.length===1){
 const questselecionada=Questselecionada[0]
 res.status(200).json(questselecionada.paraobjeto())
 }else{
res.status(204).send()
 }

}