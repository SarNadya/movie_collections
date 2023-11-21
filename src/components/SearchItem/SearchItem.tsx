import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { SuggestMovie } from '../../types/Movie';

interface SearchItemProps {
  item: SuggestMovie;
}

const SearchItem: FC<SearchItemProps> = ({ item }) => {
  return (
    <NavLink to={`/movie/${item.id}`}>
      <img
        alt="poster"
        src={item.poster.previewUrl}
        style={{ width: '60px' }}
      />
    </NavLink>
  );
};

export default SearchItem;
