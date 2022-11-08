import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useFirebase } from '../../hook/useFirebase';
import { teacherServiceFirebase } from '../../services/TeacherServiceFirebase';
import { Loading } from '../Loading';

export function ListTeacher() {

  const [teachers, setTeachers] = useState([])
  const [loading, setLoading] = useState(false)
  const { db } = useFirebase()

  async function handleDeleteTeacher(id) {

    try {
      if (window.confirm('Tem certeza que deseja excluir este professor?')) {

        //await api.delete(`/students/${id}`)

        await teacherServiceFirebase.delete(db, id)

        const newTeacher = teachers.filter(teacher => teacher.id !== id);

        setTeachers(newTeacher);

        alert('Professor excluído com sucesso!');
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    async function getAllTeachers() {
      try {
        setLoading(true)
        const data = await teacherServiceFirebase.list(db)
        setTeachers(data);

      } catch (error) {
        console.log(error.message)
      } finally {
        setLoading(false);
      }
    }
    getAllTeachers();
  }, [db])

  useEffect(() => {

    const unsubscribe = teacherServiceFirebase.listOnSnapshot(db, (data) => setTeachers(data))

    return () => {
      unsubscribe()
    }
  }, [db])

  return (
    <div>
      <h1 className='text-primary fw-bold'>Lista de professores</h1>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Curso</th>
            <th scope="col">Salário</th>
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
          ) : teachers.length > 0 ? (
            teachers?.map(teacher => (
              <tr key={teacher.id}>
                <td>{teacher.name}</td>
                <td>{teacher.course}</td>
                <td>{new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(teacher.salary)}</td>
                <td>
                  <Link
                    to={`/edit-teacher/${teacher.id}`}
                    className='btn btn-primary'
                  >
                    Editar
                  </Link>
                  <button
                    className='btn btn-danger ms-3'
                    onClick={() => handleDeleteTeacher(teacher.id)}
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="text">Nenhum professor cadastrado</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}