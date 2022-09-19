import React from 'react'

export function Disciplina({ titulo, children }){
  return (
    <div>
      <h1>{titulo}</h1>
      {
        React.Children.map(children, (element) => {
          return React.cloneElement(element, { disciplina: titulo })
        })
      }
    </div>
  )
}