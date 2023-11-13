import { Data } from './Data';
import { Movie } from './Movie';

export interface Movies extends Data {
  docs: Movie[];
}
