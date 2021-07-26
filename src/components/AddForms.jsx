import React, { useState } from 'react';
import firebase from '../utils/firebase';

const AddForms = () => {
  const [formData, setFormData] = useState({
    id: 0,
    title: '',
    body: '',
  });

  const titleFormOnChange = (e) => {
    setFormData({
      ...formData,
      title: e.target.value,
    });
  };

  const bodyFormOnChange = (e) => {
    setFormData({
      ...formData,
      body: e.target.value,
    });
  };

  const createTodoHandler = () => {
    const todoRef = firebase.database().ref('todo');
    const todo = {
      ...formData,
      id: Date.now(),
      complete: false,
    };

    todoRef.push(todo);
  };

  return (
    <div>
      <label htmlFor="title">Title </label>
      <input
        type="text"
        id="title"
        value={formData.title}
        onChange={titleFormOnChange}
      />
      <label htmlFor="body">Body </label>
      <input
        type="text"
        id="body"
        value={formData.body}
        onChange={bodyFormOnChange}
      />
      <button onClick={createTodoHandler}>submit</button>
    </div>
  );
};

export default AddForms;
