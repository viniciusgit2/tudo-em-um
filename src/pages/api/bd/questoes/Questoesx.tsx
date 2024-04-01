import Questaomodel from "../../../../../model/Questao";
import Respotamodel from "../../../../../model/Respota";


const Questoesx:Questaomodel[]=[
  new Questaomodel(306,'qual bicho transmite a dengue? ',[
Respotamodel.certa('mosquito'),
Respotamodel.errada('abelha'),
Respotamodel.errada('baleia'),
Respotamodel.errada('gorila'),

]
)
,
new Questaomodel(202,'o formato de uma bola de futebol é ? ',[
    Respotamodel.certa('redonda'),
    Respotamodel.errada('triangular'),
    Respotamodel.errada('hexagonal'),
    Respotamodel.errada('quadrado'),
]
),
new Questaomodel(101,'coletivo de caes ? ',[
Respotamodel.errada('manada'),
Respotamodel.certa('matilha'),
Respotamodel.errada('fauna'),
Respotamodel.errada('cuvilização'),

]
)
]

export default  Questoesx