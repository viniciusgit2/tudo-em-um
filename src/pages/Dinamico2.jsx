export async function getStaticProps(){
    const resp=await fetch("http://localhost:3000/api/produtos")//repare o localhost o numero é variavel pra funcionar ai varia a ordem pra ir
    //e com api aberta é o ideal mas funciona de qq maneira
    console.log('{server....} gerando props para o componente ...')//teste para ver se no server gerava ou não
     const produtos = await resp.json()
     return{
         props:{
             produtos
         }
     }
 }
 
 export default function dinamico2(props){
     console.log('{cliente....} gerando props para o componente ...')//teste para ver se no server gerava ou não
 
     function renderizar(){
         return props.produtos.map(produto =>{return <li key={produto.id}>id,{produto.id} nome,{produto.nome}=r${produto.preco}</li>})
     }
 return(<div><h1>dinamico2</h1><h2>{renderizar()}</h2></div>)
 }