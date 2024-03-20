export async function getStaticPaths(){
  return {
    fallback:false,//404
    paths:[
      {params: {id: `107`}},//(404 na pratica pois impossivel aceetar a porta)
      {params: {id: `203`}},
      {params: {id: `1345`}},
  
    ]
  
    }
  
  
    }
    export async function getStaticProps(context){
      const resp=await(`http://localhost:3000/api/alunos/123/${context.params.id}`)
      return {
        props:{}
      }
    }
    export default function aluno(){
return(<div>oi</div>)
    }