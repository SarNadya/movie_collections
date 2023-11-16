import { Data } from './Data';
import { TransformedMovie } from './Movie';

export interface Movies extends Data {
  docs: TransformedMovie[];
}
