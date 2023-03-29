
export const MATRIX_SYMBOLS = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$+-*/=%"'#&_(),.;:?!\\|{}<>[]^~`;

export const FONT_SIZE = 16;

export const STREAM_MIN_LENGTH = 30;
export const STREAM_MAX_LENGTH = 30;

export const STREAM_OPACITY = `index < ${STREAM_MIN_LENGTH} * 1.5 ? 0.01 + index * 0.1 : 1`;

