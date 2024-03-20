
import Link from "next/link";
import Contador from "../pages/estado/Contador";
import mega from "../pages/mega/mega";

import { useState } from "react";

import Subdivisao from '../pages/tabuleiro/componentes/Subdivisao'

import Dinamico2 from "./Dinamico2";
export default function Home() {
  return (
    <div>
      <Link href="api/metodo">,metodo</Link>
      <Link href='estado/Contador'>contador</Link>
      <Link href='mega/mega'>,megacena</Link>
      <Link href='estado/Contador'>,contador</Link>
       <Link href='tabuleiro/componentes/Subdivisao'>,tabuleiro</Link>
    
        <Link href='Dinamico2'>,Dinamico2</Link>
    

     
    </div>
  );
}
