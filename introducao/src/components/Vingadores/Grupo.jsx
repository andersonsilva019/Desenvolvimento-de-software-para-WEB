
import React from 'react'
/* export function Grupo({ titulo, children }){
  return (
    <div>
      <h1>{titulo}</h1>
      {children}
    </div>
  )
} */

export function Grupo({ titulo, children }){
  return (
    <div>
      <h1>{titulo}</h1>
      {React.Children.map(children, (element) => React.cloneElement(element, { titulo }))}
    </div>
  )
}