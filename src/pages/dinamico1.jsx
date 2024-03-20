export function getServerSideProps(){
    console.log('[server]')
    return{
        props:
        {
        numero:Math.random()  
        }
    
    }
}

export default function dinamico1(props){
return(<div><h1>dinamico</h1><h2>{props.numero}</h2></div>)
}