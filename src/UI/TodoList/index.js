function TodoList({
  children,
  error,
  loading,
  onEmptySearchTreults,
  onEmptyTodos,
  onError,
  onLoading,
  render,
  searchedTodos,
  searchText,
  totalTodos,
}) {
  const renderFunc = children || render;

  return (
    <section className="TodoList-Container">
      {error && onError()}
      {loading && onLoading()}

      {!totalTodos && !loading && !searchedTodos?.length && onEmptyTodos()}

      {!!totalTodos &&
        !searchedTodos?.length &&
        onEmptySearchTreults(searchText)}

      {!loading && !error && searchedTodos.map(renderFunc)}
    </section>
  );
}

export { TodoList };
