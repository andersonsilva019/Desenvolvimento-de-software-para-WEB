import { Filho } from "./Filho";

export function Pai(){

  function cbPai(msg){
    alert(`Oi meu filho, ${msg}`)
  }

  function somar(x,y){
    return x + y
  }


  return (
    <div>
      <Filho nomePai="Pai da Silva" cbPai={cbPai} funcaoDeSomar={somar} />
    </div>
  )
}