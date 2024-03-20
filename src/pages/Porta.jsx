  import Presente from './Presente'
  import Link from "next/link"

  export default function  Porta() {
    return (<div className='area'><div className={'selecionada'}><div className={"porta"}> <button className="maçaneta"><Link href='Presente'>Presente</Link></button></div></div></div>)
    
  }