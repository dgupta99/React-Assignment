import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ items, onToggle, onDelete }) => {
  return (
    <div className="todo-list">
      {items.map(item => (
        <ToDoItem
          key={item.id}
          item={item}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ToDoList;