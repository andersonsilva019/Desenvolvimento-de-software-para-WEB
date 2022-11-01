import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFirebase } from '../../hook/useFirebase';
import { studentServiceFirebase } from '../../services/StudentServiceFirebase';

export function CreateStudent() {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [ira, setIra] = useState(0);
  const [loading, setLoading] = useState(false);
  const { db } = useFirebase()

  async function handleSubmit(event) {

    try {
      event.preventDefault();

      setLoading(true);

      const newStudent = { name, course, ira }

      //await api.post('/students', newStudent);

      await studentServiceFirebase.create(db, newStudent)

      navigate('/list-student');

      setName('');
      setCourse('');
      setIra(0);
    } catch (error) {
      console.log(error.message)
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1 className='text-primary fw-bold'>Criar estudante</h1>

      <form onSubmit={handleSubmit}>
        <div className='mb-1 row'>
          <label htmlFor="name">
            Nome:
            <input
              className='form-control'
              placeholder='Digite o nome do estudante'
              id="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              step='0.01'
            />
          </label>
        </div>

        <div className='mb-1 row'>
          <label htmlFor="course">
            Curso:
            <input
              className='form-control'
              id="course"
              placeholder='Digite o curso do estudante'
              type="text"
              step='0.01'
              value={course}
              onChange={e => setCourse(e.target.value)}
            />
          </label>
        </div>
        <div className='mb-1 row'>
          <label htmlFor="ira">
            IRA:
            <input
              className='form-control'
              placeholder='Digite o IRA do estudante'
              id="ira"
              type="number"
              value={ira}
              step='0.01'
              onChange={e => setIra(e.target.value)}
            />
          </label>
        </div>
        <div>
          {loading ? (
            <button class="mt-3 btn btn-primary" type="button" disabled>
              <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
              Loading...
            </button>
          ) : (
            <button
              className='btn btn-primary mt-3'
              type="submit"
              disabled={!name || !course || !ira}
            >
              Criar estudante
            </button>
          )}
        </div>
      </form>
    </div>
  );
}