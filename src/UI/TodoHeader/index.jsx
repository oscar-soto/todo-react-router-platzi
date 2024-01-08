import { Children, cloneElement } from 'react';

function TodoHeader({ children, loading }) {
  return (
    <header>
      {/* En caso que sea siempre un elemento */}
      {/* {cloneElement(children, {loading})} */}

      {/* Multiples elementos */}
      {Children.toArray(children).map((child) =>
        cloneElement(child, { loading })
      )}
    </header>
  );
}

export { TodoHeader };
