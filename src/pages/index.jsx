import Link from "next/link";
import Contador from "../pages/estado/Contador";
import mega from "../pages/mega/mega";
import Presente from "./Presente";
import Porta from "./Porta";
import { useState } from "react";
import Estatico1 from "./Estatico1";
import Estatico2 from "./Estatico2";
import Estatico4 from "./estatico4";
import Subdivisao from '../pages/tabuleiro/componentes/Subdivisao'
import produtos from '../pages/api/produtos'
import dinamico1 from "./dinamico1";
import Dinamico2 from "./Dinamico2";
import  Questao from '../pages/Questao'
export default function Home() {
  return (
    <div>
      <Link href="api/metodo">,metodo</Link>
      <Link href='estado/Contador'>contador</Link>
      <Link href='mega/mega'>,megacena</Link>
      <Link href='estado/Contador'>,contador</Link>
       <Link href='tabuleiro/componentes/Subdivisao'>,tabuleiro</Link>
       <Link href='Estatico1'>,estatico1</Link>
       <Link href='Estatico2'>,estatico2</Link>
       <Link href='Estatico2'>,estatico3</Link>
        <Link href='/api/produtos'>,produtos</Link>
        <Link href='estatico4'>,Estatico4</Link>
        <Link href='dinamico1'>,dinamico1</Link>
        <Link href='Dinamico2'>,Dinamico2</Link>
       <Link href='Questao'>,Questao</Link>
      <Porta />   
    

     
    </div>
  );
}
