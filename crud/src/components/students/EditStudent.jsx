import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFirebase } from '../../hook/useFirebase';
import { studentServiceFirebase } from '../../services/StudentServiceFirebase';

export function EditStudent() {

  const navigate = useNavigate();

  const { id } = useParams();

  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [ira, setIra] = useState(0);
  const [loading, setLoading] = useState(false);
  const { db } = useFirebase()

  useEffect(() => {
    async function getStudent() {
      setLoading(true);

      const data = await studentServiceFirebase.getStudentById(db, id)

      setName(data.name);
      setCourse(data.course);
      setIra(data.ira);
      setLoading(false);
    }

    getStudent();
  }, [id, db])

  async function handleSubmit(event) {
    event.preventDefault();
    try {

      setLoading(true);

      const newStudent = { name, course, ira }

      await studentServiceFirebase.edit(db, id, newStudent)

      alert('Estudante editado com sucesso!');

      navigate('/list-student');

      //await api.put(`/students/${id}`, newStudent);

    } catch (error) {
      console.log(error.message)
    } finally {
      setLoading(false);

      setName('');
      setCourse('');
      setIra(0);
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
              Editar estudante
            </button>
          )}
        </div>
      </form>
    </div>
  );
}