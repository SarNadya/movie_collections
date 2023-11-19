import { Input } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/search/${searchQuery}`);
  };

  return (
    <div>
      <Input.Search
        placeholder="Поиск"
        allowClear
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onSearch={handleClick}
        style={{ width: 200 }}
      />
    </div>
  );
};

export default Search;
