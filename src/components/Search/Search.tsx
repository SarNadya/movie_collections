import { Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import SearchSuggest from '../SearchSuggest/SearchSuggest';
import { ChangeEvent } from 'react';
import { useDebounce } from '../../hooks/useDebounce';

const Search = () => {
  const { search, visible } = useTypedSelector((state) => state.searchReducer);
  const { setSearch, setVisible } = useActions();
  const { debouncedValue, setDebouncedValue } = useDebounce(search.trim(), 300);

  const navigate = useNavigate();
  const isActive = debouncedValue && visible;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    setSearch('');
    setDebouncedValue('');
    navigate(`/search/${debouncedValue}`);
  };

  const onBlur = () => {
    setTimeout(() => {
      setSearch('');
      setDebouncedValue('');
      setVisible(false);
    }, 200);
  };

  return (
    <div>
      <Input.Search
        placeholder="Поиск"
        value={search}
        onChange={handleChange}
        onSearch={handleClick}
        onFocus={() => setVisible(true)}
        onBlur={onBlur}
        style={{ width: 200 }}
      />
      {isActive && <SearchSuggest value={debouncedValue} />}
    </div>
  );
};

export default Search;
