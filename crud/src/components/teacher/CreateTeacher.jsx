import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFirebase } from '../../hook/useFirebase';
import { teacherServiceFirebase } from '../../services/TeacherServiceFirebase';

export function CreateTeacher() {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [salary, setSalary] = useState('');
  const [loading, setLoading] = useState(false);
  const { db } = useFirebase()

  async function handleSubmit(event) {

    try {
      event.preventDefault();

      setLoading(true);

      const newTeacher = { name, course, salary }

      await teacherServiceFirebase.create(db, newTeacher)

      navigate('/list-teacher');

      setName('');
      setCourse('');
      setSalary('');
    } catch (error) {
      console.log(error.message)
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1 className='text-primary fw-bold'>Cadastrar professor</h1>

      <form onSubmit={handleSubmit}>
        <div className='mb-1 row'>
          <label htmlFor="name">
            Nome:
            <input
              className='form-control'
              placeholder='Digite o nome do professor'
              id="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
        </div>

        <div className='mb-1 row'>
          <label htmlFor="course">
            Curso:
            <input
              className='form-control'
              id="course"
              placeholder='Digite o curso do professor'
              type="text"
              value={course}
              onChange={e => setCourse(e.target.value)}
            />
          </label>
        </div>
        <div className='mb-1 row'>
          <label htmlFor="salary">
            Salário:
            <input
              className='form-control'
              placeholder='Digite o salário do professor'
              id="salary"
              type="text"
              value={salary}
              onChange={e => setSalary(e.target.value)}
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
              disabled={!name || !course || !salary}
            >
              Cadastrar professor
            </button>
          )}
        </div>
      </form>
    </div>
  );
}