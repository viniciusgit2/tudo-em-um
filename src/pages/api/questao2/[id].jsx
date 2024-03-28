// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Questoesx from "../bd/questoes/Questoesx"

export default (req, res)=> {
  
  res.status(200).json(Questoesx[0].paraobjeto())
}