export function getStaticProps(){
    return {
        revalidate:7,

        props:{
            numero : Math.random()
        }
    }
    
    }
    export default function Estatico2(props){
      return(<div><h1> estatico3</h1>
        <h2>{props.numero}</h2>
      </div>)    
    }