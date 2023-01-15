import React from 'react';
import Card, { CardVariant } from './components/Card';
import EventsExample from './components/EventExample';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPage from './components/UserPage';
import TodosPage from './components/TodosPage';
import { NavLink } from 'react-router-dom';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: 'flex', gap: 15, padding: 15 }}>
        <NavLink to={'/'}>Главная</NavLink>
        <NavLink to={'/users'}>Пользователи</NavLink>
        <NavLink to={'/todos'}>Список дел</NavLink>
      </nav>
      <Routes>
        <Route path="/users" element={<UserPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/users/:id" element={<UserItemPage />} />
        <Route path="/todos/:id" element={<TodoItemPage />} />
        <Route
          path="/"
          element={
            <>
              <EventsExample />
              <Card
                onClick={(num) => console.log('click', num)}
                variant={CardVariant.outlined}
                width="280px"
                height="280px"
              >
                <button>кнопка</button>
                <div>Hello!</div>
              </Card>
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
