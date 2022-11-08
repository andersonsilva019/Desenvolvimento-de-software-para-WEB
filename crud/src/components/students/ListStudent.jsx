import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useFirebase } from '../../hook/useFirebase';
//import { api } from '../../services/api';
import { studentServiceFirebase } from '../../services/StudentServiceFirebase';
import { Loading } from '../Loading';

export function ListStudent() {

  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(false)
  const { db } = useFirebase()

  async function handleDeleteStudent(id) {

    try {
      if (window.confirm('Tem certeza que deseja excluir este estudante?')) {

        //await api.delete(`/students/${id}`)

        await studentServiceFirebase.delete(db, id)

        const newStudents = students.filter(student => student.id !== id);

        setStudents(newStudents);

        alert('Estudante excluído com sucesso!');
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    async function getAllStudents() {
      try {
        setLoading(true)
        const data = await studentServiceFirebase.list(db)
        setStudents(data);

      } catch (error) {
        console.log(error.message)
      } finally {
        setLoading(false);
      }
    }
    getAllStudents();
  }, [db])

  useEffect(() => {

    const unsubscribe = studentServiceFirebase.listOnSnapshot(db, (data) => setStudents(data))
    
    return () => {
      unsubscribe()
    }
  },[db])

  return (
    <div>
      <h1 className='text-primary fw-bold'>Lista de estudantes</h1>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Curso</th>
            <th scope="col">IRA</th>
            <th scope="col">Ação</th>
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
              <td className="text"></td>
            </tr>
          ) : students.length > 0 ? (
            students?.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{student.ira}</td>
                <td>
                  <Link
                    to={`/edit-student/${student.id}`}
                    className='btn btn-primary'
                  >
                    Editar
                  </Link>
                  <button
                    className='btn btn-danger ms-3'
                    onClick={() => handleDeleteStudent(student.id)}
                  >
                    Deletar
                  </button>
                </td>
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