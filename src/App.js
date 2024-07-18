import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('all');

  const addToDo = (text) => {
    const newItem = {
      id: Date.now(),
      text,
      completed: false
    };
    setItems([...items, newItem]);
  };

  const toggleComplete = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, completed: !item.completed } : item));
  };

  const deleteToDo = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const filteredItems = items.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'completed') return item.completed;
    if (filter === 'incomplete') return !item.completed;
  });

  return (
    <div className="App">
      <Header />
      <AddToDo onAdd={addToDo} />
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>
      <ToDoList items={filteredItems} onToggle={toggleComplete} onDelete={deleteToDo} />
    </div>
  );
};

export default App;