// import { getRandomSymbolsStream } from '../../utils/getRandomSymbolsStream';

import { STREAM_MIN_LENGTH } from '../../utils/constants';
import css from './MatrixRainStream.module.css';

export const MatrixRainStream = ({symbol, index}) => {
  

  return (
    <li
      className={css.MatrixRainItem}
      style={{
        opacity: index < STREAM_MIN_LENGTH ? index * 0.05 + 0.1 : 1,        
      }}
    >
      {symbol}
    </li>
  );
};
