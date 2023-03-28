import { MATRIX_SYMBOLS } from './constants';

export const getRandomSymbol = () => {
  return MATRIX_SYMBOLS.charAt(Math.floor(Math.random() * MATRIX_SYMBOLS.length));
};