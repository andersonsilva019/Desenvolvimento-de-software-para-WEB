export function Calculadora({op, x, y}){

  function sum(){
    return x + y;
  }

  function sub(){
    return x - y;
  }

  if(op === 'SOMA') {
    return (
      <div>
        A soma é {sum()}
      </div>
    )
  }

  return (
    <div>
      A diferença é {sub()}
    </div>
  )
}