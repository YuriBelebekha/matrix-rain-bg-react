import shortid from 'shortid';
import { useState } from 'react';
import useInterval from '@use-it/interval'
// import { getRandomIntegerFromRange } from '../../utils/getRandomIntegerFromRange';
// import { getRandomSymbol } from '../../utils/getRandomSymbol';
import { getRandomSymbolsStream } from '../../utils/getRandomSymbolsStream';
import { MatrixRainStream } from 'components/MatrixRainStream';
import { FONT_SIZE } from '../../utils/constants';
import css from './MatrixRain.module.css';

export const MatrixRain = () => {
  const [marginTop, setMarginTop] = useState(0);  
  const stream = getRandomSymbolsStream();

  useInterval(() => {
    if (marginTop > window.innerHeight) {
      setMarginTop(window.innerHeight / -1.5);
    } else {
      setMarginTop(marginTop + FONT_SIZE);
    }
  }, 250);


  return (    
    <ul className={css.MatrixRain} style={{ marginTop: marginTop }}>
      {stream.map((symbol, index) => (
        <MatrixRainStream
          symbol={symbol}
          index={index}
          key={shortid.generate()}
        />
      ))}
    </ul>      
  )
}