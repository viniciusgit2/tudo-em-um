export default function handler(req,res){
    function Aleatorio(min=1 ,max=10000){
        return parseInt(Math.random()*(max-min))+min
    }
    res.status(200).json([{id:Aleatorio(),nome:"caneta",preco:5.60},
    {id:Aleatorio(),nome:"caderno",preco:15.60},
    {id:Aleatorio(),nome:"boraça",preco:5.00},
    {id:Aleatorio(),nome:"tesoura",preco:14.99},]
    
    )
    
    }