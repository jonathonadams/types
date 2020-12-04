import { readFileSync as rfs, writeFileSync as wfs } from 'fs';
import { Either, EitherMonad } from './either';

const { tryCatch } = Either;

export const readFileSync = (path: string): EitherMonad<Buffer | string> =>
  tryCatch(() => rfs(path));

export const writeFileSync = (
  path: string | number | Buffer,
  data: any
): EitherMonad<void> => tryCatch(() => wfs(path, data));
