export function Estudante({nome, curso, universidade, children}){
  return (
    <div>
      Nome: {nome}<br/>
      Curso: {curso}<br/>
      Universidade: {universidade}<br/>
      {children}
    </div>
  )
}