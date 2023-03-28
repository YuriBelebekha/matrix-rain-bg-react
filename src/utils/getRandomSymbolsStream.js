import { STREAM_MIN_LENGTH, STREAM_MAX_LENGTH } from './constants';
import { getRandomIntegerFromRange } from './getRandomIntegerFromRange';
import { getRandomSymbol } from './getRandomSymbol';

export const getRandomSymbolsStream = () => {
  return new Array(getRandomIntegerFromRange(STREAM_MIN_LENGTH, STREAM_MAX_LENGTH))
    .fill()
    .map(_ => getRandomSymbol());
};