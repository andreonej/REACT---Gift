import type { FC } from 'react';
//import type { Gif } from '../../mock-data/gifs.mock';
import type { Gif } from '../interfaces/gif.interface';

interface Props {
  gifs: Gif[];
}
// FC<Props> = ({ gifs }) es otra forma de definir un typado estricto
// ({ gifs }: Props) es otra forma de definir un typado estricto
export const GifList: FC<Props> = ({ gifs }) => {
  return (
    <div className="gifs-container">
      {gifs.map((gif) => (
        <div key={gif.id} className="gif-card">
          <img src={gif.url} alt={gif.title} />
          <h3>{gif.title}</h3>
          <p>
            {gif.width}x{gif.height} (1.5mb)
          </p>
        </div>
      ))}
    </div>
  );
};
