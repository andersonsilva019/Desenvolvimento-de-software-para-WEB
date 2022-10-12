const disciplinas = [
  'Desenvolvimento WEB',
  'Robótica',
  'Instrumentação',
  'Técnicas de programação',
  'Sistemas embarcados'
]

export function Questao01B(){
  return (
    <ul>
      {disciplinas.map(disciplina => <li key={disciplina}>{disciplina}</li>)}
    </ul>
  )
}