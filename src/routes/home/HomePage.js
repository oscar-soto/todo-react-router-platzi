import { useNavigate } from 'react-router-dom';
import useTodos from '../useTodos';
import { TodoHeader } from '@/UI/TodoHeader';
import { TodoCounter } from '@/UI/TodoCounter';
import { TodoSearch } from '@/UI/TodoSearch';
import { TodoList } from '@/UI/TodoList';
import { TodoItem } from '@/UI/TodoItem';
import { TodosError } from '@/UI/TodosError';
import { TodosLoading } from '@/UI/TodosLoading';
import { EmptyTodos } from '@/UI/EmptyTodos';
// import { TodoForm } from '@/UI/TodoForm';
import { CreateTodoButton } from '@/UI/CreateTodoButton';
// import { Modal } from '@/UI/Modal';
import { ChangeAlert } from '@/UI/ChangeAlert';

function HomePage() {
  const navigate = useNavigate();
  const { states, stateUpdaters } = useTodos();

  const {
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    searchedTodos,
  } = states;

  const { setSearchValue, onComplete, onDelete, sincronizeTodos } =
    stateUpdaters;

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          // loading={loading}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          // loading={loading}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchTreults={(searchText) => (
          <p>No hay resultados para {searchText}</p>
        )}
        render={(todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onEdit={() => navigate(`/edit/${todo.id}`)}
            onDelete={() => onDelete(todo.text)}
            onComplete={() => onComplete(todo.text)}
          />
        )}
      />

      {/* {!!openModal && (
        <Modal>
          <TodoForm onAddTodo={onAddTodo} setOpenModal={setOpenModal} />
        </Modal>
      )} */}

      <CreateTodoButton onClick={() => navigate('/new')} />

      <ChangeAlert sincronize={sincronizeTodos} />
    </>
  );
}

export { HomePage };
