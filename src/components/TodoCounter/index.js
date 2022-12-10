import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <h2
      className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}
    >
      {totalTodos !== 0 && `You finished ${completedTodos} of ${totalTodos} TODOs`} {totalTodos===0 && "There's no TODOs"}
    </h2>
  );
}

export { TodoCounter };
