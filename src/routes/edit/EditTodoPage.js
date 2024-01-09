import { TodoForm } from '../../UI/TodoForm';
import useTodos from '../useTodos';

export const EditTodoPage = () => {
  const { states, stateUpdaters } = useTodos();

  const { onAddTodo } = stateUpdaters;
  return (
    <>
      <TodoForm
        onAddTodo={onAddTodo}
        label="Edita tu TODO"
        submitText="Editar"
        submitEvent={() => console.log('Anadir Edit todo')}
      />
    </>
  );
};
