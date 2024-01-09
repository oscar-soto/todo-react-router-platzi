import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const newTodoId = (todoList) => {
  // return crypto.randomUUID();
  // const idList = todoList.map((todo) => todo.id);
  // const idMax = Math.max(...idList);
  // console.log(idMax)
  // return idMax + 1;
  return Date.now().toString(16);
};

const useTodos = () => {
  // Local Storage
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    sincronizeItem: sincronizeTodos,
  } = useLocalStorage('TODOS_V2', []);

  // States
  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false);

  // Functions
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();

    return todoText.includes(searchText);
  });

  const onAddTodo = (text) => {
    const id = newTodoId(todos);
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
      id,
    });
    saveTodos(newTodos);
  };

  const getTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo)
    return todos[todoIndex];
  };

  const onEdit = ({ id, newText }) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    newTodos[todoIndex].text = newText;
    saveTodos(newTodos);
  };

  const onComplete = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const onDelete = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const states = {
    completedTodos,
    error,
    loading,
    openModal,
    searchedTodos,
    searchValue,
    totalTodos,
    getTodo,
  };

  const stateUpdaters = {
    onAddTodo,
    onComplete,
    onDelete,
    onEdit,
    setOpenModal,
    setSearchValue,
    sincronizeTodos,
  };

  return {
    states,
    stateUpdaters,
  };
};

export default useTodos;
