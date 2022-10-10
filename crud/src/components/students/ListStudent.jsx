import { useEffect } from 'react';
import { useState } from 'react'
import { api } from '../../services/api';
import { Loading } from '../Loading';

export function ListStudent() {

  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getAllStudents() {
      setLoading(true)

      const response = await api.get('/students');
      setStudents(response.data);

      setLoading(false);
    }

    getAllStudents();
  }, [])

  return (
    <div>
      <h1 className='text-primary fw-bold'>Lista de estudantes</h1>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Curso</th>
            <th scope="col">IRA</th>
          </tr>
        </thead>
        <tbody>
          {loading ? ( 
            <tr>
              <td className="text"></td>
              <td className="text">
                <Loading />
              </td>
              <td className="text"></td>
            </tr>
           ) : students.length > 0 ? (
            students?.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{student.ira}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="text">Nenhum estudante cadastrado</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}