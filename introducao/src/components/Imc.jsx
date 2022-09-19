const NUMBER_OF_DECIMALS = 1;

export function Imc({ peso, altura }){
  
  function calcImc(){
    return (peso / (altura * altura)).toFixed(NUMBER_OF_DECIMALS);
  }

  function generateHtmlImc(){

    const imc = calcImc();

    if(imc < 17) return <h3>Muito abaixo do peso</h3>
    if(imc >= 17 && imc < 18.5) return <h2>Abaixo do peso</h2>
    if(imc >= 18.5 && imc <= 24.9) return <h2>Peso normal</h2> 
    if(imc >= 25 && imc <= 29.9) return <h2>Acima do peso</h2>
    if(imc >= 30 && imc <= 34.9) return <h2>Obesidade I</h2>
    if(imc >= 35 && imc <= 39.9) return <h2>Obesidade II (Severa)</h2>
    
    return <h2>Obesidade III (Mórbida)</h2>
    
  }

  return (
    <div>
      <h2>Seu IMC é {calcImc()}</h2>
      {generateHtmlImc()}
    </div>
  )
}