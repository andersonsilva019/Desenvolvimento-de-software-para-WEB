import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import { Questao01 } from "./components/Questao01";
import { Questao01A } from "./components/Questao01A";
import { Questao01B } from "./components/Questao01B";
import { Questao02 } from './components/Questao02';
import { Questao03 } from './components/Questao03';
import { Questao04 } from './components/Questao04';
import { Questao05 } from './components/Questao05';

function App() {
  return (
    <div className='container'>
      <h1 className='fs-3 mb-3 text-primary'>Questão 01</h1>
      <div className='card mb-5 shadow p-3 mb-5 bg-body rounded'>
        <Questao01>
          <Questao01A />
          <Questao01B />
        </Questao01>
      </div>
      <h1 className='fs-3 mb-3 text-primary'>Questão 02</h1>
      <div className='card shadow p-3 mb-5 bg-body rounded'>
        <Questao02 />
      </div>
      <h1 className='fs-3 mb-3 text-primary'>Questão 03</h1>
      <div className='card shadow p-3 mb-5 bg-body rounded'>
        <Questao03 />
      </div>
      <h1 className='fs-3 mb-3 text-primary'>Questão 04</h1>
      <div className='card shadow p-3 mb-5 bg-body rounded'>
        <Questao04 />
      </div>
      <h1 className='fs-3 mb-3 text-primary'>Questão 05</h1>
      <div className='card shadow p-3 mb-5 bg-body rounded'>
        <Questao05 />
      </div>
    </div>
  );
}

export default App;
