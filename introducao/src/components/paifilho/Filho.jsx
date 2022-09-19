export function Filho({nomePai, cbPai, funcaoDeSomar}){

  function acaoBotao(){
    console.log(funcaoDeSomar)
    cbPai('Filho da Silva')
  }

  return (
    <div>
      <button className="btn" onClick={acaoBotao}>
        Oi {nomePai}
      </button>
    </div>
  )
}