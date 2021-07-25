import React, { useEffect, useState } from 'react';
import firebase from './utils/firebase';

import './App.css';
import AddForms from './components/AddForms';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodolist] = useState();

  useEffect(() => {
    const todoRef = firebase.database().ref('todo');

    todoRef.on('value', (snapshot) => {
      const todoList = [];
      snapshot.forEach((o) => {
        const rawData = o.val();
        const keyData = o.key;
        todoList.push({ keyData, ...rawData });
      });

      setTodolist(todoList);
    });
  }, []);

  return (
    <div>
      <h1>Todos App</h1>
      <AddForms />
      {todoList ? (
        todoList.map((todo, index) => {
          return <TodoList key={index} todo={todo} />;
        })
      ) : (
        <p>Fetching data</p>
      )}
    </div>
  );
}

export default App;
