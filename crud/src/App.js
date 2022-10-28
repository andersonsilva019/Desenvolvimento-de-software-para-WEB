import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import { CreateStudent } from './components/students/CreateStudent';
import { EditStudent } from './components/students/EditStudent';
/* import { EditTeacher } from './components/students/EditTeacher';*/
import { ListStudent } from './components/students/ListStudent';

import { Home } from './pages/Home'

import { Routes, Route, Link } from 'react-router-dom'
import { CreateTeacher } from './components/teacher/CreateTeacher';
import { ListTeacher } from './components/teacher/ListTeacher';

function App() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container collapse navbar-collapse'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link className="nav-link" to="/" style={{ paddingLeft: 10 }}>
                CRUD
              </Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link" to="/" style={{ paddingLeft: 10 }}>
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Estudante
              </a>
              <ul className="dropdown-menu">
                <li className='nav-item'>
                  <Link className="dropdown-item" to="/create-student" style={{ paddingLeft: 10 }}>
                    Criar estudante
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/list-student" style={{ paddingLeft: 10 }}>
                    Listar estudante
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Professor
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/create-teacher" style={{ paddingLeft: 10 }}>
                    Criar professor
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/list-teacher" style={{ paddingLeft: 10 }}>
                    Listar professor
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <div className='container mt-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-student' element={<CreateStudent />} />
          <Route path='/create-teacher' element={<CreateTeacher />} />
          <Route path='/edit-student/:id' element={<EditStudent />} />
          {/* <Route path='/edit-teacher' element={<EditTeacher />} /> */}
          <Route path='/list-student' element={<ListStudent />} />
          <Route path='/list-teacher' element={<ListTeacher />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
