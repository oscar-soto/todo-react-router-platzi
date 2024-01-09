import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './TodoForm.css';

function TodoForm({ submitEvent, label, submitText, defaultTodoText }) {
  const navigate = useNavigate();
  const [newTodoValue, setNewTodoValue] = useState(defaultTodoText || '');

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const withoutSpace = newTodoValue.trim();
    
    if (withoutSpace.length > 1) {
      submitEvent(newTodoValue);
      navigate('/');
      return;
    }
  };

  const onCancel = () => {
    navigate('/');
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="newTodo">{label}</label>
      <textarea
        name="newTodo"
        id="newTodo"
        placeholder="Cortar cebolla para el almuerzo"
        onChange={onChange}
        value={newTodoValue}
      ></textarea>

      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>

        <button className="TodoForm-button TodoForm-button--add">
          {submitText}
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
