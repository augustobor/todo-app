import React from 'react';

function TodoHeader({ children, loading, totalTodos }) {
  return (
    <header>
      {
        React.Children
          .toArray(children)
          .map(child => React.cloneElement(child, { loading, totalTodos }))
      }
    </header>
  );
}

export { TodoHeader };
