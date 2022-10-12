import { useState } from "react"

export function Questao02() {

  const [calc, setCalc] = useState({
    numberOne: '',
    numberTwo: '',
    result: 0,
    error: '',
  })

  function onChangeCalcValue(event) {
    setCalc({
      ...calc,
      [event.target.name]: Number(event.target.value),
    })
  }

  function handleSubmitAddOperation() {
    setCalc({
      ...calc,
      result: calc.numberOne + calc.numberTwo
    })
  }

  function handleSubmitSubOperation() {
    setCalc({
      ...calc,
      result: calc.numberOne - calc.numberTwo
    })
  }

  function handleSubmitDivOperation() {
    if (calc.numberTwo === 0) {
      setCalc({
        ...calc,
        error: 'Operação inválida!'
      })
      return
    }

    setCalc({
      ...calc,
      result: calc.numberOne / calc.numberTwo
    })
  }

  function handleSubmitMulOperation() {
    setCalc({
      ...calc,
      result: calc.numberOne * calc.numberTwo
    })
  }

  return (
    <div className="card-body">
      {calc.error && <p>{calc.error}</p>}
      <input
        name="numberOne"
        type="text"
        placeholder="Número 1"
        value={calc.numberOne}
        onChange={event => onChangeCalcValue(event)}
        className="form-control mb-3"
        />
      <input
        className="form-control mb-3"
        name="numberTwo"
        type="text"
        placeholder="Número 2"
        value={calc.numberTwo}
        onChange={event => onChangeCalcValue(event)}
      />
      <div>
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleSubmitAddOperation}
        >+</button>
        <button
          className="btn btn-primary ms-2"
          type="button"
          onClick={handleSubmitSubOperation}
        >-</button>
        <button
          className="btn btn-primary ms-2"
          type="button"
          onClick={handleSubmitMulOperation}
        >*</button>
        <button
          className="btn btn-primary ms-2"
          type="button"
          onClick={handleSubmitDivOperation}
        >/</button>
      </div>
      <p>Resultado: {calc.result}</p>
    </div>
  )
}