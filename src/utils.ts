import { Either } from './either';

const { tryCatch } = Either;

const logIt = <T>(x: T) => {
  // eslint-disable-next-line no-console
  console.log(x);
  return x;
};

const parseJSON = (contents: string) => tryCatch(() => JSON.parse(contents));

export { logIt, parseJSON };
