import { useSearchParams } from 'react-router-dom';
import './TodoSearch.css';

function TodoSearch({ setSearchValue, loading }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsValue = searchParams.get('search');

  const onSearchValueChange = ({ target: { value } }) => {
    setSearchValue(value);
    setSearchParams({ search: value });
  };

  return (
    <input
      className="TodoSearch"
      type="text"
      placeholder="Cortar cebolla"
      value={paramsValue || ''}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}

export { TodoSearch };
