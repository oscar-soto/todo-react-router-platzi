import { useLocation, useParams } from 'react-router-dom';
import { TodoForm } from '@/UI/TodoForm';
import useTodos from '../useTodos';

export const EditTodoPage = () => {
  const location = useLocation();
  const { id } = useParams();
  
  const { stateUpdaters, states } = useTodos();
  const { getTodo, loading } = states;
  const { onEdit } = stateUpdaters;
  
  if (!location.state && loading) {
    return <p>Cargando</p>;
  }
  
  let todo;
  if (location.state?.todo) {
    todo = location.state.todo.text;
  } else {
    todo = getTodo(id);
  }

  return (
    <TodoForm
      label="Edita tu TODO"
      defaultTodoText={todo}
      submitText="Editar"
      submitEvent={(newText) => onEdit({ newText, id })}
    />
  );
};
