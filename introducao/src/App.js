import './App.css';
// import { Calculadora } from './components/Calculadora';
import { Estudante } from './components/Universidade/Estudante';
// import { Imc } from './components/Imc';
// import { OlaMundo } from './components/OlaMundo';
import { Disciplina } from './components/Universidade/Disciplina';
import { Pai } from './components/paifilho/Pai';
import { Contador } from './components/estados/Contador';
import { VotaCidade } from './components/estados/VotaCidade';
// import { Grupo } from './components/Vingadores/Grupo';
// import { Heroi } from './components/Vingadores/Heroi'
// import { Eleven, Vecna, Will } from './components/StrangerThings';

/* const estudantes = [
  {
    nome: 'Anderson',
    curso: 'EC',
    universidade: 'UFC'
  },
  {
    nome: 'Silva',
    curso: 'EC',
    universidade: 'UFC'
  },
  {
    nome: 'Souza',
    curso: 'EC',
    universidade: 'UFC'
  }
] */

function App() {
  /* return (
    <div className="App">
      <OlaMundo />

      <Estudante
        nome="Anderson"
        curso="Engenharia da computação"
        universidade="Universidade Federal do Ceará"
      >
        <h2>Ola</h2>
      </Estudante>

      <Calculadora op="SOMA" x={10} y={20} />

      <Imc peso={72} altura={1.71} />
    </div>
  ); */

  /* return (
    <div className='App'>
      <Grupo titulo="Vingadores">
        <Heroi nome="Capitão América" />
        <Heroi nome="Hulk" />
        <Heroi nome="Viúva Negra" />
      </Grupo>
    </div>
  ) */

  /* return (
    <div className='App'>
      <Disciplina titulo="WEB">
        {estudantes.map(estudante => {
          return <Estudante {...estudante} />
        })}
      </Disciplina>
    </div>
  ) */

  /* return (
    <div className="App">
      <Pai />
    </div>
  ) */

  /* return (
    <div className="App">
      <Contador />
    </div>
  ) */

  return (
    <div className="App">
      <VotaCidade />
    </div>
  )
}

export default App;
