import { TodoForm } from '../../UI/TodoForm';
import useTodos from '../useTodos';

export const NewTodoPage = () => {
  const { stateUpdaters } = useTodos();
  const { onAddTodo } = stateUpdaters;

  return (
    <>
      <TodoForm
        label="Escribe tu nuevo TODO"
        submitText="Añadir"
        submitEvent={(text) => onAddTodo(text)} 
      />
    </>
  );
};
