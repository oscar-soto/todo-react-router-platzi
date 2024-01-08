import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue, loading }) {
  return (
    <input
      className="TodoSearch"
      type="text"
      placeholder="Cortar cebolla"
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value);
      }}
      disabled={loading}
    />
  );
}

export { TodoSearch };
