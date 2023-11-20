import { Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import SearchSuggest from '../SearchSuggest/SearchSuggest';

const Search = () => {
  const { search, visible } = useTypedSelector((state) => state.searchReducer);
  const { setSearch, setVisible } = useActions();
  const navigate = useNavigate();

  const handleClick = () => {
    setSearch('');
    navigate(`/search/${search}`);
  };

  const onBlur = () => {
    setTimeout(() => {
      setSearch('');
      setVisible(false);
    }, 200);
  };

  return (
    <div>
      <Input.Search
        placeholder="Поиск"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onSearch={handleClick}
        onFocus={() => setVisible(true)}
        onBlur={onBlur}
        style={{ width: 200 }}
      />
      {search && visible && <SearchSuggest />}
    </div>
  );
};

export default Search;
