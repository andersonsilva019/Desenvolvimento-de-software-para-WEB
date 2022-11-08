import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFirebase } from '../../hook/useFirebase';
import { teacherServiceFirebase } from '../../services/TeacherServiceFirebase';

export function EditTeacher() {

  const navigate = useNavigate();

  const { id } = useParams();

  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [salary, setSalary] = useState('');
  const [loading, setLoading] = useState(false);
  const { db } = useFirebase()

  useEffect(() => {
    async function getTeacher() {
      setLoading(true);

      const data = await teacherServiceFirebase.getTeacherById(db, id)

      setName(data.name);
      setCourse(data.course);
      setSalary(data.salary);
      setLoading(false);
    }

    getTeacher();
  }, [id, db])

  async function handleSubmit(event) {
    event.preventDefault();
    try {

      setLoading(true);

      const newTeacher = { name, course, salary }

      await teacherServiceFirebase.edit(db, id, newTeacher)

      alert('Professor editado com sucesso!');

      navigate('/list-teacher');

      //await api.put(`/students/${id}`, newStudent);

    } catch (error) {
      console.log(error.message)
    } finally {
      setLoading(false);

      setName('');
      setCourse('');
      setSalary('');
    }
  }

  return (
    <div>
      <h1 className='text-primary fw-bold'>Editar estudante</h1>

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
              placeholder='Digite o curso do professor'
              type="text"
              step='0.01'
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
              type="number"
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
              Editar professor
            </button>
          )}
        </div>
      </form>
    </div>
  );
}