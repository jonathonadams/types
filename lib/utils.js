import { Either } from './either';
const { tryCatch } = Either;
const logIt = (x) => {
    // eslint-disable-next-line no-console
    console.log(x);
    return x;
};
const parseJSON = (contents) => tryCatch(() => JSON.parse(contents));
export { logIt, parseJSON };
