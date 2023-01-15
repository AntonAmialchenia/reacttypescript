import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { ITodo } from '../types/types';
import { useParams, useNavigate } from 'react-router-dom';

const TodoItemPage: FC = () => {
  const [todo, setTodo] = useState<ITodo>();
  const { id } = useParams<'id'>();
  const nav = useNavigate();

  useEffect(() => {
    fetchTodo();
  }, []);

  async function fetchTodo() {
    try {
      const response = await axios.get<ITodo>(
        'https://jsonplaceholder.typicode.com/todos/' + id
      );
      setTodo(response.data);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <div>
      <button onClick={() => nav('/todos')}>Back</button>
      <h1> {todo?.title}</h1>
      <div>{todo?.completed ? 'Выполнено' : 'Не выполнено'}</div>
      
    </div>
  );
};

export default TodoItemPage;
