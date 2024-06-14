import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ values, toggleTodo }) => {
  return values.map((todo) => <ToDo todo={todo} key={todo.id} toggleTodo={toggleTodo}/>);
};

export default ToDoList;
