import React from 'react';
import firebase from '../utils/firebase';

const TodoList = ({ todo }) => {
  const deleteTodoHandler = () => {
    const todoRef = firebase.database().ref(`todo/${todo.keyData}`);
    todoRef.remove();
  };

  const completeTodoHandler = () => {
    const todoRef = firebase.database().ref(`todo/${todo.keyData}`);
    todoRef.update({
      complete: !todo.complete,
    });
  };

  return (
    <div>
      <h3 className={todo.complete ? 'complete' : ''}>{todo.title}</h3>
      <p>{todo.body}</p>
      <button onClick={deleteTodoHandler}>delete</button>
      <button onClick={completeTodoHandler}>complete it !!!</button>
    </div>
  );
};

export default TodoList;
