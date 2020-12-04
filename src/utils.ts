import { Either } from './either';

const { tryCatch } = Either;

export const logIt = <T>(x: T) => {
  // eslint-disable-next-line no-console
  console.log(x);
  return x;
};

export const parseJSON = (contents: string) =>
  tryCatch(() => JSON.parse(contents));
