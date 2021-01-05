import { Either } from './either';
const { tryCatch } = Either;
export const logIt = (x) => {
    // eslint-disable-next-line no-console
    console.log(x);
    return x;
};
export const parseJSON = (contents) => tryCatch(() => JSON.parse(contents));
