import { TodoForm } from '../../UI/TodoForm';
import useTodos from '../useTodos';

export const NewTodoPage = () => {
  const { states, stateUpdaters } = useTodos();

  const { onAddTodo } = stateUpdaters;
  return (
    <>
      <TodoForm
        onAddTodo={onAddTodo}
        label="Escribe tu nuevo TODO"
        submitText="Añadir"
        submitEvent={() => console.log('Anadir funcionalidad')} 
      />
    </>
  );
};
