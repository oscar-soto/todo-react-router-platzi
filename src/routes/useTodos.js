import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const useTodos = () => {
  // Local Storage
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    sincronizeItem: sincronizeTodos,
  } = useLocalStorage('TODOS_V1', []);

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

  const onComplete = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const onAddTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };

  const onDelete = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const states = {
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    searchedTodos,
    openModal,
  }

  const stateUpdaters = {

    setSearchValue,
    setOpenModal,
    onComplete,
    onDelete,
    onAddTodo,
    sincronizeTodos,
  }

  return {
    states,
    stateUpdaters
  };
};
export default useTodos;
