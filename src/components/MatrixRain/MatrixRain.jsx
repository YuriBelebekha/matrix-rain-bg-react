import shortid from 'shortid';
// import { getRandomIntegerFromRange } from '../../utils/getRandomIntegerFromRange';
// import { getRandomSymbol } from '../../utils/getRandomSymbol';
import { getRandomSymbolsStream } from '../../utils/getRandomSymbolsStream';
import css from './MatrixRain.module.css';

export const MatrixRain = () => {
  return (
    <ul className={css.MatrixRain}>
      {getRandomSymbolsStream().map(symbol => (
        <li key={shortid.generate()}>
          {symbol}
        </li>
      ))}
    </ul>
  )
}