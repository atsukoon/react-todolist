import React from 'react';

const ToDo = ({ todo, toggleTodo }) => {
  const handleTodoClicked = () => {
    toggleTodo(todo.id);
  };
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.completed} readOnly onChange={handleTodoClicked}/>
      </label>
      {todo.name}
    </div>
  );
};

export default ToDo;
